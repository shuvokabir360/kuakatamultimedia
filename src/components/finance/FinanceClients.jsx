import React, { useState } from 'react';
import { Receipt, Wallet, AlertCircle, ChevronRight, Plus, Search } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceClients() {
  const { clients = [] } = useData();

  const safeClients = clients || [];

  const totalReceivable = safeClients.reduce((sum, c) => sum + (c?.contract_amount || 0), 0);
  const totalReceived = safeClients.reduce((sum, c) => sum + (c?.received_amount || 0), 0);
  const totalDue = safeClients.reduce((sum, c) => sum + (c?.due_amount || 0), 0);

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900">ক্লায়েন্ট হিসাব</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          বাইরের চ্যানেলের পাওনা ও প্রাপ্তি
        </p>
      </div>

      {/* 3 Top Stat Cards */}
      <div className="grid grid-cols-3 gap-2.5">
        
        {/* 1. মোট পাওনা */}
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
          <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-500 border border-rose-100 flex items-center justify-center">
            <Receipt className="w-4 h-4" />
          </div>
          <span className="text-[10px] text-slate-500 font-bold block">মোট পাওনা</span>
          <span className="text-xs font-black text-slate-900 block">
            ৳ {toBnNum(totalReceivable.toLocaleString())}
          </span>
        </div>

        {/* 2. প্রাপ্ত */}
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
            <Wallet className="w-4 h-4" />
          </div>
          <span className="text-[10px] text-slate-500 font-bold block">প্রাপ্ত</span>
          <span className="text-xs font-black text-slate-900 block">
            ৳ {toBnNum(totalReceived.toLocaleString())}
          </span>
        </div>

        {/* 3. বকেয়া */}
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
          <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-500 border border-rose-100 flex items-center justify-center">
            <AlertCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] text-slate-500 font-bold block">বকেয়া</span>
          <span className="text-xs font-black text-slate-900 block">
            ৳ {toBnNum(totalDue.toLocaleString())}
          </span>
        </div>

      </div>

      {/* Client List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {safeClients.map((client) => (
          <div
            key={client.id}
            className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3 transition-transform hover:scale-[1.01] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-slate-100 p-1 border border-slate-200 flex items-center justify-center shrink-0">
                  <span className="text-xs font-black text-slate-700">{client.name.charAt(0)}</span>
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-900">{client.name}</h3>
                  <span className="text-[11px] text-slate-500 font-semibold block mt-0.5">
                    {toBnNum(0)} টি শুটিং • পাওনা ৳ {toBnNum((client.contract_amount || 0).toLocaleString())}
                  </span>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
            </div>

            {/* Received & Due Row */}
            <div className="flex items-center justify-between text-xs font-bold pt-2 border-t border-slate-100">
              <span className="text-emerald-600">
                প্রাপ্ত ৳ {toBnNum((client.received_amount || 0).toLocaleString())}
              </span>

              <span className={(client.due_amount || 0) > 0 ? 'text-rose-600' : 'text-slate-500'}>
                বকেয়া ৳ {toBnNum((client.due_amount || 0).toLocaleString())}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
