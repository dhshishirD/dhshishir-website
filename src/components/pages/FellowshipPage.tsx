import React from 'react';
import { IrFellowshipHub } from '../irAcademy/IrFellowshipHub';
import { ArrowLeft, GraduationCap } from 'lucide-react';

interface FellowshipPageProps {
  onNavigateHome: () => void;
}

export const FellowshipPage: React.FC<FellowshipPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-xl transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-teal-800 font-mono">
            <GraduationCap className="w-4 h-4" />
            <span>OMF-IRSS • Open Academic Fellowship</span>
          </div>
        </div>
      </div>

      <IrFellowshipHub />
    </div>
  );
};
