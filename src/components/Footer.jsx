import React from 'react';
import { Heart, ShieldCheck, UserCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Footer() {
  const { setActiveTab, switchRoleDemo } = useAuth();

  return (
    <footer className="w-full glass-panel border-t border-brand-red/20 mt-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Col 1: Brand Info */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-red to-brand-flame p-0.5 shadow-[0_0_15px_rgba(255,0,51,0.3)]">
              <div className="w-full h-full bg-dark-900 rounded-[10px] p-1.5 flex items-center justify-center">
                <img src="/logo.svg" alt="Kuakata Multimedia Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <span className="text-lg font-black text-white tracking-wider">
              KUAKATA <span className="text-gradient">MULTIMEDIA</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 max-w-md leading-relaxed">
            কুয়াকাটা মাল্টিমিডিয়া লিমিটেড - ৩ডি অ্যানিমেশন, মোশন পিকচার্স, ভার্চুয়াল রিয়েলিটি এবং আধুনিক টিম পোর্টফোলিও & পে-রোল সলিউশন প্রোভাইডার।
          </p>

          <p className="text-xs text-brand-red font-mono font-bold">
            Official Web Domain: www.kuakatamultimedia.com
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">কুইক লিঙ্কস</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><button onClick={() => setActiveTab('home')} className="hover:text-brand-red transition-colors">হোম পেজ</button></li>
            <li><button onClick={() => setActiveTab('team')} className="hover:text-brand-red transition-colors">৩ডি টিম মেম্বারস</button></li>
            <li><button onClick={() => setActiveTab('portfolio')} className="hover:text-brand-red transition-colors">প্রজেক্ট গ্যালারি</button></li>
            <li><button onClick={() => setActiveTab('contact')} className="hover:text-brand-red transition-colors">যোগাযোগ</button></li>
          </ul>
        </div>

        {/* Col 3: Portal Switchers */}
        <div>
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">সিস্টেম পোর্টাল</h4>
          <div className="space-y-2">
            <button
              onClick={() => switchRoleDemo('admin')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold bg-brand-red/10 text-brand-red border border-brand-red/30 hover:bg-brand-red hover:text-white transition-all flex items-center gap-2"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>অ্যাডমিন ড্যাশবোর্ড প্যানেল</span>
            </button>

            <button
              onClick={() => switchRoleDemo('member')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold bg-brand-amber/10 text-brand-amber border border-brand-amber/30 hover:bg-brand-amber hover:text-dark-900 transition-all flex items-center gap-2"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>মেম্বার মাই-পোর্টাল</span>
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 Kuakata Multimedia (www.kuakatamultimedia.com). সর্বস্বত্ব সংরক্ষিত।</p>
        <p className="flex items-center gap-1">
          Crafted with <Heart className="w-3 h-3 text-brand-red fill-brand-red" /> for 3D Multimedia Innovation
        </p>
      </div>
    </footer>
  );
}
