import React, { useState } from 'react';
import { ExternalLink, Play, Sparkles, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function Portfolio3DGallery({ onSelectProject }) {
  const { projects } = useData();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', '3D & Web', 'VFX & Motion', '3D Commercial', 'Interactive Web'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = filteredProjects[activeIndex] || filteredProjects[0];

  return (
    <div className="relative w-full py-6">
      
      {/* Horizontally Scrollable Category Filter Chips for Mobile App Experience */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-2 px-2 max-w-full justify-start sm:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`btn-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => {
              setActiveCategory(cat);
              setActiveIndex(0);
            }}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg shadow-brand-red/30 scale-105'
                : 'glass-panel text-slate-300 hover:text-white hover:border-brand-red/40'
            }`}
          >
            {cat === 'All' ? 'সকল প্রজেক্ট (All)' : cat}
          </button>
        ))}
      </div>

      {/* 3D Carousel Stage */}
      {filteredProjects.length > 0 ? (
        <div className="relative max-w-4xl mx-auto px-2 sm:px-4 min-h-[420px] flex items-center justify-center">
          {/* Controls */}
          <button
            id="btn-portfolio-prev"
            onClick={handlePrev}
            aria-label="Previous project"
            className="absolute left-1 sm:left-0 z-30 p-2.5 sm:p-3 rounded-full glass-panel hover:bg-brand-red/20 border border-slate-700 text-white hover:border-brand-red transition-all transform hover:-translate-x-1"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            id="btn-portfolio-next"
            onClick={handleNext}
            aria-label="Next project"
            className="absolute right-1 sm:right-0 z-30 p-2.5 sm:p-3 rounded-full glass-panel hover:bg-brand-red/20 border border-slate-700 text-white hover:border-brand-red transition-all transform hover:translate-x-1"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Active 3D Card Display */}
          <div className="w-full max-w-2xl relative transition-all duration-500 ease-out transform">
            <div className="glass-panel rounded-2xl overflow-hidden border border-brand-red/40 shadow-[0_0_50px_rgba(255,0,51,0.2)] group">
              {/* Image & Overlay */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-dark-800">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

                {/* Category Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-dark-900/80 backdrop-blur-md text-brand-red border border-brand-red/40 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {currentProject.category}
                </span>

                {/* Floating Play / Preview Icon */}
                <button
                  onClick={() => onSelectProject(currentProject)}
                  className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-red text-white flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-lg shadow-brand-red/50"
                >
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-1" />
                </button>
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-0 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-red transition-colors">
                    {currentProject.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
                    ক্লায়েন্ট: {currentProject.client}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.tags?.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-medium bg-brand-red/10 text-brand-red border border-brand-red/20">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    id={`btn-demo-${currentProject.id}`}
                    onClick={() => onSelectProject(currentProject)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-white transition-colors"
                  >
                    <span>৩ডি লাইভ ডেমো দেখুন</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-slate-400 glass-panel max-w-md mx-auto rounded-xl">
          <Layers className="w-10 h-10 text-slate-500 mx-auto mb-2" />
          <p>এই ক্যাটাগরিতে কোনো প্রজেক্ট পাওয়া যায়নি।</p>
        </div>
      )}

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {filteredProjects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === activeIndex ? 'w-8 bg-brand-red' : 'w-2 bg-slate-700 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
