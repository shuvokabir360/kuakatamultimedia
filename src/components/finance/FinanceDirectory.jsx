import React, { useState } from 'react';
import { Tv, User, Search, ChevronRight, ShieldCheck, Briefcase } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceDirectory() {
  const { shootings = [] } = useData();
  const [activeTab, setActiveTab] = useState('channels'); // 'channels' | 'directors'
  const [channelCategoryFilter, setChannelCategoryFilter] = useState('all'); // 'all' | 'official' | 'client'
  const [searchQuery, setSearchQuery] = useState('');

  // Channels List categorized as Official (নিজেদের) vs Client (অন্যের)
  const channelsList = [
    { id: 'ch-1', name: 'Kuakata Multimedia', category: 'official', categoryLabel: 'অফিসিয়াল (নিজেদের)', logo: '/logo.svg', shootingCount: 9 },
    { id: 'ch-2', name: 'Malbro Entertainment', category: 'client', categoryLabel: 'ক্লায়েন্ট চ্যানেল', logo: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=100&auto=format&fit=crop', shootingCount: 14 },
    { id: 'ch-3', name: 'Mehidi Multimedia', category: 'client', categoryLabel: 'ক্লায়েন্ট চ্যানেল', logo: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=100&auto=format&fit=crop', shootingCount: 3 }
  ];

  // Directors List
  const directorsList = [
    { id: 'dir-1', name: 'Kabir Hossen', shootingCount: 1, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop' },
    { id: 'dir-2', name: 'Saddam Mal', shootingCount: 13, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop' },
    { id: 'dir-3', name: 'SM Almas', shootingCount: 12, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop' }
  ];

  const filteredChannels = channelsList.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = channelCategoryFilter === 'all' || c.category === channelCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  const filteredDirectors = directorsList.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900">ডিরেক্টরি</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          চ্যানেল ও পরিচালকদের কাজের তালিকা
        </p>
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
          <span>চ্যানেল</span>
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
          <span>পরিচালক</span>
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
                  <img src={ch.logo} alt={ch.name} className="w-full h-full object-cover rounded-full" />
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
                    {toBnNum(ch.shootingCount)} টি শুটিং
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
                    {toBnNum(dir.shootingCount)} টি শুটিং
                  </span>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

