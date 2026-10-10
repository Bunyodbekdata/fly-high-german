-- ====================================================================
-- FOR GREAT NATION — XAVFSIZLIK QATLAMI (2026-10-12)
-- ====================================================================
-- Bu migratsiya quyidagi xatolarni tuzatadi:
--
--   1. "Admins manage profiles" policy'si o'sha `profiles` jadvalini o'zi
--      o'qigan → Postgres 42P17 "infinite recursion detected in policy for
--      relation" xatosi. Natijada anon/authenticated uchun profil jadvaliga
--      HAR QANDAY murojaat (login, registratsiya, profil sinxronizatsiyasi)
--      ishlamay qolgan edi.
--
--   2. Rol oshirish (privilege escalation): "Users can update own profile"
--      policy'si faqat qatorni tekshirar, ustunlarni emas edi. Har qanday
--      foydalanuvchi ochiq anon kalit + o'z JWT'si bilan
--      PATCH /rest/v1/profiles?id=eq.<o'zi> {"role":"admin"} yuborib admin
--      bo'lib olishi mumkin edi.
--
--   3. SECURITY DEFINER funksiyalarda search_path o'rnatilmagan edi.
--
-- Qo'llash: Supabase SQL editor yoki `supabase db push`.
-- Diqqat: administrator rolini klientdan EMAS, faqat serverdan bering, masalan:
--   UPDATE public.profiles SET role = 'admin' WHERE email = 'admin@example.com';
-- ====================================================================

-- 0. Maxsus sxema — Supabase API orqali tashqariga chiqmaydi
CREATE SCHEMA IF NOT EXISTS private;

-- 1. Yordamchi funksiyalar.
--    RLS policy ICHIDA `profiles` jadvalini to'g'ridan-to'g'ri o'qish
--    cheksiz rekursiya beradi. Yechim: SECURITY DEFINER funksiya — u RLS
--    doirasidan tashqarida ishlaydi va rekursiya paydo bo'lmaydi.
CREATE OR REPLACE FUNCTION private.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

CREATE OR REPLACE FUNCTION private.current_profile_role()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT role::text FROM public.profiles WHERE id = auth.uid();
$$;

REVOKE ALL ON FUNCTION private.is_admin() FROM PUBLIC;
REVOKE ALL ON FUNCTION private.current_profile_role() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.is_admin() TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION private.current_profile_role() TO authenticated, service_role;

-- 2. Rekursiv policy'ni rekursiyasiz ko'rinishga almashtiramiz
DROP POLICY IF EXISTS "Admins manage profiles" ON public.profiles;
CREATE POLICY "Admins manage profiles" ON public.profiles
  FOR ALL
  USING (private.is_admin())
  WITH CHECK (private.is_admin());

-- 3. O'z profilini tahrirlash: qator o'zi bo'lishi VA rol o'zgarmasligi shart
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id
    AND role::text IS NOT DISTINCT FROM private.current_profile_role()
  );

-- 4. Trigger: foydalanuvchi so'rovida rolni o'zgartirishni bloklaydi
--    (service_role, SQL editor va dashboard ta'sirlanmaydi)
CREATE OR REPLACE FUNCTION public.protect_profile_role()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  caller_role text := COALESCE(auth.role(), '');
BEGIN
  -- Server tomoni (service_role, migratsiya, SQL editor) — ruxsat
  IF caller_role = '' OR caller_role = 'service_role' THEN
    RETURN NEW;
  END IF;

  -- Faqat oxirgi foydalanuvchi so'rovlarini cheklaymiz
  IF caller_role <> 'authenticated' THEN
    RETURN NEW;
  END IF;

  IF TG_OP = 'INSERT' THEN
    -- Ro'yxatdan o'tishda rol har doim 'student'
    NEW.role := 'student'::public.user_role;
    RETURN NEW;
  END IF;

  IF NEW.role IS DISTINCT FROM OLD.role THEN
    RAISE EXCEPTION 'Rolni o''zgartirish taqiqlangan' USING ERRCODE = '42501';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS protect_profile_role ON public.profiles;
CREATE TRIGGER protect_profile_role
  BEFORE INSERT OR UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_profile_role();

-- 5. Ustun darajasidagi himoya: `role` ustunini faqat server yozadi
REVOKE UPDATE ON public.profiles FROM anon, authenticated;
GRANT UPDATE (
  full_name,
  avatar_url,
  current_level,
  daily_goal_minutes,
  streak_days,
  last_activity_date,
  xp_points,
  updated_at
) ON public.profiles TO authenticated;

-- 6. Admin policy'larini ham rekursiyasiz ko'rinishga o'tkazamiz
DROP POLICY IF EXISTS "Admins and service role read test questions" ON public.certificate_questions;
CREATE POLICY "Admins and service role read test questions" ON public.certificate_questions
  FOR SELECT USING (auth.role() = 'service_role' OR private.is_admin());

DROP POLICY IF EXISTS "Admins manage certificate tests" ON public.certificate_tests;
CREATE POLICY "Admins manage certificate tests" ON public.certificate_tests
  FOR ALL
  USING (auth.role() = 'service_role' OR private.is_admin())
  WITH CHECK (auth.role() = 'service_role' OR private.is_admin());

DROP POLICY IF EXISTS "Admins manage certificate sections" ON public.certificate_sections;
CREATE POLICY "Admins manage certificate sections" ON public.certificate_sections
  FOR ALL
  USING (auth.role() = 'service_role' OR private.is_admin())
  WITH CHECK (auth.role() = 'service_role' OR private.is_admin());

DROP POLICY IF EXISTS "Admins manage certificate questions" ON public.certificate_questions;
CREATE POLICY "Admins manage certificate questions" ON public.certificate_questions
  FOR ALL
  USING (auth.role() = 'service_role' OR private.is_admin())
  WITH CHECK (auth.role() = 'service_role' OR private.is_admin());

-- 7. yangi foydalanuvchi trigger'i: search_path o'rnatildi (xavfsizlik lint)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    role,
    current_level,
    daily_goal_minutes,
    streak_days,
    xp_points
  ) VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', 'Talaba'),
    'student'::public.user_role,
    'a1-1'::public.cefr_level_code,
    20,
    0,
    0
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;
