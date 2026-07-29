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
  Copy,
  Check,
  Server,
  Key,
  RefreshCw,
  LogOut
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { SUPABASE_CONFIG, saveCloudCredentials, isCloudConnected } from '../../services/db';
import { supabase, SUPABASE_SQL_SCHEMA } from '../../services/supabaseClient';
import MemberManagement from './MemberManagement';
import AttendanceManagement from './AttendanceManagement';
import SalaryPayrollManagement from './SalaryPayrollManagement';
import ProjectManagement from './ProjectManagement';

export default function AdminDashboard() {
  const { logout } = useAuth() || {};
  const { members = [], attendance = [], salaries = [], projects = [], exportAllDataJSON, restoreAllDataJSON } = useData() || {};
  const [activeAdminSubTab, setActiveAdminSubTab] = useState('overview');
  
  const [showCloudConfig, setShowCloudConfig] = useState(false);
  const [supabaseUrl, setSupabaseUrl] = useState(SUPABASE_CONFIG.url);
  const [supabaseKey, setSupabaseKey] = useState(SUPABASE_CONFIG.anonKey);
  const [copiedSql, setCopiedSql] = useState(false);
  const [syncingCloud, setSyncingCloud] = useState(false);
  const [syncMsg, setSyncMsg] = useState('');

  const safeMembers = members || [];
  const safeAttendance = attendance || [];
  const safeSalaries = salaries || [];
  const safeProjects = projects || [];

  const totalMembers = safeMembers.length;
  
  const todayStr = new Date().toISOString().split('T')[0];
  const todayAttendance = safeAttendance.filter(a => a && a.date === todayStr);
  const presentCount = todayAttendance.filter(a => a && (a.status === 'Present' || a.status === 'Half-day')).length;
  const attendanceRate = totalMembers > 0 ? Math.round((presentCount / totalMembers) * 100) : 100;

  const totalPayrollBudget = safeSalaries.reduce((sum, s) => sum + (s?.net_salary || 0), 0);
  const paidCount = safeSalaries.filter(s => s && s.paid_status === 'Paid').length;

  const handleFileUpload = (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          if (restoreAllDataJSON) restoreAllDataJSON(parsed);
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

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 3000);
  };

  const handlePushAllToSupabase = async () => {
    if (!isCloudConnected() || !supabase) {
      alert('Supabase এপিআই কানেক্ট করা নেই!');
      return;
    }

    setSyncingCloud(true);
    setSyncMsg('');
    try {
      if (safeMembers.length > 0) await supabase.from('members').upsert(safeMembers);
      if (safeProjects.length > 0) await supabase.from('projects').upsert(safeProjects);
      if (safeAttendance.length > 0) await supabase.from('attendance').upsert(safeAttendance);
      if (safeSalaries.length > 0) await supabase.from('salaries').upsert(safeSalaries);

      setSyncMsg('সমস্ত ডাটা (মেম্বার, হাজিরা, বেতন ও প্রজেক্ট) সফলভাবে Supabase এ লাইভ সেভ করা হয়েছে! 🎉');
    } catch (err) {
      setSyncMsg(`সিঙ্ক করতে সমস্যা: ${err.message || 'টেবিলসমূহ Supabase এ আগে তৈরি করুন'}`);
    } finally {
      setSyncingCloud(false);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-red/30 shadow-[0_0_40px_rgba(255,0,51,0.15)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/30 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>অ্যাডমিন ম্যানেজমেন্ট সেন্টার (Leader Dashboard)</span>
            </span>

            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
              isCloudConnected() 
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
            }`}>
              <Cloud className="w-3.5 h-3.5" />
              <span>{isCloudConnected() ? 'Supabase Live Connected 🟢' : 'Local Persistence Active 🟠'}</span>
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-white">
            কুয়াকাটা মাল্টিমিডিয়া <span className="text-gradient">টিম পোর্টাল কন্ট্রোল</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            টিম মেম্বার, দৈনিক হাজিরা, বেতনের পে-রোল হিসাব, সুপাবেস ক্লাউড ডাটাবেস ও ৩ডি পোর্টফোলিও পরিচালনা করুন।
          </p>
        </div>

        {/* Quick Stats Pill & Logout Button */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
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

          <button
            onClick={logout}
            className="px-4 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-lg shadow-rose-600/30 flex items-center gap-1.5 transition-transform hover:scale-105"
          >
            <LogOut className="w-4 h-4" />
            <span>লগআউট (Logout)</span>
          </button>
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
          <span>প্রজেক্ট পোর্টফোলিও ({safeProjects.length})</span>
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
          <span>Supabase ক্লাউড ডাটাবেস</span>
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
              <p className="text-[11px] text-slate-400 mt-1">পরিশোধিত: {paidCount} / {safeSalaries.length}</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">পাবলিক প্রজেক্টস</span>
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                  <Briefcase className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">{safeProjects.length} টি</div>
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
                <h3 className="text-xl font-bold text-white">মাসিক বেেশনের হিসাব ও পেমেন্ট স্ট্যাটাস</h3>
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

      {/* Supabase Cloud Database Setup Subtab */}
      {activeAdminSubTab === 'backup' && (
        <div className="space-y-6 animate-fade-in">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/40 space-y-6">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <Database className="w-4 h-4" />
                  Supabase (PostgreSQL) অনলাইন ডাটাবেস সিঙ্ক
                </span>
                <h2 className="text-2xl font-black text-white">Supabase ডাটাবেস লাইভ স্ট্যাটাস</h2>
                <p className="text-xs text-slate-300 mt-1">
                  আপনার সুপাবেস প্রজেক্টের সাথে ডাটা কানেক্টেড রয়েছে।
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePushAllToSupabase}
                  disabled={syncingCloud}
                  className="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-emerald-500 text-dark-900 shadow-lg hover:scale-105 transition-transform flex items-center gap-2 disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${syncingCloud ? 'animate-spin' : ''}`} />
                  <span>{syncingCloud ? 'ডাটা সিঙ্ক হচ্ছে...' : 'সুপাবেসে ডাটা সিঙ্ক করুন'}</span>
                </button>
              </div>
            </div>

            {syncMsg && (
              <div className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{syncMsg}</span>
              </div>
            )}

            {/* How to Check Data in Supabase Guide */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Server className="w-4 h-4 text-emerald-400" />
                সুপাবেসে ডাটা কিভাবে চেক করবেন (How to View Saved Data)
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 space-y-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500 text-dark-900 font-black flex items-center justify-center text-xs">১</span>
                  <h5 className="font-bold text-white">Table Editor এ যান</h5>
                  <p className="text-slate-400">
                    <a href="https://supabase.com/dashboard/project/wcpdbfuhtvcjcjzxzebs/editor" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline font-semibold flex items-center gap-1">
                      <span>Supabase Table Editor</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    অপশনে ক্লিক করুন।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 space-y-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500 text-dark-900 font-black flex items-center justify-center text-xs">২</span>
                  <h5 className="font-bold text-white">টেবিল সিলেক্ট করুন</h5>
                  <p className="text-slate-400">
                    বামদিকের মেনু থেকে <b>members</b>, <b>attendance</b>, <b>salaries</b> বা <b>projects</b> টেবিলে চাপ দিন।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 space-y-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500 text-dark-900 font-black flex items-center justify-center text-xs">৩</span>
                  <h5 className="font-bold text-white">লাইভ র-ডাটা দেখুন</h5>
                  <p className="text-slate-400">
                    সাইট থেকে যুক্ত করা মেম্বার, পিন, দৈনিক হাজিরা ও বেতনের সমস্ত ডাটা রো (Rows) আকারে দেখতে পাবেন!
                  </p>
                </div>
              </div>
            </div>

            {/* Supabase Key Credentials Input */}
            <form onSubmit={handleSaveCloudConfig} className="glass-card p-6 rounded-2xl border border-emerald-500/30 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Key className="w-4 h-4 text-emerald-400" />
                আপনার Supabase এপিআই ক্রেডেনশিয়ালস (API Credentials)
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Supabase Project URL</label>
                  <input
                    type="url"
                    required
                    placeholder="https://wcpdbfuhtvcjcjzxzebs.supabase.co"
                    value={supabaseUrl}
                    onChange={(e) => setSupabaseUrl(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl glass-input text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Supabase Anon Public Key</label>
                  <input
                    type="text"
                    required
                    placeholder="eyJhbGciOiJIUzI1NiIsIn..."
                    value={supabaseKey}
                    onChange={(e) => setSupabaseKey(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl glass-input text-white"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-slate-400">
                  কানেক্টেড স্ট্যাটাস: <strong className={isCloudConnected() ? 'text-emerald-400' : 'text-amber-400'}>{isCloudConnected() ? 'অনলাইন সুপাবেস ডাটাবেস লাইভ 🟢' : 'অফলাইন মোড (Local Fallback) 🟠'}</strong>
                </span>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-black bg-emerald-500 text-dark-900 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform"
                >
                  Supabase এপিআই সেভ করুন
                </button>
              </div>
            </form>

            {/* SQL Schema Copy Box */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-red" />
                  Supabase SQL Editor স্ক্রিপ্ট (১-ক্লিক কপি)
                </h4>

                <button
                  onClick={handleCopySql}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-red/20 text-brand-red border border-brand-red/40 hover:bg-brand-red hover:text-white transition-colors flex items-center gap-1.5"
                >
                  {copiedSql ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSql ? 'কপি হয়েছে!' : 'SQL কোড কপি করুন'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-dark-900/90 text-emerald-400 text-[11px] font-mono overflow-x-auto max-h-48 border border-slate-800">
                {SUPABASE_SQL_SCHEMA}
              </pre>
            </div>

            {/* Backup fallback */}
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
