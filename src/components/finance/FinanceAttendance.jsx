import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, XCircle, Film, History } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceAttendance() {
  const { shootings, members } = useData();
  const [selectedDate, setSelectedDate] = useState('2026-07-29');
  const [selectedShooting, setSelectedShooting] = useState('');

  const totalMembersCount = members.length || 15;

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900">হাজিরা</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">দৈনিক কর্মীদের জন্য</p>
      </div>

      {/* Date & Shooting Selection Form (Matching Screenshot 2) */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-md space-y-4">
        
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">তারিখ</label>
          <div className="relative">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1">
            <Film className="w-3.5 h-3.5 text-slate-500" />
            <span>শুটিং নির্বাচন করুন</span>
          </label>
          <select
            value={selectedShooting}
            onChange={(e) => setSelectedShooting(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700"
          >
            <option value="">এই তারিখে কোনো শুটিং নেই</option>
            {shootings.map(s => (
              <option key={s.id} value={s.id}>{s.title} ({s.channel})</option>
            ))}
          </select>
          <p className="text-[10px] text-slate-400 mt-1">শুটিং ট্যাব থেকে এই তারিখে শুটিং তৈরি করুন</p>
        </div>

        {/* Date & Attendance Badge */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
          <span className="font-bold text-slate-700">২৯/০৭/২০২৬</span>
          <span className="font-extrabold text-emerald-600">
            উপস্থিত: {toBnNum(0)}/{toBnNum(totalMembersCount)}
          </span>
        </div>

        {/* Empty State Box */}
        <div className="p-8 rounded-2xl bg-slate-50/80 border border-dashed border-slate-300 text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
            <Film className="w-6 h-6" />
          </div>
          <p className="text-xs text-slate-500 font-semibold">
            হাজিরা নেওয়ার জন্য তারিখ ও শুটিং নাম নির্বাচন করুন
          </p>
        </div>

      </div>

      {/* Attendance History Section (Matching Screenshot 2) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-800 font-black text-sm">
          <History className="w-4 h-4 text-red-500" />
          <h3>হাজিরার ইতিহাস</h3>
        </div>

        <div className="text-xs text-slate-500 mb-2">তারিখ অনুযায়ী দেখুন</div>

        <div className="space-y-2.5">
          {shootings.map((sh) => (
            <div key={sh.id} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 block">
                  {toBnNum(sh.date.split('-').reverse().join('/'))}
                </span>
                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium mt-0.5">
                  <Film className="w-3 h-3 text-slate-400" />
                  {sh.title}
                </span>
              </div>

              {/* Status Pills */}
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center gap-1">
                  <span>✓</span>
                  <span>{toBnNum(sh.present_count)}</span>
                </span>

                <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200 flex items-center gap-1">
                  <span>✕</span>
                  <span>{toBnNum(sh.absent_count)}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
