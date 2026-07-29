import React from 'react';
import { LayoutGrid, Calendar, DollarSign, MoreHorizontal } from 'lucide-react';

export default function FinanceBottomBar({ activeTab, onSelectTab, onOpenMore }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-2 pb-safe pb-2 pt-1 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
      <div className="max-w-md mx-auto flex items-center justify-around">
        
        {/* 1. HOME */}
        <button
          onClick={() => onSelectTab('home')}
          className={`flex flex-col items-center gap-0.5 p-2 rounded-2xl transition-all ${
            activeTab === 'home'
              ? 'text-white font-black scale-105'
              : 'text-red-200 hover:text-white'
          }`}
        >
          <div className={`p-1.5 rounded-xl ${activeTab === 'home' ? 'bg-white text-red-600 shadow-md' : ''}`}>
            <LayoutGrid className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">হোম</span>
        </button>

        {/* 2. ATTENDANCE */}
        <button
          onClick={() => onSelectTab('attendance')}
          className={`flex flex-col items-center gap-0.5 p-2 rounded-2xl transition-all ${
            activeTab === 'attendance'
              ? 'text-white font-black scale-105'
              : 'text-red-200 hover:text-white'
          }`}
        >
          <div className={`p-1.5 rounded-xl ${activeTab === 'attendance' ? 'bg-white text-red-600 shadow-md' : ''}`}>
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">হাজিরা</span>
        </button>

        {/* 3. PAYMENT */}
        <button
          onClick={() => onSelectTab('payment')}
          className={`flex flex-col items-center gap-0.5 p-2 rounded-2xl transition-all ${
            activeTab === 'payment'
              ? 'text-white font-black scale-105'
              : 'text-red-200 hover:text-white'
          }`}
        >
          <div className={`p-1.5 rounded-xl ${activeTab === 'payment' ? 'bg-white text-red-600 shadow-md' : ''}`}>
            <DollarSign className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">পেমেন্ট</span>
        </button>

        {/* 4. MORE MENU */}
        <button
          onClick={onOpenMore}
          className="flex flex-col items-center gap-0.5 p-2 rounded-2xl text-red-200 hover:text-white transition-all"
        >
          <div className="p-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
            <MoreHorizontal className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">আরও</span>
        </button>

      </div>
    </div>
  );
}
