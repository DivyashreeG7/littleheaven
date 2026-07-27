import React from 'react';
import { Program } from '../types';
import { X, CheckCircle2, ArrowRight, Sparkles, Users } from 'lucide-react';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onEnroll: (programTitle: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose, onEnroll }) => {
  if (!program) return null;

  // Combine keySkills and features or fallbacks to ensure 4-6 bullet points
  const defaultHighlights = [
    'Play-based learning',
    'Creative activities',
    'Social development',
    'Early literacy & phonics',
    'Fun & safe learning environment',
    'Emotional & cognitive growth'
  ];

  const highlights = program.keySkills && program.keySkills.length > 0
    ? [...program.keySkills, ...(program.features || [])].slice(0, 6)
    : defaultHighlights;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      {/* Modal Card Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl glass-card bg-white/95 backdrop-blur-2xl border-2 border-white/95 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 shadow-[0_25px_70px_rgba(37,99,235,0.22)] overflow-hidden my-auto animate-in zoom-in-95 duration-200"
      >
        {/* Top Right (×) Close Button */}
        <button
          onClick={onClose}
          id="program-modal-close-x"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors z-20 cursor-pointer shadow-xs hover:rotate-90 duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* LEFT SIDE: Large Program Image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] rounded-[24px] overflow-hidden shadow-lg border border-white/80 bg-slate-100">
            <img
              src={program.image}
              alt={program.title}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="w-full h-full object-cover pointer-events-none select-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Optional Ratio or Category Tag */}
            {program.ratio && (
              <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white text-blue-900 text-xs font-bold shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{program.ratio}</span>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: Details & Highlights */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              {/* Program Name */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2">
                {program.title}
              </h3>

              {/* Recommended Age Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs sm:text-sm font-bold shadow-2xs mb-3">
                <Users className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Recommended Age: <strong className="text-blue-700 font-extrabold">{program.ageGroup}</strong></span>
              </div>

              {/* Short Description (3-5 lines) */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                {program.longDescription || program.description}
              </p>

              {/* 4-6 Key Learning Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Key Learning Highlights</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-sky-50/70 border border-sky-100/80 px-3 py-2 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="truncate">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM OF MODAL: Two Buttons Side by Side (Enquiry & Close) */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-end gap-3 sm:gap-4">
          <button
            onClick={onClose}
            id="program-modal-btn-close"
            className="flex-1 sm:flex-initial px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer text-center"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onEnroll(program.title);
            }}
            id="program-modal-btn-enquiry"
            className="btn-shine-sweep flex-1 sm:flex-initial px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 shadow-md shadow-blue-600/20 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <span>Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};



