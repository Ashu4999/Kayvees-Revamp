'use client';

import React, { useState } from 'react';
import { Images, ChevronRight } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '@/data/projects';
import ProjectSliderModal from './ProjectSliderModal';

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = [
    { label: 'All (30)', value: 'all' },
    { label: 'Factory Construction', value: 'Factory Construction' },
    { label: 'Corporate & IT', value: 'Commercial - Corporate Offices' },
    { label: 'Hotels & Dining', value: 'Commercial - Hotels' },
    { label: 'Residential Estates', value: 'Residential Interior' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'Commercial - Corporate Offices') return p.category.includes('Commercial');
    return p.category === activeFilter;
  });

  const openSlider = (project: ProjectItem) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeSlider = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextSlide = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevSlide = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full">
              Portfolio & Gallery Archives
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] mt-3 tracking-tight">
              30+ Verified Real-World Projects
            </h2>
            <p className="text-slate-600 font-body mt-2">
              Click on any project card below to open its **full high-resolution photo slider** (573 site photos).
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition shadow-xs ${
                  activeFilter === f.value
                    ? 'bg-[#0B132B] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openSlider(project)}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0B132B]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur">
                  {project.category}
                </span>
                <span className="absolute bottom-3 right-3 bg-[#0284C7] text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1.5">
                  <Images className="w-3.5 h-3.5" /> {project.imageCount} Photos
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-extrabold text-[#0B132B] group-hover:text-[#0284C7] transition">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Pune & Maharashtra &bull; Turnkey Execution</p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Click to view all photos</span>
                  <span className="text-xs font-bold text-[#0284C7] flex items-center gap-1 group-hover:translate-x-1 transition">
                    Open Slider <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ProjectSliderModal
        project={selectedProject}
        currentIndex={currentImageIndex}
        onClose={closeSlider}
        onNext={nextSlide}
        onPrev={prevSlide}
        onSelectImage={(idx) => setCurrentImageIndex(idx)}
      />
    </section>
  );
}
