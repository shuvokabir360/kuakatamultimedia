import React, { useState } from 'react';
import { X, ShieldCheck, Key, Mail, Phone, Lock, AlertCircle, CheckCircle2, ArrowLeft, Send } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { supabase, isSupabaseConnected } from '../services/supabaseClient';
import { sendPasswordResetEmailOTP } from '../services/emailService';

export default function AuthModal({ isOpen, onClose }) {
  const { login, loginWithPhonePin } = useAuth();
  const { resetUserPassword, members } = useData();

  const [loginRoleTab, setLoginRoleTab] = useState('admin');
  const [mode, setMode] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');

  const [resetEmail, setResetEmail] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [sentOtpCode, setSentOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleAdminLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    const res = login(email, password);
    if (res.success) {
      onClose();
    } else {
      setError(res.message);
    }
  };

  const handleMemberPhonePinSubmit = (e) => {
    e.preventDefault();
    setError('');
    const res = loginWithPhonePin(phone, pin);
    if (res.success) {
      onClose();
    } else {
      setError(res.message);
    }
  };

  const handleForgotEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setLoading(true);

    const target = resetEmail.trim().toLowerCase();
    const isSuperAdminEmail = target.includes('shuvokuakata');
    const memberExists = isSuperAdminEmail || members.some(m => m.email.trim().toLowerCase() === target);
    
    if (!memberExists) {
      setLoading(false);
      setError('এই ইমেইল ঠিকানাটি সিস্টেমে নিবন্ধিত নয়!');
      return;
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    setSentOtpCode(code);

    await sendPasswordResetEmailOTP(target, code);

    if (isSupabaseConnected && supabase) {
      try {
        await supabase.auth.resetPasswordForEmail(target, {
          redirectTo: 'https://shuvokabir360.github.io/kuakatamultimedia/#/login'
        });
      } catch (err) {
        console.warn('Supabase mail dispatch:', err);
      }
    }

    setLoading(false);
    setSuccessMsg(`আপনার ইমেইল (${resetEmail}) এ "Kuakata Multimedia User Password Change OTP" বিষয়ে ৬-সংখ্যার OTP কোডটি পাঠানো হয়েছে! জিমেইল চেক করুন।`);
    setMode('forgot_otp');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setError('');
    if (otpInput.trim() === sentOtpCode || (sentOtpCode && otpInput.trim() === sentOtpCode)) {
      setSuccessMsg('OTP ভেরিফিকেশন সফল হয়েছে! আপনার নতুন পাসওয়ার্ড ও পিন সেভ করুন।');
      setMode('forgot_reset');
    } else {
      setError('প্রদত্ত OTP কোডটি সঠিক নয়! জিমেইল ইনবক্স চেক করে ৬-সংখ্যার কোডটি লিখুন।');
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setError('');
    if (newPassword.length < 3) {
      setError('পাসওয়ার্ড অন্তত ৩ অক্ষরের হতে হবে!');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('পাসওয়ার্ড দুটি মিলছে না!');
      return;
    }

    const res = resetUserPassword(resetEmail, newPassword);
    if (res.success) {
      setSuccessMsg('আপনার পাসওয়ার্ড সফলভাবে রিসেট করা হয়েছে! নতুন পাসওয়ার্ড দিয়ে লগইন করুন।');
      setTimeout(() => {
        setMode('login');
        setEmail(resetEmail);
        setPassword(newPassword);
        setSuccessMsg('');
      }, 2000);
    } else {
      setError(res.message);
    }
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
              <img src="/logo.svg" alt="Kuakata Multimedia Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-white">
            {mode === 'login' ? 'পোর্টালে প্রবেশ করুন' : 'পাসওয়ার্ড/পিন রিসেট'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            কুয়াকাটা মাল্টিমিডিয়া ৩ডি ম্যানেজমেন্ট সিস্টেম
          </p>
        </div>

        {/* Feedback Alerts */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* LOGIN MODE */}
        {mode === 'login' && (
          <>
            {/* Role Tab Selector */}
            <div className="grid grid-cols-2 gap-2 glass-panel p-1.5 rounded-2xl mb-6 border border-slate-800">
              <button
                type="button"
                id="tab-login-admin"
                onClick={() => {
                  setLoginRoleTab('admin');
                  setError('');
                }}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  loginRoleTab === 'admin'
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>অ্যাডমিন (ইমেইল & পাসওয়ার্ড)</span>
              </button>

              <button
                type="button"
                id="tab-login-member"
                onClick={() => {
                  setLoginRoleTab('member');
                  setError('');
                }}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  loginRoleTab === 'member'
                    ? 'bg-brand-amber text-dark-900 shadow-md shadow-brand-amber/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>টিম কর্মী (মোবাইল & পিন)</span>
              </button>
            </div>

            {/* TAB 1: ADMIN LOGIN (ONLY EMAIL & PASSWORD) */}
            {loginRoleTab === 'admin' && (
              <form onSubmit={handleAdminLoginSubmit} className="space-y-3 animate-fade-in">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">অ্যাডমিন ইমেইল (Admin Email)</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="shuvokuakata27@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs glass-input"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-medium text-slate-300">গোপন পাসওয়ার্ড (Password)</label>
                    <button
                      type="button"
                      onClick={() => {
                        setMode('forgot_email');
                        setError('');
                        setResetEmail(email || 'shuvokuakata27@gmail.com');
                      }}
                      className="text-[11px] font-bold text-brand-red hover:underline"
                    >
                      পাসওয়ার্ড ভুলে গেছেন?
                    </button>
                  </div>
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
                  অ্যাডমিন সাইন ইন করুন
                </button>
              </form>
            )}

            {/* TAB 2: MEMBER LOGIN (ONLY MOBILE PHONE & PIN) */}
            {loginRoleTab === 'member' && (
              <form onSubmit={handleMemberPhonePinSubmit} className="space-y-4 animate-fade-in">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">মোবাইল নম্বর (Phone Number)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-brand-amber absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="যেমন: 01822111222"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs glass-input font-mono font-bold text-white"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-slate-300">৪-সংখ্যার গোপন PIN কোড</label>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-brand-amber absolute left-3 top-3" />
                    <input
                      type="password"
                      required
                      maxLength={6}
                      placeholder="••••"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs glass-input font-mono tracking-widest text-white font-bold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-dark-900 shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-transform"
                >
                  কর্মী পোর্টালে সাইন ইন করুন
                </button>
              </form>
            )}
          </>
        )}

        {/* FORGOT PASSWORD FLOW */}
        {mode === 'forgot_email' && (
          <form onSubmit={handleForgotEmailSubmit} className="space-y-4">
            <p className="text-xs text-slate-300">
              আপনার নিবন্ধিত ইমেইল লিখুন। পাসওয়ার্ড রিসেট করার জন্য ৬-সংখ্যার ভেরিফিকেশন OTP ইমেইলে পাঠানো হবে।
            </p>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">নিবন্ধিত ইমেইল</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  placeholder="shuvokuakata27@gmail.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs glass-input"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setMode('login')}
                className="w-1/3 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-300 flex items-center justify-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>পিছনে</span>
              </button>

              <button
                type="submit"
                disabled={loading}
                className="w-2/3 py-2.5 rounded-xl text-xs font-bold bg-brand-red text-white shadow-md flex items-center justify-center gap-1.5 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'OTP সেন্ডিং...' : 'ইমেইলে OTP পাঠান'}</span>
              </button>
            </div>
          </form>
        )}

        {mode === 'forgot_otp' && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="p-3 rounded-2xl bg-brand-red/10 border border-brand-red/30 text-center space-y-1">
              <span className="text-xs text-brand-red font-bold block">ইমেইল ভেরিফিকেশন OTP</span>
              <p className="text-[11px] text-slate-300">
                আপনার ইমেইল (<b>{resetEmail}</b>) ইনবক্স অথবা স্প্যাম ফোল্ডার চেক করে প্রাপ্ত ৬-সংখ্যার কোডটি নিচে লিখুন।
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">৬-সংখ্যার OTP কোড লিখুন</label>
              <input
                type="text"
                required
                maxLength={6}
                placeholder="যেমন: 489201"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-center text-lg tracking-widest font-mono glass-input font-bold"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setMode('forgot_email')}
                className="w-1/3 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-300"
              >
                পুনরায়
              </button>

              <button
                type="submit"
                className="w-2/3 py-2.5 rounded-xl text-xs font-bold bg-brand-red text-white shadow-md"
              >
                OTP ভেরিফাই করুন
              </button>
            </div>
          </form>
        )}

        {mode === 'forgot_reset' && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">নতুন পাসওয়ার্ড/পিন লিখুন</label>
              <input
                type="password"
                required
                placeholder="নতুন পাসওয়ার্ড বা পিন..."
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-xs glass-input"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">নতুন পাসওয়ার্ড নিশ্চিত করুন</label>
              <input
                type="password"
                required
                placeholder="পুনরায় নতুন পাসওয়ার্ড লিখুন..."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-xs glass-input"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg"
            >
              পাসওয়ার্ড সেভ করুন
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
