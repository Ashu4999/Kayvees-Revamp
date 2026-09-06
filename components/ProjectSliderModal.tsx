'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectItem } from '@/data/projects';

interface Props {
  project: ProjectItem | null;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectImage: (idx: number) => void;
}

export default function ProjectSliderModal({
  project,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onSelectImage,
}: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onNext, onPrev, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#0B132B] text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A880]">
              {project.category}
            </span>
            <h4 className="text-lg sm:text-xl font-extrabold text-white">{project.title}</h4>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
              Photo {currentIndex + 1} of {project.images.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
              title="Close (Esc)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Viewport */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] sm:min-h-[480px] select-none">
          <img
            src={project.images[currentIndex]}
            alt={`${project.title} photo ${currentIndex + 1}`}
            className="max-h-[60vh] w-auto max-w-full object-contain transition-all duration-300"
          />

          <button
            onClick={onPrev}
            className="absolute left-3 sm:left-5 p-3 rounded-full bg-black/60 hover:bg-[#0284C7] text-white backdrop-blur transition transform hover:scale-110 shadow-xl"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-3 sm:right-5 p-3 rounded-full bg-black/60 hover:bg-[#0284C7] text-white backdrop-blur transition transform hover:scale-110 shadow-xl"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800">
          <div className="flex gap-2.5 overflow-x-auto py-1">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumb ${idx + 1}`}
                onClick={() => onSelectImage(idx)}
                className={`w-16 h-12 object-cover rounded-lg shrink-0 cursor-pointer transition ${
                  idx === currentIndex
                    ? 'border-2 border-[#0284C7] ring-2 ring-[#0284C7]/50 opacity-100'
                    : 'border border-slate-700 opacity-60 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
