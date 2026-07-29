import React from 'react';
import { FileText, Download, Printer, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceReports() {
  const { members = [], payments = [], shootings = [], clients = [], exportAllDataJSON } = useData();

  const totalDues = members.reduce((sum, m) => sum + Math.max(0, m?.balance || 0), 0);
  const totalPaid = payments.reduce((sum, p) => sum + (p?.amount || 0), 0);
  const totalExpenses = shootings.reduce((sum, s) => sum + (s?.expenses || 0), 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900">রিপোর্ট & PDF প্যানেল</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            আর্থিক হিসাব ও হাজিরার রিপোর্ট ডাউনলোড ও প্রিন্ট করুন
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-2xl bg-slate-900 text-white text-xs font-black shadow-md flex items-center gap-1.5 hover:bg-slate-800 transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>প্রিন্ট করুন</span>
          </button>

          <button
            onClick={exportAllDataJSON}
            className="px-4 py-2.5 rounded-2xl bg-red-600 text-white text-xs font-black shadow-md shadow-red-500/20 flex items-center gap-1.5 hover:bg-red-700 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>JSON র-ডাটা ব্যাকআপ</span>
          </button>
        </div>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-500 uppercase block">মোট বকেয়া সামারি</span>
          <div className="text-2xl font-black text-red-600">৳ {toBnNum(totalDues.toLocaleString())}</div>
          <span className="text-[11px] text-slate-400 font-medium block">{toBnNum(members.length)} জন মেম্বার অন্তর্ভুক্ত</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-500 uppercase block">মোট পরিশোধিত পেমেন্ট</span>
          <div className="text-2xl font-black text-emerald-600">৳ {toBnNum(totalPaid.toLocaleString())}</div>
          <span className="text-[11px] text-slate-400 font-medium block">{toBnNum(payments.length)} টি পেমেন্ট লেনদেন</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-500 uppercase block">শুটিং & পরিচালন খরচ</span>
          <div className="text-2xl font-black text-slate-800">৳ {toBnNum(totalExpenses.toLocaleString())}</div>
          <span className="text-[11px] text-slate-400 font-medium block">{toBnNum(shootings.length)} টি শুটিং হিসাব</span>
        </div>
      </div>

      {/* Available Printable Reports */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-red-500" />
          <span>ডাউনলোডযোগ্য রিপোর্টসমূহ</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-red-100 text-red-600 font-black">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900">মাসিক বেতন ও বকেয়া রিপোর্ট</h4>
                <p className="text-[10px] text-slate-500">জুলাই ২০২৬ পর্যন্ত সকল মেম্বারদের ফাইনাল স্টেটমেন্ট</p>
              </div>
            </div>
            <button onClick={handlePrint} className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100">
              ডাউনলোড (PDF)
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600 font-black">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900">হাজিরা রেজিস্টার রিপোর্ট</h4>
                <p className="text-[10px] text-slate-500">শুটিং অনুযায়ী দৈনিক কর্মীদের উপস্থিতি লগ</p>
              </div>
            </div>
            <button onClick={handlePrint} className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100">
              ডাউনলোড (PDF)
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
