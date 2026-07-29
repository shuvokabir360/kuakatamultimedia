import React, { useState } from 'react';
import { 
  UserCheck, 
  Calendar, 
  DollarSign, 
  User, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  AlertTriangle, 
  FileText, 
  Key, 
  Shield, 
  Award,
  Sparkles,
  Phone,
  Mail,
  Building
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';

export default function MemberPortal() {
  const { user } = useAuth();
  const { attendance, salaries, updateMember } = useData();

  const [activeTab, setActiveTab] = useState('overview'); // overview, attendance, salary, profile

  const [phone, setPhone] = useState(user?.phone || '+880 1700-000000');
  const [password, setPassword] = useState('');
  const [savedMsg, setSavedMsg] = useState(false);

  if (!user) return null;

  // Filter attendance records for current logged in member
  const memberAttendance = attendance.filter(a => a.user_id === user.id);
  const presentDays = memberAttendance.filter(a => a.status === 'Present').length;
  const absentDays = memberAttendance.filter(a => a.status === 'Absent').length;
  const leaveDays = memberAttendance.filter(a => a.status === 'Leave').length;
  const halfDays = memberAttendance.filter(a => a.status === 'Half-day').length;

  const totalDays = memberAttendance.length || 1;
  const attendancePercentage = Math.round(((presentDays + (halfDays * 0.5)) / totalDays) * 100);

  // Filter salaries for current member
  const memberSalaries = salaries.filter(s => s.user_id === user.id);
  const latestSalary = memberSalaries[0] || {
    basic_salary: user.basic_salary,
    bonus: 2500,
    deductions: 0,
    net_salary: user.basic_salary + 2500,
    paid_status: 'Paid',
    month: 'জুলাই ২০২৬',
    payment_date: '2026-07-28',
    transaction_id: 'TXN-KM-992211'
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    updateMember({
      ...user,
      phone
    });
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 3000);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8 animate-fade-in">
      
      {/* Member Profile Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-purple/30 shadow-[0_0_40px_rgba(127,0,255,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-brand-purple/50 shadow-xl"
            />
            <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 border-2 border-dark-900" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/30 text-xs font-bold mb-1">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{user.dept} • {user.role === 'admin' ? 'অ্যাডমিন/লিডার' : 'টিম মেম্বার'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{user.name}</h1>
            <p className="text-xs text-slate-300 font-medium">{user.designation}</p>
          </div>
        </div>

        {/* Attendance Score Card */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="glass-card px-5 py-3 rounded-2xl border border-emerald-500/30 text-right w-full md:w-auto">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">মাসিক হাজিরার হার</span>
            <span className="text-2xl font-extrabold text-emerald-400">{attendancePercentage}%</span>
          </div>

          <div className="glass-card px-5 py-3 rounded-2xl border border-brand-cyan/30 text-right w-full md:w-auto">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">সর্বশেষ নিট স্যালারি</span>
            <span className="text-2xl font-extrabold text-brand-cyan">৳ {latestSalary.net_salary.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Member Portal Navigation Tabs */}
      <div className="flex flex-wrap gap-2 glass-panel p-2 rounded-2xl border border-slate-800">
        <button
          id="tab-member-overview"
          onClick={() => setActiveTab('overview')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'overview'
              ? 'bg-brand-purple text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <User className="w-4 h-4" />
          <span>আমার ড্যাশবোর্ড</span>
        </button>

        <button
          id="tab-member-attendance"
          onClick={() => setActiveTab('attendance')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'attendance'
              ? 'bg-brand-purple text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>হাজিরা রিপোর্ট (Attendance Calendar)</span>
        </button>

        <button
          id="tab-member-salary"
          onClick={() => setActiveTab('salary')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'salary'
              ? 'bg-brand-purple text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>বেতন স্টেটমেন্ট (Salary Statements)</span>
        </button>

        <button
          id="tab-member-profile"
          onClick={() => setActiveTab('profile')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'profile'
              ? 'bg-brand-purple text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Key className="w-4 h-4" />
          <span>প্রোফাইল & পাসওয়ার্ড</span>
        </button>
      </div>

      {/* Overview Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">উপস্থিত দিন</span>
              <span className="text-2xl font-extrabold text-emerald-400 mt-1 block">{presentDays} দিন</span>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-rose-500/20">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">অনুপস্থিত দিন</span>
              <span className="text-2xl font-extrabold text-rose-400 mt-1 block">{absentDays} দিন</span>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-amber-500/20">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">অনুমোদিত ছুটি</span>
              <span className="text-2xl font-extrabold text-amber-400 mt-1 block">{leaveDays} দিন</span>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-sky-500/20">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">হাফ-ডে ডিউটি</span>
              <span className="text-2xl font-extrabold text-sky-400 mt-1 block">{halfDays} দিন</span>
            </div>
          </div>

          {/* Current Salary Banner */}
          <div className="glass-panel p-6 rounded-3xl border border-brand-cyan/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-brand-cyan font-bold uppercase tracking-wider block">চলতি মাসের পেমেন্ট স্ট্যাটাস</span>
              <h3 className="text-xl font-bold text-white mt-0.5">জুলাই ২০২৬ সেশনের পে-স্লিপ</h3>
              <p className="text-xs text-slate-400 mt-1">পেমেন্ট মেথড: ব্যাংক / বিকাশ মেটাল ট্রান্সফার</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-4 py-2 rounded-xl text-xs font-extrabold ${
                latestSalary.paid_status === 'Paid' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              }`}>
                {latestSalary.paid_status === 'Paid' ? 'পরিশোধিত (Paid)' : 'প্রসেসিং (Pending)'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Attendance Calendar Tab Content */}
      {activeTab === 'attendance' && (
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-purple" />
              মাসিক হাজিরা ক্যালেন্ডার ও রেকর্ডস (জুলাই ২০২৬)
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {memberAttendance.map((rec) => (
              <div
                key={rec.id}
                className={`p-3 rounded-2xl border text-center space-y-1 ${
                  rec.status === 'Present'
                    ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-400'
                    : rec.status === 'Absent'
                    ? 'bg-rose-950/20 border-rose-500/30 text-rose-400'
                    : rec.status === 'Leave'
                    ? 'bg-amber-950/20 border-amber-500/30 text-amber-400'
                    : 'bg-sky-950/20 border-sky-500/30 text-sky-400'
                }`}
              >
                <span className="text-[10px] text-slate-400 block font-semibold">{rec.date}</span>
                <span className="text-xs font-extrabold block">
                  {rec.status === 'Present' ? 'উপস্থিত' : rec.status === 'Absent' ? 'অনুপস্থিত' : rec.status === 'Leave' ? 'ছুটি' : 'হাফ-ডে'}
                </span>
                <span className="text-[9px] text-slate-400 block">{rec.checkIn} - {rec.checkOut}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Salary Statements Tab Content */}
      {activeTab === 'salary' && (
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-white flex items-center gap-2 pb-4 border-b border-slate-800">
            <DollarSign className="w-5 h-5 text-brand-cyan" />
            আমার মাসভিত্তিক বেতনের স্টেটমেন্ট ও হিসাব বিবরণী
          </h3>

          <div className="space-y-4">
            {memberSalaries.map((sal) => (
              <div key={sal.id} className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs text-brand-cyan font-bold block">{sal.month}</span>
                  <span className="text-lg font-extrabold text-white block mt-0.5">৳ {sal.net_salary.toLocaleString()}</span>
                  <span className="text-[11px] text-slate-400">
                    বেসিক: ৳{sal.basic_salary.toLocaleString()} | বোনাস: +৳{sal.bonus.toLocaleString()} | ডিডাকশন: -৳{sal.deductions.toLocaleString()}
                  </span>
                </div>

                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    sal.paid_status === 'Paid' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {sal.paid_status === 'Paid' ? `Paid (${sal.payment_date})` : 'Pending'}
                  </span>
                  {sal.transaction_id && (
                    <span className="block text-[10px] text-slate-500 font-mono mt-1">
                      TXN: {sal.transaction_id}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Profile Settings Tab Content */}
      {activeTab === 'profile' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-xl mx-auto space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <User className="w-5 h-5 text-brand-purple" />
            ব্যক্তিগত প্রোফাইল ও পাসওয়ার্ড পরিবর্তন
          </h3>

          {savedMsg && (
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              প্রোফাইল তথ্য সফলভাবে সেভ করা হয়েছে!
            </div>
          )}

          <form onSubmit={handleProfileSave} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 mb-1">নাম</label>
              <input type="text" disabled value={user.name} className="w-full px-3 py-2 rounded-xl glass-input opacity-70" />
            </div>

            <div>
              <label className="block text-slate-300 mb-1">ইমেইল</label>
              <input type="email" disabled value={user.email} className="w-full px-3 py-2 rounded-xl glass-input opacity-70" />
            </div>

            <div>
              <label className="block text-slate-300 mb-1">ফোন নম্বর</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-white font-bold"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1">নতুন পাসওয়ার্ড (Password Change)</label>
              <input
                type="password"
                placeholder="নতুন পাসওয়ার্ড লিখুন..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold bg-brand-purple text-white shadow-lg hover:scale-[1.01] transition-transform"
            >
              আপডেট সেভ করুন
            </button>
          </form>
        </div>
      )}

    </div>
  );
}
