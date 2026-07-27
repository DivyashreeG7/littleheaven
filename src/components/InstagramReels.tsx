import React, { useRef } from 'react';
import { INSTAGRAM_REELS } from '../data/preschoolData';
import { Instagram, ExternalLink } from 'lucide-react';

export const InstagramReels: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-14 sm:py-20 bg-blue-50/40 text-slate-900 overflow-hidden" id="instagram-gallery">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full relative z-10">
        {/* 1. Header Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mb-8 sm:mb-12">
          {/* Section label matching theme */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-md mb-3 shadow-xs">
            <Instagram className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold tracking-wide text-blue-700 uppercase">
              @littlesheaven.official
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-luxury tracking-tight text-slate-900 mb-2.5">
            As Seen On Instagram
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-xl font-medium leading-relaxed">
            Tag <span className="text-blue-600 font-semibold">#LittlesHeaven</span> to be featured on our official global gallery.
          </p>
        </div>

        {/* 2. Full Width Horizontal Reel Carousel */}
        <div className="w-full">
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3 px-4 sm:px-6 lg:px-8 w-full"
          >
            {INSTAGRAM_REELS.map((reel) => {
              return (
                <a
                  key={reel.id}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap-center shrink-0 w-[160px] sm:w-[190px] md:w-[210px] aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden relative group cursor-pointer border border-slate-200/80 bg-slate-900 shadow-md hover:shadow-xl hover:border-blue-400 hover:shadow-blue-500/15 transition-all duration-500"
                >
                  {/* Reel Image */}
                  <img
                    src={reel.image}
                    alt={reel.caption}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none select-none"
                  />

                  {/* Floating Instagram Badge in top-right corner */}
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-md flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 z-10">
                    <Instagram className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* Bottom gradient overlay with text and hashtag */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Caption text */}
                    <p className="text-[11px] sm:text-xs font-medium leading-tight line-clamp-2 text-slate-100 mb-1.5 drop-shadow-xs">
                      {reel.caption}
                    </p>

                    {/* Hashtag */}
                    <div className="pt-1 border-t border-white/20 text-[10px] font-bold text-sky-400 tracking-tight">
                      {reel.tag}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Theme-Matching Primary Button CTA Banner */}
        <div className="mt-8 sm:mt-10 text-center flex items-center justify-center">
          <a
            href="https://www.instagram.com/littlesheaven.official"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hallmark btn-shine-sweep px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all duration-300 flex items-center gap-2"
          >
            <Instagram className="w-4 h-4 text-white" />
            <span>Follow Us @littlesheaven.official</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/90 ml-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
