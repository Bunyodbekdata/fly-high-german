-- ====================================================================
-- FOR GREAT NATION - Certificate Tests & Assessment Schema with RLS
-- ====================================================================

-- 1. CERTIFICATE TESTS TABLE
CREATE TABLE IF NOT EXISTS public.certificate_tests (
    id TEXT PRIMARY KEY,
    level_code cefr_level_code NOT NULL,
    title_de TEXT NOT NULL,
    title_uz TEXT NOT NULL,
    description_uz TEXT NOT NULL,
    duration_minutes INT NOT NULL DEFAULT 30,
    passing_percentage INT NOT NULL DEFAULT 60,
    is_published BOOLEAN NOT NULL DEFAULT true,
    total_points INT NOT NULL DEFAULT 40,
    total_questions INT NOT NULL DEFAULT 10,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CERTIFICATE SECTIONS TABLE
CREATE TABLE IF NOT EXISTS public.certificate_sections (
    id TEXT PRIMARY KEY,
    test_id TEXT NOT NULL REFERENCES public.certificate_tests(id) ON DELETE CASCADE,
    skill TEXT NOT NULL CHECK (skill IN ('reading', 'listening', 'writing', 'speaking')),
    title_de TEXT NOT NULL,
    title_uz TEXT NOT NULL,
    instructions_uz TEXT NOT NULL,
    order_index INT NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. CERTIFICATE QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS public.certificate_questions (
    id TEXT PRIMARY KEY,
    section_id TEXT NOT NULL REFERENCES public.certificate_sections(id) ON DELETE CASCADE,
    order_index INT NOT NULL DEFAULT 1,
    type TEXT NOT NULL,
    prompt_de TEXT,
    prompt_uz TEXT NOT NULL,
    passage_de TEXT,
    audio_text TEXT,
    audio_url TEXT,
    transcript_de TEXT,
    options JSONB NOT NULL DEFAULT '[]'::jsonb,
    correct_answer JSONB NOT NULL,
    points INT NOT NULL DEFAULT 4,
    explanation_uz TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. CERTIFICATE ATTEMPTS TABLE
CREATE TABLE IF NOT EXISTS public.certificate_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    user_name TEXT NOT NULL,
    test_id TEXT NOT NULL REFERENCES public.certificate_tests(id) ON DELETE CASCADE,
    level_code cefr_level_code NOT NULL,
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    submitted_at TIMESTAMPTZ,
    duration_seconds_used INT DEFAULT 0,
    score INT NOT NULL DEFAULT 0,
    max_score INT NOT NULL DEFAULT 40,
    percentage INT NOT NULL DEFAULT 0,
    passed BOOLEAN NOT NULL DEFAULT false,
    reading_score INT NOT NULL DEFAULT 0,
    reading_max_score INT NOT NULL DEFAULT 20,
    reading_percentage INT NOT NULL DEFAULT 0,
    listening_score INT NOT NULL DEFAULT 0,
    listening_max_score INT NOT NULL DEFAULT 20,
    listening_percentage INT NOT NULL DEFAULT 0,
    certificate_id TEXT,
    status TEXT NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'submitted', 'expired')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. CERTIFICATE ATTEMPT ANSWERS TABLE
CREATE TABLE IF NOT EXISTS public.certificate_attempt_answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    attempt_id UUID NOT NULL REFERENCES public.certificate_attempts(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL,
    selected_answer JSONB,
    is_correct BOOLEAN DEFAULT false,
    points_earned INT DEFAULT 0,
    is_flagged BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. CERTIFICATES TABLE
CREATE TABLE IF NOT EXISTS public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    certificate_id TEXT UNIQUE NOT NULL, -- e.g. FGN-A11-2026-8F42K7
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    user_name TEXT NOT NULL,
    attempt_id UUID NOT NULL REFERENCES public.certificate_attempts(id) ON DELETE CASCADE,
    level_code cefr_level_code NOT NULL,
    title TEXT NOT NULL,
    score INT NOT NULL,
    percentage INT NOT NULL,
    reading_percentage INT NOT NULL,
    listening_percentage INT NOT NULL,
    issued_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    status TEXT NOT NULL DEFAULT 'valid' CHECK (status IN ('valid', 'revoked'))
);

-- 7. INDEXES
CREATE INDEX IF NOT EXISTS idx_cert_sections_test ON public.certificate_sections(test_id);
CREATE INDEX IF NOT EXISTS idx_cert_questions_sec ON public.certificate_questions(section_id);
CREATE INDEX IF NOT EXISTS idx_cert_attempts_user ON public.certificate_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_cert_attempts_test ON public.certificate_attempts(test_id);
CREATE INDEX IF NOT EXISTS idx_cert_answers_att ON public.certificate_attempt_answers(attempt_id);
CREATE INDEX IF NOT EXISTS idx_certificates_user ON public.certificates(user_id);
CREATE INDEX IF NOT EXISTS idx_certificates_public_id ON public.certificates(certificate_id);

-- 8. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.certificate_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificate_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificate_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificate_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificate_attempt_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Tests and sections: Public read for published tests
CREATE POLICY "Public read published tests" ON public.certificate_tests 
    FOR SELECT USING (is_published = true OR auth.role() = 'service_role');

CREATE POLICY "Public read test sections" ON public.certificate_sections 
    FOR SELECT USING (true);

-- Questions: Public read during attempts (correct answers protected server-side or service role)
CREATE POLICY "Public read test questions" ON public.certificate_questions 
    FOR SELECT USING (true);

-- Attempts: Students manage own attempts
CREATE POLICY "Users read own attempts" ON public.certificate_attempts 
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users insert own attempts" ON public.certificate_attempts 
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own attempts" ON public.certificate_attempts 
    FOR UPDATE USING (auth.uid() = user_id);

-- Attempt answers: Students manage own answers
CREATE POLICY "Users read own attempt answers" ON public.certificate_attempt_answers 
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.certificate_attempts WHERE id = attempt_id AND user_id = auth.uid())
    );

CREATE POLICY "Users insert own attempt answers" ON public.certificate_attempt_answers 
    FOR INSERT WITH CHECK (
        EXISTS (SELECT 1 FROM public.certificate_attempts WHERE id = attempt_id AND user_id = auth.uid())
    );

CREATE POLICY "Users update own attempt answers" ON public.certificate_attempt_answers 
    FOR UPDATE USING (
        EXISTS (SELECT 1 FROM public.certificate_attempts WHERE id = attempt_id AND user_id = auth.uid())
    );

-- Certificates: Public read for verification, student owns write
CREATE POLICY "Public read certificates by id" ON public.certificates 
    FOR SELECT USING (true);

CREATE POLICY "Users insert own certificate" ON public.certificates 
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Admins can manage everything
CREATE POLICY "Admins manage certificate tests" ON public.certificate_tests 
    FOR ALL USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    );

CREATE POLICY "Admins manage certificate sections" ON public.certificate_sections 
    FOR ALL USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    );

CREATE POLICY "Admins manage certificate questions" ON public.certificate_questions 
    FOR ALL USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    );
