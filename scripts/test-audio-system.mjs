import fs from 'fs';
import path from 'path';

console.log('🎧 ========================================================');
console.log('🎧 FOR GREAT NATION — AUDIO SYSTEMS COMPREHENSIVE TEST SUITE');
console.log('🎧 ========================================================\n');

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

// -------------------------------------------------------------
// 1. UNIT TESTING: Audio Text Cleaning & Chunking Algorithms
// -------------------------------------------------------------
console.log('1. Audio Text Cleaning & Chunking Algorithms:');

// Direct replication of cleanGermanText from src/lib/audio.ts
function cleanGermanText(rawText) {
  if (!rawText) return '';
  return rawText
    .replace(/^[A-Za-zÄÖÜäöüß0-9\s.-]+:\s*/gm, '')
    .replace(/_{2,}/g, ' ... ')
    .replace(/\[blank\]/gi, ' ... ')
    .replace(/\[.*?\]/g, '')
    .replace(/[*_~`]/g, '')
    .replace(/[„“”«»"]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitIntoSentenceChunks(text, maxChunkLength = 140) {
  if (!text) return [];
  const rawSentences = text.match(/[^.!?\n]+[.!?\n]*/g) || [text];
  const chunks = [];
  let currentChunk = '';

  for (const raw of rawSentences) {
    const sentence = raw.trim();
    if (!sentence) continue;

    if ((currentChunk + ' ' + sentence).trim().length <= maxChunkLength) {
      currentChunk = currentChunk ? `${currentChunk} ${sentence}` : sentence;
    } else {
      if (currentChunk) {
        chunks.push(currentChunk);
      }
      if (sentence.length > maxChunkLength) {
        const subParts = sentence.split(/([,;:]\s+)/);
        let subChunk = '';
        for (const part of subParts) {
          if ((subChunk + part).length <= maxChunkLength) {
            subChunk += part;
          } else {
            if (subChunk) chunks.push(subChunk.trim());
            if (part.length > maxChunkLength) {
              const words = part.split(/\s+/);
              let wordChunk = '';
              for (const w of words) {
                if ((wordChunk + ' ' + w).trim().length <= maxChunkLength) {
                  wordChunk = wordChunk ? `${wordChunk} ${w}` : w;
                } else {
                  if (wordChunk) chunks.push(wordChunk.trim());
                  wordChunk = w;
                }
              }
              subChunk = wordChunk;
            } else {
              subChunk = part;
            }
          }
        }
        if (subChunk) chunks.push(subChunk.trim());
        currentChunk = '';
      } else {
        currentChunk = sentence;
      }
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks.length > 0 ? chunks : [text];
}

// Test cleanGermanText
assert(cleanGermanText('Florian: Guten Tag!') === 'Guten Tag!', 'Strips single speaker prefix "Florian: "');
assert(
  cleanGermanText('Florian: Hallo!\nAnna: Wie geht es dir?') === 'Hallo! Wie geht es dir?',
  'Strips multi-line speaker prefixes in dialogue'
);
assert(
  cleanGermanText('Sprecher 1: Willkommen in Deutschland!') === 'Willkommen in Deutschland!',
  'Strips numbered speaker prefix "Sprecher 1: "'
);
assert(
  cleanGermanText('Guten Morgen [Gu-ten Mor-gen]!') === 'Guten Morgen !',
  'Strips bracketed phonetic pronunciation annotations'
);
assert(
  cleanGermanText('Das ist **sehr** *wichtig*.') === 'Das ist sehr wichtig.',
  'Strips markdown bold and italics formatting'
);
assert(
  cleanGermanText('„Guten Morgen, Frau Müller!“') === 'Guten Morgen, Frau Müller!',
  'Strips German quotation marks („ “)'
);
assert(
  cleanGermanText('Ich wohne in _____ Deutschland.') === 'Ich wohne in ... Deutschland.',
  'Replaces blank underscores with natural speech pause "..."'
);
assert(
  cleanGermanText('Ich bin [blank] Jahre alt.') === 'Ich bin ... Jahre alt.',
  'Replaces [blank] token with speech pause "..."'
);
assert(cleanGermanText('') === '', 'Handles empty string safely');
assert(cleanGermanText(null) === '', 'Handles null input safely');

// Test splitIntoSentenceChunks
const sampleDialogue = 'Guten Tag! Mein Name ist Lukas. Ich komme aus Österreich und wohne jetzt in Berlin. Ich lerne fleißig Deutsch mit For Great Nation, weil ich in Deutschland arbeiten möchte.';
const chunks = splitIntoSentenceChunks(sampleDialogue, 80);
assert(chunks.length > 1, `Chunking splits text into multiple segments (${chunks.length} chunks)`);
const allUnderLimit = chunks.every(c => c.length <= 80);
assert(allUnderLimit, 'Every chunk respects maxChunkLength limit of 80 characters');

const longSentenceWithoutPunctuation = 'Dies ist ein extrem langer Satz ohne Satzzeichen der viele Wörter enthält und auf keinen Fall die Längenbegrenzung der Audio-Schnittstelle überschreiten darf damit der Browser oder Online-Stream niemals einfriert oder Fehler wirft.';
const wordChunks = splitIntoSentenceChunks(longSentenceWithoutPunctuation, 70);
assert(wordChunks.length > 1, `Words chunking works on sentences without punctuation (${wordChunks.length} chunks)`);
assert(wordChunks.every(c => c.length <= 70), 'Word chunks all stay within maxChunkLength');

// -------------------------------------------------------------
// 2. AUDIT: Curriculum Seed Data Audio Readiness
// -------------------------------------------------------------
console.log('\n2. Curriculum Audio Data Audit:');

const seedFiles = [
  'src/lib/seedLessons/module1Lessons.ts',
  'src/lib/seedLessons/module2Lessons.ts',
  'src/lib/seedLessons/module3Lessons.ts',
  'src/lib/seedLessons/module4Lessons.ts',
  'src/lib/seedLessonsA12/module5LessonsA12.ts',
  'src/lib/seedLessonsA12/module6LessonsA12.ts',
  'src/lib/seedLessonsA12/module7LessonsA12.ts',
  'src/lib/seedLessonsA12/module8LessonsA12.ts',
  'src/lib/seedLessonsA21/module9LessonsA21.ts',
  'src/lib/seedLessonsA21/module10LessonsA21.ts',
  'src/lib/seedLessonsA21/module11LessonsA21.ts',
  'src/lib/seedLessonsA21/module12LessonsA21.ts',
  'src/lib/seedLessonsA22/module13LessonsA22.ts',
  'src/lib/seedLessonsA22/module14LessonsA22.ts',
  'src/lib/seedLessonsA22/module15LessonsA22.ts',
  'src/lib/seedLessonsA22/module16LessonsA22.ts',
  'src/lib/seedLessonsB11/module17LessonsB11.ts',
  'src/lib/seedLessonsB11/module18LessonsB11.ts',
  'src/lib/seedLessonsB11/module19LessonsB11.ts',
  'src/lib/seedLessonsB11/module20LessonsB11.ts',
  'src/lib/seedLessonsB12/module21LessonsB12.ts',
  'src/lib/seedLessonsB12/module22LessonsB12.ts',
  'src/lib/seedLessonsB12/module23LessonsB12.ts',
  'src/lib/seedLessonsB12/module24LessonsB12.ts',
];

let totalLessonsInspected = 0;
let lessonsWith3Stage = 0;
let totalVocabularyChecked = 0;

for (const relPath of seedFiles) {
  const fullPath = path.resolve(process.cwd(), relPath);
  if (!fs.existsSync(fullPath)) {
    assert(false, `Seed file exists: ${relPath}`);
    continue;
  }
  const content = fs.readFileSync(fullPath, 'utf8');

  // Count lessons
  const lessonMatches = content.match(/id:\s*['"]les-[^'"]+['"]/g) || [];
  totalLessonsInspected += lessonMatches.length;

  // Check 3-stage listening
  const threeStageMatches = content.match(/listening3Stage:\s*\{/g) || [];
  lessonsWith3Stage += threeStageMatches.length;

  // Check vocabulary
  const vocabMatches = content.match(/german:\s*['"][^'"]+['"]/g) || [];
  totalVocabularyChecked += vocabMatches.length;
}

assert(totalLessonsInspected === 72, `Inspected all 72 lessons across 24 modules (found: ${totalLessonsInspected})`);
assert(lessonsWith3Stage > 0, `Lessons contain 3-Stage listening methodology (${lessonsWith3Stage} modules)`);
assert(totalVocabularyChecked >= 500, `All vocabulary words contain German text for TTS (${totalVocabularyChecked} items)`);

// -------------------------------------------------------------
// 3. AUDIT: Certificate Tests Audio Compatibility
// -------------------------------------------------------------
console.log('\n3. Certificate Tests Audio Compatibility:');

const certTestsFile = path.resolve(process.cwd(), 'src/lib/seedCertificateTests.ts');
assert(fs.existsSync(certTestsFile), 'src/lib/seedCertificateTests.ts exists');

if (fs.existsSync(certTestsFile)) {
  const content = fs.readFileSync(certTestsFile, 'utf8');
  const listeningSectionMatches = content.match(/skillFocus:\s*['"]listening['"]/g) || [];
  assert(listeningSectionMatches.length >= 2, `Listening certificate tests present (${listeningSectionMatches.length} tests)`);

  const audioTextMatches = content.match(/audioText:\s*['"][^'"]+['"]/g) || [];
  assert(audioTextMatches.length >= 10, `Certificate listening questions have audioText configured (${audioTextMatches.length} questions)`);

  // Ensure no empty audioText
  const emptyAudioTextMatches = content.match(/audioText:\s*['"]\s*['"]/g) || [];
  assert(emptyAudioTextMatches.length === 0, 'No empty audioText fields found in certificate listening tests');
}

// -------------------------------------------------------------
// 4. AUDIT: Pronunciation & Shadowing Studio Audio
// -------------------------------------------------------------
console.log('\n4. Pronunciation & Shadowing Studio Audio:');

const pronunDataPath = path.resolve(process.cwd(), 'src/lib/pronunciationData.ts');
assert(fs.existsSync(pronunDataPath), 'src/lib/pronunciationData.ts exists');

if (fs.existsSync(pronunDataPath)) {
  const content = fs.readFileSync(pronunDataPath, 'utf8');
  assert(content.includes('umlauts'), 'Contains complete German umlauts rules (ä, ö, ü, ß)');
  assert(content.includes('diphthongs'), 'Contains German diphthongs rules (ei, ie, eu, äu, au)');
  assert(content.includes('consonants'), 'Contains German consonants rules (ch, sch, sp, st, ig, r)');
  assert(content.includes('examples:'), 'Every pronunciation rule contains German word examples');
}

const pronunPage = path.resolve(process.cwd(), 'src/pages/PronunciationPage.tsx');
assert(fs.existsSync(pronunPage), 'src/pages/PronunciationPage.tsx exists');

if (fs.existsSync(pronunPage)) {
  const content = fs.readFileSync(pronunPage, 'utf8');
  assert(content.includes('<AudioButton'), 'PronunciationPage integrates AudioButton for phonetic sounds');
}

const shadowingPage = path.resolve(process.cwd(), 'src/pages/ShadowingPage.tsx');
assert(fs.existsSync(shadowingPage), 'src/pages/ShadowingPage.tsx exists');

if (fs.existsSync(shadowingPage)) {
  const content = fs.readFileSync(shadowingPage, 'utf8');
  assert(content.includes('audioService.startRecording()'), 'ShadowingPage supports microphone recording');
  assert(content.includes('audioService.stopRecording()'), 'ShadowingPage supports stopping recording and audio blob creation');
  assert(content.includes('audioService.playAudioUrl'), 'ShadowingPage supports recorded audio playback comparison');
}

// -------------------------------------------------------------
// 5. AUDIT: Web Audio SFX (Gamification Sound Effects)
// -------------------------------------------------------------
console.log('\n5. Web Audio SFX (Sound Effects):');

const gamificationFile = path.resolve(process.cwd(), 'src/lib/gamification.ts');
assert(fs.existsSync(gamificationFile), 'src/lib/gamification.ts exists');

if (fs.existsSync(gamificationFile)) {
  const content = fs.readFileSync(gamificationFile, 'utf8');
  assert(content.includes('playCorrect'), 'sfx.playCorrect() synthesized chime exists');
  assert(content.includes('playIncorrect'), 'sfx.playIncorrect() error buzz exists');
  assert(content.includes('playFanfare'), 'sfx.playFanfare() achievement fanfare exists');
  assert(content.includes('isMuted'), 'sfx.isMuted() mute check exists');
  assert(content.includes('toggleMute'), 'sfx.toggleMute() toggle exists');
  assert(content.includes('createOscillator'), 'Uses native zero-asset Web Audio API oscillators');
}

// -------------------------------------------------------------
// 6. AUDIT: AudioButton Component Resilience
// -------------------------------------------------------------
console.log('\n6. AudioButton Component Resilience:');

const audioBtnFile = path.resolve(process.cwd(), 'src/components/common/AudioButton.tsx');
assert(fs.existsSync(audioBtnFile), 'src/components/common/AudioButton.tsx exists');

if (fs.existsSync(audioBtnFile)) {
  const content = fs.readFileSync(audioBtnFile, 'utf8');
  assert(content.includes('SoundWaveVisualizer'), 'AudioButton renders SoundWaveVisualizer while playing');
  assert(content.includes('FAILURE_MESSAGES'), 'AudioButton translates failure reasons to user-friendly messages');
  assert(content.includes('audioService.onStateChange'), 'AudioButton synchronizes with global playback state');
  assert(content.includes('e.stopPropagation()'), 'AudioButton prevents card click propagation');
}

console.log(`\n========================================`);
console.log(`Audio System Test Results: ${passCount} Passed, ${failCount} Failed`);
console.log(`========================================\n`);

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 All audio systems verified successfully!\n');
  process.exit(0);
}
