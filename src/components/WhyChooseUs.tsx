import React from 'react';
import { WHY_FEATURES } from '../data/preschoolData';
import {
  Award,
  ShieldCheck,
  Video,
  Sparkles,
  Monitor,
  Gamepad2,
  Sun,
  MessageCircle,
  UserCheck,
  Sparkle,
  Smartphone,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return Smartphone;
      case 'Award':
        return Award;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Video':
        return Video;
      case 'Sparkles':
        return Sparkles;
      case 'Monitor':
        return Monitor;
      case 'Gamepad2':
        return Gamepad2;
      case 'Sun':
        return Sun;
      case 'MessageCircle':
        return MessageCircle;
      case 'UserCheck':
        return UserCheck;
      case 'Sparkle':
        return Sparkle;
      default:
        return Sparkles;
    }
  };

  // Duplicate the list 3 times for a seamless infinite marquee loop
  const marqueeFeatures = [...WHY_FEATURES, ...WHY_FEATURES, ...WHY_FEATURES];

  return (
    <section id="why-us" className="scroll-mt-24 sm:scroll-mt-28 relative py-20 lg:py-28 bg-white overflow-hidden">
      
      {/* Background ambient glowing blurred circles */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-extrabold tracking-widest uppercase shadow-xs">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>The Little's Heaven Standard</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-luxury text-slate-900 tracking-tight leading-tight">
            Why Parents Choose Us <br />
            <span className="text-gradient-primary">Every Single Day</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            A continuous stream of safety, academic excellence, and emotional warmth across our world-class facilities.
          </p>
        </div>

      </div>

      {/* CONTINUOUS MOVING TALL MARQUEE CARDS */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Gradient Fades on Left & Right Edges */}
        <div className="hidden sm:block absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-[#F8FCFF] via-[#F8FCFF]/80 to-transparent z-10 pointer-events-none" />
        <div className="hidden sm:block absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-[#F8FCFF] via-[#F8FCFF]/80 to-transparent z-10 pointer-events-none" />

        {/* Animated Marquee Track */}
        <div className="flex items-center gap-6 animate-marquee-left whitespace-nowrap py-3 w-max select-none md:hover:[animation-play-state:paused]">
          {marqueeFeatures.map((feat, index) => {
            const IconComp = getFeatureIcon(feat.icon);
            return (
              <div
                key={`${feat.id}-${index}`}
                id={`why-card-${feat.id}-${index}`}
                className="w-[290px] sm:w-[340px] md:w-[360px] min-h-[220px] sm:min-h-[240px] p-6 sm:p-7 rounded-[28px] sm:rounded-[32px] glass-card glass-card-hover bg-white/90 border border-white/95 shadow-[0_10px_30px_rgba(37,99,235,0.06)] hover:border-blue-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)] shrink-0 whitespace-normal flex flex-col justify-between transition-all duration-300 group"
              >
                <div className="space-y-3">
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50/90 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <IconComp className="w-5 h-5 transition-colors duration-300" />
                    </div>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[10px] font-extrabold uppercase tracking-wider text-blue-700">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>

                  {/* Rich Description Content */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Highlight Row */}
                <div className="pt-3 mt-3 border-t border-slate-100/90 flex items-center gap-2 text-xs font-semibold text-sky-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">{feat.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
