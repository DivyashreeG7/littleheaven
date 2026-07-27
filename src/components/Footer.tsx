import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import logoImg from '../assets/logo-littles.png';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0A1128] text-white py-10 sm:py-12 overflow-hidden border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-3.5">
            <img
              src={logoImg}
              alt="Little's Heaven Preschool & Day Care Logo"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-10 sm:h-11 w-auto object-contain bg-white/10 p-1.5 rounded-xl backdrop-blur-md border border-white/10 pointer-events-none select-none"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Little's Heaven
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Child Care & Early Learning Sanctuary • Hebbal, Bengaluru
              </p>
            </div>
          </div>
        </div>

        {/* Compact 3-Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8">
          
          {/* Campus Location */}
          <div className="space-y-2">
            <h3 className="text-[11px] font-extrabold text-sky-400 uppercase tracking-widest">
              Campus Location
            </h3>
            <div className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>1st floor Federal Bank, Dasarahalli Main Rd, Bhuvaneswari Nagar, Hebbal, Bengaluru, Karnataka 560024</span>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="space-y-2">
            <h3 className="text-[11px] font-extrabold text-sky-400 uppercase tracking-widest">
              Direct Contact
            </h3>
            <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+917736181828" className="hover:text-white transition-colors">+91 77361 81828</a>
                  <a href="tel:+917306426871" className="hover:text-white transition-colors">+91 73064 26871</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:contact@littlesheaven.edu.in" className="hover:text-white transition-colors">contact@littlesheaven.edu.in</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-2">
            <h3 className="text-[11px] font-extrabold text-sky-400 uppercase tracking-widest">
              Operating Hours
            </h3>
            <div className="space-y-1 text-slate-300 text-xs sm:text-sm">
              <p><strong className="text-white font-semibold">Mon - Fri:</strong> 7:00 AM - 8:00 PM</p>
              <p><strong className="text-white font-semibold">Saturday:</strong> Opens at 10:00 AM</p>
              <p><strong className="text-white font-semibold">Sunday:</strong> Closed</p>
            </div>
          </div>

        </div>

        {/* Compact Copyright Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-3">
          <p>© {new Date().getFullYear()} Little's Heaven. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#home" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
