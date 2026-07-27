import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HERO_STATS } from '../data/preschoolData';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';

interface HeroSectionProps {
  onOpenEnroll: () => void;
  onExplorePrograms: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnroll, onExplorePrograms }) => {
  const { scrollY } = useScroll();

  // Smooth scroll parallax for the 2 hero image columns
  const col1Y = useTransform(scrollY, [0, 800], [0, -70]);
  const col2Y = useTransform(scrollY, [0, 800], [0, 70]);

  return (
    <section
      id="home"
      className="scroll-mt-24 sm:scroll-mt-28 relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center bg-gradient-to-b from-sky-50/70 via-blue-50/30 to-white"
    >
      {/* Soft Ambient Glowing Aura */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-sky-200/50 rounded-full blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-100/60 rounded-full blur-2xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hallmark Asymmetric Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Live Status Pill */}
            <Badge variant="primary" className="bg-white/90 border-white backdrop-blur-xl shadow-xs">
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 mr-1" />
              <span>Admissions Open 2026-27</span>
              <Sparkles className="w-3.5 h-3.5 text-sky-500 ml-1" />
            </Badge>

            {/* Display Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Where Little <br className="hidden sm:inline" />
              <span className="text-gradient-primary">Dreams Begin</span>
            </h1>

            {/* Authentic Body Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Empowering young learners through innovative early childhood education, meaningful play, and compassionate care in a safe and stimulating environment designed for lifelong success
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenEnroll}
                id="hero-enroll-now-btn"
                className="btn-shine-sweep shadow-lg shadow-blue-500/25"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={onExplorePrograms}
                id="hero-explore-programs-btn"
                className="bg-white/80 hover:bg-white text-slate-800 border-slate-200 shadow-sm"
              >
                Explore Programs
              </Button>
            </div>

            {/* Core Stats Bar */}
            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0">
              {HERO_STATS.map((stat, idx) => (
                <Card
                  key={idx}
                  className="p-3 sm:p-4 text-center bg-white/70 backdrop-blur-md border-white/80 shadow-xs"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight flex items-center justify-center">
                    <span>{stat.number}</span>
                    <span className="text-sky-500">{stat.suffix}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{stat.sublabel}</div>
                </Card>
              ))}
            </div>

          </div>

          {/* Right Showcase Column (Staggered 2-Column Grid with Parallax) */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0 py-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md lg:max-w-none items-center">
              
              {/* Column 1: Shifted Slightly Upwards & Glides Up on Scroll */}
              <motion.div
                style={{ y: col1Y }}
                className="flex flex-col gap-3 sm:gap-4 -translate-y-4 sm:-translate-y-6"
              >
                <div className="relative animate-float-slow rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                  <img
                    src="/baby1.avif"
                    alt="Little's Heaven Happy Toddler"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="relative animate-float-slow rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop"
                    alt="Toddler girl playing"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Column 2: Shifted Slightly Downwards & Glides Down on Scroll */}
              <motion.div
                style={{ y: col2Y }}
                className="flex flex-col gap-3 sm:gap-4 translate-y-4 sm:translate-y-6"
              >
                <div className="relative animate-float-reverse rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                  <img
                    src="/baby2.avif"
                    alt="Little's Heaven Preschooler"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="relative animate-float-reverse rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                  <img
                    src="/baby4.avif"
                    alt="Little's Heaven Early Learner"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
