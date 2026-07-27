import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MissionVision } from './components/MissionVision';
import { ProgramsSection } from './components/ProgramsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookGallery } from './components/BookGallery';
import { ParentReviews } from './components/ParentReviews';
import { InstagramReels } from './components/InstagramReels';
import { EnquirySection } from './components/EnquirySection';
import { CampusTourModal } from './components/CampusTourModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { AnimatedSection } from './components/AnimatedSection';

export default function App() {
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [enrollProgramTitle, setEnrollProgramTitle] = useState('Nursery');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnroll = (programTitle?: string) => {
    if (programTitle) {
      setEnrollProgramTitle(programTitle);
    }
    scrollToSection('contact');
  };

  return (
    <div className="relative min-h-screen w-full max-w-full bg-[#F8FCFF] text-slate-800 font-sans selection:bg-sky-200 selection:text-blue-900 overflow-x-hidden">
      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenEnroll={() => handleOpenEnroll()}
        onOpenTour={() => setTourModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenEnroll={() => handleOpenEnroll()}
        onExplorePrograms={() => scrollToSection('programs')}
      />

      {/* Mission & Vision Section */}
      <AnimatedSection>
        <MissionVision />
      </AnimatedSection>

      {/* Programs Section */}
      <AnimatedSection>
        <ProgramsSection
          onEnrollProgram={(title) => handleOpenEnroll(title)}
        />
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>

      {/* Photo Storybook Gallery */}
      <AnimatedSection>
        <BookGallery />
      </AnimatedSection>

      {/* Parent Reviews (Dual-Direction Carousels) */}
      <AnimatedSection>
        <ParentReviews />
      </AnimatedSection>

      {/* As Seen On Instagram Reel Carousel Section */}
      <AnimatedSection>
        <InstagramReels />
      </AnimatedSection>

      {/* Enquiry / Enrollment Form Section */}
      <AnimatedSection>
        <EnquirySection
          initialProgramTitle={enrollProgramTitle}
          onOpenTour={() => setTourModalOpen(true)}
        />
      </AnimatedSection>

      {/* Footer */}
      <Footer />

      {/* Schedule Campus Tour Modal */}
      <CampusTourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
      />

      {/* Always Visible Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
