import React, { useState } from 'react';
import { GALLERY_BOOK_PAGES } from '../data/preschoolData';
import {
  ChevronLeft,
  ChevronRight,
  X,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { GalleryItem } from '../types';

/* Helper component to render a single book page content cleanly */
const SinglePageCard: React.FC<{
  page: GalleryItem;
  side: 'left' | 'right';
  onExpand: (item: GalleryItem) => void;
}> = ({ page, side, onExpand }) => {
  return (
    <div
      onClick={() => onExpand(page)}
      className={`bg-gradient-to-tr from-amber-50/20 via-white to-blue-50/20 rounded-[28px] p-4 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between relative h-full group hover:border-blue-300 transition-colors cursor-pointer ${
        side === 'left'
          ? 'shadow-[inset_-12px_0_20px_-10px_rgba(0,0,0,0.05)]'
          : 'shadow-[inset_12px_0_20px_-10px_rgba(0,0,0,0.05)]'
      }`}
    >
      <div>
        {/* Photo Box */}
        <div className="relative aspect-[16/11] rounded-[20px] overflow-hidden shadow-inner mb-4 bg-slate-100">
          <img
            src={page.image}
            alt={page.title}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none select-none"
            referrerPolicy="no-referrer"
          />

          {/* Glassmorphism Overlay Category Tag */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/95 text-blue-700 text-xs font-bold shadow-xs">
            {page.category}
          </div>
        </div>

        {/* Photo Info */}
        <div className="space-y-1.5 px-1">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-600 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{page.ageTag}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
            {page.title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-medium line-clamp-2">
            {page.caption}
          </p>
        </div>
      </div>

      {/* Page Number Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-bold px-1">
        {side === 'left' ? (
          <>
            <span>LITTLE DREAMS ALBUM</span>
            <span>PAGE {page.pageNumber}</span>
          </>
        ) : (
          <>
            <span>PAGE {page.pageNumber}</span>
            <span>MEMORIES 2026</span>
          </>
        )}
      </div>
    </div>
  );
};

/* Interactive Stacked Album Deck for Mobile View */
const MobileAlbumStack: React.FC<{
  items: GalleryItem[];
  onExpand: (item: GalleryItem) => void;
}> = ({ items, onExpand }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [swipingDirection, setSwipingDirection] = useState<'left' | 'right' | null>(null);

  const minSwipeDistance = 40;

  const handleNext = () => {
    if (swipingDirection !== null) return;
    setSwipingDirection('left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setSwipingDirection(null);
      setDragOffset(0);
    }, 220);
  };

  const handlePrev = () => {
    if (swipingDirection !== null) return;
    setSwipingDirection('right');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      setSwipingDirection(null);
      setDragOffset(0);
    }, 220);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart !== null) {
      const currentTouch = e.targetTouches[0].clientX;
      setDragOffset(currentTouch - touchStart);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setDragOffset(0);
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    } else {
      setDragOffset(0);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto py-2 px-1 sm:px-2 select-none">
      {/* Album Stack Container */}
      <div
        className="relative h-[490px] w-full flex items-center justify-center touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {items.map((item, idx) => {
          let position = (idx - currentIndex + items.length) % items.length;

          // Only render top 3 visible stacked cards
          if (position > 2 && position < items.length - 1) return null;

          const isTop = position === 0;
          const isSecond = position === 1;
          const isThird = position === 2;

          let transformStyle = '';
          let zIndex = 10;
          let opacity = 1;

          if (isTop) {
            zIndex = 30;
            const rot = dragOffset * 0.04;
            const transX = dragOffset;
            if (swipingDirection === 'left') {
              transformStyle = 'translateX(-120%) rotate(-12deg)';
              opacity = 0;
            } else if (swipingDirection === 'right') {
              transformStyle = 'translateX(120%) rotate(12deg)';
              opacity = 0;
            } else {
              transformStyle = `translateX(${transX}px) rotate(${rot}deg)`;
            }
          } else if (isSecond) {
            zIndex = 20;
            transformStyle = 'translateY(16px) scale(0.94) rotate(2deg)';
            opacity = 0.92;
          } else if (isThird) {
            zIndex = 10;
            transformStyle = 'translateY(32px) scale(0.88) rotate(-2deg)';
            opacity = 0.75;
          } else {
            zIndex = 5;
            transformStyle = 'translateY(44px) scale(0.82)';
            opacity = 0;
          }

          return (
            <div
              key={item.id}
              className="absolute inset-0 transition-all duration-300 ease-out flex flex-col"
              style={{
                zIndex,
                transform: transformStyle,
                opacity,
              }}
            >
              <div className="bg-white rounded-[32px] p-5 border-2 border-slate-100 shadow-[0_20px_45px_rgba(37,99,235,0.14)] h-full flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="relative aspect-[16/11] rounded-[22px] overflow-hidden bg-slate-100 mb-4 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="w-full h-full object-cover pointer-events-none select-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white text-blue-700 text-xs font-bold shadow-xs">
                      {item.category}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-bold">
                      {idx + 1} / {items.length}
                    </div>
                  </div>

                  <div className="space-y-1.5 px-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{item.ageTag}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-medium line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-center text-[11px] text-slate-400 font-bold px-1">
                  <span>SWIPE CARD ↔</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Swipe Indicators */}
      <div className="mt-6 flex items-center justify-center gap-1.5 px-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200'
            }`}
            aria-label={`Card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const BookGallery: React.FC = () => {
  const [spreadIndex, setSpreadIndex] = useState<number>(0);
  const [targetSpread, setTargetSpread] = useState<number | null>(null);
  const [animating, setAnimating] = useState<'next' | 'prev' | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const totalSpreads = Math.ceil(GALLERY_BOOK_PAGES.length / 2);

  const handleNext = () => {
    if (animating !== null) return;
    const nextSpread = (spreadIndex + 1) % totalSpreads;
    setTargetSpread(nextSpread);
    setAnimating('next');

    // Complete animation smoothly at 650ms
    setTimeout(() => {
      setSpreadIndex(nextSpread);
      setAnimating(null);
      setTargetSpread(null);
    }, 650);
  };

  const handlePrev = () => {
    if (animating !== null) return;
    const prevSpread = (spreadIndex - 1 + totalSpreads) % totalSpreads;
    setTargetSpread(prevSpread);
    setAnimating('prev');

    // Complete animation smoothly at 650ms
    setTimeout(() => {
      setSpreadIndex(prevSpread);
      setAnimating(null);
      setTargetSpread(null);
    }, 650);
  };

  // Static underlying page items
  const activeSpreadLeft = GALLERY_BOOK_PAGES[spreadIndex * 2];
  const activeSpreadRight = GALLERY_BOOK_PAGES[spreadIndex * 2 + 1];

  const targetSpreadLeft = targetSpread !== null ? GALLERY_BOOK_PAGES[targetSpread * 2] : null;
  const targetSpreadRight = targetSpread !== null ? GALLERY_BOOK_PAGES[targetSpread * 2 + 1] : null;

  // Pages rendered on base layer underneath flipping leaf
  const underLeft = animating === 'prev' ? targetSpreadLeft || activeSpreadLeft : activeSpreadLeft;
  const underRight = animating === 'next' ? targetSpreadRight || activeSpreadRight : activeSpreadRight;

  return (
    <section id="gallery" className="scroll-mt-24 sm:scroll-mt-28 relative py-20 lg:py-28 bg-blue-50/40 overflow-hidden">
      
      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Memory Album</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Preschool Gallery Book <br />
            <span className="text-gradient-primary">Physical Photo Album</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Turn the pages of our memory book to experience joyful moments across our campus.
          </p>
        </div>

        {/* MOBILE VIEW: SWIPEABLE ALBUM STACK DECK */}
        <div className="block md:hidden">
          <MobileAlbumStack
            items={GALLERY_BOOK_PAGES}
            onExpand={(item) => setLightboxItem(item)}
          />
        </div>

        {/* DESKTOP VIEW: PHYSICAL 3D OPEN PHOTO ALBUM STAGE */}
        <div className="hidden md:block relative max-w-5xl mx-auto perspective-2000">
          
          {/* Hardcover Album Frame */}
          <div className="relative bg-white/90 backdrop-blur-2xl border border-white/95 rounded-[32px] sm:rounded-[40px] p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(37,99,235,0.12)]">
            
            {/* Book Spine Fold Crease Line in Center */}
            <div className="hidden md:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-7 bg-gradient-to-r from-slate-300/30 via-slate-600/30 to-slate-300/30 z-30 pointer-events-none rounded-full shadow-inner" />

            {/* BASE UNDERNEATH TWO-PAGE SPREAD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative z-10">
              
              {/* Left Base Page (Click to flip Prev) */}
              <div
                onClick={handlePrev}
                className="relative min-h-[420px] sm:min-h-[460px] cursor-pointer"
              >
                {underLeft && (
                  <SinglePageCard
                    page={underLeft}
                    side="left"
                    onExpand={(item) => setLightboxItem(item)}
                  />
                )}
              </div>

              {/* Right Base Page (Click to flip Next) */}
              <div
                onClick={handleNext}
                className="relative min-h-[420px] sm:min-h-[460px] cursor-pointer"
              >
                {underRight && (
                  <SinglePageCard
                    page={underRight}
                    side="right"
                    onExpand={(item) => setLightboxItem(item)}
                  />
                )}
              </div>

            </div>

            {/* 3D FLIPPING PAGE LEAF (NEXT: Right Page Flipping Left) */}
            {animating === 'next' && activeSpreadRight && targetSpreadLeft && (
              <div className="hidden md:block absolute top-4 bottom-4 right-4 left-1/2 z-40 animate-flip-leaf-next pointer-events-none">
                {/* Front Side of Leaf (Current Right Page) */}
                <div className="absolute inset-0 backface-hidden overflow-hidden rounded-[28px]">
                  <SinglePageCard
                    page={activeSpreadRight}
                    side="right"
                    onExpand={() => {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-slate-900/5 pointer-events-none" />
                </div>

                {/* Back Side of Leaf (Incoming Left Page) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden rounded-[28px]">
                  <SinglePageCard
                    page={targetSpreadLeft}
                    side="left"
                    onExpand={() => {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-slate-900/10 via-transparent to-slate-900/5 pointer-events-none" />
                </div>
              </div>
            )}

            {/* 3D FLIPPING PAGE LEAF (PREV: Left Page Flipping Right) */}
            {animating === 'prev' && activeSpreadLeft && targetSpreadRight && (
              <div className="hidden md:block absolute top-4 bottom-4 left-4 right-1/2 z-40 animate-flip-leaf-prev pointer-events-none">
                {/* Front Side of Leaf (Current Left Page) */}
                <div className="absolute inset-0 backface-hidden overflow-hidden rounded-[28px]">
                  <SinglePageCard
                    page={activeSpreadLeft}
                    side="left"
                    onExpand={() => {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-slate-900/10 via-transparent to-slate-900/5 pointer-events-none" />
                </div>

                {/* Back Side of Leaf (Incoming Right Page) */}
                <div className="absolute inset-0 backface-hidden -rotate-y-180 overflow-hidden rounded-[28px]">
                  <SinglePageCard
                    page={targetSpreadRight}
                    side="right"
                    onExpand={() => {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-slate-900/5 pointer-events-none" />
                </div>
              </div>
            )}

            {/* GLASSMORPHISM PREVIOUS (<) BUTTON */}
            <button
              onClick={handlePrev}
              disabled={animating !== null}
              id="gallery-book-prev-btn"
              className="absolute left-2 sm:-left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-xl border border-white/95 text-blue-600 shadow-2xl hover:bg-white hover:scale-110 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
              aria-label="Previous Page Spread"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* GLASSMORPHISM NEXT (>) BUTTON */}
            <button
              onClick={handleNext}
              disabled={animating !== null}
              id="gallery-book-next-btn"
              className="absolute right-2 sm:-right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-xl border border-white/95 text-blue-600 shadow-2xl hover:bg-white hover:scale-110 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
              aria-label="Next Page Spread"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>

          </div>

          {/* Indicator Book Navigation Dots */}
          <div className="mt-10 flex items-center justify-center gap-2.5">
            {Array.from({ length: totalSpreads }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (animating === null && idx !== spreadIndex) {
                    setSpreadIndex(idx);
                  }
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === spreadIndex ? 'w-8 bg-blue-600 shadow-sm' : 'w-2.5 bg-blue-200 hover:bg-blue-300'
                }`}
                aria-label={`Go to book spread ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl glass-card bg-white/95 backdrop-blur-2xl border border-white/95 rounded-[36px] p-6 sm:p-8 shadow-2xl overflow-hidden my-6">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors z-10 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-inner">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                    {lightboxItem.category}
                  </span>
                  <span className="text-xs text-slate-400">• {lightboxItem.ageTag}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">{lightboxItem.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{lightboxItem.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
