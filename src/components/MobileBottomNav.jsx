import React from 'react';
import { Home, Users, Briefcase, Mail, LayoutDashboard, LogIn, Crown, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function MobileBottomNav() {
  const { user, activeTab, setActiveTab, logout } = useAuth();

  const handleNavClick = (tabId) => {
    if (tabId === 'home') window.location.hash = '';
    else window.location.hash = `#/${tabId}`;
    
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-safe pb-3 pt-2 bg-dark-900/95 backdrop-blur-xl border-t border-slate-800 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-md mx-auto flex items-center justify-around">
        
        {/* Home */}
        <button
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center gap-0.5 p-1.5 rounded-2xl transition-all ${
            activeTab === 'home'
              ? 'text-brand-red font-black scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <div className={`p-1.5 rounded-xl ${activeTab === 'home' ? 'bg-brand-red/20 border border-brand-red/30' : ''}`}>
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-[10px]">হোম</span>
        </button>

        {/* Team */}
        <button
          onClick={() => handleNavClick('team')}
          className={`flex flex-col items-center gap-0.5 p-1.5 rounded-2xl transition-all ${
            activeTab === 'team'
              ? 'text-brand-red font-black scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <div className={`p-1.5 rounded-xl ${activeTab === 'team' ? 'bg-brand-red/20 border border-brand-red/30' : ''}`}>
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-[10px]">টিম</span>
        </button>

        {/* Portfolio */}
        <button
          onClick={() => handleNavClick('portfolio')}
          className={`flex flex-col items-center gap-0.5 p-1.5 rounded-2xl transition-all ${
            activeTab === 'portfolio'
              ? 'text-brand-red font-black scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <div className={`p-1.5 rounded-xl ${activeTab === 'portfolio' ? 'bg-brand-red/20 border border-brand-red/30' : ''}`}>
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-[10px]">কাজ</span>
        </button>

        {/* Portal Dashboard or Login */}
        {user ? (
          <>
            <button
              onClick={() => handleNavClick(user.role === 'admin' ? 'admin-dashboard' : 'member-portal')}
              className={`flex flex-col items-center gap-0.5 p-1.5 rounded-2xl transition-all ${
                activeTab === 'admin-dashboard' || activeTab === 'member-portal'
                  ? 'text-amber-400 font-black scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <div className={`p-1.5 rounded-xl ${activeTab === 'admin-dashboard' || activeTab === 'member-portal' ? 'bg-amber-500/20 border border-amber-500/30' : ''}`}>
                {user.isSuperAdmin ? <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> : <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5" />}
              </div>
              <span className="text-[10px]">{user.role === 'admin' ? 'ড্যাশবোর্ড' : 'পোর্টাল'}</span>
            </button>

            <button
              onClick={logout}
              className="flex flex-col items-center gap-0.5 p-1.5 rounded-2xl text-rose-400 hover:text-rose-300 transition-all"
            >
              <div className="p-1.5 rounded-xl bg-rose-950/80 border border-rose-500/40">
                <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] font-bold text-rose-400">লগআউট</span>
            </button>
          </>
        ) : (
          <button
            onClick={() => handleNavClick('login')}
            className={`flex flex-col items-center gap-0.5 p-1.5 rounded-2xl transition-all ${
              activeTab === 'login'
                ? 'text-brand-red font-black scale-105'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <div className={`p-1.5 rounded-xl ${activeTab === 'login' ? 'bg-brand-red/20 border border-brand-red/30' : ''}`}>
              <LogIn className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red" />
            </div>
            <span className="text-[10px]">লগইন</span>
          </button>
        )}

      </div>
    </div>
  );
}
