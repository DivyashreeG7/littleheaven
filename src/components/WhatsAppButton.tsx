import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/917306426871?text=Hello%21%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Little%27s%20Heaven%20Child%20Care%20%26%20Early%20Learning.';

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center group pointer-events-auto select-none">
      
      {/* Desktop Tooltip */}
      <div className="hidden md:flex items-center gap-2 mr-3 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-[0_8px_20px_rgba(37,211,102,0.2)] opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
        <span className="text-sm font-bold text-slate-800">
          Chat with us
        </span>
        {/* Tooltip Pointing Arrow */}
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white/95 border-t border-r border-emerald-200/80 rotate-45" />
      </div>

      {/* WhatsApp Action Button Container */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 ease-out cursor-pointer"
      >
        {/* Ambient Hover Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Inner Solid Surface */}
        <div className="relative w-full h-full rounded-full bg-[#25D366] flex items-center justify-center overflow-hidden">
          {/* Official WhatsApp Speech Bubble Vector Icon */}
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-current transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.76.459 3.474 1.33 4.984l-1.413 5.163 5.284-1.386c1.455.793 3.097 1.222 4.788 1.223h.004c5.504 0 9.986-4.478 9.986-9.984s-4.482-9.984-9.99-9.984zm5.827 14.444c-.247.694-1.434 1.328-2.005 1.413-.512.076-1.16.108-1.872-.118-.431-.137-.985-.32-1.694-.626-2.981-1.287-4.927-4.289-5.076-4.487-.148-.198-1.213-1.611-1.213-3.074 0-1.463.768-2.181 1.04-2.479.272-.298.594-.372.792-.372.198 0 .396.002.57.01.182.009.427-.069.669.51.247.595.841 2.058.916 2.206.075.149.124.323.025.521-.099.199-.149.323-.3.495-.148.174-.312.388-.446.521-.148.148-.303.309-.13.606.173.298.77 1.271 1.653 2.059 1.135 1.012 2.093 1.325 2.39 1.475.297.148.471.124.644-.075.173-.198.743-.867.94-1.164.199-.297.397-.248.67-.15.272.1.1.733.967 2.03.272.099.471.148.67.15.198 0 .446-.074.57-.347z" />
          </svg>
        </div>
      </a>
    </div>
  );
};


