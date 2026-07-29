import React, { useState } from 'react';
import { Tv, User, Search, ChevronRight, ShieldCheck, Briefcase, Plus, X, Check } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceDirectory() {
  const { channels = [], addChannel, directors = [], addDirector } = useData();
  const [activeTab, setActiveTab] = useState('channels'); // 'channels' | 'directors'
  const [channelCategoryFilter, setChannelCategoryFilter] = useState('all'); // 'all' | 'official' | 'client'
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [showChannelModal, setShowChannelModal] = useState(false);
  const [showDirectorModal, setShowDirectorModal] = useState(false);

  // New Channel Form State
  const [channelForm, setChannelForm] = useState({
    name: '',
    category: 'official',
    logo: ''
  });

  // New Director Form State
  const [directorForm, setDirectorForm] = useState({
    name: '',
    role: 'পরিচালক',
    avatar: ''
  });

  const handleAddChannelSubmit = (e) => {
    e.preventDefault();
    if (!channelForm.name.trim()) return;

    addChannel({
      name: channelForm.name.trim(),
      category: channelForm.category,
      logo: channelForm.logo.trim() || '/logo.svg'
    });

    setShowChannelModal(false);
    setChannelForm({ name: '', category: 'official', logo: '' });
  };

  const handleAddDirectorSubmit = (e) => {
    e.preventDefault();
    if (!directorForm.name.trim()) return;

    addDirector({
      name: directorForm.name.trim(),
      role: directorForm.role.trim() || 'পরিচালক',
      avatar: directorForm.avatar.trim() || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop'
    });

    setShowDirectorModal(false);
    setDirectorForm({ name: '', role: 'পরিচালক', avatar: '' });
  };

  const filteredChannels = (channels || []).filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = channelCategoryFilter === 'all' || c.category === channelCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  const filteredDirectors = (directors || []).filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900">ডিরেক্টরি</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            চ্যানেল ও পরিচালকদের সম্পূর্ণ কাজের তালিকা
          </p>
        </div>

        {activeTab === 'channels' ? (
          <button
            onClick={() => setShowChannelModal(true)}
            className="px-4 py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-md shadow-red-500/20 flex items-center gap-1.5 transition-transform active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>নতুন চ্যানেল</span>
          </button>
        ) : (
          <button
            onClick={() => setShowDirectorModal(true)}
            className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black shadow-md flex items-center gap-1.5 transition-transform active:scale-95"
          >
            <Plus className="w-4 h-4 text-red-400" />
            <span>নতুন পরিচালক</span>
          </button>
        )}
      </div>

      {/* Sub-tab Pill Switcher */}
      <div className="bg-white p-1.5 rounded-2xl border border-slate-200 grid grid-cols-2 gap-1 text-xs font-bold shadow-sm">
        <button
          onClick={() => {
            setActiveTab('channels');
            setSearchQuery('');
          }}
          className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'channels'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-white text-slate-700 hover:text-slate-900'
          }`}
        >
          <Tv className="w-4 h-4" />
          <span>চ্যানেল ({toBnNum((channels || []).length)})</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('directors');
            setSearchQuery('');
          }}
          className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'directors'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-white text-slate-700 hover:text-slate-900'
          }`}
        >
          <User className="w-4 h-4" />
          <span>পরিচালক ({toBnNum((directors || []).length)})</span>
        </button>
      </div>

      {/* Channel Category Category Filter (Official vs Client) */}
      {activeTab === 'channels' && (
        <div className="flex items-center gap-2 text-xs font-bold bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
          <button
            onClick={() => setChannelCategoryFilter('all')}
            className={`px-4 py-2 rounded-xl transition-all ${
              channelCategoryFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            সকল চ্যানেল
          </button>

          <button
            onClick={() => setChannelCategoryFilter('official')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              channelCategoryFilter === 'official'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>অফিসিয়াল (নিজেদের)</span>
          </button>

          <button
            onClick={() => setChannelCategoryFilter('client')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              channelCategoryFilter === 'client'
                ? 'bg-amber-500 text-slate-900 shadow-sm font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>ক্লায়েন্ট (অন্যের)</span>
          </button>
        </div>
      )}

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          placeholder={activeTab === 'channels' ? 'চ্যানেল খুঁজুন...' : 'পরিচালক খুঁজুন...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm"
        />
      </div>

      {/* CHANNELS LIST */}
      {activeTab === 'channels' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredChannels.map((ch) => (
            <div
              key={ch.id}
              className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between transition-transform hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-slate-100 p-1.5 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                  <img src={ch.logo || '/logo.svg'} alt={ch.name} className="w-full h-full object-cover rounded-full" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-black text-slate-900">{ch.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold ${
                      ch.category === 'official'
                        ? 'bg-rose-100 text-rose-600 border border-rose-200'
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                    }`}>
                      {ch.category === 'official' ? 'অফিসিয়াল' : 'ক্লায়েন্ট'}
                    </span>
                  </div>
                  
                  <span className="text-[11px] text-slate-500 font-semibold block mt-0.5">
                    {toBnNum(ch.shootingCount || 0)} টি শুটিং
                  </span>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
            </div>
          ))}
        </div>
      )}

      {/* DIRECTORS LIST */}
      {activeTab === 'directors' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDirectors.map((dir) => (
            <div
              key={dir.id}
              className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between transition-transform hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={dir.avatar}
                  alt={dir.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0 shadow-sm"
                />

                <div>
                  <h3 className="text-sm font-black text-slate-900">{dir.name}</h3>
                  <span className="text-[11px] text-slate-500 font-semibold block mt-0.5">
                    {dir.role || 'পরিচালক'} • {toBnNum(dir.shootingCount || 0)} টি শুটিং
                  </span>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
            </div>
          ))}
        </div>
      )}

      {/* 1. ADD CHANNEL MODAL */}
      {showChannelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-4">
            
            <button
              onClick={() => setShowChannelModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <h3 className="text-lg font-black text-slate-900">নতুন চ্যানেল যোগ করুন</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">অফিসিয়াল বা ক্লায়েন্ট ইউটিউব চ্যানেল</p>
            </div>

            <form onSubmit={handleAddChannelSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-black text-slate-700 mb-1">চ্যানেলের নাম *</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: Bangla Drama HD"
                  value={channelForm.name}
                  onChange={(e) => setChannelForm({ ...channelForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-slate-800"
                />
              </div>

              <div>
                <label className="block font-black text-slate-700 mb-1">ক্যাটাগরি</label>
                <select
                  value={channelForm.category}
                  onChange={(e) => setChannelForm({ ...channelForm, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-slate-800"
                >
                  <option value="official">অফিসিয়াল (নিজেদের চ্যানেল)</option>
                  <option value="client">ক্লায়েন্ট (অন্যের চ্যানেল)</option>
                </select>
              </div>

              <div>
                <label className="block font-black text-slate-700 mb-1">লোগো ছবি (URL - অপশনাল)</label>
                <input
                  type="text"
                  placeholder="https://... (ফাঁকা রাখলে ডিফল্ট লোগো বসবে)"
                  value={channelForm.logo}
                  onChange={(e) => setChannelForm({ ...channelForm, logo: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 font-semibold text-slate-800"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-md shadow-red-500/20 flex items-center justify-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>চ্যানেল সেভ করুন</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. ADD DIRECTOR MODAL */}
      {showDirectorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-4">
            
            <button
              onClick={() => setShowDirectorModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <h3 className="text-lg font-black text-slate-900">নতুন পরিচালক যোগ করুন</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">পরিচালক বা সহকারী পরিচালক</p>
            </div>

            <form onSubmit={handleAddDirectorSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-black text-slate-700 mb-1">পরিচালকের নাম *</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: মোস্তফা সরয়ার ফারুকী"
                  value={directorForm.name}
                  onChange={(e) => setDirectorForm({ ...directorForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-slate-800"
                />
              </div>

              <div>
                <label className="block font-black text-slate-700 mb-1">পদবি / রোল</label>
                <input
                  type="text"
                  placeholder="যেমন: পরিচালক / সহকারী পরিচালক"
                  value={directorForm.role}
                  onChange={(e) => setDirectorForm({ ...directorForm, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-slate-800"
                />
              </div>

              <div>
                <label className="block font-black text-slate-700 mb-1">প্রোফাইল ছবি (URL - অপশনাল)</label>
                <input
                  type="text"
                  placeholder="https://... (ফাঁকা রাখলে ডিফল্ট অবতার বসবে)"
                  value={directorForm.avatar}
                  onChange={(e) => setDirectorForm({ ...directorForm, avatar: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 font-semibold text-slate-800"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs shadow-md flex items-center justify-center gap-1.5"
                >
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>পরিচালক সেভ করুন</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}


