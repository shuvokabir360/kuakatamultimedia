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
  Sparkles,
  ExternalLink,
  Check,
  Server,
  Key
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SUPABASE_CONFIG, saveCloudCredentials, isCloudConnected } from '../../services/db';
import MemberManagement from './MemberManagement';
import AttendanceManagement from './AttendanceManagement';
import SalaryPayrollManagement from './SalaryPayrollManagement';
import ProjectManagement from './ProjectManagement';

export default function AdminDashboard() {
  const { members, attendance, salaries, projects, exportAllDataJSON, restoreAllDataJSON } = useData();
  const [activeAdminSubTab, setActiveAdminSubTab] = useState('overview');
  
  const [showCloudConfig, setShowCloudConfig] = useState(false);
  const [supabaseUrl, setSupabaseUrl] = useState(SUPABASE_CONFIG.url);
  const [supabaseKey, setSupabaseKey] = useState(SUPABASE_CONFIG.anonKey);

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

  const handleSaveCloudConfig = (e) => {
    e.preventDefault();
    saveCloudCredentials(supabaseUrl, supabaseKey);
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
            টিম মেম্বার, দৈনিক হাজিরা, বেতনের পে-রোল হিসাব, ক্লাউড ডাটাবেস ও ৩ডি পোর্টফোলিও পরিচালনা করুন।
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
          <span>অনলাইন ডাটাবেস (Cloud DB)</span>
        </button>
      </div>

      {/* Overview */}
      {activeAdminSubTab === 'overview' && (
        <div className="space-y-8 animate-fade-in">
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

      {/* Cloud Database & Backup Tab */}
      {activeAdminSubTab === 'backup' && (
        <div className="space-y-6 animate-fade-in">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-red/30 space-y-6">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs text-brand-red font-bold uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <Cloud className="w-4 h-4" />
                  অনলাইন ক্লাউড ডাটাবেস রেকমেন্ডেশন
                </span>
                <h2 className="text-2xl font-black text-white">অনলাইনে ডাটা সেভ রাখার সেরা ডাটাবেস</h2>
                <p className="text-xs text-slate-300 mt-1">
                  যেখান থেকেই অ্যাক্সেস করুন না কেন, অনলাইনে সব সময় রিয়েল-টাইমে ডাটা সংরক্ষিত থাকবে।
                </p>
              </div>

              <button
                onClick={() => setShowCloudConfig(!showCloudConfig)}
                className="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-brand-red/20 text-brand-red border border-brand-red/40 hover:bg-brand-red hover:text-white transition-colors flex items-center gap-2"
              >
                <Key className="w-4 h-4" />
                <span>Supabase / Cloud Keys সেটআপ</span>
              </button>
            </div>

            {/* Cloud Database Options Recommendation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Option 1: Supabase (Recommended) */}
              <div className="glass-card p-6 rounded-2xl border border-emerald-500/40 relative flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-black bg-emerald-500 text-dark-900 absolute top-4 right-4">
                    ১ম পছন্দ (Best Pick ⭐⭐⭐⭐⭐)
                  </span>
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-3">
                    <Database className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">১. Supabase (PostgreSQL)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    সম্পূর্ণ **ফ্রি (Free forever)** ক্লাউড ডাটাবেস। কোনো ক্রেডিট কার্ড লাগে না। রিয়েল-টাইম ডাটা সিঙ্ক ও অটোমেটেড টেবিল সাপোর্টেড।
                  </p>
                </div>
                <a
                  href="https://supabase.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-500 text-dark-900 text-center flex items-center justify-center gap-1.5"
                >
                  <span>Supabase এ ফ্রি একাউন্ট খুলুন</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Option 2: Firebase Firestore */}
              <div className="glass-card p-6 rounded-2xl border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 w-fit mb-3">
                    <Cloud className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">২. Google Firebase</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    গুগলের নিজস্ব ক্লাউড রিয়েল-টাইম ডাটাবেস। ফ্রন্টএন্ড থেকে সরাসরি ডাটা সেভ করার জন্য জনপ্রিয়।
                  </p>
                </div>
                <a
                  href="https://firebase.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 text-center flex items-center justify-center gap-1.5"
                >
                  <span>Firebase ডেভ কনসোল</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Option 3: MongoDB Atlas */}
              <div className="glass-card p-6 rounded-2xl border border-brand-red/30 flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-brand-red/10 text-brand-red w-fit mb-3">
                    <Server className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">৩. MongoDB Atlas</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    NoSQL ডকুমেন্টস ভিত্তিক ক্লাউড ডাটাবেস (512MB ফ্রি ক্লাস্টার)।
                  </p>
                </div>
                <a
                  href="https://www.mongodb.com/cloud/atlas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-brand-red/20 text-brand-red border border-brand-red/40 text-center flex items-center justify-center gap-1.5"
                >
                  <span>MongoDB Atlas ভিজিট</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Cloud Config Modal / Form */}
            {showCloudConfig && (
              <form onSubmit={handleSaveCloudConfig} className="glass-panel p-6 rounded-2xl border border-brand-red/40 space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Key className="w-4 h-4 text-brand-red" />
                  Supabase ক্লাউড ডাটাবেস এপিআই কী সেটআপ
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1">Supabase Project URL</label>
                    <input
                      type="url"
                      placeholder="https://xyz.supabase.co"
                      value={supabaseUrl}
                      onChange={(e) => setSupabaseUrl(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl glass-input text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Supabase Anon Key</label>
                    <input
                      type="text"
                      placeholder="eyJhbGciOiJIUzI1NiIsIn..."
                      value={supabaseKey}
                      onChange={(e) => setSupabaseKey(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl glass-input text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-red text-white shadow-md"
                  >
                    ক্লাউড কী সেভ করুন
                  </button>
                </div>
              </form>
            )}

            {/* Offline JSON Export/Import fallback */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">অফলাইন JSON ফাইল ব্যাকআপ & রিস্টোর</h4>
                <p className="text-xs text-slate-400">অনলাইন ডাটাবেসের পাশাপাশি অফলাইনেও ব্যাকআপ ফাইল সেভ রাখতে পারেন</p>
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
                  <span>ফাইল থেকে রিস্টোর</span>
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
