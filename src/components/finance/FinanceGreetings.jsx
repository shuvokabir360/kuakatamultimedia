import React, { useState } from 'react';
import { Sparkles, Award, Download, Share2 } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceGreetings() {
  const { members = [] } = useData();
  const [selectedMemberId, setSelectedMemberId] = useState(members[0]?.id || '');
  const [greetingType, setGreetingType] = useState('শুভেচ্ছা');
  const [customTitle, setCustomTitle] = useState('অসাধারণ নৈপুণ্যের জন্য অভিনন্দন!');

  const member = members.find(m => m.id === selectedMemberId) || members[0];

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-black text-slate-900">অভিনন্দন ও শুভেচ্ছা কার্ড</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          টিম মেম্বারদের জন্য অফিসিয়াল সম্মাননা ও শুভেচ্ছা কার্ড ডিজাইন করুন
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Controls Form */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">সদস্য নির্বাচন করুন</label>
            <select
              value={selectedMemberId}
              onChange={(e) => setSelectedMemberId(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
            >
              {members.map(m => (
                <option key={m.id} value={m.id}>{m.name} ({m.designation})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">শুভেচ্ছার ধরন</label>
            <select
              value={greetingType}
              onChange={(e) => setGreetingType(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
            >
              <option value="শুভেচ্ছা">সাধারণ শুভেচ্ছা</option>
              <option value="শুভ জন্মদিন">শুভ জন্মদিন 🎉</option>
              <option value="সেরা পারফর্মার">মাসের সেরা পারফর্মার 👑</option>
              <option value="পদোন্নতি">পদোন্নতি অভিনন্দন 🌟</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">বার্তার শিরোনাম</label>
            <input
              type="text"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
            />
          </div>
        </div>

        {/* Live Banner Card Preview */}
        {member && (
          <div className="space-y-3">
            <div className="bg-gradient-to-br from-red-600 via-rose-600 to-red-700 text-white rounded-3xl p-8 border border-red-500 shadow-2xl space-y-6 text-center relative overflow-hidden">
              <div className="w-24 h-24 rounded-full mx-auto p-1 bg-white/20 backdrop-blur-md border-2 border-white/40 shadow-xl">
                <img src={member.avatar} alt={member.name} className="w-full h-full rounded-full object-cover" />
              </div>

              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold tracking-wider">
                  {greetingType}
                </span>
                <h3 className="text-2xl font-black pt-2">{member.name}</h3>
                <p className="text-xs text-red-100 font-semibold">{member.designation} • Kuakata Multimedia</p>
              </div>

              <p className="text-sm font-bold text-red-50 italic max-w-sm mx-auto">
                "{customTitle}"
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-[11px] font-bold text-red-200">
                <span>কুয়াকাটা মাল্টিমিডিয়া টিম</span>
                <span>অফিসিয়াল বার্তা</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => alert('কার্ডটি ডাউনলোড করা হয়েছে!')}
                className="flex-1 py-3 rounded-2xl bg-slate-900 text-white text-xs font-black shadow-md flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>কার্ড ডাউনলোড (HD)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
