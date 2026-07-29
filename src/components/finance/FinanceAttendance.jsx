import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, XCircle, Film, History, Check, X, Trash2, AlertTriangle, Clock, Edit3, DollarSign, Plus, ArrowRight, User } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceAttendance() {
  const { shootings = [], members = [], updateShootingAttendance } = useData();
  
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedShootingId, setSelectedShootingId] = useState('');

  const safeMembers = members || [];
  const safeShootings = shootings || [];

  // Filter shootings strictly matching selected date
  const dateShootings = safeShootings.filter(s => s.date === selectedDate);

  // Selected Shooting Object (Strictly from selected date only!)
  const currentShooting = dateShootings.find(s => s.id === selectedShootingId) || dateShootings[0] || null;

  // Auto select valid shooting when date changes
  useEffect(() => {
    if (dateShootings.length > 0) {
      setSelectedShootingId(dateShootings[0].id);
    } else {
      setSelectedShootingId('');
    }
  }, [selectedDate, dateShootings.length]);

  // Attendance Sheet state
  const [attendanceMap, setAttendanceMap] = useState({});

  useEffect(() => {
    // Reset attendance map when selected shooting changes
    const initialMap = {};
    safeMembers.forEach(m => {
      initialMap[m.id] = false; // default absent
    });
    setAttendanceMap(initialMap);
  }, [selectedShootingId, safeMembers.length]);

  const toggleMemberAttendance = (id) => {
    setAttendanceMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Calculations
  const presentMembers = safeMembers.filter(m => attendanceMap[m.id]);
  const presentCount = presentMembers.length;
  const absentCount = safeMembers.length - presentCount;
  
  // Total calculated expense for present members (daily rate or default 1500)
  const totalAttendanceExpense = presentMembers.reduce((sum, m) => sum + (Number(m.daily_rate) || 1500), 0);

  // Save / Update Attendance Handler
  const handleSaveAttendance = () => {
    if (!currentShooting) {
      alert('অনুগ্রহ করে একটি শুটিং নির্বাচন করুন!');
      return;
    }

    updateShootingAttendance(currentShooting.id, presentCount, absentCount, totalAttendanceExpense);
    alert(`🎉 হাজিরা ও খরচ সফলভাবে আপডেট করা হয়েছে!\nউপস্থিত: ${presentCount} জন\nহাজিরা খরচ: ৳ ${totalAttendanceExpense.toLocaleString()} টাকা`);
  };

  // 5-Second Timer Countdown Delete Modal State
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [targetShootingToDelete, setTargetShootingToDelete] = useState(null);
  const [countdown, setCountdown] = useState(5);

  const triggerDeleteModal = (shooting) => {
    setTargetShootingToDelete(shooting);
    setCountdown(5);
    setDeleteModalOpen(true);
  };

  useEffect(() => {
    let timer;
    if (deleteModalOpen && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [deleteModalOpen, countdown]);

  const confirmDeleteAttendance = () => {
    if (!targetShootingToDelete) return;
    updateShootingAttendance(targetShootingToDelete.id, 0, 0, 0);
    setDeleteModalOpen(false);
    setTargetShootingToDelete(null);
  };

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Header with Quick Save */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900">দৈনিক হাজিরা শট</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            টিম মেম্বারদের উপস্থিতি পর্যবেক্ষণ ও হাজিরা খরচ ট্র্যাকিং
          </p>
        </div>

        {currentShooting && (
          <button
            onClick={handleSaveAttendance}
            className="px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-lg shadow-emerald-500/20 flex items-center gap-1.5 transition-transform active:scale-95"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>হাজিরা সেভ করুন</span>
          </button>
        )}
      </div>

      {/* Date & Shooting Selector Form */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm space-y-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Date Picker */}
          <div>
            <label className="block text-xs font-black text-slate-700 mb-1.5 flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4 text-red-500" />
              <span>তারিখ নির্বাচন করুন</span>
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/20"
            />
          </div>

          {/* Shooting Selector */}
          <div>
            <label className="block text-xs font-black text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Film className="w-4 h-4 text-red-500" />
              <span>শুটিং নির্বাচন করুন</span>
            </label>
            
            {dateShootings.length > 0 ? (
              <select
                value={selectedShootingId}
                onChange={(e) => setSelectedShootingId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              >
                {dateShootings.map(s => (
                  <option key={s.id} value={s.id}>
                    🎬 {s.title} ({s.channel})
                  </option>
                ))}
              </select>
            ) : (
              <div className="px-4 py-2.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700 flex items-center justify-between">
                <span>⚠️ এই সিলেক্ট করা তারিখে কোনো শুটিং নেই</span>
              </div>
            )}
          </div>
        </div>

        {/* Live Attendance & Expense Summary Bar */}
        {currentShooting ? (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-wrap items-center justify-between gap-3 shadow-md">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">নির্বাচিত শুটিং</span>
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <span>{currentShooting.title}</span>
                <span className="px-2 py-0.5 rounded-full bg-red-600/80 text-[10px] font-extrabold text-white">
                  {currentShooting.channel}
                </span>
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold">
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">উপস্থিত কর্মীবৃন্দ</span>
                <span className="text-emerald-400 font-black text-sm">
                  {toBnNum(presentCount)}/{toBnNum(safeMembers.length)} জন
                </span>
              </div>

              <div className="h-8 w-px bg-slate-700"></div>

              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">হাজিরা বাবদ মোট খরচ</span>
                <span className="text-amber-300 font-black text-sm">
                  ৳ {toBnNum(totalAttendanceExpense.toLocaleString())}
                </span>
              </div>

              <button
                onClick={() => triggerDeleteModal(currentShooting)}
                title="হাজিরা রিসেট/ডিলিট করুন"
                className="p-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 transition-colors border border-rose-500/30"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center text-xs font-bold text-amber-800">
            ⚠️ এই নির্বাচিত তারিখে কোনো শুটিং পাওয়া যায়নি। অনুগ্রহ করে অন্য তারিখ বেছে নিন বা শুটিং ট্যাব থেকে নতুন শুটিং তৈরি করুন।
          </div>
        )}

      </div>

      {/* Member Attendance Toggle Grid */}
      {currentShooting ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-900">টিম মেম্বার হাজিরা তালিকা</h3>
            <span className="text-xs font-bold text-slate-500">
              হাজিরা থাকলে সবুজ বাটনে ক্লিক করুন
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safeMembers.map((member) => {
              const isPresent = attendanceMap[member.id];
              return (
                <div
                  key={member.id}
                  onClick={() => toggleMemberAttendance(member.id)}
                  className={`p-4 rounded-3xl border shadow-sm flex items-center justify-between cursor-pointer transition-all ${
                    isPresent
                      ? 'bg-emerald-50/50 border-emerald-300 ring-2 ring-emerald-400/20'
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={member.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop'}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0 shadow-sm"
                    />

                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-slate-900 truncate">{member.name}</h4>
                      <p className="text-[11px] text-slate-500 font-semibold truncate">{member.designation}</p>

                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[11px] font-extrabold text-slate-700">
                          বেতন: ৳{toBnNum((member.daily_rate || 1500).toLocaleString())}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMemberAttendance(member.id);
                    }}
                    className={`px-4 py-2 rounded-2xl text-xs font-black transition-all flex items-center gap-1.5 border shrink-0 ${
                      isPresent
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                        : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {isPresent ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>উপস্থিত</span>
                      </>
                    ) : (
                      <>
                        <X className="w-4 h-4 text-slate-400" />
                        <span>অনুপস্থিত</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleSaveAttendance}
              className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>হাজিরা ও খরচ সেভ করুন</span>
            </button>
          </div>
        </div>
      ) : null}

      {/* Attendance History Section with Calculated Expense Badges */}
      <div className="space-y-3 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
            <History className="w-4.5 h-4.5 text-red-500" />
            <h3>পূর্বের হাজিরার ইতিহাস</h3>
          </div>
          <span className="text-xs text-slate-500 font-bold">{toBnNum(safeShootings.length)} টি রেকর্ড</span>
        </div>

        {safeShootings.length > 0 ? (
          <div className="space-y-3">
            {safeShootings.map((sh) => (
              <div key={sh.id} className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-3 transition-transform hover:scale-[1.005]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <Film className="w-5 h-5 text-slate-700" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-black text-slate-900">{sh.title}</h4>
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200">
                        {sh.channel}
                      </span>
                    </div>

                    <span className="text-[11px] text-slate-500 font-semibold block mt-0.5">
                      তারিখ: {toBnNum(sh.date?.split('-').reverse().join('/'))} • পরিচালক: {sh.director}
                    </span>
                  </div>
                </div>

                {/* Right side stats with expense */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <span className="px-2.5 py-1 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center gap-1">
                      <span>✓ {toBnNum(sh.present_count || 0)}</span>
                    </span>

                    <span className="px-2.5 py-1 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center gap-1">
                      <span>✕ {toBnNum(sh.absent_count || 0)}</span>
                    </span>
                  </div>

                  {/* Attendance Expense Badge */}
                  <div className="px-3 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-black flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                    <span>খরচ: ৳ {toBnNum((sh.expenses || 0).toLocaleString())}</span>
                  </div>

                  <button
                    onClick={() => triggerDeleteModal(sh)}
                    title="হাজিরা মুছুন"
                    className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center text-xs font-bold text-slate-500">
            পূর্বের কোনো হাজিরার ইতিহাস নেই
          </div>
        )}
      </div>

      {/* 5-SECOND COUNTDOWN TIMER DELETE WARNING MODAL */}
      {deleteModalOpen && targetShootingToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 border border-rose-200 shadow-2xl space-y-4 text-center">
            
            <div className="w-14 h-14 rounded-full bg-rose-100 border-2 border-rose-300 text-rose-600 flex items-center justify-center mx-auto shadow-md animate-pulse">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-900">⚠️ সতর্কবার্তা: হাজিরা মুছুন</h3>
              <p className="text-xs text-slate-600 font-bold mt-1">
                আপনি কি নিশ্চিত যে <span className="text-rose-600 font-black">"{targetShootingToDelete.title}"</span> শুটিংয়ের হাজিরার ডাটা ও খরচ মুছে ফেলতে চান?
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-rose-600 animate-spin" />
              <span>নিশ্চিত করতে {toBnNum(countdown)} সেকেন্ড অপেক্ষা করুন...</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteModalOpen(false)}
                className="py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                বাতিল করুন
              </button>

              <button
                type="button"
                disabled={countdown > 0}
                onClick={confirmDeleteAttendance}
                className={`py-3 rounded-2xl font-black text-xs shadow-md transition-all flex items-center justify-center gap-1 ${
                  countdown > 0
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed border border-slate-300'
                    : 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/30 active:scale-95'
                }`}
              >
                <Trash2 className="w-4 h-4" />
                <span>{countdown > 0 ? `অপেক্ষা (${toBnNum(countdown)})` : 'হ্যাঁ, মুছে ফেলুন'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
