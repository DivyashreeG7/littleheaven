import React, { useState } from 'react';
import { PROGRAMS } from '../data/preschoolData';
import { Program } from '../types';
import { ProgramModal } from './ProgramModal';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';
import {
  Baby,
  Sparkles,
  BookOpen,
  BrainCircuit,
  Rocket,
  Clock,
  Users,
  ChevronRight
} from 'lucide-react';

interface ProgramsSectionProps {
  onEnrollProgram: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onEnrollProgram }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return Baby;
      case 'Sparkles':
        return Sparkles;
      case 'BookOpen':
        return BookOpen;
      case 'BrainCircuit':
        return BrainCircuit;
      case 'Rocket':
        return Rocket;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="programs" className="scroll-mt-24 sm:scroll-mt-28 relative py-20 lg:py-28 bg-blue-50/40 overflow-hidden">
      
      {/* Background soft glow blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="primary">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Tailored Early Curriculum</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nurturing Programs for <br />
            <span className="text-gradient-primary">Every Stage of Growth</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From discovery to kindergarten leadership, our programs combine play-based exploration with milestone early learning.
          </p>
        </div>

        {/* Hallmark Bento Grid of Programs */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-stretch">
          {PROGRAMS.map((prog) => {
            const IconComp = getProgramIcon(prog.iconName);

            return (
              <Card
                key={prog.id}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-1.35rem)] flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Image Showcase */}
                  <div className="relative w-full aspect-[16/11] rounded-[22px] overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 bg-slate-100">
                    <img
                      src={prog.image}
                      alt={`${prog.title} Program at Little's Heaven Preschool`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out pointer-events-none select-none"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md border border-white/90 flex items-center justify-center text-blue-600 shadow-md">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors pt-1">
                    {prog.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50 text-blue-800 border border-sky-100">
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                      {prog.ageGroup}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {prog.timing}
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>
                </div>

                {/* Action Trigger */}
                <div className="pt-6 border-t border-slate-100 mt-4">
                  <Button
                    onClick={() => onEnrollProgram(prog.title)}
                    variant="primary"
                    size="sm"
                    className="w-full justify-center"
                  >
                    <span>Enroll</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

      </div>

      {/* Program Details Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onEnroll={(title) => {
          setSelectedProgram(null);
          onEnrollProgram(title);
        }}
      />
    </section>
  );
};
