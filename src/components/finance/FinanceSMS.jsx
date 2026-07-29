import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceSMS() {
  const { members = [] } = useData();
  const [smsText, setSmsText] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('all');
  const [sentMsg, setSentMsg] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!smsText.trim()) return;
    
    setSentMsg(`সফলভাবে ${selectedRecipient === 'all' ? toBnNum(members.length) : '১'} জন সদস্যের মোবাইলে গ্রুপ SMS পাঠানো হয়েছে!`);
    setSmsText('');
    setTimeout(() => setSentMsg(''), 4000);
  };

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-black text-slate-900">গ্রুপ SMS প্যানেল</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          টিম মেম্বারদের কাছে এক ক্লিকে শুটিং বা জরুরি নোটিশ পাঠান
        </p>
      </div>

      {sentMsg && (
        <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-xs font-bold flex items-center gap-2 max-w-xl">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
          <span>{sentMsg}</span>
        </div>
      )}

      <form onSubmit={handleSend} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 max-w-xl">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">প্রাপক নির্বাচন করুন</label>
          <select
            value={selectedRecipient}
            onChange={(e) => setSelectedRecipient(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
          >
            <option value="all">সকল সক্রিয় টিম সদস্য ({toBnNum(members.length)} জন)</option>
            {members.map(m => (
              <option key={m.id} value={m.id}>{m.name} ({m.phone})</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">SMS মেসেজ লিখুন (বাংলা/English)</label>
          <textarea
            rows={4}
            required
            placeholder="যেমন: আগামীকাল সকাল ৯টায় মুসুল্লিয়াবাদে শুটিং শুরু হবে। সবাই যথাসময়ে উপস্থিত থাকবেন।"
            value={smsText}
            onChange={(e) => setSmsText(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <Send className="w-4 h-4" />
          <span>SMS পাঠান</span>
        </button>
      </form>
    </div>
  );
}
