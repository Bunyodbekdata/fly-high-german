import React, { useState } from 'react';
import { ExerciseItem } from '../../types/database';
import { CheckCircle2, XCircle, RefreshCw, Award, ArrowRight, Lightbulb } from 'lucide-react';
import { AudioButton } from '../common/AudioButton';
import confetti from 'canvas-confetti';

interface ExerciseRunnerProps {
  exercises: ExerciseItem[];
  onFinish?: (score: number) => void;
  titleUz?: string;
}

export const ExerciseRunner: React.FC<ExerciseRunnerProps> = ({ 
  exercises, 
  onFinish,
  titleUz 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  // Interactive sentence ordering state
  const [selectedWordOrder, setSelectedWordOrder] = useState<string[]>([]);
  // Interactive matching state
  const [selectedPairLeft, setSelectedPairLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  // Fill in blank / text input state
  const [textInput, setTextInput] = useState('');

  if (!exercises || exercises.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800">
        Bu bo‘lim uchun hali mashqlar kiritilmagan.
      </div>
    );
  }

  const currentExercise = exercises[currentIndex];

  const handleSelectOption = (option: string) => {
    if (isAnswerChecked) return;
    setUserAnswers({ ...userAnswers, [currentIndex]: option });
  };

  const handleWordClick = (word: string) => {
    if (isAnswerChecked) return;
    if (selectedWordOrder.includes(word)) {
      setSelectedWordOrder(selectedWordOrder.filter(w => w !== word));
    } else {
      setSelectedWordOrder([...selectedWordOrder, word]);
    }
  };

  const handlePairClick = (side: 'left' | 'right', value: string) => {
    if (isAnswerChecked) return;
    if (side === 'left') {
      setSelectedPairLeft(value);
    } else if (selectedPairLeft) {
      setMatchedPairs({ ...matchedPairs, [selectedPairLeft]: value });
      setSelectedPairLeft(null);
    }
  };

  const isMultipleChoiceType = 
    currentExercise.type === 'multiple_choice' || 
    currentExercise.type === 'multiple-choice' || 
    currentExercise.type === 'article_selection' ||
    (currentExercise.type === 'fill-blank' && currentExercise.options && currentExercise.options.length > 0);

  const isSentenceOrderingType = 
    currentExercise.type === 'sentence_ordering' || 
    currentExercise.type === 'word-order';

  const isFillBlankType = 
    currentExercise.type === 'fill_in_the_blank' || 
    (currentExercise.type === 'fill-blank' && (!currentExercise.options || currentExercise.options.length === 0)) ||
    currentExercise.type === 'translation';

  const checkAnswer = () => {
    let isCorrect = false;

    if (isMultipleChoiceType) {
      isCorrect = userAnswers[currentIndex] === currentExercise.correctAnswer;
    } else if (isFillBlankType) {
      const cleanInput = textInput.trim().toLowerCase();
      const cleanCorrect = String(currentExercise.correctAnswer).trim().toLowerCase();
      isCorrect = cleanInput === cleanCorrect;
      setUserAnswers({ ...userAnswers, [currentIndex]: textInput });
    } else if (isSentenceOrderingType) {
      const formedSentence = selectedWordOrder.join(' ').trim();
      const expected = String(currentExercise.correctAnswer).trim();
      isCorrect = formedSentence.toLowerCase() === expected.toLowerCase();
      setUserAnswers({ ...userAnswers, [currentIndex]: formedSentence });
    } else if (currentExercise.type === 'matching') {
      const correctPairs = currentExercise.pairs || [];
      const allMatched = correctPairs.every(p => matchedPairs[p.left] === p.right);
      isCorrect = allMatched && Object.keys(matchedPairs).length === correctPairs.length;
      setUserAnswers({ ...userAnswers, [currentIndex]: matchedPairs });
    }

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setIsAnswerChecked(true);
  };

  const isCurrentCorrect = (): boolean => {
    if (!isAnswerChecked) return false;
    const ans = userAnswers[currentIndex];
    if (isMultipleChoiceType) {
      return ans === currentExercise.correctAnswer;
    }
    if (isFillBlankType) {
      return String(ans || textInput).trim().toLowerCase() === String(currentExercise.correctAnswer).trim().toLowerCase();
    }
    if (isSentenceOrderingType) {
      return String(ans || selectedWordOrder.join(' ')).trim().toLowerCase() === String(currentExercise.correctAnswer).trim().toLowerCase();
    }
    if (currentExercise.type === 'matching') {
      const correctPairs = currentExercise.pairs || [];
      return correctPairs.every(p => matchedPairs[p.left] === p.right);
    }
    return false;
  };

  const nextQuestion = () => {
    setIsAnswerChecked(false);
    setSelectedWordOrder([]);
    setSelectedPairLeft(null);
    setMatchedPairs({});
    setTextInput('');

    if (currentIndex + 1 < exercises.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
      const finalScore = Math.round(((score + (isCurrentCorrect() ? 1 : 0)) / exercises.length) * 100);
      if (onFinish) onFinish(finalScore);

      if (finalScore >= 70) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.5 }
          });
        } catch {}
      }
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setIsAnswerChecked(false);
    setIsFinished(false);
    setScore(0);
    setSelectedWordOrder([]);
    setSelectedPairLeft(null);
    setMatchedPairs({});
    setTextInput('');
  };

  // --- FINISHED RESULTS SCREEN ---
  if (isFinished) {
    const finalScorePercent = Math.round((score / exercises.length) * 100);
    const passed = finalScorePercent >= 70;

    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-card text-center max-w-xl mx-auto my-6 animate-in fade-in">
        <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-5 ${
          passed 
            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400' 
            : 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400'
        }`}>
          <Award size={44} />
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {passed ? 'Tabriklaymiz! Mashqlar muvaffaqiyatli yakunlandi!' : 'Yaxshi harakat! Qoidalarni yana bir bor ko‘rib chiqing.'}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
          Siz {exercises.length} ta savoldan {score} tasiga to‘g‘ri javob berdingiz.
        </p>

        <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="text-left mr-6">
            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Umumiy ball</div>
            <div className="text-3xl font-extrabold text-brand-600 dark:text-brand-400">{finalScorePercent}%</div>
          </div>
          <div className="h-10 w-px bg-slate-200 dark:bg-slate-700 mr-6"></div>
          <div className="text-left">
            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Baholash</div>
            <div className={`text-sm font-bold ${passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
              {passed ? 'Muvaffaqiyatli o‘zlashtirildi' : 'Qayta takrorlash tavsiya etiladi'}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={restartQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition shadow-sm"
          >
            <RefreshCw size={18} className="mr-2" />
            Mashqlarni qayta topshirish
          </button>
        </div>
      </div>
    );
  }

  const isArticleType = currentExercise.type === 'article_selection';

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card overflow-hidden max-w-2xl mx-auto my-4">
      {/* Top Header */}
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-850/80">
        <div>
          <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            {currentIndex + 1} / {exercises.length}-mashq
          </span>
          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-0.5">
            {titleUz || (
              currentExercise.type === 'multiple_choice' ? 'To‘g‘ri javobni tanlang' :
              currentExercise.type === 'article_selection' ? 'To‘g‘ri artiklni tanlang (der, die, das)' :
              currentExercise.type === 'fill_in_the_blank' ? 'Bo‘sh joyni to‘ldiring' :
              currentExercise.type === 'sentence_ordering' ? 'So‘zlarni to‘g‘ri tartibda joylashtiring' :
              currentExercise.type === 'matching' ? 'O‘zbekcha va nemischa juftliklarni moslang' :
              'Nemis tiliga tarjima qiling'
            )}
          </h4>
        </div>
        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-2xs">
          To‘g‘ri: {score}
        </div>
      </div>

      {/* Exercise Body */}
      <div className="p-6">
        <div className="mb-6">
          <p className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">
            {currentExercise.promptUz || currentExercise.questionUz}
          </p>
          {currentExercise.promptDe && (
            <div className="flex items-center space-x-2 mt-2 p-3 bg-brand-50/60 dark:bg-brand-950/40 rounded-xl border border-brand-100 dark:border-brand-900/50">
              <AudioButton text={currentExercise.promptDe} size="sm" />
              <span className="text-brand-900 dark:text-brand-200 font-medium font-serif italic text-base">
                "{currentExercise.promptDe}"
              </span>
            </div>
          )}
        </div>

        {/* 1. Multiple Choice / Article Selection / Fill-in with options */}
        {isMultipleChoiceType && currentExercise.options && (
          <div className="space-y-3">
            {currentExercise.options.map((option, idx) => {
              const isSelected = userAnswers[currentIndex] === option;
              const optLower = option.trim().toLowerCase();
              const isDer = optLower === 'der';
              const isDie = optLower === 'die';
              const isDas = optLower === 'das';
              const isPlural = optLower.includes('pl');

              let itemClasses = 'border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-500 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-850';

              if (isArticleType) {
                if (isDer) {
                  itemClasses = 'border-blue-200 dark:border-blue-800/60 hover:border-blue-500 hover:shadow-glow-der bg-white dark:bg-slate-850 text-blue-900 dark:text-blue-300';
                } else if (isDie) {
                  itemClasses = 'border-rose-200 dark:border-rose-800/60 hover:border-rose-500 hover:shadow-glow-die bg-white dark:bg-slate-850 text-rose-900 dark:text-rose-300';
                } else if (isDas) {
                  itemClasses = 'border-emerald-200 dark:border-emerald-800/60 hover:border-emerald-500 hover:shadow-glow-das bg-white dark:bg-slate-850 text-emerald-900 dark:text-emerald-300';
                } else if (isPlural) {
                  itemClasses = 'border-purple-200 dark:border-purple-800/60 hover:border-purple-500 hover:shadow-glow-plural bg-white dark:bg-slate-850 text-purple-900 dark:text-purple-300';
                }
              }

              if (isSelected) {
                if (isArticleType && isDer) {
                  itemClasses = 'border-blue-500 dark:border-blue-500 bg-blue-50/90 dark:bg-blue-950/60 ring-2 ring-blue-500/20 shadow-glow-der text-blue-950 dark:text-blue-200 font-bold';
                } else if (isArticleType && isDie) {
                  itemClasses = 'border-rose-500 dark:border-rose-500 bg-rose-50/90 dark:bg-rose-950/60 ring-2 ring-rose-500/20 shadow-glow-die text-rose-950 dark:text-rose-200 font-bold';
                } else if (isArticleType && isDas) {
                  itemClasses = 'border-emerald-500 dark:border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/60 ring-2 ring-emerald-500/20 shadow-glow-das text-emerald-950 dark:text-emerald-200 font-bold';
                } else if (isArticleType && isPlural) {
                  itemClasses = 'border-purple-500 dark:border-purple-500 bg-purple-50/90 dark:bg-purple-950/60 ring-2 ring-purple-500/20 shadow-glow-plural text-purple-950 dark:text-purple-200 font-bold';
                } else {
                  itemClasses = 'border-brand-500 dark:border-brand-500 bg-brand-50/80 dark:bg-brand-950/50 ring-2 ring-brand-500/20 text-brand-950 dark:text-brand-200 font-bold';
                }
              }

              if (isAnswerChecked) {
                if (option === currentExercise.correctAnswer) {
                  itemClasses = 'border-emerald-500 dark:border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20 font-bold';
                } else if (isSelected) {
                  itemClasses = 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-950/50 text-red-900 dark:text-red-200 ring-2 ring-red-500/20 font-bold';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option)}
                  disabled={isAnswerChecked}
                  className={`w-full p-4 rounded-xl border text-left font-medium flex items-center justify-between transition ${itemClasses}`}
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </span>
                  {isAnswerChecked && option === currentExercise.correctAnswer && (
                    <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-400" />
                  )}
                  {isAnswerChecked && isSelected && option !== currentExercise.correctAnswer && (
                    <XCircle size={20} className="text-red-500 dark:text-red-400" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* 2. Fill in the Blank / Translation (Text input) */}
        {isFillBlankType && (
          <div className="space-y-3">
            {currentExercise.blankSentence && (
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/70 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                {currentExercise.blankSentence}
              </p>
            )}
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              disabled={isAnswerChecked}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !isAnswerChecked && textInput.trim()) {
                  checkAnswer();
                }
              }}
              placeholder="Javobingizni bu yerga yozing..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
            />
          </div>
        )}

        {/* 3. Sentence Ordering / Word Order */}
        {isSentenceOrderingType && (currentExercise.wordsToOrder || currentExercise.scrambledWords) && (
          <div className="space-y-4">
            <div className="min-h-[58px] p-3 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/50 flex flex-wrap gap-2 items-center">
              {selectedWordOrder.length === 0 ? (
                <span className="text-xs text-slate-400 dark:text-slate-500 italic">
                  Pastdagi so‘zlarni ketma-ket bosing...
                </span>
              ) : (
                selectedWordOrder.map((word, wIdx) => (
                  <button
                    key={wIdx}
                    onClick={() => handleWordClick(word)}
                    disabled={isAnswerChecked}
                    className="px-3 py-1.5 bg-brand-600 text-white rounded-lg text-sm font-semibold shadow-sm hover:bg-brand-700 transition"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {(currentExercise.wordsToOrder || currentExercise.scrambledWords || []).map((word, wIdx) => {
                const isUsed = selectedWordOrder.includes(word);
                return (
                  <button
                    key={wIdx}
                    onClick={() => handleWordClick(word)}
                    disabled={isAnswerChecked || isUsed}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold border transition ${
                      isUsed
                        ? 'opacity-30 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700 cursor-not-allowed'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950/40 shadow-sm'
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. Matching */}
        {currentExercise.type === 'matching' && currentExercise.pairs && (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Nemischa</span>
              {currentExercise.pairs.map((p, idx) => {
                const isSelected = selectedPairLeft === p.left;
                const isMatched = Boolean(matchedPairs[p.left]);

                return (
                  <button
                    key={idx}
                    onClick={() => handlePairClick('left', p.left)}
                    disabled={isAnswerChecked || isMatched}
                    className={`w-full p-3 rounded-xl border text-left text-sm font-semibold transition ${
                      isMatched
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700'
                        : isSelected
                        ? 'bg-brand-50 dark:bg-brand-950/40 text-brand-800 dark:text-brand-300 border-brand-500 ring-2 ring-brand-500/20'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-600 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {p.left}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">O‘zbekcha</span>
              {currentExercise.pairs.map((p, idx) => {
                const isMatched = Object.values(matchedPairs).includes(p.right);

                return (
                  <button
                    key={idx}
                    onClick={() => handlePairClick('right', p.right)}
                    disabled={isAnswerChecked || isMatched}
                    className={`w-full p-3 rounded-xl border text-left text-sm font-semibold transition ${
                      isMatched
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-600 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {p.right}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Educational Error Feedback (Section 23) */}
        {isAnswerChecked && (
          <div className={`mt-6 p-4 rounded-2xl border animate-in fade-in duration-200 ${
            isCurrentCorrect()
              ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
              : 'bg-red-50/90 dark:bg-red-950/40 border-red-200 dark:border-red-800 text-red-950 dark:text-red-200'
          }`}>
            <div className="flex items-center space-x-2 font-bold mb-1">
              {isCurrentCorrect() ? (
                <>
                  <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>Ajoyib! To‘g‘ri javob!</span>
                </>
              ) : (
                <>
                  <XCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span>
                    Xato javob! To‘g‘ri javob: <span className="underline decoration-emerald-500 decoration-2 font-black">"{String(currentExercise.correctAnswer)}"</span>
                  </span>
                </>
              )}
            </div>

            {/* Pedagogical Explanation in Uzbek */}
            {(currentExercise.mistakeTipUz || currentExercise.explanationUz) && (
              <div className="mt-2 text-xs sm:text-sm bg-white/80 dark:bg-slate-800/90 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700 leading-relaxed text-slate-800 dark:text-slate-200 flex items-start space-x-2">
                <Lightbulb size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-slate-100">Pedagogik tushuntirish: </span>
                  {currentExercise.mistakeTipUz || currentExercise.explanationUz}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={restartQuiz}
          className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center"
        >
          <RefreshCw size={14} className="mr-1" />
          Boshidan boshlash
        </button>

        {!isAnswerChecked ? (
          <button
            onClick={checkAnswer}
            disabled={
              ((currentExercise.type === 'multiple_choice' || currentExercise.type === 'article_selection') && !userAnswers[currentIndex]) ||
              ((currentExercise.type === 'fill_in_the_blank' || currentExercise.type === 'translation') && !textInput.trim()) ||
              (currentExercise.type === 'sentence_ordering' && selectedWordOrder.length === 0) ||
              (currentExercise.type === 'matching' && Object.keys(matchedPairs).length < (currentExercise.pairs?.length || 1))
            }
            className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Tekshirish
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-sm transition shadow-sm inline-flex items-center"
          >
            <span>{currentIndex + 1 < exercises.length ? 'Keyingisi' : 'Natijani ko‘rish'}</span>
            <ArrowRight size={16} className="ml-1.5" />
          </button>
        )}
      </div>
    </div>
  );
};
