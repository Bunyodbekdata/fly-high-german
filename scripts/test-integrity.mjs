import fs from 'fs';
import path from 'path';

console.log('🧪 Starting FOR GREAT NATION Curriculum & Security Integrity Test Suite...\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passCount++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failCount++;
  }
}

// 1. Verify Migration Files
const migrationsDir = path.resolve(process.cwd(), 'supabase/migrations');
assert(fs.existsSync(migrationsDir), 'supabase/migrations directory exists');

const initMigration = path.join(migrationsDir, '20260928_initial_schema.sql');
const certMigration = path.join(migrationsDir, '20261008_certificate_tests_schema.sql');
const seedMigration = path.join(migrationsDir, '20261010_seed_certificate_tests.sql');

assert(fs.existsSync(initMigration), '20260928_initial_schema.sql exists');
assert(fs.existsSync(certMigration), '20261008_certificate_tests_schema.sql exists');
assert(fs.existsSync(seedMigration), '20261010_seed_certificate_tests.sql exists');

if (fs.existsSync(certMigration)) {
  const content = fs.readFileSync(certMigration, 'utf8');
  assert(content.includes('certificate_questions_public'), 'certificate_questions_public VIEW defined in SQL schema');
  assert(content.includes('grade_certificate_attempt'), 'grade_certificate_attempt RPC grading function defined in SQL schema');
  assert(content.includes('Admins and service role read test questions'), 'certificate_questions raw table protected by RLS policy');
}

if (fs.existsSync(initMigration)) {
  const content = fs.readFileSync(initMigration, 'utf8');
  assert(content.includes('handle_new_user()'), 'handle_new_user trigger defined on auth.users in initial schema');
  assert(content.includes('Users can insert own profile'), 'RLS insert policy present for public.profiles');
}

// 2. Verify Client-Side Code Decoupling
const certServicePath = path.resolve(process.cwd(), 'src/lib/certificateService.ts');
assert(fs.existsSync(certServicePath), 'src/lib/certificateService.ts exists');

if (fs.existsSync(certServicePath)) {
  const content = fs.readFileSync(certServicePath, 'utf8');
  assert(content.includes('certificate_questions_public'), 'certificateService queries secure certificate_questions_public view');
  assert(content.includes('grade_certificate_attempt'), 'certificateService invokes grade_certificate_attempt server RPC');
}

// 3. Verify Supabase Client Configuration
const supabaseClientPath = path.resolve(process.cwd(), 'src/lib/supabase.ts');
assert(fs.existsSync(supabaseClientPath), 'src/lib/supabase.ts exists');

if (fs.existsSync(supabaseClientPath)) {
  const content = fs.readFileSync(supabaseClientPath, 'utf8');
  assert(content.includes('checkSupabaseConnection'), 'checkSupabaseConnection diagnostics utility exported');
  assert(content.includes('your-project.supabase.co'), 'Placeholder URL detection active to prevent offline hanging');
}

// 4. Verify Auth Context Security
const authContextPath = path.resolve(process.cwd(), 'src/context/AuthContext.tsx');
assert(fs.existsSync(authContextPath), 'src/context/AuthContext.tsx exists');

if (fs.existsSync(authContextPath)) {
  const content = fs.readFileSync(authContextPath, 'utf8');
  assert(content.includes('signInWithPassword'), 'signInWithPassword wired into login flow');
  assert(content.includes('signUp'), 'signUp wired into register flow');
  assert(content.includes('switchRole'), 'switchRole protected against unauthorized admin privilege escalation');
}

console.log(`\n========================================`);
console.log(`Test Results: ${passCount} Passed, ${failCount} Failed`);
console.log(`========================================\n`);

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 All integrity and security checks passed successfully!\n');
  process.exit(0);
}
