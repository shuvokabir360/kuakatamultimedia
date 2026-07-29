import React, { useState } from 'react';
import { 
  ShieldCheck, 
  LogIn, 
  LogOut, 
  LayoutDashboard,
  Menu, 
  X,
  Crown
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onOpenAuthModal }) {
  const { user, activeTab, setActiveTab, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tabId) => {
    if (tabId === 'home') window.location.hash = '';
    else window.location.hash = `#/${tabId}`;
    
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-brand-red/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-red via-brand-crimson to-brand-wine p-0.5 shadow-[0_0_20px_rgba(255,0,51,0.4)] group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-dark-900 rounded-[10px] p-1.5 flex items-center justify-center">
              <img src="/logo.svg" alt="Kuakata Multimedia Logo" className="w-full h-full object-contain group-hover:rotate-6 transition-transform" />
            </div>
          </div>
          <div>
            <span className="text-lg sm:text-xl font-black text-white tracking-wider flex items-center gap-1">
              KUAKATA <span className="text-gradient">MULTIMEDIA</span>
            </span>
            <span className="block text-[9px] sm:text-[10px] text-slate-400 font-semibold tracking-widest uppercase">
              www.kuakatamultimedia.com
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-slate-800">
          <button
            id="nav-home"
            onClick={() => handleNavClick('home')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'home'
                ? 'bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            হোম (Home)
          </button>
          
          <button
            id="nav-team"
            onClick={() => handleNavClick('team')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'team'
                ? 'bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            টিম মেম্বার (Team)
          </button>

          <button
            id="nav-portfolio"
            onClick={() => handleNavClick('portfolio')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'portfolio'
                ? 'bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            পোর্টফোলিও (Portfolio)
          </button>

          <button
            id="nav-contact"
            onClick={() => handleNavClick('contact')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'contact'
                ? 'bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            যোগাযোগ (Contact)
          </button>
        </nav>

        {/* Auth / Dashboard Controls (Desktop & Mobile Quick Badge) */}
        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              <button
                id="btn-portal-access"
                onClick={() => handleNavClick(user.role === 'admin' ? 'admin-dashboard' : 'member-portal')}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-flame to-brand-gold text-white shadow-md shadow-brand-red/30 hover:scale-105 transition-transform"
              >
                {user.isSuperAdmin ? <Crown className="w-4 h-4 text-amber-300 shrink-0" /> : <LayoutDashboard className="w-4 h-4 shrink-0" />}
                <span className="hidden sm:inline">{user.isSuperAdmin ? 'সুপার অ্যাডমিন ড্যাশবোর্ড' : user.role === 'admin' ? 'অ্যাডমিন ড্যাশবোর্ড' : 'মেম্বার পোর্টাল'}</span>
                <span className="sm:hidden">ড্যাশবোর্ড</span>
              </button>

              <button
                id="btn-logout"
                onClick={logout}
                title="লগআউট"
                className="px-3 py-2 rounded-xl bg-rose-950/80 text-rose-400 border border-rose-500/40 hover:bg-rose-600 hover:text-white font-bold text-xs transition-colors flex items-center gap-1 shrink-0"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">লগআউট</span>
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-2">
              <button
                id="btn-login-page"
                onClick={() => handleNavClick('login')}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all shadow-md ${
                  activeTab === 'login'
                    ? 'bg-white text-dark-900 shadow-white/30'
                    : 'bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white hover:brightness-110 shadow-brand-red/30'
                }`}
              >
                <LogIn className="w-4 h-4" />
                <span>লগইন করুন (/login)</span>
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-panel text-slate-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800 p-4 space-y-3">
          <button onClick={() => handleNavClick('home')} className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800">
            হোম (Home)
          </button>
          <button onClick={() => handleNavClick('team')} className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800">
            টিম মেম্বার (Team)
          </button>
          <button onClick={() => handleNavClick('portfolio')} className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800">
            পোর্টফোলিও (Portfolio)
          </button>
          <button onClick={() => handleNavClick('contact')} className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800">
            যোগাযোগ (Contact)
          </button>

          {user ? (
            <button
              onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-black bg-rose-600 text-white flex items-center justify-between"
            >
              <span>লগআউট করুন (Logout)</span>
              <LogOut className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={() => handleNavClick('login')} className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-extrabold text-brand-red hover:bg-slate-800">
              লগইন করুন (/login)
            </button>
          )}
        </div>
      )}
    </header>
  );
}
