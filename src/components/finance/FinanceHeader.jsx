import React from 'react';
import { Settings, LogOut, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function FinanceHeader({ onOpenSettings }) {
  const { logout, user } = useAuth();

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-xl">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand Avatar & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md p-1 border border-white/30 flex items-center justify-center shrink-0 shadow-md">
            <img src="/logo.svg" alt="Kuakata Multimedia" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-base font-black tracking-wide leading-tight">
              Kuakata Multimedia Finance
            </h1>
            <p className="text-[11px] text-red-100 font-medium">টিম ব্যবস্থাপনা</p>
          </div>
        </div>

        {/* Top Right Action Icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSettings}
            title="সেটিংস"
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white/90"
          >
            <Settings className="w-5 h-5" />
          </button>

          <button
            onClick={logout}
            title="লগআউট"
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white/90"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>

      </div>
    </header>
  );
}
