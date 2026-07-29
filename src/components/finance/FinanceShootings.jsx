import React, { useState } from 'react';
import { Film, Plus, Calendar, MapPin, Tv, User, FileText, Check, X, ChevronRight } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceShootings({ openAddModalDirectly = false }) {
  const { shootings = [], addShooting } = useData();
  const [showAddModal, setShowAddModal] = useState(openAddModalDirectly);

  // Form State matching exact screenshot
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    director: 'Kabir Hossen Shuvo',
    channel: 'Kuakata Multimedia',
    location: 'মুসুল্লিয়াবাদ',
    note: ''
  });

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

      {/* NEW SHOOTING MODAL (Exact match to screenshot) */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-4">
            
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

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              
              {/* 1. নাটকের নাম */}
              <div>
                <label className="block font-black text-emerald-900 mb-1">
                  নাম <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: নাটকের নাম"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
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

              {/* 3. পরিচালক */}
              <div>
                <label className="block font-black text-emerald-900 mb-1">পরিচালক</label>
                <input
                  type="text"
                  placeholder="পরিচালকের নাম (টাইপ করুন বা ড্রপডাউন থেকে বাছুন)"
                  value={formData.director}
                  onChange={(e) => setFormData({ ...formData, director: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                />
              </div>

              {/* 4. চ্যানেল */}
              <div>
                <label className="block font-black text-emerald-900 mb-1">চ্যানেল</label>
                <input
                  type="text"
                  placeholder="চ্যানেল নাম (টাইপ করুন বা ড্রপডাউন থেকে বাছুন)"
                  value={formData.channel}
                  onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                />
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

              {/* Submit Button (Matching Emerald Button in Screenshot) */}
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
