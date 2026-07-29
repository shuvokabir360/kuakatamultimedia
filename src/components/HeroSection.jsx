import React from 'react';
import { ArrowRight, Sparkles, Users, ShieldCheck, ChevronDown } from 'lucide-react';
import HeroGlobe from './3d/HeroGlobe';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';

export default function HeroSection() {
  const { setActiveTab, switchRoleDemo } = useAuth();
  const { members, projects } = useData();

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Ambient Glows (Logo Red Glows) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-brand-red/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-wine/25 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left Text Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-red/40 text-xs font-bold text-brand-red shadow-[0_0_20px_rgba(255,0,51,0.2)]">
            <img src="/logo.svg" alt="Logo" className="w-4 h-4" />
            <span>কুয়াকাটা মাল্টিমিডিয়া ৩ডি ও পোর্টফোলিও সিস্টেম</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            আধুনিক <span className="text-gradient">৩ডি অ্যানিমেশন</span> & পোর্টফোলিও <span className="text-gradient-gold">ম্যানেজমেন্ট</span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            কুয়াকাটা মাল্টিমিডিয়ার বিশ্বমানের ৩ডি ভিজ্যুয়াল কনটেন্ট, মোশন গ্রাফিক্স, টিম মেম্বার ম্যানেজমেন্ট, দৈনিক হাজিরা এবং অটোমেটেড পে-রোল (Payroll) ক্যালকুলেশনের সম্পূর্ণ ডিজিটাল সমাধান।
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="btn-hero-portfolio"
              onClick={() => setActiveTab('portfolio')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-xl shadow-brand-red/30 hover:scale-105 transition-transform"
            >
              <span>পোর্টফোলিও দেখুন</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="btn-hero-team"
              onClick={() => setActiveTab('team')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm glass-panel text-white border border-slate-700 hover:border-brand-red/50 hover:bg-brand-red/10 transition-all"
            >
              <Users className="w-4 h-4 text-brand-red" />
              <span>টিম মেম্বারবৃন্দ</span>
            </button>

            <button
              id="btn-hero-admin-portal"
              onClick={() => switchRoleDemo('admin')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs bg-dark-800/80 text-slate-300 border border-slate-700 hover:text-brand-red hover:border-brand-red/40 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-brand-amber" />
              <span>অ্যাডমিন ড্যাশবোর্ড (লগইন)</span>
            </button>
          </div>

          {/* Key Value Points */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
            <div>
              <div className="text-2xl font-extrabold text-white flex items-center gap-1">
                <span className="text-brand-red">{projects.length}+</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">লাইভ ৩ডি প্রজেক্ট</p>
            </div>

            <div>
              <div className="text-2xl font-extrabold text-white flex items-center gap-1">
                <span className="text-brand-amber">{members.length}</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">দক্ষ টিম মেম্বার</p>
            </div>

            <div>
              <div className="text-2xl font-extrabold text-white flex items-center gap-1">
                <span className="text-emerald-400">৯৬%</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">গড় উপস্থিতি হার</p>
            </div>
          </div>
        </div>

        {/* Right 3D Interactive Canvas Column */}
        <div className="lg:col-span-5 h-[450px] relative flex items-center justify-center">
          <div className="w-full h-full glass-panel rounded-3xl p-4 border border-brand-red/30 shadow-[0_0_50px_rgba(255,0,51,0.15)] relative">
            <HeroGlobe />
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="text-center pt-8">
        <button
          onClick={() => setActiveTab('team')}
          className="inline-flex items-center justify-center p-2 rounded-full glass-panel text-slate-400 hover:text-brand-red hover:border-brand-red/40 transition-all animate-bounce"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
