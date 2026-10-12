-- ====================================================================
-- FOR GREAT NATION — Sertifikatlar xavfsizligi va brending tuzatishi (2026-10-13)
-- ====================================================================
-- Tuzatishlar:
--   1. "Users insert own certificate" RLS siyosatini bekor qilish:
--      Mijoz (klient) sertifikatni to'g'ridan-to'g'ri INSERT qila olmasligi shart.
--      Sertifikat faqat test topshirilganda serverdagi xavfsiz
--      `grade_certificate_attempt` RPC funksiyasi (SECURITY DEFINER)
--      yoki service_role tomonidan beriladi.
--
--   2. Sertifikat nomidan uchinchi tomon tashkiloti (Goethe) nomini olib tashlash:
--      Platforma mustaqil va rasmiy "For Great Nation Zertifikat — <LEVEL>" beradi.
--
--   3. Mavjud soxta yoki eski formatdagi sertifikat yozuvlari nomini yangilash.
-- ====================================================================

-- 1. Sertifikatlar jadvalidagi to'g'ridan-to'g'ri mijoz INSERT huquqini bekor qilamiz
DROP POLICY IF EXISTS "Users insert own certificate" ON public.certificates;

-- Sertifikatlar faqat o'qish (SELECT) uchun ochiq, INSERT faqat SECURITY DEFINER / service_role
CREATE POLICY "Public read valid certificates" ON public.certificates
    FOR SELECT USING (true);

-- 2. Server tomonidagi test baholash funksiyasini yangilaymiz
CREATE OR REPLACE FUNCTION public.grade_certificate_attempt(
    p_attempt_id UUID,
    p_answers JSONB -- Array: [{"question_id": "...", "selected_answer": ...}]
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_attempt RECORD;
    v_total_score INT := 0;
    v_reading_score INT := 0;
    v_listening_score INT := 0;
    v_item JSONB;
    v_q RECORD;
    v_is_correct BOOLEAN;
    v_points_earned INT;
    v_passed BOOLEAN;
    v_percentage INT;
    v_cert_id TEXT;
    v_formatted_level TEXT;
BEGIN
    SELECT * INTO v_attempt FROM public.certificate_attempts WHERE id = p_attempt_id;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Attempt not found';
    END IF;

    IF auth.role() <> 'service_role' AND v_attempt.user_id <> auth.uid() THEN
        RAISE EXCEPTION 'Access denied';
    END IF;

    FOR v_item IN SELECT * FROM jsonb_array_elements(p_answers)
    LOOP
        SELECT q.*, s.skill INTO v_q
        FROM public.certificate_questions q
        JOIN public.certificate_sections s ON s.id = q.section_id
        WHERE q.id = (v_item->>'question_id');

        IF FOUND THEN
            v_is_correct := (v_item->'selected_answer' = v_q.correct_answer);
            v_points_earned := CASE WHEN v_is_correct THEN v_q.points ELSE 0 END;
            v_total_score := v_total_score + v_points_earned;

            IF v_q.skill = 'reading' THEN
                v_reading_score := v_reading_score + v_points_earned;
            ELSIF v_q.skill = 'listening' THEN
                v_listening_score := v_listening_score + v_points_earned;
            END IF;

            INSERT INTO public.certificate_attempt_answers (
                attempt_id, question_id, selected_answer, is_correct, points_earned
            ) VALUES (
                p_attempt_id, v_q.id, v_item->'selected_answer', v_is_correct, v_points_earned
            );
        END IF;
    END LOOP;

    v_percentage := ROUND((v_total_score::NUMERIC / GREATEST(v_attempt.max_score, 1)::NUMERIC) * 100);
    v_passed := (v_percentage >= 60);
    v_formatted_level := UPPER(REPLACE(v_attempt.level_code::TEXT, '-', '.'));

    IF v_passed THEN
        v_cert_id := 'FGN-' || UPPER(REPLACE(v_attempt.level_code::TEXT, '-', '')) || '-' || TO_CHAR(NOW(), 'YYYY') || '-' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6));
        
        INSERT INTO public.certificates (
            certificate_id, user_id, user_name, attempt_id, level_code,
            title, score, percentage, reading_percentage, listening_percentage
        ) VALUES (
            v_cert_id, v_attempt.user_id, v_attempt.user_name, p_attempt_id, v_attempt.level_code,
            'For Great Nation Zertifikat — ' || v_formatted_level,
            v_total_score, v_percentage,
            ROUND((v_reading_score::NUMERIC / GREATEST(v_attempt.reading_max_score, 1)::NUMERIC) * 100),
            ROUND((v_listening_score::NUMERIC / GREATEST(v_attempt.listening_max_score, 1)::NUMERIC) * 100)
        );
    END IF;

    UPDATE public.certificate_attempts
    SET 
        score = v_total_score,
        percentage = v_percentage,
        passed = v_passed,
        reading_score = v_reading_score,
        listening_score = v_listening_score,
        certificate_id = v_cert_id,
        status = 'submitted',
        submitted_at = NOW()
    WHERE id = p_attempt_id;

    RETURN jsonb_build_object(
        'attempt_id', p_attempt_id,
        'score', v_total_score,
        'percentage', v_percentage,
        'passed', v_passed,
        'certificate_id', v_cert_id
    );
END;
$$;

-- 3. Mavjud eskirgan sertifikat nomlarini yangilash
UPDATE public.certificates
SET title = 'For Great Nation Zertifikat — ' || UPPER(REPLACE(level_code::TEXT, '-', '.'))
WHERE title LIKE 'Goethe%' OR title LIKE 'Start Deutsch%';
