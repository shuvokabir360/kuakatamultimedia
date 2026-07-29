import React, { useState } from 'react';
import FinanceHeader from './FinanceHeader';
import FinanceHome from './FinanceHome';
import FinanceAttendance from './FinanceAttendance';
import FinancePayment from './FinancePayment';
import FinanceMembers from './FinanceMembers';
import FinanceShootings from './FinanceShootings';
import FinanceDirectory from './FinanceDirectory';
import FinanceClients from './FinanceClients';
import FinanceReports from './FinanceReports';
import FinanceChecking from './FinanceChecking';
import FinanceSMS from './FinanceSMS';
import FinanceGreetings from './FinanceGreetings';
import MoreMenuModal from './MoreMenuModal';
import FinanceBottomBar from './FinanceBottomBar';
import { useAuth } from '../../context/AuthContext';
import { 
  ShieldAlert, 
  LayoutGrid, 
  Calendar, 
  DollarSign, 
  Users, 
  Film, 
  Tv, 
  Briefcase, 
  Settings, 
  LogOut,
  Plus,
  Bell,
  Search,
  ShieldCheck,
  ExternalLink,
  FileText,
  UserCheck,
  MessageSquare,
  Sparkles,
  Clapperboard,
  Wallet
} from 'lucide-react';

export default function FinanceAppView() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('home');
  const [moreModalOpen, setMoreModalOpen] = useState(false);

  // Quick Action Modal states for PC top bar
  const [shootingModalTrigger, setShootingModalTrigger] = useState(false);

  // Security Check: Only Admin (shuvokuakata27@gmail.com) can access Finance Control Dashboard
  if (!user || (user.role !== 'admin' && !user.isSuperAdmin)) {
    return (
      <div className="min-h-screen py-20 px-4 flex flex-col items-center justify-center text-center bg-slate-900 text-white space-y-4">
        <div className="w-16 h-16 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center border border-rose-500/40">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-white">Access Denied</h2>
        <p className="text-xs text-slate-400 max-w-sm">
          শুধুমাত্র সুপার অ্যাডমিন ইমেইল (<b className="text-rose-400">shuvokuakata27@gmail.com</b>) দিয়ে লগইন করলে ড্যাশবোর্ডে প্রবেশের অনুমতি মিলবে।
        </p>
        <button
          onClick={() => window.location.hash = '#/login'}
          className="px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs shadow-lg"
        >
          অ্যাডমিন লগইন করুন
        </button>
      </div>
    );
  }

  // Navigation Items Config (Includes all 8 items from More Menu + Core items)
  const navItems = [
    { id: 'home', label: 'ড্যাশবোর্ড', subtitle: 'ওভারভিউ ও সামারি', icon: LayoutGrid },
    { id: 'attendance', label: 'দৈনিক হাজিরা', subtitle: 'টিম মেম্বারদের উপস্থিতি', icon: Calendar },
    { id: 'payment', label: 'পেমেন্ট প্যানেল', subtitle: 'বেতন ও লেনদেন', icon: DollarSign },
    { id: 'members', label: 'সদস্য', subtitle: 'টিম মেম্বার পরিচিতি', icon: Users },
    { id: 'shootings', label: 'শুটিং', subtitle: 'নাটক ও শুটিং রেকর্ড', icon: Clapperboard },
    { id: 'channels', label: 'চ্যানেল/পরিচালক', subtitle: 'ইউটিউব ডিরেক্টরি', icon: Tv },
    { id: 'clients', label: 'ক্লায়েন্ট হিসাব', subtitle: 'বাইরের চ্যানেলের পাওনা', icon: Wallet },
    { id: 'reports', label: 'রিপোর্ট/PDF', subtitle: 'আর্থিক স্টেটমেন্ট প্রিন্ট', icon: FileText },
    { id: 'checking', label: 'অ্যাকাউন্ট চেকিং', subtitle: 'আইডি ও পিন ভেরিফিকেশন', icon: UserCheck },
    { id: 'sms', label: 'গ্রুপ SMS', subtitle: 'টিমে বাল্ক নোটিশ SMS', icon: MessageSquare },
    { id: 'greetings', label: 'অভিনন্দন কার্ড', subtitle: 'শুভেচ্ছা ও সম্মাননা পত্র', icon: Sparkles },
  ];

  const getPageTitle = () => {
    switch(activeTab) {
      case 'home': return { title: 'ড্যাশবোর্ড ওভারভিউ', subtitle: 'কুয়াকাটা মাল্টিমিডিয়া ফিন্যান্স ও টিম ম্যানেজমেন্ট' };
      case 'attendance': return { title: 'দৈনিক হাজিরা শট', subtitle: 'টিম কর্মীদের উপস্থিতি গ্রহণ ও হিস্ট্রি' };
      case 'payment': return { title: 'পেমেন্ট ড্যাশবোর্ড', subtitle: 'সদস্যদের বেতন ও বকেয়া পরিশোধ' };
      case 'members': return { title: 'সদস্য পরিচিতি ও তালিকা', subtitle: 'টিম মেম্বারদের বিবরণ ও প্রোফাইল' };
      case 'shootings': return { title: 'শুটিং শিডিউল ও বাজেট', subtitle: 'চলতি ও পূর্বের সকল শুটিং রেকর্ড' };
      case 'channels': return { title: 'অফিসিয়াল ডিরেক্টরি', subtitle: 'ইউটিউব চ্যানেল ও পরিচালকবৃন্দ' };
      case 'clients': return { title: 'ক্লায়েন্ট পোর্টাল', subtitle: 'বাইরের মিডিয়া হাউজের পাওনা ও প্রাপ্তি' };
      case 'reports': return { title: 'রিপোর্ট & PDF সেন্টার', subtitle: 'হিসাব নিকেশ ডাউনলোড ও ফাইল প্রিন্ট' };
      case 'checking': return { title: 'অ্যাকাউন্ট ভেরিফিকেশন', subtitle: 'মেম্বার আইডি ও সিকিউরিটি পিন সিকিউরিটি' };
      case 'sms': return { title: 'গ্রুপ SMS ব্রডকাস্ট', subtitle: 'টিম সদস্যদের নোটিফিকেশন মেসেজ' };
      case 'greetings': return { title: 'অভিনন্দন ও সম্মাননা পত্র', subtitle: 'ডিজিটাল কার্ড মেকার ও শেয়ারিং' };
      default: return { title: 'ড্যাশবোর্ড', subtitle: 'কুয়াকাটা মাল্টিমিডিয়া' };
    }
  };

  const currentPage = getPageTitle();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 relative">
      
      {/* Background Dot Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage: 'radial-gradient(#FF4D36 0.75px, transparent 0.75px)',
          backgroundSize: '18px 18px'
        }}
      />

      {/* ==========================================
          1. MOBILE VIEW LAYOUT (< md screens)
      ========================================== */}
      <div className="md:hidden relative z-10 max-w-md mx-auto min-h-screen bg-slate-50/90 shadow-2xl border-x border-slate-200 pb-20">
        <FinanceHeader onOpenSettings={() => setMoreModalOpen(true)} />

        <div className="p-4 sm:p-5">
          {activeTab === 'home' && <FinanceHome onNavigate={(t) => setActiveTab(t)} />}
          {activeTab === 'attendance' && <FinanceAttendance />}
          {activeTab === 'payment' && <FinancePayment />}
          {activeTab === 'members' && <FinanceMembers />}
          {activeTab === 'shootings' && <FinanceShootings openAddModalDirectly={shootingModalTrigger} />}
          {activeTab === 'channels' && <FinanceDirectory />}
          {activeTab === 'clients' && <FinanceClients />}
          {activeTab === 'reports' && <FinanceReports />}
          {activeTab === 'checking' && <FinanceChecking />}
          {activeTab === 'sms' && <FinanceSMS />}
          {activeTab === 'greetings' && <FinanceGreetings />}
        </div>

        <FinanceBottomBar
          activeTab={activeTab}
          onSelectTab={(t) => setActiveTab(t)}
          onOpenMore={() => setMoreModalOpen(true)}
        />

        <MoreMenuModal
          isOpen={moreModalOpen}
          onClose={() => setMoreModalOpen(false)}
          onNavigate={(target) => {
            setActiveTab(target);
          }}
        />
      </div>

      {/* ==========================================
          2. PC / DESKTOP VIEW LAYOUT (>= md screens)
      ========================================== */}
      <div className="hidden md:flex min-h-screen relative z-10">
        
        {/* PC Left Fixed Sidebar */}
        <aside className="w-64 lg:w-72 bg-slate-900 text-slate-100 flex flex-col justify-between fixed top-0 bottom-0 left-0 z-40 border-r border-slate-800 shadow-2xl select-none">
          
          <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
            {/* Sidebar Logo Header */}
            <div className="p-5 lg:p-6 border-b border-slate-800/80 bg-slate-950/60 flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 p-2 shadow-lg shadow-red-600/30 flex items-center justify-center shrink-0 border border-white/20">
                <img src="/logo.svg" alt="Kuakata Multimedia" className="w-full h-full object-contain filter drop-shadow" />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm lg:text-base font-black text-white tracking-wide leading-tight truncate">
                  Kuakata Finance
                </h1>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] lg:text-[11px] font-bold text-slate-400 truncate">অনলাইন ড্যাশবোর্ড</span>
                </div>
              </div>
            </div>

            {/* Sidebar Nav Links */}
            <nav className="p-3 lg:p-4 space-y-1 flex-1">
              <span className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider px-3 mb-2 block">
                মূল মেনু
              </span>

              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full px-3.5 py-2.5 lg:px-4 lg:py-2.5 rounded-2xl text-left transition-all flex items-center justify-between group ${
                      isActive
                        ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold shadow-lg shadow-red-600/25 border border-red-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 lg:gap-3 min-w-0">
                      <div className={`p-1.5 lg:p-2 rounded-xl transition-colors shrink-0 ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-red-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-black block leading-tight truncate">{item.label}</span>
                        <span className={`text-[10px] font-medium block truncate ${isActive ? 'text-red-100' : 'text-slate-500'}`}>
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    {isActive && (
                      <span className="w-1.5 h-5 rounded-full bg-white shadow-sm shrink-0 ml-1"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Sidebar Footer User Card */}
            <div className="p-3 lg:p-4 border-t border-slate-800 bg-slate-950/70 space-y-2.5 shrink-0">
              <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-red-600 text-white font-black text-xs flex items-center justify-center border border-white/20 shrink-0 shadow-md">
                    KM
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-black text-white truncate">{user?.name || 'Shuvo Kabir'}</h4>
                    <p className="text-[10px] text-slate-400 truncate">{user?.email || 'shuvokuakata27@gmail.com'}</p>
                  </div>
                </div>

                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setMoreModalOpen(true)}
                  className="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold flex items-center justify-center gap-1 transition-colors border border-slate-700/60"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>সেটিংস</span>
                </button>

                <button
                  onClick={logout}
                  className="py-2 px-2.5 rounded-xl bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white font-bold flex items-center justify-center gap-1 transition-colors border border-rose-500/30"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>লগআউট</span>
                </button>
              </div>
            </div>
          </div>

        </aside>

        {/* PC Main Content Area */}
        <main className="ml-64 lg:ml-72 flex-1 flex flex-col min-h-screen bg-slate-100 text-slate-900">
          
          {/* PC Top Header Bar */}
          <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-8 py-4 flex items-center justify-between shadow-sm">
            
            {/* Left: Active Page Title & Subtitle */}
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>{currentPage.title}</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {currentPage.subtitle}
              </p>
            </div>

            {/* Right: Quick Action Shortcuts & Profile */}
            <div className="flex items-center gap-3">
              
              {/* Shortcut 1: Add Member */}
              <button
                onClick={() => setActiveTab('members')}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black shadow-md flex items-center gap-1.5 transition-transform active:scale-95"
              >
                <Users className="w-3.5 h-3.5 text-red-400" />
                <span>সদস্য ম্যানেজ</span>
              </button>

              {/* Shortcut 2: Add Payment */}
              <button
                onClick={() => setActiveTab('payment')}
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-md shadow-red-500/20 flex items-center gap-1.5 transition-transform active:scale-95"
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>পেমেন্ট এন্ট্রি</span>
              </button>

              {/* Shortcut 3: Add Shooting */}
              <button
                onClick={() => {
                  setActiveTab('shootings');
                  setShootingModalTrigger(true);
                }}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-md shadow-emerald-500/20 flex items-center gap-1.5 transition-transform active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>নতুন শুটিং</span>
              </button>

              <div className="h-6 w-px bg-slate-200 mx-1"></div>

              {/* Settings Button */}
              <button
                onClick={() => setMoreModalOpen(true)}
                title="সেটিংস ও হেল্প"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
              >
                <Settings className="w-4 h-4" />
              </button>

            </div>

          </header>

          {/* PC Main Body Content */}
          <div className="p-8 xl:p-10 max-w-7xl w-full mx-auto flex-1">
            {activeTab === 'home' && <FinanceHome onNavigate={(t) => setActiveTab(t)} />}
            {activeTab === 'attendance' && <FinanceAttendance />}
            {activeTab === 'payment' && <FinancePayment />}
            {activeTab === 'members' && <FinanceMembers />}
            {activeTab === 'shootings' && <FinanceShootings openAddModalDirectly={shootingModalTrigger} />}
            {activeTab === 'channels' && <FinanceDirectory />}
            {activeTab === 'clients' && <FinanceClients />}
            {activeTab === 'reports' && <FinanceReports />}
            {activeTab === 'checking' && <FinanceChecking />}
            {activeTab === 'sms' && <FinanceSMS />}
            {activeTab === 'greetings' && <FinanceGreetings />}
          </div>

        </main>

        {/* More / Settings Modal */}
        <MoreMenuModal
          isOpen={moreModalOpen}
          onClose={() => setMoreModalOpen(false)}
          onNavigate={(target) => {
            setActiveTab(target);
          }}
        />

      </div>

    </div>
  );
}


