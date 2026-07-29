import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, XCircle, Film, History, Check, X } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceAttendance() {
  const { shootings = [], members = [] } = useData();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedShooting, setSelectedShooting] = useState(shootings[0]?.id || '');

  const safeMembers = members || [];
  const safeShootings = shootings || [];

  const [dailyAttendanceState, setDailyAttendanceState] = useState(
    safeMembers.map(m => ({ ...m, status: 'absent' }))
  );

  const toggleAttendance = (memberId) => {
    setDailyAttendanceState(prev => prev.map(m => {
      if (m.id === memberId) {
        return { ...m, status: m.status === 'present' ? 'absent' : 'present' };
      }
      return m;
    }));
  };

  const presentCount = dailyAttendanceState.filter(m => m.status === 'present').length;

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900">হাজিরা</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">দৈনিক কর্মীদের জন্য</p>
      </div>

      {/* Date & Shooting Selection Form */}
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
            <option value="">এই তারিখে কোনো শুটিং নেই</option>
            {safeShootings.map(s => (
              <option key={s.id} value={s.id}>{s.title} ({s.channel})</option>
            ))}
          </select>
          <p className="text-[10px] text-slate-400 mt-1">শুটিং ট্যাব থেকে এই তারিখে শুটিং তৈরি করুন</p>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-bold">
          <span className="text-slate-700">
            {toBnNum(selectedDate.split('-').reverse().join('/'))}
          </span>
          <span className="text-emerald-600 font-extrabold">
            উপস্থিত: {toBnNum(presentCount)}/{toBnNum(safeMembers.length)}
          </span>
        </div>

      </div>

      {/* Active Member Attendance Sheet */}
      {selectedShooting ? (
        <div className="space-y-3">
          {dailyAttendanceState.map((member) => (
            <div
              key={member.id}
              className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between transition-transform hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={member.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop'}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0 shadow-sm"
                />

                <div>
                  <h3 className="text-sm font-black text-slate-900">{member.name}</h3>
                  <p className="text-[11px] text-slate-500 font-medium">{member.designation || member.type}</p>

                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs text-slate-600 font-bold">
                      বেতন: ৳{toBnNum(member.daily_rate || 1500)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Attendance Toggle Button */}
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
        <div className="p-8 rounded-3xl bg-white border border-dashed border-slate-300 text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center mx-auto">
            <Film className="w-6 h-6" />
          </div>
          <p className="text-xs text-slate-600 font-bold">
            হাজিরা নেওয়ার জন্য তারিখ ও শুটিং নাম নির্বাচন করুন
          </p>
        </div>
      )}

      {/* Attendance History Section */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-slate-800 font-black text-sm">
          <History className="w-4 h-4 text-red-500" />
          <h3>হাজিরার ইতিহাস</h3>
        </div>

        {safeShootings.length > 0 ? (
          <div className="space-y-2.5">
            {safeShootings.map((sh) => (
              <div key={sh.id} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    {toBnNum(sh.date?.split('-').reverse().join('/'))}
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium mt-0.5">
                    <Film className="w-3 h-3 text-slate-400" />
                    {sh.title}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center gap-1">
                    <span>✓</span>
                    <span>{toBnNum(sh.present_count || 0)}</span>
                  </span>

                  <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200 flex items-center gap-1">
                    <span>✕</span>
                    <span>{toBnNum(sh.absent_count || 0)}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
            পূর্বের কোনো হাজিরার রেকর্ড নেই
          </div>
        )}
      </div>

    </div>
  );
}
