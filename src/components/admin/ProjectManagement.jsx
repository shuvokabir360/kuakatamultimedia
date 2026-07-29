import React, { useState } from 'react';
import { Briefcase, Plus, Trash2, ExternalLink, Sparkles, X, Globe } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function ProjectManagement() {
  const { projects, addProject, deleteProject } = useData();
  const [showAddModal, setShowAddModal] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: '3D & Web',
    description: '',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop',
    demo_url: 'https://www.kuakatamultimedia.com/demo/newproject',
    client: 'কুয়াকাটা মাল্টিমিডিয়া ল্যাব',
    tags: 'Three.js, WebGL, Motion'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = typeof formData.tags === 'string'
      ? formData.tags.split(',').map(t => t.trim())
      : formData.tags;

    addProject({
      ...formData,
      tags: tagsArray,
      featured: true
    });

    setShowAddModal(false);
    setFormData({
      title: '',
      category: '3D & Web',
      description: '',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop',
      demo_url: 'https://www.kuakatamultimedia.com/demo/newproject',
      client: 'কুয়াকাটা মাল্টিমিডিয়া ল্যাব',
      tags: 'Three.js, WebGL, Motion'
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Add Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-brand-cyan" />
            পোর্টফোলিও প্রজেক্ট ম্যানেজমেন্ট
          </h3>
          <p className="text-xs text-slate-400">পাবলিক হোমপেজে ৩ডি ক্যারেসলে প্রদর্শিত প্রজেক্টসমূহ</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900 shadow-md hover:scale-105 transition-transform flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>নতুন ৩ডি প্রজেক্ট যুক্ত করুন</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="glass-panel rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between">
            <div className="relative h-48 bg-dark-800">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-dark-900/80 text-brand-cyan border border-brand-cyan/30">
                {project.category}
              </span>
              <button
                onClick={() => {
                  if (window.confirm('এই প্রজেক্টটি ডিলিট করতে চান?')) {
                    deleteProject(project.id);
                  }
                }}
                className="absolute top-3 right-3 p-2 rounded-full bg-rose-950/80 text-rose-400 hover:text-white border border-rose-500/40"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-3">
              <h4 className="text-lg font-bold text-white">{project.title}</h4>
              <p className="text-xs text-slate-300 line-clamp-2">{project.description}</p>
              
              <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-800">
                <span>ক্লায়েন্ট: {project.client}</span>
                <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="text-brand-cyan font-bold flex items-center gap-1">
                  <span>ডেমো</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 border border-brand-cyan/40 shadow-2xl">
            <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-4">নতুন ৩ডি প্রজেক্ট যোগ করুন</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">প্রজেক্ট টাইটেল</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: ৩ডি ভিআর ট্যুরিযম সিমেুলেটর"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl text-xs glass-input"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">ক্যাটাগরি</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl text-xs glass-input"
                  >
                    <option value="3D & Web">3D & Web</option>
                    <option value="VFX & Motion">VFX & Motion</option>
                    <option value="3D Commercial">3D Commercial</option>
                    <option value="Interactive Web">Interactive Web</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">ক্লায়েন্ট নাম</label>
                  <input
                    type="text"
                    required
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl text-xs glass-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">বিস্তারিত বিবরণ</label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl text-xs glass-input resize-none"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">ইমেজ URL</label>
                <input
                  type="url"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl text-xs glass-input"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs glass-panel text-slate-300"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900"
                >
                  প্রজেক্ট সেভ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
