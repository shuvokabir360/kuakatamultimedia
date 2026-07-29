import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle2, 
  DollarSign, 
  Briefcase, 
  TrendingUp, 
  Calendar, 
  Plus, 
  ShieldCheck, 
  UserCheck, 
  FileText,
  Clock,
  ChevronRight
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import MemberManagement from './MemberManagement';
import AttendanceManagement from './AttendanceManagement';
import SalaryPayrollManagement from './SalaryPayrollManagement';
import ProjectManagement from './ProjectManagement';

export default function AdminDashboard() {
  const { members, attendance, salaries, projects } = useData();
  const [activeAdminSubTab, setActiveAdminSubTab] = useState('overview'); // overview, members, attendance, salary, projects

  // Calculate quick analytics
  const totalMembers = members.length;
  
  const todayStr = new Date().toISOString().split('T')[0];
  const todayAttendance = attendance.filter(a => a.date === todayStr);
  const presentCount = todayAttendance.filter(a => a.status === 'Present' || a.status === 'Half-day').length;
  const attendanceRate = totalMembers > 0 ? Math.round((presentCount / totalMembers) * 100) : 100;

  const totalPayrollBudget = salaries.reduce((sum, s) => sum + (s.net_salary || 0), 0);
  const paidCount = salaries.filter(s => s.paid_status === 'Paid').length;

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-cyan/30 shadow-[0_0_40px_rgba(0,242,254,0.15)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 text-xs font-bold mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>অ্যাডমিন ম্যানেজমেন্ট সেন্টার (Leader Dashboard)</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">
            কুয়াকাটা মাল্টিমিডিয়া <span className="text-gradient">টিম পোর্টাল কন্ট্রোল</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            টিম মেম্বার, দৈনিক হাজিরা, বেতনের পে-রোল হিসাব ও ৩ডি পোর্টফোলিও পরিচালনা করুন।
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex items-center gap-3">
          <div className="glass-card px-4 py-2 rounded-2xl border border-emerald-500/30 text-right">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">আজকের হাজিরা হার</span>
            <span className="text-lg font-extrabold text-emerald-400">{attendanceRate}%</span>
          </div>
          <div className="glass-card px-4 py-2 rounded-2xl border border-brand-purple/30 text-right">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">চলতি মাসের পে-রোল</span>
            <span className="text-lg font-extrabold text-brand-purple">৳ {totalPayrollBudget.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-2 glass-panel p-2 rounded-2xl border border-slate-800">
        <button
          id="tab-admin-overview"
          onClick={() => setActiveAdminSubTab('overview')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeAdminSubTab === 'overview'
              ? 'bg-brand-cyan text-dark-900 shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>ওভারভিউ ড্যাশবোর্ড</span>
        </button>

        <button
          id="tab-admin-members"
          onClick={() => setActiveAdminSubTab('members')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeAdminSubTab === 'members'
              ? 'bg-brand-cyan text-dark-900 shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>মেম্বার ব্যবস্থাপনা ({totalMembers})</span>
        </button>

        <button
          id="tab-admin-attendance"
          onClick={() => setActiveAdminSubTab('attendance')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeAdminSubTab === 'attendance'
              ? 'bg-brand-cyan text-dark-900 shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>দৈনিক হাজিরা (Attendance)</span>
        </button>

        <button
          id="tab-admin-salary"
          onClick={() => setActiveAdminSubTab('salary')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeAdminSubTab === 'salary'
              ? 'bg-brand-cyan text-dark-900 shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>বেতন ও পে-রোল (Payroll)</span>
        </button>

        <button
          id="tab-admin-projects"
          onClick={() => setActiveAdminSubTab('projects')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeAdminSubTab === 'projects'
              ? 'bg-brand-cyan text-dark-900 shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>প্রজেক্ট পোর্টফোলিও ({projects.length})</span>
        </button>
      </div>

      {/* Dynamic Sub-tab Render */}
      {activeAdminSubTab === 'overview' && (
        <div className="space-y-8 animate-fade-in">
          
          {/* Summary Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-cyan/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">মোট টিম মেম্বার</span>
                <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">{totalMembers} জন</div>
              <p className="text-[11px] text-slate-400 mt-1">৩ডি আর্টিস্ট, ওয়েব ও ভিএফএক্স টিম</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">আজকের উপস্থিতি</span>
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-emerald-400">{attendanceRate}%</div>
              <p className="text-[11px] text-slate-400 mt-1">অন-টাইম ডিউটি রেকর্ড</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-purple/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">মাসিক বেতন বাজেট</span>
                <div className="p-3 rounded-xl bg-brand-purple/10 text-brand-purple">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">৳ {totalPayrollBudget.toLocaleString()}</div>
              <p className="text-[11px] text-slate-400 mt-1">পরিশোধিত: {paidCount} / {salaries.length}</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-gold/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">পাবলিক প্রজেক্টস</span>
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                  <Briefcase className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">{projects.length} টি</div>
              <p className="text-[11px] text-slate-400 mt-1">৩ডি পোর্টফোলিও শোকেস</p>
            </div>

          </div>

          {/* Quick Action Banner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Action 1: Attendance Logging Quick Launcher */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider block mb-1">দ্রুত হাজিরা মোড</span>
                <h3 className="text-xl font-bold text-white">আজকের টিম হাজিরা এন্ট্রি দিন</h3>
                <p className="text-xs text-slate-400 mt-1">
                  প্রতিদিনের হাজিরা অনুযায়ী মেম্বারদের মাস শেষে স্বয়ংক্রিয় বেতন ডিডাকশন হিসাব করা হয়।
                </p>
              </div>
              <button
                onClick={() => setActiveAdminSubTab('attendance')}
                className="w-full py-3 rounded-xl text-xs font-bold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan hover:text-dark-900 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>আজকের হাজিরা শটে যান</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Action 2: Payroll Engine Launcher */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold text-brand-purple uppercase tracking-wider block mb-1">পে-রোল & বেতন পরিশোধ</span>
                <h3 className="text-xl font-bold text-white">মাসিক বেতনের হিসাব ও পেমেন্ট স্ট্যাটাস</h3>
                <p className="text-xs text-slate-400 mt-1">
                  মেম্বারদের বেসিক বেতন, বোনাস যোগ করা এবং পেইড/পেন্ডিং স্ট্যাটাস আপডেট করুন।
                </p>
              </div>
              <button
                onClick={() => setActiveAdminSubTab('salary')}
                className="w-full py-3 rounded-xl text-xs font-bold bg-brand-purple/10 text-brand-purple border border-brand-purple/30 hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <DollarSign className="w-4 h-4" />
                <span>পে-রোল প্যানেলে যান</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {activeAdminSubTab === 'members' && <MemberManagement />}
      {activeAdminSubTab === 'attendance' && <AttendanceManagement />}
      {activeAdminSubTab === 'salary' && <SalaryPayrollManagement />}
      {activeAdminSubTab === 'projects' && <ProjectManagement />}

    </div>
  );
}
