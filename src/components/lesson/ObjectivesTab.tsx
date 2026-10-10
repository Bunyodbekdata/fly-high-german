import React from 'react';
import { Target, CheckCircle2, ArrowRight } from 'lucide-react';

interface ObjectivesTabProps {
  objectives: string[];
  descriptionUz?: string;
  onNext: () => void;
}

export const ObjectivesTab: React.FC<ObjectivesTabProps> = ({
  objectives,
  descriptionUz,
  onNext,
}) => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-card">
        <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-6">
          <Target size={28} />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Darsning asosiy maqsadi
        </h2>

        {descriptionUz && (
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            {descriptionUz}
          </p>
        )}

        <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/70 mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
            Bu darsdan keyin siz nimalarni o‘rganasiz:
          </h3>
          <ul className="space-y-4">
            {objectives.map((obj) => (
              <li key={obj} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-800 font-medium text-sm sm:text-base leading-snug">
                  {obj}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition shadow-sm"
          >
            <span>Dars lug‘atiga o‘tish</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
