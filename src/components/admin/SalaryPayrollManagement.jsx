import React, { useState } from 'react';
import { DollarSign, CheckCircle2, Clock, FileText, Printer, Sparkles, AlertCircle, Edit3, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useData } from '../../context/DataContext';

export default function SalaryPayrollManagement() {
  const { salaries, updateSalaryStatus, members } = useData();
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [editingBonusSalary, setEditingBonusSalary] = useState(null);
  const [bonusInput, setBonusInput] = useState(0);
  const [noteInput, setNoteInput] = useState('');

  const totalPayroll = salaries.reduce((acc, curr) => acc + curr.net_salary, 0);
  const paidPayroll = salaries.filter(s => s.paid_status === 'Paid').reduce((acc, curr) => acc + curr.net_salary, 0);

  const handleStatusToggle = (sal, currentStatus) => {
    const nextStatus = currentStatus === 'Paid' ? 'Pending' : 'Paid';
    if (nextStatus === 'Paid') {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback
      }
    }
    updateSalaryStatus(sal.id, nextStatus);
  };

  const handleSaveBonus = (e) => {
    e.preventDefault();
    if (!editingBonusSalary) return;
    updateSalaryStatus(editingBonusSalary.id, editingBonusSalary.paid_status, bonusInput, noteInput);
    setEditingBonusSalary(null);
  };

  return (
    <div className="space-y-6">
      
      {/* Payroll Financial Summary Header */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-brand-cyan/30">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">মোট চলতি পে-রোল বাজেট</span>
          <span className="text-3xl font-extrabold text-white mt-1 block">৳ {totalPayroll.toLocaleString()}</span>
          <span className="text-[11px] text-slate-400 mt-1 block">জুলাই ২০২৬ সেশন</span>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">পরিশোধিত পে-রোল (Paid)</span>
          <span className="text-3xl font-extrabold text-emerald-400 mt-1 block">৳ {paidPayroll.toLocaleString()}</span>
          <span className="text-[11px] text-slate-400 mt-1 block">{salaries.filter(s => s.paid_status === 'Paid').length} জন মেম্বার পরিশোধিত</span>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-amber-500/30">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">বকেয়া পে-রোল (Pending)</span>
          <span className="text-3xl font-extrabold text-amber-400 mt-1 block">৳ {(totalPayroll - paidPayroll).toLocaleString()}</span>
          <span className="text-[11px] text-slate-400 mt-1 block">{salaries.filter(s => s.paid_status === 'Pending').length} জন মেম্বার বকেয়া</span>
        </div>
      </div>

      {/* Salary Statements Table */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800">
        <div className="p-4 bg-dark-800/80 border-b border-slate-800 flex justify-between items-center">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-brand-cyan" />
            টিম মেম্বারদের বেতন ও পে-রোল স্টেটমেন্ট
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-dark-800/40 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider">
              <tr>
                <th className="p-4">মেম্বার নাম</th>
                <th className="p-4">বেসিক বেতন</th>
                <th className="p-4">বোনাস (+)</th>
                <th className="p-4">অনুপস্থিতি কর্তন (-)</th>
                <th className="p-4">নিট প্রদেয় বেতন</th>
                <th className="p-4">পেমেন্ট স্ট্যাটাস</th>
                <th className="p-4 text-right">অ্যাকশন / স্লিপ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {salaries.map((sal) => {
                const isPaid = sal.paid_status === 'Paid';
                const memberObj = members.find(m => m.id === sal.user_id);

                return (
                  <tr key={sal.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={memberObj?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop'}
                          alt={sal.user_name}
                          className="w-9 h-9 rounded-full object-cover border border-slate-700"
                        />
                        <div>
                          <span className="font-bold text-white block">{sal.user_name}</span>
                          <span className="text-[11px] text-slate-400">{sal.month}</span>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 text-slate-300">৳ {sal.basic_salary.toLocaleString()}</td>

                    <td className="p-4 text-emerald-400 font-semibold flex items-center gap-1">
                      +৳ {sal.bonus.toLocaleString()}
                      <button
                        onClick={() => {
                          setEditingBonusSalary(sal);
                          setBonusInput(sal.bonus);
                          setNoteInput(sal.note || '');
                        }}
                        className="p-1 rounded text-slate-400 hover:text-brand-cyan"
                        title="বোনাস সম্পাদনা"
                      >
                        <Edit3 className="w-3 h-3" />
                      </button>
                    </td>

                    <td className="p-4 text-rose-400 font-semibold">
                      -৳ {sal.deductions.toLocaleString()}
                      <span className="block text-[10px] text-slate-500 font-normal">
                        ({sal.absent_days} দিন অনুপস্থিত)
                      </span>
                    </td>

                    <td className="p-4 text-base font-extrabold text-brand-cyan">
                      ৳ {sal.net_salary.toLocaleString()}
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => handleStatusToggle(sal, sal.paid_status)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                          isPaid
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {isPaid ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                        <span>{isPaid ? 'পরিশোধিত (Paid)' : 'বকেয়া (Pending)'}</span>
                      </button>
                    </td>

                    <td className="p-4 text-right">
                      <button
                        onClick={() => setSelectedSalary(sal)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold glass-panel text-slate-200 hover:text-brand-cyan hover:border-brand-cyan/40"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>পে-স্লিপ দেখুন</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payslip Receipt Modal */}
      {selectedSalary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-brand-cyan/40 shadow-2xl">
            <button onClick={() => setSelectedSalary(null)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pb-4 border-b border-slate-800">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan">KUAKATA MULTIMEDIA PAYROLL</span>
              <h3 className="text-2xl font-extrabold text-white mt-1">মাসিক বেতন পে-স্লিপ</h3>
              <p className="text-xs text-slate-400">সেশন: {selectedSalary.month}</p>
            </div>

            <div className="py-6 space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">মেম্বারের নাম:</span>
                <span className="font-bold text-white">{selectedSalary.user_name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">বেসিক বেতন:</span>
                <span className="font-semibold text-slate-200">৳ {selectedSalary.basic_salary.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60 text-emerald-400">
                <span>পারফরম্যান্স বোনাস:</span>
                <span className="font-semibold">+৳ {selectedSalary.bonus.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60 text-rose-400">
                <span>অনুপস্থিতি জরিমানা/ডিডাকশন:</span>
                <span className="font-semibold">-৳ {selectedSalary.deductions.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-2 text-sm font-extrabold bg-dark-800 p-3 rounded-xl border border-brand-cyan/30">
                <span className="text-white">সর্বমোট প্রদেয় বেতন:</span>
                <span className="text-brand-cyan">৳ {selectedSalary.net_salary.toLocaleString()}</span>
              </div>

              <div className="pt-2">
                <span className="text-slate-400 block mb-1">পেমেন্ট স্ট্যাটাস:</span>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                  selectedSalary.paid_status === 'Paid' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {selectedSalary.paid_status === 'Paid' ? `Paid (ট্রানজেকশন ID: ${selectedSalary.transaction_id || 'TXN-998811'})` : 'Pending'}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-2">
              <button
                onClick={() => setSelectedSalary(null)}
                className="px-4 py-2 rounded-xl text-xs glass-panel text-slate-300"
              >
                বন্ধ করুন
              </button>
              <button
                onClick={() => window.print()}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900 flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>প্রিন্ট / ডাউনলোড স্লিপ</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Bonus Modal */}
      {editingBonusSalary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md">
          <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 border border-brand-cyan/40 shadow-2xl">
            <button onClick={() => setEditingBonusSalary(null)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-white mb-4">বোনাস ও নোট যুক্ত করুন</h3>

            <form onSubmit={handleSaveBonus} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 mb-1">বোনাস পরিমাণ (টাকা)</label>
                <input
                  type="number"
                  value={bonusInput}
                  onChange={(e) => setBonusInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">অতিরিক্ত নোট</label>
                <input
                  type="text"
                  placeholder="যেমন: ঈদের স্পেশাল বোনাস"
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-white"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingBonusSalary(null)}
                  className="px-4 py-2 rounded-xl glass-panel text-slate-300"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl font-bold bg-brand-cyan text-dark-900"
                >
                  সেভ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
