import React, { useState } from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  LogIn, 
  LogOut, 
  LayoutDashboard,
  Menu, 
  X,
  Crown
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onOpenAuthModal }) {
  const { user, activeTab, setActiveTab, logout, switchRoleDemo } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tabId) => {
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
            <span className="text-xl font-black text-white tracking-wider flex items-center gap-1">
              KUAKATA <span className="text-gradient">MULTIMEDIA</span>
            </span>
            <span className="block text-[10px] text-slate-400 font-semibold tracking-widest uppercase">
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

        {/* Auth / Dashboard Controls */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <button
                id="btn-portal-access"
                onClick={() => handleNavClick(user.role === 'admin' ? 'admin-dashboard' : 'member-portal')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-flame to-brand-gold text-white shadow-md shadow-brand-red/30 hover:scale-105 transition-transform"
              >
                {user.isSuperAdmin ? <Crown className="w-4 h-4 text-amber-300" /> : <LayoutDashboard className="w-4 h-4" />}
                <span>{user.isSuperAdmin ? 'সুপার অ্যাডমিন ড্যাশবোর্ড' : user.role === 'admin' ? 'অ্যাডমিন ড্যাশবোর্ড' : 'মেম্বার পোর্টাল'}</span>
              </button>

              <button
                id="btn-logout"
                onClick={logout}
                title="লগআউট"
                className="p-2 rounded-xl glass-panel text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                id="btn-quick-superadmin"
                onClick={() => switchRoleDemo('superadmin')}
                className="px-3 py-2 rounded-xl text-[11px] font-bold text-amber-400 glass-panel hover:bg-amber-500/10 border border-amber-500/40 flex items-center gap-1.5"
              >
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>সুপার অ্যাডমিন</span>
              </button>

              <button
                id="btn-quick-admin"
                onClick={() => switchRoleDemo('admin')}
                className="px-3 py-2 rounded-xl text-[11px] font-semibold text-brand-red glass-panel hover:bg-brand-red/10 border border-brand-red/40 flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>অ্যাডমিন</span>
              </button>

              <button
                id="btn-login-modal"
                onClick={onOpenAuthModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand-red text-white hover:bg-white hover:text-dark-900 transition-colors shadow-md shadow-brand-red/30"
              >
                <LogIn className="w-4 h-4" />
                <span>লগইন / Google</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="btn-mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg glass-panel text-slate-200 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            {user ? (
              <button
                onClick={() => handleNavClick(user.role === 'admin' ? 'admin-dashboard' : 'member-portal')}
                className="w-full py-2.5 rounded-lg text-xs font-bold bg-brand-red text-white text-center"
              >
                {user.isSuperAdmin ? 'সুপার অ্যাডমিন ড্যাশবোর্ড' : user.role === 'admin' ? 'অ্যাডমিন ড্যাশবোর্ড' : 'মেম্বার পোর্টাল'}
              </button>
            ) : (
              <>
                <button
                  onClick={() => { switchRoleDemo('superadmin'); setMobileMenuOpen(false); }}
                  className="w-full py-2.5 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 text-center"
                >
                  সুপার অ্যাডমিন (shuvokuakata27@gmail.com)
                </button>
                <button
                  onClick={() => { switchRoleDemo('admin'); setMobileMenuOpen(false); }}
                  className="w-full py-2.5 rounded-lg text-xs font-bold bg-brand-red/20 text-brand-red border border-brand-red/30 text-center"
                >
                  অ্যাডমিন হিসেবে ডেমো লগইন
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
