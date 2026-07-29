import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, XCircle, Film, History, Check, X } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceAttendance() {
  const { shootings = [], members = [], updateMember } = useData();
  const [selectedDate, setSelectedDate] = useState('2026-07-26');
  const [selectedShooting, setSelectedShooting] = useState('sh-1'); // Default 'উমাইয়া জামাই'

  // Daily members list matching screenshot
  const initialDailyMembers = [
    { id: 'm-1', name: 'Abu Hasan Milon', role: 'Actor', daily_rate: 1500, status: 'absent', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop' },
    { id: 'm-2', name: 'Akhinur Noon Nahar', role: 'Actors', daily_rate: 1500, status: 'absent', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop' },
    { id: 'm-3', name: 'Arif Apon', role: 'Actor', daily_rate: 2000, status: 'absent', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop' },
    { id: 'm-4', name: 'Bayzid', role: 'Production', daily_rate: 800, isCustom: true, status: 'present', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop' },
    { id: 'm-5', name: 'Emon Molla', role: 'Actor', daily_rate: 1000, status: 'absent', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop' },
    { id: 'm-6', name: 'Kabir Hossen', role: 'Director', daily_rate: 3000, status: 'present', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop' },
    { id: 'm-7', name: 'Saddam Mal', role: 'Actor', daily_rate: 2000, status: 'present', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop' },
    { id: 'm-8', name: 'SM Almas', role: 'Director', daily_rate: 2500, status: 'present', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop' }
  ];

  const [dailyMembersState, setDailyMembersState] = useState(initialDailyMembers);

  const toggleAttendance = (memberId) => {
    setDailyMembersState(prev => prev.map(m => {
      if (m.id === memberId) {
        const nextStatus = m.status === 'present' ? 'absent' : 'present';
        return { ...m, status: nextStatus };
      }
      return m;
    }));
  };

  const presentCount = dailyMembersState.filter(m => m.status === 'present').length;
  const totalCount = dailyMembersState.length;

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900">হাজিরা</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">দৈনিক কর্মীদের জন্য</p>
      </div>

      {/* Date & Shooting Selection Form (Matching Screenshot) */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-md space-y-4">
        
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">তারিখ</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1">
            <Film className="w-3.5 h-3.5 text-slate-500" />
            <span>শুটিং নির্বাচন করুন</span>
          </label>
          <select
            value={selectedShooting}
            onChange={(e) => setSelectedShooting(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
          >
            <option value="sh-1">উমাইয়া জামাই</option>
            <option value="sh-2">নেতার লিংক ভাইরাল</option>
            <option value="sh-3">চাচার নিহার বউ তালাক</option>
            <option value="">এই তারিখে কোনো শুটিং নেই</option>
          </select>
        </div>

        {/* Date & Attendance Status Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-bold">
          <span className="text-slate-700">
            {toBnNum(selectedDate.split('-').reverse().join('/'))}
          </span>
          <span className="text-emerald-600 font-extrabold">
            উপস্থিত: {toBnNum(presentCount)}/{toBnNum(15)}
          </span>
        </div>

      </div>

      {/* MEMBER ATTENDANCE CARDS LIST (Matching Screenshot) */}
      {selectedShooting ? (
        <div className="space-y-3">
          {dailyMembersState.map((member) => (
            <div
              key={member.id}
              className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between transition-transform hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0 shadow-sm"
                />

                <div>
                  <h3 className="text-sm font-black text-slate-900">{member.name}</h3>
                  <p className="text-[11px] text-slate-500 font-medium">{member.role}</p>

                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs text-slate-600 font-bold">
                      বেতন: ৳{toBnNum(member.daily_rate)}
                    </span>
                    {member.isCustom && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-rose-500 text-white">
                        কাস্টম
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Attendance Toggle Button (Matching Screenshot) */}
              <button
                onClick={() => toggleAttendance(member.id)}
                className={`px-4 py-2 rounded-full text-xs font-black transition-all flex items-center gap-1.5 border ${
                  member.status === 'present'
                    ? 'bg-emerald-50 text-emerald-600 border-emerald-500 hover:bg-emerald-100'
                    : 'bg-rose-50 text-rose-600 border-rose-400 hover:bg-rose-100'
                }`}
              >
                {member.status === 'present' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>উপস্থিত</span>
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4 text-rose-500" />
                    <span>অনুপস্থিত</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 rounded-2xl bg-white border border-dashed border-slate-300 text-center text-xs text-slate-500 font-semibold">
          হাজিরা নেওয়ার জন্য শুটিং নির্বাচন করুন
        </div>
      )}

      {/* Attendance History Section */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-slate-800 font-black text-sm">
          <History className="w-4 h-4 text-red-500" />
          <h3>হাজিরার ইতিহাস</h3>
        </div>

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
