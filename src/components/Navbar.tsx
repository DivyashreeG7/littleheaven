import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import logoImg from '../assets/logo-littles.png';

interface NavbarProps {
  onOpenEnroll: () => void;
  onOpenTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnroll, onOpenTour }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const prevScrollPos = useRef(0);
  const activeSectionRef = useRef('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolled = currentScrollPos > 20;
      setScrolled(isScrolled);

      const isScrollingUp = prevScrollPos.current > currentScrollPos;
      const isNearTop = currentScrollPos < 80;
      setVisible(isScrollingUp || isNearTop || mobileMenuOpen);
      prevScrollPos.current = currentScrollPos;

      const sectionMapping: { id: string; targetNav: string }[] = [
        { id: 'home', targetNav: 'home' },
        { id: 'about', targetNav: 'about' },
        { id: 'programs', targetNav: 'programs' },
        { id: 'gallery', targetNav: 'gallery' },
        { id: 'reviews', targetNav: 'reviews' },
        { id: 'contact', targetNav: 'contact' },
      ];

      let currentActive = 'home';
      const isAtBottom =
        window.innerHeight + currentScrollPos >= document.body.offsetHeight - 80;

      if (isAtBottom) {
        currentActive = 'contact';
      } else if (currentScrollPos >= 90) {
        const scrollPos = currentScrollPos + 200;
        for (const item of sectionMapping) {
          const el = document.getElementById(item.id);
          if (el) {
            const top = el.getBoundingClientRect().top + window.pageYOffset;
            if (scrollPos >= top) {
              currentActive = item.targetNav;
            }
          }
        }
      }

      if (currentActive !== activeSectionRef.current) {
        activeSectionRef.current = currentActive;
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    setMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <motion.nav
        className={`mx-auto max-w-7xl rounded-3xl transition-all duration-300 border overflow-hidden ${
          scrolled || mobileMenuOpen
            ? 'bg-white/92 backdrop-blur-2xl border-white/95 shadow-[0_12px_40px_rgba(37,99,235,0.12),inset_0_1px_1px_rgba(255,255,255,1)] py-3 px-6 sm:px-8'
            : 'bg-white/75 backdrop-blur-xl border-white/85 shadow-[0_8px_32px_rgba(37,99,235,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] py-3.5 px-6 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group cursor-pointer select-none"
            id="nav-logo-link"
          >
            <img
              src={logoImg}
              alt="Little's Heaven Preschool & Day Care Logo"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xs pointer-events-none select-none"
            />
            <div>
              <span className="text-base sm:text-lg font-extrabold font-sans tracking-tight text-slate-900 block leading-none">
                Little's Heaven
              </span>
            </div>
          </a>

          {/* Clean Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.id}`}
                  className={`text-xs xl:text-sm font-extrabold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button onClick={onOpenEnroll} id="nav-contact-btn" size="sm" variant="primary">
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-900 hover:text-slate-900 transition-colors cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
            id="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>

        {/* Mobile Menu Content integrated smoothly into the single expanding card */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 mt-3 border-t border-slate-100/80 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-2.5 rounded-xl text-base transition-colors ${
                        isActive
                          ? 'text-blue-600 font-extrabold bg-blue-50/60'
                          : 'text-slate-700 font-semibold hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
                <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5 mt-2 pb-1">
                  <Button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenEnroll();
                    }}
                    className="w-full justify-center"
                    size="md"
                    variant="primary"
                  >
                    <span>Contact Us</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
