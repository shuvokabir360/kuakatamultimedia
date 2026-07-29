import React from 'react';
import { Users, ArrowUpRight, ChevronRight, Plus, TrendingUp } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';
import ShootingCalendar from './ShootingCalendar';

export default function FinanceHome({ onNavigate }) {
  const { members = [], clients = [] } = useData() || {};

  // Calculate dynamic greeting based on Bangladesh time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 6) return { text: 'সুবেহ সাদেক', icon: '🌅' };
    if (hour >= 6 && hour < 12) return { text: 'শুভ সকাল', icon: '☀️' };
    if (hour >= 12 && hour < 15) return { text: 'শুভ দুপুর', icon: '🌤️' };
    if (hour >= 15 && hour < 18) return { text: 'শুভ বিকাল', icon: '⛅' };
    if (hour >= 18 && hour < 20) return { text: 'শুভ সন্ধ্যা', icon: '🌆' };
    return { text: 'শুভ রাত্রি', icon: '🌙' };
  };

  const greeting = getGreeting();

  const safeMembers = members || [];
  const safeClients = clients || [];

  const totalDues = safeMembers.reduce((sum, m) => sum + (m?.balance || 0), 0);
  const prevDues = 12500;
  const currentMonthDues = totalDues > prevDues ? totalDues - prevDues : 6000;
  const paidThisMonth = 163500;

  // Client calculations
  const totalClientDues = safeClients.reduce((sum, c) => sum + (c?.due_amount || 0), 0);
  const totalClientReceivable = safeClients.reduce((sum, c) => sum + (c?.contract_amount || 0), 0);
  const totalClientReceived = safeClients.reduce((sum, c) => sum + (c?.received_amount || 0), 0);

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Time Based Greeting & Kuakata Weather Widget */}
      <div className="text-center pt-2 space-y-1.5">
        <h2 className="text-2xl font-black text-slate-900 flex items-center justify-center gap-2">
          <span>{greeting.text}</span>
          <span className="text-2xl">{greeting.icon}</span>
        </h2>

        <div className="text-xs text-slate-600 space-y-0.5 font-medium">
          <div className="flex items-center justify-center gap-1.5 text-slate-700 font-semibold">
            <span className="text-base">🌧️</span>
            <span>আজ বজ্রসহ বৃষ্টি • তাপমাত্রা ২৮°C</span>
          </div>
          <p className="text-[11px] text-slate-500">
            সর্বোচ্চ ২৮° / সর্বনিম্ন ২৩° • আজ বৃষ্টি হওয়ার সম্ভাবনা রয়েছে ({toBnNum(100)}%)
          </p>
        </div>
      </div>

      {/* 1. MAIN CARD: মোট বকেয়া */}
      <div className="bg-gradient-to-br from-red-500 via-rose-600 to-red-600 text-white rounded-3xl p-5 shadow-xl shadow-red-500/20 space-y-4 relative overflow-hidden">
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-red-100 uppercase tracking-wider">মোট বকেয়া</span>
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold text-white">
            জুলাই ২০২৬
          </span>
        </div>

        <div>
          <div className="text-3xl sm:text-4xl font-black tracking-tight">
            ৳ {toBnNum(totalDues.toLocaleString())}
          </div>
        </div>

        {/* Sub-cards Grid */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="bg-white/15 backdrop-blur-md p-3 rounded-2xl border border-white/20">
            <span className="text-[10px] text-red-100 font-semibold block mb-0.5">পূর্বের বকেয়া</span>
            <span className="text-sm font-extrabold">৳ {toBnNum(prevDues.toLocaleString())}</span>
          </div>

          <div className="bg-white/15 backdrop-blur-md p-3 rounded-2xl border border-white/20">
            <span className="text-[10px] text-red-100 font-semibold block mb-0.5">এই মাসের বকেয়া</span>
            <span className="text-sm font-extrabold">৳ {toBnNum(currentMonthDues.toLocaleString())}</span>
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-2 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-red-100 font-medium block">এই মাসে পরিশোধ</span>
            <span className="text-sm font-black">৳ {toBnNum(paidThisMonth.toLocaleString())}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('members')}
              className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-xs font-extrabold text-white flex items-center gap-1 border border-white/30 transition-transform active:scale-95"
            >
              <Users className="w-3.5 h-3.5" />
              <span>বকেয়া তালিকা</span>
            </button>

            <button
              onClick={() => onNavigate('payment')}
              className="px-3.5 py-2 rounded-xl bg-white text-red-600 hover:bg-red-50 text-xs font-black flex items-center gap-1 shadow-md transition-transform active:scale-95"
            >
              <span>পেমেন্ট</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* 2. CARD: ক্লায়েন্ট হিসাব */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-md space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-red-500" />
            <h3 className="text-sm font-black text-slate-800">ক্লায়েন্ট হিসাব</h3>
          </div>
          <button
            onClick={() => onNavigate('clients')}
            className="text-xs font-bold text-red-500 hover:underline flex items-center gap-1"
          >
            <span>বিস্তারিত</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-100 space-y-3">
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase block">মোট বকেয়া</span>
            <span className="text-2xl font-black text-red-600">৳ {toBnNum(totalClientDues.toLocaleString())}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-rose-200/60">
            <div className="bg-white p-2.5 rounded-xl border border-rose-100">
              <span className="text-[10px] text-slate-500 font-semibold block">মোট পাওনা</span>
              <span className="text-xs font-extrabold text-slate-800">৳ {toBnNum(totalClientReceivable.toLocaleString())}</span>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-emerald-100">
              <span className="text-[10px] text-slate-500 font-semibold block">প্রাপ্ত</span>
              <span className="text-xs font-extrabold text-emerald-600">৳ {toBnNum(totalClientReceived.toLocaleString())}</span>
            </div>
          </div>
        </div>

        {/* Client List Item */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800">Malbro Entertainment</span>
          <span className="text-xs font-black text-red-600">৳ {toBnNum(24000)}</span>
        </div>
      </div>

      {/* 3. CARD: মোট খরচ (Matching Screenshot) */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-md space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-red-500" />
            <h3 className="text-sm font-black text-slate-800">মোট খরচ</h3>
          </div>

          <button
            onClick={() => alert('নতুন খরচ যোগ করার ফর্ম')}
            className="px-3.5 py-1.5 rounded-full bg-red-600 text-white text-xs font-black flex items-center gap-1 shadow-sm hover:bg-red-700 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>খরচ যোগ</span>
          </button>
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <select className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-700">
            <option>মাস অনুযায়ী</option>
            <option>তারিখ অনুযায়ী</option>
          </select>

          <select className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-700">
            <option>জুলাই ২০২৬</option>
            <option>জুন ২০২৬</option>
          </select>
        </div>

        {/* Main Expense Breakdowns (Matching Screenshot) */}
        <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-3">
          <div>
            <span className="text-[10px] text-slate-500 font-bold block mb-0.5">মোট খরচ</span>
            <span className="text-2xl font-black text-red-600">৳ {toBnNum((102020).toLocaleString())}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-rose-200/60">
            <div className="bg-white p-2.5 rounded-xl border border-rose-100">
              <span className="text-[10px] text-slate-500 font-semibold block">হাজিরা খরচ</span>
              <span className="text-xs font-extrabold text-slate-800">৳ {toBnNum((95200).toLocaleString())}</span>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-rose-100">
              <span className="text-[10px] text-slate-500 font-semibold block">অন্যান্য খরচ</span>
              <span className="text-xs font-extrabold text-slate-800">৳ {toBnNum((6820).toLocaleString())}</span>
              <span className="text-[9px] font-bold text-red-500 block mt-0.5 cursor-pointer hover:underline">
                বিস্তারিত দেখুন →
              </span>
            </div>
          </div>

          <div className="text-[10px] text-slate-500 font-bold pt-1">
            {toBnNum(9)} টি শুটিং অন্তর্ভুক্ত
          </div>
        </div>

      </div>

      {/* 4. SHOOTING CALENDAR & SUMMARY COMPONENT (Matching Screenshot) */}
      <ShootingCalendar />

    </div>
  );
}
