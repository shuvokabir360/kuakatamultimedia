import React, { useState } from 'react';
import { Receipt, Wallet, AlertCircle, ChevronRight, Plus, Search } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function FinanceClients() {
  const { clients = [] } = useData();

  // Mock Detailed Clients matching exact screenshot
  const detailedClients = [
    {
      id: 'c1',
      name: 'Malbro Entertainment',
      logo: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=100&auto=format&fit=crop',
      shootingCount: 14,
      receivable: 39000,
      received: 15000,
      due: 24000
    },
    {
      id: 'c2',
      name: 'Mehidi Multimedia',
      logo: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=100&auto=format&fit=crop',
      shootingCount: 3,
      receivable: 45000,
      received: 45000,
      due: 0
    }
  ];

  const totalReceivable = 84000;
  const totalReceived = 60000;
  const totalDue = 24000;

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Header (Matching Screenshot) */}
      <div>
        <h2 className="text-2xl font-black text-slate-900">ক্লায়েন্ট হিসাব</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          বাইরের চ্যানেলের পাওনা ও প্রাপ্তি
        </p>
      </div>

      {/* 3 Top Stat Cards (Matching Screenshot) */}
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

      {/* Client List Cards (Matching Screenshot) */}
      <div className="space-y-3">
        {detailedClients.map((client) => (
          <div
            key={client.id}
            className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3 transition-transform hover:scale-[1.01]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0 shadow-sm"
                />

                <div>
                  <h3 className="text-sm font-black text-slate-900">{client.name}</h3>
                  <span className="text-[11px] text-slate-500 font-semibold block mt-0.5">
                    {toBnNum(client.shootingCount)} টি শুটিং • পাওনা ৳ {toBnNum(client.receivable.toLocaleString())}
                  </span>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>

            {/* Received & Due Row */}
            <div className="flex items-center gap-4 text-xs font-bold pt-2 border-t border-slate-100">
              <span className="text-emerald-600">
                প্রাপ্ত ৳ {toBnNum(client.received.toLocaleString())}
              </span>

              <span className={client.due > 0 ? 'text-rose-600' : 'text-slate-500'}>
                বকেয়া ৳ {toBnNum(client.due.toLocaleString())}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
