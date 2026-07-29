import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle2, 
  DollarSign, 
  Briefcase, 
  TrendingUp, 
  Calendar, 
  ShieldCheck, 
  Download,
  Upload,
  Database,
  HardDrive,
  Cloud,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import MemberManagement from './MemberManagement';
import AttendanceManagement from './AttendanceManagement';
import SalaryPayrollManagement from './SalaryPayrollManagement';
import ProjectManagement from './ProjectManagement';

export default function AdminDashboard() {
  const { members, attendance, salaries, projects, exportAllDataJSON, restoreAllDataJSON } = useData();
  const [activeAdminSubTab, setActiveAdminSubTab] = useState('overview');

  const totalMembers = members.length;
  
  const todayStr = new Date().toISOString().split('T')[0];
  const todayAttendance = attendance.filter(a => a.date === todayStr);
  const presentCount = todayAttendance.filter(a => a.status === 'Present' || a.status === 'Half-day').length;
  const attendanceRate = totalMembers > 0 ? Math.round((presentCount / totalMembers) * 100) : 100;

  const totalPayrollBudget = salaries.reduce((sum, s) => sum + (s.net_salary || 0), 0);
  const paidCount = salaries.filter(s => s.paid_status === 'Paid').length;

  const handleFileUpload = (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          restoreAllDataJSON(parsed);
          alert('ডাটা ব্যাকআপ সফলভাবে রিস্টোর করা হয়েছে!');
        } catch (err) {
          alert('ফাইলটি সঠিক JSON ব্যাকআপ ফাইল নয়!');
        }
      };
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-red/30 shadow-[0_0_40px_rgba(255,0,51,0.15)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/30 text-xs font-bold mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>অ্যাডমিন ম্যানেজমেন্ট সেন্টার (Leader Dashboard)</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">
            কুয়াকাটা মাল্টিমিডিয়া <span className="text-gradient">টিম পোর্টাল কন্ট্রোল</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            টিম মেম্বার, দৈনিক হাজিরা, বেতনের পে-রোল হিসাব, ব্যাকআপ ও ৩ডি পোর্টফোলিও পরিচালনা করুন।
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex items-center gap-3">
          <div className="glass-card px-4 py-2 rounded-2xl border border-emerald-500/30 text-right">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">আজকের হাজিরা হার</span>
            <span className="text-lg font-extrabold text-emerald-400">{attendanceRate}%</span>
          </div>
          <div className="glass-card px-4 py-2 rounded-2xl border border-brand-red/30 text-right">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">চলতি মাসের পে-রোল</span>
            <span className="text-lg font-extrabold text-brand-red">৳ {totalPayrollBudget.toLocaleString()}</span>
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
              ? 'bg-brand-red text-white shadow-md'
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
              ? 'bg-brand-red text-white shadow-md'
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
              ? 'bg-brand-red text-white shadow-md'
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
              ? 'bg-brand-red text-white shadow-md'
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
              ? 'bg-brand-red text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>প্রজেক্ট পোর্টফোলিও ({projects.length})</span>
        </button>

        <button
          id="tab-admin-backup"
          onClick={() => setActiveAdminSubTab('backup')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeAdminSubTab === 'backup'
              ? 'bg-brand-red text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>ডাটা ব্যাকআপ & সেভ</span>
        </button>
      </div>

      {/* Dynamic Sub-tab Render */}
      {activeAdminSubTab === 'overview' && (
        <div className="space-y-8 animate-fade-in">
          
          {/* Summary Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-red/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">মোট টিম মেম্বার</span>
                <div className="p-3 rounded-xl bg-brand-red/10 text-brand-red">
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

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-red/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">মাসিক বেতন বাজেট</span>
                <div className="p-3 rounded-xl bg-brand-red/10 text-brand-red">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">৳ {totalPayrollBudget.toLocaleString()}</div>
              <p className="text-[11px] text-slate-400 mt-1">পরিশোধিত: {paidCount} / {salaries.length}</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
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

          {/* Quick Action Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-1">দ্রুত হাজিরা মোড</span>
                <h3 className="text-xl font-bold text-white">আজকের টিম হাজিরা এন্ট্রি দিন</h3>
                <p className="text-xs text-slate-400 mt-1">
                  প্রতিদিনের হাজিরা অনুযায়ী মাস শেষে স্বয়ংক্রিয় বেতন ডিডাকশন হিসাব করা হয়।
                </p>
              </div>
              <button
                onClick={() => setActiveAdminSubTab('attendance')}
                className="w-full py-3 rounded-xl text-xs font-bold bg-brand-red/10 text-brand-red border border-brand-red/30 hover:bg-brand-red hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>আজকের হাজিরা শটে যান</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold text-brand-amber uppercase tracking-wider block mb-1">পে-রোল & বেতন পরিশোধ</span>
                <h3 className="text-xl font-bold text-white">মাসিক বেতনের হিসাব ও পেমেন্ট স্ট্যাটাস</h3>
                <p className="text-xs text-slate-400 mt-1">
                  মেম্বারদের বেসিক বেতন, বোনাস যোগ করা এবং পেইড/পেন্ডিং স্ট্যাটাস আপডেট করুন।
                </p>
              </div>
              <button
                onClick={() => setActiveAdminSubTab('salary')}
                className="w-full py-3 rounded-xl text-xs font-bold bg-brand-amber/10 text-brand-amber border border-brand-amber/30 hover:bg-brand-amber hover:text-dark-900 transition-all flex items-center justify-center gap-2"
              >
                <DollarSign className="w-4 h-4" />
                <span>পে-রোল প্যানেলে যান</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Backup & Data Storage Info Subtab */}
      {activeAdminSubTab === 'backup' && (
        <div className="space-y-6 animate-fade-in">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-red/30 space-y-6">
            <div>
              <span className="text-xs text-brand-red font-bold uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                <Database className="w-4 h-4" />
                ডাটা স্টোরেজ ও আর্কিটেকচার তথ্য
              </span>
              <h2 className="text-2xl font-black text-white">সিস্টেমের ডাটা কোথায় ও কিভাবে সেভ থাকে?</h2>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                কুয়াকাটা মাল্টিমিডিয়া সিস্টেমে সমস্ত ডাটা (টিম মেম্বার, পাসওয়ার্ড, দৈনিক হাজিরা, বেতনের পে-রোল ও ৩ডি প্রজেক্ট) ৩টি স্তরে সংরক্ষিত থাকে:
              </p>
            </div>

            {/* Storage Layers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-brand-red/30">
                <div className="p-3 rounded-xl bg-brand-red/10 text-brand-red w-fit mb-3">
                  <HardDrive className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">১. ব্রাউজার পার্সিস্টেন্ট স্টোরেজ (LocalStorage)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  মেম্বার অ্যাড করা, পাসওয়ার্ড রিসেট, হাজিরার এন্ট্রি বা বেতন পরিশোধের স্ট্যাটাস তাৎক্ষণিকভাবে LocalStorage এ পার্সিস্টেন্ট হিসেবে অটো-সেভ হয়ে থাকে। পেজ রিফ্রেশ বা ব্রাউজার রিস্টার্ট করলেও ডাটা মুছে যায় না।
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-brand-amber/30">
                <div className="p-3 rounded-xl bg-brand-amber/10 text-brand-amber w-fit mb-3">
                  <Download className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">২. অফলাইন JSON ব্যাকআপ (Download & Restore)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  অ্যাডমিন যেকোনো সময় এক ক্লিকে সম্পূর্ণ সিস্টেমের সকল ডাটা `.json` ফাইল হিসেবে পিসিতে সেভ/ডাউনলোড করে রাখতে পারেন এবং প্রয়োজনে যেকোনো ডিভাইস থেকে রিস্টোর করতে পারেন।
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-emerald-500/30">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-3">
                  <Cloud className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">৩. এক্সটার্নাল ব্যাকএন্ড / ক্লাউড ডাটাবেস (Optional)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  ভবিষ্যতে অনলাইন সেন্ট্রাল সার্ভারে ডাটা সিঙ্ক রাখতে MongoDB, PostgreSQL বা Supabase ডাটাবেসে REST API এর মাধ্যমে সরাসরি কানেক্ট করার এপিআই আর্কিটেকচার এতে যুক্ত রয়েছে।
                </p>
              </div>
            </div>

            {/* Actions: Export & Import */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">সিস্টেম ডাটা ব্যাকআপ ফাইল ডাউনলোড করুন</h4>
                <p className="text-xs text-slate-400">সকল মেম্বার, উপস্থিতি ও বেতন ফাইল হিসেবে সেভ থাকবে</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={exportAllDataJSON}
                  className="px-5 py-3 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>JSON ব্যাকআপ ডাউনলোড</span>
                </button>

                <label className="px-5 py-3 rounded-xl text-xs font-bold glass-panel text-slate-200 hover:text-white border border-slate-700 cursor-pointer flex items-center gap-2">
                  <Upload className="w-4 h-4 text-brand-amber" />
                  <span>ব্যাকআপ রিস্টোর</span>
                  <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
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
