import React, { useState } from 'react';
import { Users, Filter, Sparkles, Plus, Search } from 'lucide-react';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import Team3DCard from './3d/Team3DCard';

export default function TeamSection() {
  const { members = [], attendance = [] } = useData() || {};
  const { user, setActiveTab } = useAuth() || {};
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = ['All', '3D & VFX', 'Web Dev', 'Video Production'];

  const safeMembers = members || [];
  const safeAttendance = attendance || [];

  // Safe Filter members
  const filteredMembers = safeMembers.filter(member => {
    if (!member) return false;
    const matchesDept = selectedDept === 'All' || member.dept === selectedDept;
    const nameStr = member.name || '';
    const desigStr = member.designation || '';
    const matchesSearch = nameStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          desigStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (member.skills || []).some(s => (s || '').toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  // Calculate attendance rate for each member
  const getMemberAttendanceRate = (memberId) => {
    const records = safeAttendance.filter(a => a && a.user_id === memberId);
    if (!records.length) return 95;
    const presents = records.filter(r => r.status === 'Present' || r.status === 'Half-day').length;
    return Math.round((presents / records.length) * 100);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-purple/30 text-xs font-semibold text-brand-purple">
          <Users className="w-3.5 h-3.5" />
          <span>আমাদের দক্ষ ক্রিয়েটিভ টিম</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          কুয়াকাটা মাল্টিমিডিয়ার <span className="text-gradient">৩ডি ক্রিয়েটর & টিম মেম্বারবৃন্দ</span>
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          প্রতিটি কার্ডের উপর মাউস পয়েন্টার রাখুন (Parallax 3D Hover Effect)। মেম্বারদের স্কিল, পদবি ও মেম্বার পোর্টালে তাদের কাজের সামারি পর্যবেক্ষণ করুন।
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 glass-panel p-4 rounded-2xl border border-slate-800">
        
        {/* Department Filter Tabs */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {departments.map((dept) => (
            <button
              key={dept}
              id={`btn-dept-${dept.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedDept === dept
                  ? 'bg-gradient-to-r from-brand-cyan to-brand-purple text-dark-900 shadow-md font-bold'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-slate-600'
              }`}
            >
              {dept === 'All' ? 'সকল ডিপার্টমেন্ট' : dept}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="নাম বা স্কিল দিয়ে খুঁজুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl text-xs glass-input focus:border-brand-cyan"
          />
        </div>
      </div>

      {/* 3D Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMembers.map((member) => (
          <Team3DCard
            key={member.id}
            member={member}
            attendanceRate={getMemberAttendanceRate(member.id)}
          />
        ))}
      </div>

      {/* Admin Quick Action Callout */}
      {user?.role === 'admin' && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveTab && setActiveTab('admin-dashboard')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 hover:bg-brand-cyan hover:text-dark-900 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>নতুন মেম্বার যুক্ত বা ম্যানেজ করতে অ্যাডমিন প্যানেলে যান</span>
          </button>
        </div>
      )}
    </section>
  );
}
