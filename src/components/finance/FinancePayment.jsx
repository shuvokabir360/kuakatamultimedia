import React, { useState } from 'react';
import { DollarSign, Wallet, CreditCard, CheckCircle2, History } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinancePayment() {
  const { getSortedMembers, payments, addPayment } = useData();
  const sortedMembers = getSortedMembers();

  const [selectedMemberId, setSelectedMemberId] = useState(sortedMembers[0]?.id || '');
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('ক্যাশ');
  const [note, setNote] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const currentMember = sortedMembers.find(m => m.id === selectedMemberId) || sortedMembers[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0) {
      alert('সঠিক পরিমাণ লিখুন!');
      return;
    }

    addPayment({
      member_id: currentMember.id,
      member_name: currentMember.name,
      amount: Number(amount),
      method,
      note,
      account: currentMember.bkash || currentMember.bank || currentMember.phone || 'ক্যাশ পেমেন্ট',
      avatar: currentMember.avatar
    });

    setSuccessMsg('পেমেন্ট সফলভাবে সংরক্ষণ করা হয়েছে!');
    setAmount('');
    setNote('');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900">পেমেন্ট</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">সদস্যকে বেতন পরিশোধ করুন</p>
      </div>

      {successMsg && (
        <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Payment Form (Matching Screenshot 3) */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-md space-y-4">
        
        {/* Member Selector */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">সদস্য নির্বাচন</label>
          <select
            value={selectedMemberId}
            onChange={(e) => setSelectedMemberId(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
          >
            {sortedMembers.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.type || 'দৈনিক'})
              </option>
            ))}
          </select>
        </div>

        {/* Selected Member Balance Card (Matching Screenshot 3 Pink Box) */}
        {currentMember && (
          <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={currentMember.avatar}
                alt={currentMember.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-rose-300 shadow-sm"
              />
              <div>
                <h4 className="text-sm font-black text-slate-900">{currentMember.name}</h4>
                <span className="text-[10px] text-slate-500 font-semibold block">বর্তমান ব্যালেন্স</span>
                <span className="text-base font-black text-red-600">
                  ৳ {toBnNum((currentMember.balance || 0).toLocaleString())}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white text-red-500 border border-rose-200 shadow-sm">
              <Wallet className="w-6 h-6" />
            </div>
          </div>
        )}

        {/* Amount Input */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">পরিমাণ (টাকা)</label>
          <input
            type="number"
            required
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-black text-slate-800"
          />
        </div>

        {/* Payment Method Selector */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">পেমেন্ট মাধ্যম</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
          >
            <option value="ক্যাশ">ক্যাশ</option>
            <option value="বিকাশ">বিকাশ</option>
            <option value="নগদ">নগদ</option>
            <option value="রকেট">রকেট</option>
            <option value="উপায়">উপায়</option>
            <option value="ব্যাংক">ব্যাংক অ্যাকাউন্ট</option>
          </select>
        </div>

        {/* Note Optional */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">নোট (ঐচ্ছিক)</label>
          <textarea
            rows={2}
            placeholder="পেমেন্টের বিবরণ..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs glass-input text-slate-800"
          />
        </div>

        {/* Submit Button (Matching Pink/Red Button Screenshot 3) */}
        <button
          type="submit"
          className="w-full py-3.5 rounded-2xl text-xs font-black bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/30 hover:scale-[1.01] transition-transform"
        >
          পেমেন্ট সংরক্ষণ করুন
        </button>
      </form>

      {/* Recent Payments Section (Matching Screenshot 3) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-800 font-black text-sm">
          <History className="w-4 h-4 text-red-500" />
          <h3>সাম্প্রতিক পেমেন্ট</h3>
        </div>

        <div className="space-y-2.5">
          {payments.map((p) => (
            <div key={p.id} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={p.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop'}
                  alt={p.member_name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{p.member_name}</span>
                  <span className="text-[11px] text-slate-500 font-medium">{p.method} • {p.account}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm font-black text-emerald-600 block">
                  ৳ {toBnNum(p.amount.toLocaleString())}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">{p.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
