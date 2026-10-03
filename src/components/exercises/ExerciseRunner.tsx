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
      <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
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
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-card text-center max-w-xl mx-auto my-6 animate-in fade-in">
        <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-5 ${
          passed ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
        }`}>
          <Award size={44} />
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {passed ? 'Tabriklaymiz! Mashqlar muvaffaqiyatli yakunlandi!' : 'Yaxshi harakat! Qoidalarni yana bir bor ko‘rib chiqing.'}
        </h3>
        
        <p className="text-slate-600 mb-6 text-sm">
          Siz {exercises.length} ta savoldan {score} tasiga to‘g‘ri javob berdingiz.
        </p>

        <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
          <div className="text-left mr-6">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Umumiy ball</div>
            <div className="text-3xl font-extrabold text-brand-600">{finalScorePercent}%</div>
          </div>
          <div className="h-10 w-px bg-slate-200 mr-6"></div>
          <div className="text-left">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Baholash</div>
            <div className={`text-sm font-bold ${passed ? 'text-emerald-600' : 'text-amber-600'}`}>
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

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden max-w-2xl mx-auto my-4">
      {/* Top Header */}
      <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div>
          <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">
            {currentIndex + 1} / {exercises.length}-mashq
          </span>
          <h4 className="text-sm font-bold text-slate-800 mt-0.5">
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
        <div className="text-xs font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
          To‘g‘ri: {score}
        </div>
      </div>

      {/* Exercise Body */}
      <div className="p-6">
        <div className="mb-6">
          <p className="text-base font-semibold text-slate-900 mb-1">
            {currentExercise.promptUz || currentExercise.questionUz}
          </p>
          {currentExercise.promptDe && (
            <div className="flex items-center space-x-2 mt-2 p-3 bg-brand-50/60 rounded-xl border border-brand-100">
              <AudioButton text={currentExercise.promptDe} size="sm" />
              <span className="text-brand-900 font-medium font-serif italic text-base">
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
              let itemClasses = 'border-slate-200 hover:border-brand-300 hover:bg-slate-50';

              if (isSelected) {
                itemClasses = 'border-brand-500 bg-brand-50/80 ring-2 ring-brand-500/20';
              }
              if (isAnswerChecked) {
                if (option === currentExercise.correctAnswer) {
                  itemClasses = 'border-emerald-500 bg-emerald-50/80 text-emerald-900 ring-2 ring-emerald-500/20';
                } else if (isSelected) {
                  itemClasses = 'border-red-500 bg-red-50 text-red-900 ring-2 ring-red-500/20';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option)}
                  disabled={isAnswerChecked}
                  className={`w-full p-4 rounded-xl border text-left font-medium text-slate-800 flex items-center justify-between transition ${itemClasses}`}
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-xs text-slate-500 bg-white">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </span>
                  {isAnswerChecked && option === currentExercise.correctAnswer && (
                    <CheckCircle2 size={20} className="text-emerald-600" />
                  )}
                  {isAnswerChecked && isSelected && option !== currentExercise.correctAnswer && (
                    <XCircle size={20} className="text-red-500" />
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
              <p className="text-sm font-semibold text-slate-800 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
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
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-medium focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
            />
          </div>
        )}

        {/* 3. Sentence Ordering / Word Order */}
        {isSentenceOrderingType && (currentExercise.wordsToOrder || currentExercise.scrambledWords) && (
          <div className="space-y-4">
            <div className="min-h-[58px] p-3 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/70 flex flex-wrap gap-2 items-center">
              {selectedWordOrder.length === 0 ? (
                <span className="text-xs text-slate-400 italic">
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
                        ? 'opacity-30 bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                        : 'bg-white text-slate-800 border-slate-300 hover:border-brand-500 hover:bg-brand-50 shadow-sm'
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
              <span className="text-xs font-semibold text-slate-500 uppercase">Nemischa</span>
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
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : isSelected
                        ? 'bg-brand-50 text-brand-800 border-brand-500 ring-2 ring-brand-500/20'
                        : 'bg-white border-slate-200 hover:border-brand-300 text-slate-800'
                    }`}
                  >
                    {p.left}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-500 uppercase">O‘zbekcha</span>
              {currentExercise.pairs.map((p, idx) => {
                const isMatched = Object.values(matchedPairs).includes(p.right);

                return (
                  <button
                    key={idx}
                    onClick={() => handlePairClick('right', p.right)}
                    disabled={isAnswerChecked || isMatched}
                    className={`w-full p-3 rounded-xl border text-left text-sm font-semibold transition ${
                      isMatched
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-white border-slate-200 hover:border-brand-300 text-slate-800'
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
              ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
              : 'bg-red-50/90 border-red-200 text-red-950'
          }`}>
            <div className="flex items-center space-x-2 font-bold mb-1">
              {isCurrentCorrect() ? (
                <>
                  <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
                  <span>Ajoyib! To‘g‘ri javob!</span>
                </>
              ) : (
                <>
                  <XCircle size={20} className="text-red-600 flex-shrink-0" />
                  <span>
                    Xato javob! To‘g‘ri javob: <span className="underline decoration-emerald-500 decoration-2 font-black">"{String(currentExercise.correctAnswer)}"</span>
                  </span>
                </>
              )}
            </div>

            {/* Pedagogical Explanation in Uzbek */}
            {(currentExercise.mistakeTipUz || currentExercise.explanationUz) && (
              <div className="mt-2 text-xs sm:text-sm bg-white/70 p-3 rounded-xl border border-slate-200/60 leading-relaxed text-slate-800 flex items-start space-x-2">
                <Lightbulb size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Pedagogik tushuntirish: </span>
                  {currentExercise.mistakeTipUz || currentExercise.explanationUz}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={restartQuiz}
          className="text-xs font-medium text-slate-500 hover:text-slate-700 flex items-center"
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
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold text-sm transition shadow-sm inline-flex items-center"
          >
            <span>{currentIndex + 1 < exercises.length ? 'Keyingisi' : 'Natijani ko‘rish'}</span>
            <ArrowRight size={16} className="ml-1.5" />
          </button>
        )}
      </div>
    </div>
  );
};
