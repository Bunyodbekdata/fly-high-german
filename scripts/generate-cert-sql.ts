import fs from 'fs';
import path from 'path';
import { INITIAL_CERTIFICATE_TESTS } from '../src/lib/seedCertificateTests';

function escapeSqlString(val: string | null | undefined): string {
  if (val === null || val === undefined) return 'NULL';
  return `'${val.replace(/'/g, "''")}'`;
}

function escapeJson(val: any): string {
  if (val === null || val === undefined) return "'null'::jsonb";
  const jsonStr = JSON.stringify(val);
  return `'${jsonStr.replace(/'/g, "''")}'::jsonb`;
}

let sql = `-- ====================================================================
-- FOR GREAT NATION - Seed Certificate Tests, Sections & Questions
-- Generated from Goethe / telc CEFR aligned curriculum
-- ====================================================================

`;

for (const test of INITIAL_CERTIFICATE_TESTS) {
  sql += `-- Test: ${test.titleUz}\n`;
  sql += `INSERT INTO public.certificate_tests (
    id, level_code, title_de, title_uz, description_uz,
    duration_minutes, passing_percentage, is_published, total_points, total_questions
) VALUES (
    ${escapeSqlString(test.id)},
    ${escapeSqlString(test.levelCode)}::cefr_level_code,
    ${escapeSqlString(test.titleDe)},
    ${escapeSqlString(test.titleUz)},
    ${escapeSqlString(test.descriptionUz)},
    ${test.durationMinutes},
    ${test.passingPercentage},
    ${test.isPublished},
    ${test.totalPoints},
    ${test.totalQuestions}
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    description_uz = EXCLUDED.description_uz,
    duration_minutes = EXCLUDED.duration_minutes,
    total_points = EXCLUDED.total_points,
    total_questions = EXCLUDED.total_questions;\n\n`;

  for (const section of test.sections) {
    sql += `INSERT INTO public.certificate_sections (
    id, test_id, skill, title_de, title_uz, instructions_uz, order_index
) VALUES (
    ${escapeSqlString(section.id)},
    ${escapeSqlString(section.testId)},
    ${escapeSqlString(section.skill)},
    ${escapeSqlString(section.titleDe)},
    ${escapeSqlString(section.titleUz)},
    ${escapeSqlString(section.instructionsUz)},
    ${section.orderIndex}
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    instructions_uz = EXCLUDED.instructions_uz;\n\n`;

    for (const q of section.questions) {
      sql += `INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    ${escapeSqlString(q.id)},
    ${escapeSqlString(q.sectionId)},
    ${q.orderIndex},
    ${escapeSqlString(q.type)},
    ${escapeSqlString(q.promptDe)},
    ${escapeSqlString(q.promptUz)},
    ${escapeSqlString(q.passageDe)},
    ${escapeSqlString(q.audioText)},
    ${escapeSqlString(q.audioUrl)},
    ${escapeSqlString(q.transcriptDe)},
    ${escapeJson(q.options)},
    ${escapeJson(q.correctAnswer)},
    ${q.points},
    ${escapeSqlString(q.explanationUz)}
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;\n\n`;
    }
  }
}

const outPath = path.resolve(process.cwd(), 'supabase/migrations/20261010_seed_certificate_tests.sql');
fs.writeFileSync(outPath, sql, 'utf8');
console.log(`Generated SQL seed with ${INITIAL_CERTIFICATE_TESTS.length} tests at ${outPath}`);
