import React, { useState } from 'react';
import { Film, Plus, Calendar, MapPin, Tv, User, FileText, Check, X, ChevronRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceShootings({ openAddModalDirectly = false }) {
  const { shootings = [], members = [], addShooting } = useData();
  const [showAddModal, setShowAddModal] = useState(openAddModalDirectly);

  // Preset Channels List with Logos
  const channelsList = [
    { id: 'ch-1', name: 'Kuakata Multimedia', logo: '/logo.svg' },
    { id: 'ch-2', name: 'Malbro Entertainment', logo: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=100&auto=format&fit=crop' },
    { id: 'ch-3', name: 'Mehidi Multimedia', logo: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=100&auto=format&fit=crop' },
    { id: 'ch-4', name: 'Chorki OTT Platform', logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=100&auto=format&fit=crop' }
  ];

  // Directors List with Photos
  const directorsList = [
    { id: 'dir-1', name: 'Kabir Hossen Shuvo', role: 'পরিচালক', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop' },
    { id: 'dir-2', name: 'Saddam Mal', role: 'পরিচালক', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop' },
    { id: 'dir-3', name: 'SM Almas', role: 'সহকারী পরিচালক', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop' },
    ...(members || []).map(m => ({
      id: m.id,
      name: m.name,
      role: m.designation || 'টিম ডিরেক্টর',
      avatar: m.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop'
    }))
  ];

  // Dropdown Open/Close states
  const [directorDropdownOpen, setDirectorDropdownOpen] = useState(false);
  const [channelDropdownOpen, setChannelDropdownOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    director: 'Kabir Hossen Shuvo',
    channel: 'Kuakata Multimedia',
    location: 'মুসুল্লিয়াবাদ',
    note: ''
  });

  const selectedDirectorObj = directorsList.find(d => d.name === formData.director) || directorsList[0];
  const selectedChannelObj = channelsList.find(c => c.name === formData.channel) || channelsList[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('নাটকের নাম লিখুন!');
      return;
    }

    addShooting({
      ...formData,
      present_count: 0,
      absent_count: 0,
      budget: 50000,
      expenses: 12000
    });

    setShowAddModal(false);
    setFormData({
      title: '',
      date: new Date().toISOString().split('T')[0],
      director: 'Kabir Hossen Shuvo',
      channel: 'Kuakata Multimedia',
      location: 'মুসুল্লিয়াবাদ',
      note: ''
    });
  };

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900">শুটিং তালিকা</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            {toBnNum(shootings.length)} টি শুটিং রেকর্ড
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 rounded-2xl bg-emerald-600 text-white text-xs font-black shadow-md shadow-emerald-500/30 flex items-center gap-1.5 hover:bg-emerald-700 transition-transform active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>নতুন শুটিং</span>
        </button>
      </div>

      {/* Shooting Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shootings.map((sh) => (
          <div key={sh.id} className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900">{sh.title}</h3>
                <div className="flex items-center gap-3 text-[11px] text-slate-500 font-semibold mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {toBnNum(sh.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    {sh.director}
                  </span>
                </div>
              </div>

              <div className="p-2 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-black shrink-0">
                {sh.channel}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                {sh.location || 'মুসুল্লিয়াবাদ'}
              </span>

              <span className="font-extrabold text-slate-800">
                উপস্থিত: {toBnNum(sh.present_count || 0)}/১৫
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* NEW SHOOTING MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto custom-scrollbar">
            
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="text-center">
              <h3 className="text-lg font-black text-emerald-800">নতুন শুটিং</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* 1. নাটকের নাম */}
              <div>
                <label className="block font-black text-emerald-900 mb-1">
                  নাম <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: আমার দেশ"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              {/* 2. তারিখ */}
              <div>
                <label className="block font-black text-emerald-900 mb-1">তারিখ</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
                />
              </div>

              {/* 3. পরিচালক DROPDOWN WITH PHOTO AVATARS */}
              <div className="relative">
                <label className="block font-black text-emerald-900 mb-1">
                  পরিচালক (ছবি সহ বাছুন)
                </label>
                
                {/* Director Selection Button */}
                <button
                  type="button"
                  onClick={() => {
                    setDirectorDropdownOpen(!directorDropdownOpen);
                    setChannelDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedDirectorObj?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop'}
                      alt={formData.director}
                      className="w-8 h-8 rounded-full object-cover border-2 border-emerald-400 shadow-sm shrink-0"
                    />
                    <div className="text-left">
                      <span className="block font-black text-slate-900">{formData.director}</span>
                      <span className="text-[10px] text-slate-400 font-semibold">{selectedDirectorObj?.role || 'পরিচালক'}</span>
                    </div>
                  </div>

                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${directorDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Director Custom Dropdown List */}
                {directorDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 z-30 bg-white rounded-2xl border border-slate-200 shadow-xl p-2 max-h-52 overflow-y-auto space-y-1">
                    {directorsList.map((dir) => (
                      <button
                        key={dir.id}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, director: dir.name });
                          setDirectorDropdownOpen(false);
                        }}
                        className={`w-full p-2 rounded-xl flex items-center justify-between transition-colors text-left ${
                          formData.director === dir.name ? 'bg-emerald-50 text-emerald-800 font-black' : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <img src={dir.avatar} alt={dir.name} className="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0" />
                          <div>
                            <span className="text-xs font-bold block">{dir.name}</span>
                            <span className="text-[10px] text-slate-400 block">{dir.role}</span>
                          </div>
                        </div>

                        {formData.director === dir.name && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. চ্যানেল DROPDOWN WITH LOGOS */}
              <div className="relative">
                <label className="block font-black text-emerald-900 mb-1">
                  চ্যানেল (লোগো সহ বাছুন)
                </label>

                {/* Channel Selection Button */}
                <button
                  type="button"
                  onClick={() => {
                    setChannelDropdownOpen(!channelDropdownOpen);
                    setDirectorDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 p-1 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                      <img
                        src={selectedChannelObj?.logo || '/logo.svg'}
                        alt={formData.channel}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <span className="font-black text-slate-900">{formData.channel}</span>
                  </div>

                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${channelDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Channel Custom Dropdown List */}
                {channelDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 z-30 bg-white rounded-2xl border border-slate-200 shadow-xl p-2 max-h-48 overflow-y-auto space-y-1">
                    {channelsList.map((ch) => (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, channel: ch.name });
                          setChannelDropdownOpen(false);
                        }}
                        className={`w-full p-2 rounded-xl flex items-center justify-between transition-colors text-left ${
                          formData.channel === ch.name ? 'bg-emerald-50 text-emerald-800 font-black' : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-slate-100 p-1 border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
                            <img src={ch.logo} alt={ch.name} className="w-full h-full object-cover rounded-full" />
                          </div>
                          <span className="text-xs font-bold">{ch.name}</span>
                        </div>

                        {formData.channel === ch.name && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 5. স্থান */}
              <div>
                <label className="block font-black text-emerald-900 mb-1">স্থান</label>
                <input
                  type="text"
                  placeholder="শুটিং লোকেশন"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                />
              </div>

              {/* 6. নোট */}
              <div>
                <label className="block font-black text-emerald-900 mb-1">নোট</label>
                <textarea
                  rows={2}
                  placeholder="অতিরিক্ত তথ্য লিখুন..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl text-xs font-black bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-1.5 transition-transform active:scale-95"
                >
                  <span>সংরক্ষণ করুন</span>
                  <Check className="w-4 h-4" />
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

