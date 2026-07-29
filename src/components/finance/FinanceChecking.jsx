import React, { useState } from 'react';
import { UserCheck, Search, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceChecking() {
  const { members = [] } = useData();
  const [query, setQuery] = useState('');
  const [foundMember, setFoundMember] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    const m = members.find(item => 
      item.phone === query.trim() || 
      item.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    setFoundMember(m || null);
  };

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-black text-slate-900">অ্যাকাউন্ট চেকিং প্যানেল</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          মেম্বার আইডি, মোবাইল নম্বর বা পিন ভেরিফাই করুন
        </p>
      </div>

      <form onSubmit={handleSearch} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 max-w-xl">
        <label className="block text-xs font-bold text-slate-700">মেম্বার মোবাইল বা নাম টাইপ করুন</label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              required
              placeholder="যেমন: 01822111222 বা নাম..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-red-600 text-white font-black text-xs shadow-md hover:bg-red-700 transition-colors"
          >
            চেক করুন
          </button>
        </div>
      </form>

      {searched && (
        <div className="max-w-xl animate-fade-in">
          {foundMember ? (
            <div className="p-6 rounded-3xl bg-white border border-emerald-300 ring-2 ring-emerald-500/20 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3.5">
                  <img src={foundMember.avatar} alt={foundMember.name} className="w-14 h-14 rounded-full object-cover border-2 border-emerald-400 shadow-md" />
                  <div>
                    <h3 className="text-base font-black text-slate-900">{foundMember.name}</h3>
                    <p className="text-xs text-slate-500 font-semibold">{foundMember.designation} • {foundMember.type}</p>
                    <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>ভেরিফাইড একটিভ অ্যাকাউন্ট</span>
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-500 font-bold block">বর্তমান ব্যালেন্স</span>
                  <span className="text-lg font-black text-red-600">৳ {toBnNum((foundMember.balance || 0).toLocaleString())}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold block">লগইন ফোন</span>
                  <span className="font-mono font-bold text-slate-800">{foundMember.phone || 'N/A'}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold block">গোপন PIN</span>
                  <span className="font-mono font-black text-red-600">{foundMember.pin || '1234'}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-3xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
              <span>প্রদত্ত মোবাইল বা নাম অনুযায়ী কোনো ভেরিফাইড মেম্বার পাওয়া যায়নি!</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
