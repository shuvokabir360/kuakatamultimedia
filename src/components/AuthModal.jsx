import React, { useState } from 'react';
import { X, LogIn, ShieldCheck, UserCheck, Key, Mail, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal({ isOpen, onClose }) {
  const { login, switchRoleDemo } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const res = login(email, password);
    if (res.success) {
      onClose();
    } else {
      setError(res.message);
    }
  };

  const handleDemoSelect = (roleType) => {
    switchRoleDemo(roleType);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 border border-brand-red/40 shadow-[0_0_50px_rgba(255,0,51,0.25)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full glass-panel text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-red via-brand-crimson to-brand-wine p-0.5 mx-auto mb-3 shadow-lg shadow-brand-red/40">
            <div className="w-full h-full bg-dark-900 rounded-[14px] p-2 flex items-center justify-center">
              <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-white">পোর্টালে প্রবেশ করুন</h3>
          <p className="text-xs text-slate-400 mt-1">অ্যাডমিন বা মেম্বার হিসেবে সাইন ইন করুন</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Quick Demo Login Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => handleDemoSelect('admin')}
            className="p-3 rounded-2xl glass-panel border border-brand-red/40 hover:bg-brand-red/10 transition-colors text-left group"
          >
            <ShieldCheck className="w-5 h-5 text-brand-red mb-1 group-hover:scale-110 transition-transform" />
            <span className="block text-xs font-bold text-white">অ্যাডমিন ডেমো</span>
            <span className="block text-[10px] text-slate-400">ম্যানেজার / সিইও রোল</span>
          </button>

          <button
            type="button"
            onClick={() => handleDemoSelect('member')}
            className="p-3 rounded-2xl glass-panel border border-brand-amber/40 hover:bg-brand-amber/10 transition-colors text-left group"
          >
            <UserCheck className="w-5 h-5 text-brand-amber mb-1 group-hover:scale-110 transition-transform" />
            <span className="block text-xs font-bold text-white">মেম্বার ডেমো</span>
            <span className="block text-[10px] text-slate-400">টিম কর্মী রোল</span>
          </button>
        </div>

        <div className="relative my-4 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800" /></div>
          <span className="relative px-3 bg-dark-900 text-[11px] text-slate-500 font-medium">অথবা ইমেইল দিয়ে লগইন করুন</span>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">ইমেইল ঠিকানা</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                placeholder="admin@kuakatamultimedia.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs glass-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">পাসওয়ার্ড</label>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs glass-input"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg shadow-brand-red/30 hover:scale-[1.01] transition-transform"
          >
            লগইন করুন
          </button>
        </form>

      </div>
    </div>
  );
}
