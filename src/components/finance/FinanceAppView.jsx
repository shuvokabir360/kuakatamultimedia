import React, { useState } from 'react';
import FinanceHeader from './FinanceHeader';
import FinanceHome from './FinanceHome';
import FinanceAttendance from './FinanceAttendance';
import FinancePayment from './FinancePayment';
import FinanceMembers from './FinanceMembers';
import FinanceShootings from './FinanceShootings';
import FinanceDirectory from './FinanceDirectory';
import FinanceClients from './FinanceClients';
import MoreMenuModal from './MoreMenuModal';
import FinanceBottomBar from './FinanceBottomBar';
import { useAuth } from '../../context/AuthContext';
import { ShieldAlert } from 'lucide-react';

export default function FinanceAppView() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('home');
  const [moreModalOpen, setMoreModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-20 relative">
      
      {/* Mobile App Grid Pattern Background matching Screenshots */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: 'radial-gradient(#FF4D36 0.75px, transparent 0.75px)',
          backgroundSize: '16px 16px'
        }}
      />

      <div className="relative z-10 max-w-md mx-auto min-h-screen bg-slate-50/90 shadow-2xl border-x border-slate-200">
        
        {/* Top App Bar Header */}
        <FinanceHeader onOpenSettings={() => setMoreModalOpen(true)} />

        {/* Main Content Body */}
        <div className="p-4 sm:p-5">
          {activeTab === 'home' && <FinanceHome onNavigate={(t) => setActiveTab(t)} />}
          {activeTab === 'attendance' && <FinanceAttendance />}
          {activeTab === 'payment' && <FinancePayment />}
          {activeTab === 'members' && <FinanceMembers />}
          {activeTab === 'shootings' && <FinanceShootings openAddModalDirectly={false} />}
          {activeTab === 'channels' && <FinanceDirectory />}
          {activeTab === 'clients' && <FinanceClients />}
        </div>

        {/* Bottom Navigation Dock */}
        <FinanceBottomBar
          activeTab={activeTab}
          onSelectTab={(t) => setActiveTab(t)}
          onOpenMore={() => setMoreModalOpen(true)}
        />

        {/* More Menu Popup Modal */}
        <MoreMenuModal
          isOpen={moreModalOpen}
          onClose={() => setMoreModalOpen(false)}
          onNavigate={(target) => {
            if (target === 'members') setActiveTab('members');
            else if (target === 'shootings') setActiveTab('shootings');
            else if (target === 'channels') setActiveTab('channels');
            else if (target === 'clients') setActiveTab('clients');
            else alert(`${target} প্যানেল প্রস্তুত রয়েছে!`);
          }}
        />

      </div>

    </div>
  );
}
