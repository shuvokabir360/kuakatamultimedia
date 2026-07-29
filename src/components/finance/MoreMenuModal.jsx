import React from 'react';
import { 
  Users, 
  Clapperboard, 
  Tv, 
  Wallet, 
  FileText, 
  UserCheck, 
  MessageSquare, 
  Sparkles,
  X 
} from 'lucide-react';

export default function MoreMenuModal({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null;

  const menuItems = [
    { id: 'members', label: 'সদস্য', icon: Users, color: 'text-red-500 bg-red-50' },
    { id: 'shootings', label: 'শুটিং', icon: Clapperboard, color: 'text-red-500 bg-red-50' },
    { id: 'channels', label: 'চ্যানেল/পরিচালক', icon: Tv, color: 'text-red-500 bg-red-50' },
    { id: 'clients', label: 'ক্লায়েন্ট হিসাব', icon: Wallet, color: 'text-red-500 bg-red-50' },
    { id: 'reports', label: 'রিপোর্ট/PDF', icon: FileText, color: 'text-red-500 bg-red-50' },
    { id: 'checking', label: 'অ্যাকাউন্ট চেকিং', icon: UserCheck, color: 'text-red-500 bg-red-50' },
    { id: 'sms', label: 'গ্রুপ SMS', icon: MessageSquare, color: 'text-red-500 bg-red-50' },
    { id: 'greetings', label: 'অভিনন্দন কার্ড', icon: Sparkles, color: 'text-red-500 bg-red-50' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-lg font-black text-slate-900">আরও মেনু</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 8-Grid Items (Matching Screenshot 4) */}
        <div className="grid grid-cols-3 gap-3 pt-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-rose-50 hover:border-red-200 transition-all flex flex-col items-center justify-center gap-2 group active:scale-95 shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-white text-red-500 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-extrabold text-slate-800 text-center leading-tight">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
