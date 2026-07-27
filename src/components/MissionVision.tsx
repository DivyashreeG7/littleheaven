import React from 'react';
import { Card } from './ui/Card';

export const MissionVision: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 sm:scroll-mt-28 relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      
      {/* Soft Background Aura Glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-extrabold tracking-widest uppercase">
            <span>About Little's Heaven</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Where Early Wonder Meets <br />
            <span className="text-gradient-primary">Nurturing Foundation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Founded to create an inspiring early childhood sanctuary where every child gains emotional warmth, intellectual curiosity, and creative confidence.
          </p>
        </div>

        {/* 1. Founder & Leadership Section FIRST (Unboxed) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center py-2">
          {/* Founder Image */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-lg border border-slate-100/80">
                <img
                  src="/founder.png"
                  alt="Founder & Director - Little's Heaven Early Childhood Sanctuary"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                />
              </div>
            </div>
          </div>

          {/* Founder Message & Details */}
          <div className="md:col-span-7 space-y-5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-widest">
              <span>Founder's Vision</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Building a Haven of Joy & Discovery
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal italic">
              "At Little's Heaven, our vision is built on providing a warm, secure environment where young minds are nurtured with love, curiosity, and guidance. We believe every child possesses unique potential, and our mission is to illuminate that spark through gentle care and play-based learning."
            </p>
            <div className="pt-2 border-t border-slate-100/80">
              <div className="text-xl font-extrabold text-slate-900">Dr. Ananya Sharma</div>
              <div className="text-xs font-extrabold text-blue-600 uppercase tracking-widest mt-0.5">Founder & Educational Director</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">M.Ed. Early Childhood Development • 15+ Years in Early Education</div>
            </div>
          </div>
        </div>

        {/* 2. Mission & Vision Cards SECOND */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Mission Card */}
          <Card className="p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden border border-slate-100 hover:border-blue-300 transition-all duration-300">
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-blue-50 text-blue-700 tracking-wider uppercase border border-blue-100">
                  OUR PHILOSOPHY
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors pt-1">
                Our Mission
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                To provide a safe, joyful, and stimulating sanctuary where toddlers explore curiosity, build foundational social skills, and unlock their potential through play-based discovery.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-blue-600">
              Nurturing Curiosity & Play-Based Learning
            </div>
          </Card>

          {/* Vision Card */}
          <Card className="p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden border border-slate-100 hover:border-sky-300 transition-all duration-300">
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-sky-50 text-sky-700 tracking-wider uppercase border border-sky-100">
                  OUR HORIZON
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors pt-1">
                Our Vision
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                To set the benchmark in early childhood care by inspiring happy, resilient, and creative lifelong learners empowered to thrive in tomorrow’s world.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-sky-600">
              Empowering Lifelong Creative Minds
            </div>
          </Card>

        </div>

      </div>
    </section>
  );
};
