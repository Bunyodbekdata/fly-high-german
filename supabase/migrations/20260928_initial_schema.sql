-- ====================================================================
-- FOR GREAT NATION - German Language Learning Platform (Uzbek Audience)
-- Supabase PostgreSQL Relational Schema with Row Level Security (RLS)
-- ====================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. ENUMS
DO $$ BEGIN
    CREATE TYPE cefr_level_code AS ENUM ('a1-1', 'a1-2', 'a2-1', 'a2-2', 'b1-1', 'b1-2');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE german_article AS ENUM ('der', 'die', 'das');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE word_type AS ENUM ('noun', 'verb', 'adjective', 'adverb', 'expression', 'phrase');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE exercise_type AS ENUM ('multiple_choice', 'fill_in_the_blank', 'sentence_ordering', 'matching', 'translation');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('student', 'admin');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 3. PROFILES TABLE (Linked with auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    role user_role DEFAULT 'student'::user_role,
    current_level cefr_level_code DEFAULT 'a1-1'::cefr_level_code,
    daily_goal_minutes INT DEFAULT 20,
    streak_days INT DEFAULT 0,
    last_activity_date DATE,
    xp_points INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. LEVELS TABLE
CREATE TABLE IF NOT EXISTS public.levels (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code cefr_level_code UNIQUE NOT NULL,
    title TEXT NOT NULL,
    cefr_level TEXT NOT NULL,
    description_uz TEXT NOT NULL,
    target_audience TEXT NOT NULL,
    estimated_hours INT DEFAULT 60,
    order_index INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. MODULES TABLE
CREATE TABLE IF NOT EXISTS public.modules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    level_id UUID NOT NULL REFERENCES public.levels(id) ON DELETE CASCADE,
    title_de TEXT NOT NULL,
    title_uz TEXT NOT NULL,
    description_uz TEXT,
    order_index INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. LESSONS TABLE
CREATE TABLE IF NOT EXISTS public.lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    module_id UUID NOT NULL REFERENCES public.modules(id) ON DELETE CASCADE,
    level_code cefr_level_code NOT NULL,
    title_de TEXT NOT NULL,
    title_uz TEXT NOT NULL,
    description_uz TEXT,
    order_index INT NOT NULL,
    estimated_minutes INT DEFAULT 25,
    is_published BOOLEAN DEFAULT true,
    objectives_uz JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. VOCABULARY TABLE
CREATE TABLE IF NOT EXISTS public.vocabulary (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    level_code cefr_level_code NOT NULL,
    german TEXT NOT NULL,
    article german_article,
    plural TEXT,
    uzbek TEXT NOT NULL,
    example_de TEXT NOT NULL,
    example_uz TEXT NOT NULL,
    word_type word_type DEFAULT 'noun'::word_type,
    audio_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. GRAMMAR TOPICS TABLE
CREATE TABLE IF NOT EXISTS public.grammar_topics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    level_code cefr_level_code NOT NULL,
    title_de TEXT NOT NULL,
    title_uz TEXT NOT NULL,
    summary_uz TEXT,
    explanation_uz TEXT NOT NULL,
    tables JSONB DEFAULT '[]'::jsonb,
    examples JSONB DEFAULT '[]'::jsonb,
    common_mistakes JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. LISTENING EXERCISES TABLE
CREATE TABLE IF NOT EXISTS public.listening_exercises (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    title_de TEXT NOT NULL,
    title_uz TEXT NOT NULL,
    audio_url TEXT,
    transcript_de TEXT NOT NULL,
    translation_uz TEXT NOT NULL,
    dialogue JSONB DEFAULT '[]'::jsonb,
    questions JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. READING MATERIALS TABLE
CREATE TABLE IF NOT EXISTS public.reading_materials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    title_de TEXT NOT NULL,
    title_uz TEXT NOT NULL,
    text_de TEXT NOT NULL,
    translation_uz TEXT NOT NULL,
    vocabulary_hints JSONB DEFAULT '[]'::jsonb,
    questions JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. WRITING TASKS TABLE
CREATE TABLE IF NOT EXISTS public.writing_tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    title_uz TEXT NOT NULL,
    prompt_uz TEXT NOT NULL,
    task_instructions_uz TEXT NOT NULL,
    useful_vocabulary JSONB DEFAULT '[]'::jsonb,
    model_structure JSONB DEFAULT '[]'::jsonb,
    model_answer_de TEXT NOT NULL,
    model_answer_uz TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. SHADOWING EXERCISES TABLE
CREATE TABLE IF NOT EXISTS public.shadowing_exercises (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    level_code cefr_level_code NOT NULL,
    sentence_de TEXT NOT NULL,
    translation_uz TEXT NOT NULL,
    audio_url TEXT,
    phonetic_hint TEXT,
    order_index INT DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. EXERCISES / QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS public.exercises (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    type exercise_type NOT NULL,
    prompt_uz TEXT NOT NULL,
    prompt_de TEXT,
    options JSONB,
    correct_answer JSONB NOT NULL,
    pairs JSONB,
    words_to_order JSONB,
    explanation_uz TEXT NOT NULL,
    order_index INT DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. USER PROGRESS & ATTEMPTS
CREATE TABLE IF NOT EXISTS public.lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT false,
    score INT DEFAULT 0,
    tab_progress JSONB DEFAULT '{}'::jsonb,
    completed_at TIMESTAMPTZ,
    last_accessed_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, lesson_id)
);

CREATE TABLE IF NOT EXISTS public.vocabulary_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    vocab_id UUID NOT NULL REFERENCES public.vocabulary(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'learning',
    is_favorite BOOLEAN DEFAULT false,
    last_reviewed_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, vocab_id)
);

-- 15. INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_modules_level_id ON public.modules(level_id);
CREATE INDEX IF NOT EXISTS idx_lessons_module_id ON public.lessons(module_id);
CREATE INDEX IF NOT EXISTS idx_lessons_level_code ON public.lessons(level_code);
CREATE INDEX IF NOT EXISTS idx_vocab_lesson_id ON public.vocabulary(lesson_id);
CREATE INDEX IF NOT EXISTS idx_vocab_level_code ON public.vocabulary(level_code);
CREATE INDEX IF NOT EXISTS idx_vocab_german ON public.vocabulary(german);
CREATE INDEX IF NOT EXISTS idx_grammar_lesson_id ON public.grammar_topics(lesson_id);
CREATE INDEX IF NOT EXISTS idx_shadowing_level ON public.shadowing_exercises(level_code);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_user ON public.lesson_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_vocab_progress_user ON public.vocabulary_progress(user_id);

-- 16. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.grammar_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.listening_exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reading_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.writing_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shadowing_exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vocabulary_progress ENABLE ROW LEVEL SECURITY;

-- Educational content is publicly readable by everyone
CREATE POLICY "Public read levels" ON public.levels FOR SELECT USING (true);
CREATE POLICY "Public read modules" ON public.modules FOR SELECT USING (true);
CREATE POLICY "Public read lessons" ON public.lessons FOR SELECT USING (is_published = true OR auth.role() = 'service_role');
CREATE POLICY "Public read vocabulary" ON public.vocabulary FOR SELECT USING (true);
CREATE POLICY "Public read grammar" ON public.grammar_topics FOR SELECT USING (true);
CREATE POLICY "Public read listening" ON public.listening_exercises FOR SELECT USING (true);
CREATE POLICY "Public read reading" ON public.reading_materials FOR SELECT USING (true);
CREATE POLICY "Public read writing" ON public.writing_tasks FOR SELECT USING (true);
CREATE POLICY "Public read shadowing" ON public.shadowing_exercises FOR SELECT USING (true);
CREATE POLICY "Public read exercises" ON public.exercises FOR SELECT USING (true);

-- User profiles: Users can read all basic profiles, edit only their own, insert own
CREATE POLICY "Users can read profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins manage profiles" ON public.profiles FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Automatic profile sync trigger from auth.users to public.profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
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
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', 'Talaba'),
    'student'::user_role,
    'a1-1'::cefr_level_code,
    20,
    0,
    0
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Lesson progress: Users can only see and modify their own progress
CREATE POLICY "Users read own lesson progress" ON public.lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own lesson progress" ON public.lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own lesson progress" ON public.lesson_progress FOR UPDATE USING (auth.uid() = user_id);

-- Vocabulary progress: Users can only manage their own flashcards
CREATE POLICY "Users read own vocab progress" ON public.vocabulary_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own vocab progress" ON public.vocabulary_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own vocab progress" ON public.vocabulary_progress FOR UPDATE USING (auth.uid() = user_id);

-- Admin mutation policies (only users with role='admin' can insert/update/delete educational content)
CREATE POLICY "Admins manage levels" ON public.levels FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins manage modules" ON public.modules FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins manage lessons" ON public.lessons FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins manage vocabulary" ON public.vocabulary FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins manage grammar" ON public.grammar_topics FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);
