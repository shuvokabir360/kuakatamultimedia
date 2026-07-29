import React from 'react';
import { X, ExternalLink, Sparkles, Tag, Globe } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden border border-brand-red/40 shadow-[0_0_60px_rgba(255,0,51,0.25)] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full glass-panel text-slate-300 hover:text-white hover:border-brand-red transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Preview Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-dark-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-red text-white mb-2 inline-block shadow-md shadow-brand-red/40">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-red" />
              প্রজেক্ট বিবরণ (Overview)
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div className="glass-card p-4 rounded-xl">
              <span className="text-xs text-slate-400 block mb-1">ক্লায়েন্ট / সংস্থা</span>
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-red" />
                {project.client}
              </span>
            </div>

            <div className="glass-card p-4 rounded-xl">
              <span className="text-xs text-slate-400 block mb-1">প্রজেক্ট ক্যাটাগরি</span>
              <span className="text-sm font-bold text-brand-amber">
                {project.category}
              </span>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-brand-red" />
              ব্যবহৃত টেকনোলজি ও টুলস
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-bold bg-brand-red/15 text-brand-red border border-brand-red/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-slate-800 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-300 hover:text-white"
            >
              বন্ধ করুন
            </button>

            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg shadow-brand-red/30 hover:scale-105 transition-transform"
            >
              <span>লাইভ ওয়েবসাইট / ডেমো দেখুন</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
