import React, { useState } from 'react';
import { Briefcase, Sparkles } from 'lucide-react';
import Portfolio3DGallery from './3d/Portfolio3DGallery';
import ProjectModal from './ProjectModal';

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-cyan/30 text-xs font-semibold text-brand-cyan">
          <Briefcase className="w-3.5 h-3.5" />
          <span>আমাদের ৩ডি গ্যালারি & পোর্টফোলিও</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          কুয়াকাটা মাল্টিমিডিয়ার <span className="text-gradient">ভার্চুয়াল ৩ডি শোকেস</span>
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          ৩ডি ক্যারোজেল ড্র্যাগ বা স্ক্রল করে প্রজেক্টগুলো দেখুন। বিস্তারিত ও লাইভ ডেমো দেখতে যেকোনো কার্ডে ক্লিক করুন।
        </p>
      </div>

      {/* 3D Gallery Stage */}
      <Portfolio3DGallery onSelectProject={(project) => setSelectedProject(project)} />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
