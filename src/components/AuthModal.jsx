import React, { useState } from 'react';
import { X, LogIn, ShieldCheck, UserCheck, Key, Mail, AlertCircle, CheckCircle2, ArrowLeft, Send, Crown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';

export default function AuthModal({ isOpen, onClose }) {
  const { login, loginWithGoogle, switchRoleDemo } = useAuth();
  const { resetUserPassword, members } = useData();

  const [mode, setMode] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [resetEmail, setResetEmail] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    const res = login(email, password);
    if (res.success) {
      onClose();
    } else {
      setError(res.message);
    }
  };

  const handleGoogleLogin = async (targetEmail = null) => {
    if (targetEmail) {
      await loginWithGoogle({
        name: 'Shuvo (Super Admin)',
        email: targetEmail,
        picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop'
      });
    } else {
      await loginWithGoogle();
    }
    onClose();
  };

  const handleDemoSelect = (roleType) => {
    switchRoleDemo(roleType);
    onClose();
  };

  const handleForgotEmailSubmit = (e) => {
    e.preventDefault();
    setError('');

    const memberExists = members.some(m => m.email.toLowerCase() === resetEmail.toLowerCase());
    if (!memberExists) {
      setError('এই ইমেইল ঠিকানাটি ডাটাবেসে নিবন্ধিত নয়!');
      return;
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    setGeneratedOtp(code);
    setMode('forgot_otp');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setError('');
    if (otpInput.trim() === generatedOtp || otpInput.trim() === '123456') {
      setMode('forgot_reset');
    } else {
      setError('প্রদত্ত OTP কোডটি সঠিক নয়! (বা 123456 দিন)');
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
              <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-white">
            {mode === 'login' ? 'পোর্টালে প্রবেশ করুন' : 'পাসওয়ার্ড রিসেট করুন'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {mode === 'login' ? 'গুগল বা ইমেইল দিয়ে লগইন করুন' : 'আপনার নিবন্ধিত ইমেইলে ভেরিফিকেশন পাঠানো হবে'}
          </p>
        </div>

        {/* Feedback Alerts */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* MODE 1: Standard Login & Google OAuth */}
        {mode === 'login' && (
          <>
            {/* Google Sign In Primary Button */}
            <button
              type="button"
              id="btn-google-login"
              onClick={() => handleGoogleLogin()}
              className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] mb-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Google দিয়ে সাইন ইন করুন (Google Sign In)</span>
            </button>

            {/* Super Admin Single Click Button */}
            <button
              type="button"
              id="btn-super-admin"
              onClick={() => handleGoogleLogin('shuvokuakata27@gmail.com')}
              className="w-full py-2.5 px-4 rounded-2xl glass-panel border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 font-bold text-xs flex items-center justify-center gap-2 mb-4 group"
            >
              <Crown className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>সুপার অ্যাডমিন (shuvokuakata27@gmail.com)</span>
            </button>

            <div className="relative my-4 text-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800" /></div>
              <span className="relative px-3 bg-dark-900 text-[11px] text-slate-500 font-medium">অথবা ইমেইল পাসওয়ার্ড দিন</span>
            </div>

            {/* Quick Demo Login Cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => handleDemoSelect('admin')}
                className="p-3 rounded-2xl glass-panel border border-brand-red/40 hover:bg-brand-red/10 transition-colors text-left group"
              >
                <ShieldCheck className="w-5 h-5 text-brand-red mb-1 group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-white">অ্যাডমিন ডেমো</span>
                <span className="block text-[10px] text-slate-400">ম্যানেজার রোল</span>
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

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">ইমেইল ঠিকানা</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
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
                  <label className="text-xs font-medium text-slate-300">পাসওয়ার্ড</label>
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
                লগইন করুন
              </button>
            </form>
          </>
        )}

        {/* MODE 2: Forgot Password */}
        {mode === 'forgot_email' && (
          <form onSubmit={handleForgotEmailSubmit} className="space-y-4">
            <p className="text-xs text-slate-300">
              আপনার অ্যাকাউন্টের ইমেইল লিখুন। পাসওয়ার্ড রিসেট করার জন্য একটি ৬-সংখ্যার OTP কোড তৈরি করা হবে।
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
                className="w-2/3 py-2.5 rounded-xl text-xs font-bold bg-brand-red text-white shadow-md flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>OTP কোড পাঠান</span>
              </button>
            </div>
          </form>
        )}

        {/* MODE 3: Verify OTP */}
        {mode === 'forgot_otp' && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="p-3 rounded-2xl bg-brand-red/10 border border-brand-red/30 text-center space-y-1">
              <span className="text-[11px] text-slate-400 block font-semibold">আপনার ভেরিফিকেশন OTP কোড:</span>
              <span className="text-2xl font-black text-brand-red tracking-widest block font-mono">{generatedOtp}</span>
              <span className="text-[10px] text-slate-400 block">(বা 123456 দিন)</span>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">৬-সংখ্যার OTP লিখুন</label>
              <input
                type="text"
                required
                maxLength={6}
                placeholder="যেমন: 123456"
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

        {/* MODE 4: Set New Password */}
        {mode === 'forgot_reset' && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">নতুন পাসওয়ার্ড লিখুন</label>
              <input
                type="password"
                required
                placeholder="নতুন পাসওয়ার্ড..."
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
