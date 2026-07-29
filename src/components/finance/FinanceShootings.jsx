import React, { useState } from 'react';
import { Film, Plus, Calendar, MapPin, Tv, User, FileText, Check, X, ChevronRight, ChevronDown, CheckCircle2, ShieldCheck, Trash2 } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceShootings({ openAddModalDirectly = false }) {
  const { shootings = [], members = [], channels = [], directors = [], addShooting, deleteShooting } = useData();
  const [showAddModal, setShowAddModal] = useState(openAddModalDirectly);

  // Dynamic Channels List from context
  const channelsList = channels || [];

  // Dynamic Directors List from context + member directors
  const directorsList = [
    ...(directors || []),
    ...(members || [])
      .filter(m => !directors.some(d => d.name === m.name))
      .map(m => ({
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
    budget: 50000,
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
      budget: selectedChannelObj.category === 'client' ? Number(formData.budget) : 0,
      expenses: 12000
    });

    setShowAddModal(false);
    setFormData({
      title: '',
      date: new Date().toISOString().split('T')[0],
      director: 'Kabir Hossen Shuvo',
      channel: 'Kuakata Multimedia',
      location: 'মুসুল্লিয়াবাদ',
      budget: 50000,
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

              <div className="flex items-center gap-1.5 shrink-0">
                <div className="p-2 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-black">
                  {sh.channel}
                </div>
                <button
                  onClick={() => {
                    if (window.confirm(`আপনি কি "${sh.title}" শুটিংটি ডিলিট করতে চান?`)) {
                      deleteShooting(sh.id);
                    }
                  }}
                  title="শুটিং ডিলিট করুন"
                  className="p-2 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
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
                    <div className="text-left">
                      <span className="font-black text-slate-900 block">{formData.channel}</span>
                      <span className={`text-[9px] font-extrabold px-2 py-0.2 rounded-full inline-block ${
                        selectedChannelObj?.category === 'client' 
                          ? 'bg-amber-100 text-amber-800 border border-amber-200' 
                          : 'bg-rose-100 text-rose-600 border border-rose-200'
                      }`}>
                        {selectedChannelObj?.category === 'client' ? 'ক্লায়েন্ট চ্যানেল (অন্যের)' : 'অফিসিয়াল (নিজেদের)'}
                      </span>
                    </div>
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
                          <div>
                            <span className="text-xs font-bold block">{ch.name}</span>
                            <span className="text-[10px] text-slate-400 block">{ch.categoryLabel}</span>
                          </div>
                        </div>

                        {formData.channel === ch.name && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 4.1 CONDITIONAL SHOOTING BUDGET (Shown ONLY for Client Channels) */}
              {selectedChannelObj?.category === 'client' ? (
                <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 space-y-1.5 animate-fade-in">
                  <label className="block font-black text-amber-900">
                    ক্লায়েন্ট শুটিং চুক্তি বাজেট (টাকা) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="৫০,০০০"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-amber-300 text-xs font-black text-slate-900 shadow-sm focus:ring-2 focus:ring-amber-500/20"
                  />
                  <p className="text-[10px] text-amber-700 font-semibold">
                    ক্লায়েন্ট (অন্যের) চ্যানেলের শুটিংয়ের জন্য চুক্তিকৃত বাজেট সেটিং করার সুযোগ।
                  </p>
                </div>
              ) : (
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>অফিসিয়াল (নিজেদের) চ্যানেলের শুটিংয়ের ক্ষেত্রে বাজেট সেট করার প্রয়োজন নেই।</span>
                </div>
              )}

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

