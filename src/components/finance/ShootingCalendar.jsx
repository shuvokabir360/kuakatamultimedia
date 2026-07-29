import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Film, X, MapPin, User, Tv, DollarSign } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function ShootingCalendar() {
  const { shootings = [] } = useData();

  const [currentMonth, setCurrentMonth] = useState('2026-07');
  const [selectedShootingDetail, setSelectedShootingDetail] = useState(null);

  // Dynamic Shooting Calendar Dates Map
  const shootingDatesMap = {};

  // Add real added shootings dynamically into map
  (shootings || []).forEach(sh => {
    if (sh.date) {
      if (!shootingDatesMap[sh.date]) {
        shootingDatesMap[sh.date] = [];
      }
      shootingDatesMap[sh.date].push(sh);
    }
  });

  const weekDays = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'];

  // July 2026 Calendar Grid Layout (July 1st 2026 is Wednesday = Index 3)
  const emptyDaysBefore = 3; 
  const totalDaysInMonth = 31;
  const todayDayNumber = 29;

  const calendarDays = [];
  for (let i = 0; i < emptyDaysBefore; i++) {
    calendarDays.push({ type: 'empty' });
  }

  for (let day = 1; day <= totalDaysInMonth; day++) {
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const dateKey = `2026-07-${formattedDay}`;
    const hasShooting = shootingDatesMap[dateKey] && shootingDatesMap[dateKey].length > 0;
    const shootingList = shootingDatesMap[dateKey] || [];
    
    calendarDays.push({
      type: 'day',
      dayNumber: day,
      dateKey,
      hasShooting,
      shootingCount: shootingList.length,
      shootingList,
      isToday: day === todayDayNumber
    });
  }

  const totalShootingsThisMonth = (shootings || []).length;
  const attendanceExpensesThisMonth = (shootings || []).reduce((sum, s) => sum + (s.expenses || 0), 0);
  const totalExpensesThisMonth = attendanceExpensesThisMonth;

  return (
    <div className="space-y-6">
      
      {/* 1. SHOOTING CALENDAR CARD */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-md space-y-4">
        
        {/* Header with Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-red-500" />
            <h3 className="text-base font-black text-slate-900">শুটিং ক্যালেন্ডার</h3>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-black text-slate-800">জুলাই ২০২৬</span>
            <button className="p-1.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Days Header Row */}
        <div className="grid grid-cols-7 text-center text-[11px] font-bold text-slate-500 py-1 border-b border-slate-100">
          {weekDays.map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Dates Grid */}
        <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
          {calendarDays.map((item, index) => {
            if (item.type === 'empty') {
              return <div key={`empty-${index}`} className="h-11" />;
            }

            return (
              <button
                key={item.dateKey}
                onClick={() => {
                  if (item.hasShooting) {
                    setSelectedShootingDetail({
                      date: item.dateKey,
                      dayNumber: item.dayNumber,
                      shootings: item.shootingList
                    });
                  } else {
                    alert(`${toBnNum(item.dayNumber)} জুলাই ২০২৬ তারিখে কোনো শুটিং নেই।`);
                  }
                }}
                className={`h-11 rounded-2xl p-1 flex flex-col items-center justify-center transition-transform active:scale-95 relative ${
                  item.hasShooting
                    ? 'bg-rose-100/80 border border-rose-300 text-rose-700 font-black shadow-sm hover:bg-rose-200'
                    : item.isToday
                    ? 'border-2 border-red-500 text-slate-900 font-extrabold bg-white'
                    : 'text-slate-700 font-semibold hover:bg-slate-100'
                }`}
              >
                <span>{toBnNum(item.dayNumber)}</span>

                {item.hasShooting && (
                  <span className="text-[9px] font-extrabold text-rose-600 flex items-center gap-0.5 leading-none mt-0.5">
                    <span>🎬</span>
                    <span>{toBnNum(item.shootingCount)}</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Calendar Legend */}
        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-600 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-md bg-rose-200 border border-rose-400 inline-block" />
            <span>শুটিং হয়েছে</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full border-2 border-red-500 inline-block" />
            <span>আজ</span>
          </div>
        </div>

      </div>

      {/* 2. THIS MONTH'S SHOOTING SUMMARY CARD (Set to Zero 0) */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-md space-y-4">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-red-500" />
            <h3 className="text-sm font-black text-slate-900">এই মাসের শুটিং</h3>
          </div>

          <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-[11px] font-bold border border-rose-200">
            জুলাই ২০২৬
          </span>
        </div>

        {/* 3 Stat Boxes */}
        <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-100 grid grid-cols-3 gap-2 text-center">
          <div>
            <span className="text-[10px] text-slate-500 font-bold block mb-0.5">শুটিং</span>
            <span className="text-base font-black text-red-600">
              {toBnNum(totalShootingsThisMonth)} টি
            </span>
          </div>

          <div className="border-x border-rose-200/80 px-1">
            <span className="text-[10px] text-slate-500 font-bold block mb-0.5">হাজিরা খরচ</span>
            <span className="text-xs font-black text-slate-800 block mt-1">
              ৳ {toBnNum(attendanceExpensesThisMonth.toLocaleString())}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-500 font-bold block mb-0.5">মোট খরচ</span>
            <span className="text-xs font-black text-red-600 block mt-1">
              ৳ {toBnNum(totalExpensesThisMonth.toLocaleString())}
            </span>
          </div>
        </div>

      </div>

      {/* 3. SHOOTING DETAIL POPUP MODAL */}
      {selectedShootingDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-4">
            
            <button
              onClick={() => setSelectedShootingDetail(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Film className="w-5 h-5 text-red-500" />
              <div>
                <h3 className="text-base font-black text-slate-900">
                  {toBnNum(selectedShootingDetail.dayNumber)} জুলাই ২০২৬ এর শুটিং বিস্তারিত
                </h3>
                <span className="text-[11px] text-slate-500 font-medium">
                  মোট {toBnNum(selectedShootingDetail.shootings.length)} টি শুটিং রেকর্ড
                </span>
              </div>
            </div>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {selectedShootingDetail.shootings.map((sh, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black text-slate-900">{sh.title}</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-white text-rose-600 text-[10px] font-extrabold border border-rose-200">
                      {sh.channel}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                    <div className="flex items-center gap-1 font-semibold">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>{sh.director}</span>
                    </div>

                    <div className="flex items-center gap-1 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>{sh.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedShootingDetail(null)}
              className="w-full py-3 rounded-2xl bg-red-600 text-white font-black text-xs shadow-md"
            >
              বন্ধ করুন
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
