import React from 'react';

/**
 * Divider 1: Home -> About (HeroToMissionDivider)
 * Concept: Smooth layered ocean wave transition into Mission & Vision.
 */
export const HeroToMissionDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mt-2 pointer-events-none">
      {/* Soft Blue & Cyan Glow Backdrop Aura */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-r from-blue-600/20 via-sky-400/25 to-cyan-500/20 blur-2xl opacity-80" />

      {/* Layered Ocean Wave SVG */}
      <svg
        className="relative block w-full h-20 sm:h-28 lg:h-36 text-white"
        viewBox="0 0 1440 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="oceanWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="oceanWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Back Ocean Wave Layer */}
        <path
          d="M0,50 C320,130 640,10 960,100 C1200,140 1360,60 1440,80 L1440,160 L0,160 Z"
          fill="url(#oceanWaveGrad1)"
        />

        {/* Middle Ocean Wave Layer */}
        <path
          d="M0,80 C280,20 600,120 920,40 C1200,100 1360,30 1440,70 L1440,160 L0,160 Z"
          fill="url(#oceanWaveGrad2)"
        />

        {/* Foreground Crest Wave Layer */}
        <path
          d="M0,100 C360,30 720,130 1080,50 C1260,80 1380,40 1440,60 L1440,160 L0,160 Z"
          fill="#FFFFFF"
          fillOpacity="0.98"
        />
      </svg>
    </div>
  );
};

/**
 * Divider 2: About -> Programs (MissionToProgramsDivider)
 * Concept: Clean flowing wave SVG ribbon transition into Programs.
 */
export const MissionToProgramsDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mb-1 bg-gradient-to-b from-blue-50/20 via-sky-50/30 to-blue-50/20">
      {/* Outer Blue Glow Layer */}
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-r from-blue-600/15 via-sky-400/20 to-cyan-500/15 blur-xl pointer-events-none" />

      {/* Layered Flowing Wave SVG Ribbon */}
      <svg
        className="relative block w-full h-20 sm:h-28 lg:h-32"
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="aboutToProgGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Translucent Background Wave */}
        <path
          d="M0,35 C360,115 720,-5 1080,85 C1260,120 1380,60 1440,45 L1440,140 L0,140 Z"
          fill="url(#aboutToProgGrad1)"
        />

        {/* Smooth Solid Wave Transition Fill into Programs */}
        <path
          d="M0,60 C360,130 720,20 1080,100 C1260,130 1380,70 1440,55 L1440,140 L0,140 Z"
          fill="#F0F9FF"
          fillOpacity="0.8"
        />
      </svg>
    </div>
  );
};

/**
 * Divider 3: Programs -> Daily Routine (ProgramsToTimelineDivider)
 * Concept: Sleek wave ribbon transition into Why Choose Us.
 */
export const ProgramsToTimelineDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mb-1 bg-blue-50/20">
      {/* Ribbon-Style Wave SVG */}
      <svg
        className="relative block w-full h-16 sm:h-24 lg:h-28"
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ribbonMainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Back Ribbon Layer */}
        <path
          d="M0 30 C 360 110 720 -10 1080 90 C 1200 120 1360 40 1440 20 L 1440 90 C 1200 140 960 70 720 120 C 480 160 240 80 0 80 Z"
          fill="url(#ribbonMainGrad)"
        />

        {/* Smooth Transition Fill into Next Section */}
        <path
          d="M0,90 C360,150 720,70 1080,120 L1440,80 L1440,140 L0,140 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};

/**
 * Divider 4: Daily Routine -> Why Choose Us (TimelineToWhyChooseUsDivider)
 * Concept: Fluffy cloud curve separator with clean gradient glow.
 */
export const TimelineToWhyChooseUsDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mt-1 -mb-1 bg-gradient-to-r from-blue-50/50 via-white to-sky-50/50">
      {/* Fluffy Cloud SVG Curve Path */}
      <svg
        className="relative block w-full h-16 sm:h-24 lg:h-28 text-sky-100/80"
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,90 Q 60,30 120,90 Q 180,20 240,90 Q 300,40 360,90 Q 420,10 480,90 Q 540,30 600,90 Q 660,15 720,90 Q 780,35 840,90 Q 900,10 960,90 Q 1020,30 1080,90 Q 1140,20 1200,90 Q 1260,40 1320,90 Q 1380,15 1440,90 L 1440,140 L 0,140 Z"
          fill="#E0F2FE"
          fillOpacity="0.75"
        />
        <path
          d="M0,105 Q 60,50 120,105 Q 180,40 240,105 Q 300,60 360,105 Q 420,30 480,105 Q 540,50 600,105 Q 660,35 720,105 Q 780,55 840,105 Q 900,30 960,105 Q 1020,50 1080,105 Q 1140,40 1200,105 Q 1260,60 1320,105 Q 1380,35 1440,105 L 1440,140 L 0,140 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};

/**
 * Divider 5: Why Choose Us -> Gallery (WhyChooseUsToGalleryDivider)
 * Concept: Smooth fluid wave transition.
 */
export const WhyChooseUsToGalleryDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mt-1 -mb-1">
      {/* Abstract Paint Splash SVG */}
      <svg
        className="relative block w-full h-16 sm:h-24 lg:h-28"
        viewBox="0 0 1440 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="splashGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        {/* Abstract Smooth Fluid Splash Path */}
        <path
          d="M0 40 C 220 130 380 -20 580 90 C 780 160 950 10 1140 90 C 1280 140 1380 30 1440 60 L 1440 150 L 0 150 Z"
          fill="url(#splashGrad)"
        />

        {/* Foreground White Wave Transition */}
        <path
          d="M0 80 C 260 140 520 30 780 110 C 1040 160 1280 60 1440 90 L 1440 150 L 0 150 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};

/**
 * Divider 6: Gallery -> Reviews (GalleryToReviewsDivider)
 * Concept: Ultra-clean soft wave transition into Parent Reviews.
 */
export const GalleryToReviewsDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mt-1 -mb-1 bg-white">
      <svg
        className="relative block w-full h-16 sm:h-24 lg:h-28"
        viewBox="0 0 1440 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="galleryToReviewsGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="galleryToReviewsGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Back Wave Layer */}
        <path
          d="M0,30 C320,100 640,0 960,70 C1280,120 1380,20 1440,50 L1440,130 L0,130 Z"
          fill="url(#galleryToReviewsGrad1)"
        />

        {/* Middle Wave Layer */}
        <path
          d="M0,55 C360,115 720,25 1080,85 C1260,115 1380,45 1440,65 L1440,130 L0,130 Z"
          fill="url(#galleryToReviewsGrad2)"
        />
      </svg>
    </div>
  );
};

/**
 * Divider 7: Reviews -> Contact (ReviewsToContactDivider)
 * Concept: Clean wave path leading smoothly into Contact section.
 */
export const ReviewsToContactDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mb-1 bg-gradient-to-b from-blue-50/30 to-blue-50/40">
      {/* Magical Flowing Path SVG */}
      <svg
        className="relative block w-full h-16 sm:h-24 lg:h-28"
        viewBox="0 0 1440 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="reviewsToContactGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Smooth Translucent Wave Background */}
        <path
          d="M0,30 C360,110 720,-10 1080,80 C1260,115 1380,55 1440,40 L1440,130 L0,130 Z"
          fill="url(#reviewsToContactGrad)"
        />
      </svg>
    </div>
  );
};

/**
 * Divider 8: Contact -> Footer (ContactToFooterDivider)
 * Concept: Smooth wave transition into dark navy footer (#0A1128).
 */
export const ContactToFooterDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mb-1 bg-[#F8FCFF]">
      {/* Layered Wave Transition into Dark Navy #0A1128 */}
      <svg
        className="relative block w-full h-16 sm:h-24 lg:h-32 text-[#0A1128]"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="footerWaveSoft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Soft Background Wave Layer */}
        <path
          d="M0,40 C320,100 640,0 960,70 C1280,120 1380,20 1440,50 L1440,120 L0,120 Z"
          fill="url(#footerWaveSoft)"
        />

        {/* Deep Navy Foreground Footer Wave */}
        <path
          d="M0,65 C360,125 720,25 1080,85 C1260,115 1380,45 1440,65 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
