import React, { useState } from 'react';
import { Calendar, CheckCircle2, XCircle, Clock, AlertTriangle, CheckCheck, RefreshCw } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function AttendanceManagement() {
  const { members, attendance, setDailyAttendance } = useData();
  
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayStr);

  // Get attendance records for selected date
  const getMemberStatus = (memberId) => {
    const rec = attendance.find(a => a.user_id === memberId && a.date === selectedDate);
    return rec ? rec.status : 'Present';
  };

  const handleStatusChange = (memberId, status) => {
    setDailyAttendance(memberId, selectedDate, status);
  };

  const handleMarkAllPresent = () => {
    members.forEach(member => {
      setDailyAttendance(member.id, selectedDate, 'Present');
    });
  };

  // Stats for current date
  const dateRecords = members.map(m => getMemberStatus(m.id));
  const presentCount = dateRecords.filter(s => s === 'Present').length;
  const absentCount = dateRecords.filter(s => s === 'Absent').length;
  const leaveCount = dateRecords.filter(s => s === 'Leave').length;
  const halfDayCount = dateRecords.filter(s => s === 'Half-day').length;

  return (
    <div className="space-y-6">
      
      {/* Date Selector & Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Calendar className="w-5 h-5 text-brand-cyan" />
          <div>
            <label className="block text-[10px] text-slate-400 font-semibold uppercase">তারিখ নির্বাচন করুন</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-1.5 rounded-xl text-xs glass-input text-white font-bold"
            />
          </div>
        </div>

        <button
          id="btn-mark-all-present"
          onClick={handleMarkAllPresent}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-dark-900 transition-all flex items-center justify-center gap-2"
        >
          <CheckCheck className="w-4 h-4" />
          <span>সবাইকে উপস্থিত মার্ক করুন (Mark All Present)</span>
        </button>
      </div>

      {/* Attendance Summary Widgets */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="glass-panel p-4 rounded-xl border border-emerald-500/20 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">উপস্থিত (Present)</span>
          <span className="text-2xl font-extrabold text-emerald-400">{presentCount} জন</span>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-rose-500/20 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">অনুপস্থিত (Absent)</span>
          <span className="text-2xl font-extrabold text-rose-400">{absentCount} জন</span>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-amber-500/20 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">ছুটি (Leave)</span>
          <span className="text-2xl font-extrabold text-amber-400">{leaveCount} জন</span>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-sky-500/20 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">হাফ-ডে (Half-day)</span>
          <span className="text-2xl font-extrabold text-sky-400">{halfDayCount} জন</span>
        </div>
      </div>

      {/* Attendance Logging Table */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800">
        <div className="p-4 bg-dark-800/60 border-b border-slate-800 flex justify-between items-center">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-cyan" />
            তারিখ: <span className="text-brand-cyan">{selectedDate}</span> - হাজিরা এন্ট্রি লিস্ট
          </h3>
          <span className="text-xs text-slate-400">মোট মেম্বার: {members.length} জন</span>
        </div>

        <div className="divide-y divide-slate-800/60">
          {members.map((member) => {
            const currentStatus = getMemberStatus(member.id);

            return (
              <div key={member.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors">
                
                {/* Member Details */}
                <div className="flex items-center gap-3">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{member.name}</h4>
                    <p className="text-[11px] text-slate-400">{member.designation} • ({member.dept})</p>
                  </div>
                </div>

                {/* Status Toggle Radio Group */}
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleStatusChange(member.id, 'Present')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                      currentStatus === 'Present'
                        ? 'bg-emerald-500 text-dark-900 shadow-md shadow-emerald-500/20'
                        : 'glass-panel text-slate-400 hover:text-emerald-400'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>উপস্থিত</span>
                  </button>

                  <button
                    onClick={() => handleStatusChange(member.id, 'Absent')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                      currentStatus === 'Absent'
                        ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                        : 'glass-panel text-slate-400 hover:text-rose-400'
                    }`}
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>অনুপস্থিত</span>
                  </button>

                  <button
                    onClick={() => handleStatusChange(member.id, 'Leave')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                      currentStatus === 'Leave'
                        ? 'bg-amber-500 text-dark-900 shadow-md shadow-amber-500/20'
                        : 'glass-panel text-slate-400 hover:text-amber-400'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>ছুটি</span>
                  </button>

                  <button
                    onClick={() => handleStatusChange(member.id, 'Half-day')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                      currentStatus === 'Half-day'
                        ? 'bg-sky-500 text-dark-900 shadow-md shadow-sky-500/20'
                        : 'glass-panel text-slate-400 hover:text-sky-400'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>হাফ-ডে</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
