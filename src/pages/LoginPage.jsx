import React, { useState, useEffect } from 'react';
import { ShieldCheck, UserCheck, Key, Mail, Phone, Lock, AlertCircle, CheckCircle2, ArrowLeft, Send, Crown, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';

export default function LoginPage() {
  const { login, loginWithPhonePin, loginWithGoogle, user, setActiveTab } = useAuth();
  const { resetUserPassword, members } = useData();

  const [loginRoleTab, setLoginRoleTab] = useState('admin');
  const [mode, setMode] = useState('login');

  const [email, setEmail] = useState('shuvokuakata27@gmail.com');
  const [password, setPassword] = useState('');

  const [phone, setPhone] = useState('01822111222');
  const [pin, setPin] = useState('1234');

  const [resetEmail, setResetEmail] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // If already logged in, redirect to respective dashboard
  useEffect(() => {
    if (user) {
      if (user.role === 'admin') setActiveTab('admin-dashboard');
      else setActiveTab('member-portal');
    }
  }, [user]);

  const handleAdminLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    const res = login(email, password);
    if (!res.success) {
      setError(res.message);
    }
  };

  const handleMemberPhonePinSubmit = (e) => {
    e.preventDefault();
    setError('');
    const res = loginWithPhonePin(phone, pin);
    if (!res.success) {
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
  };

  const handleForgotEmailSubmit = (e) => {
    e.preventDefault();
    setError('');

    const memberExists = members.some(m => m.email.toLowerCase() === resetEmail.toLowerCase());
    if (!memberExists) {
      setError('এই ইমেইল ঠিকানাটি সিস্টেমে নিবন্ধিত নয়!');
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden bg-dark-900">
      
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-amber/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-8 sm:p-10 border border-brand-red/40 shadow-[0_0_60px_rgba(255,0,51,0.2)]">
        
        {/* Back to Home Button */}
        <button
          onClick={() => {
            window.location.hash = '';
            setActiveTab('home');
          }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold glass-panel text-slate-300 hover:text-white border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>হোম পেজে ফিরে যান</span>
        </button>

        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-red via-brand-crimson to-brand-wine p-0.5 mx-auto mb-4 shadow-lg shadow-brand-red/40">
            <div className="w-full h-full bg-dark-900 rounded-[14px] p-2 flex items-center justify-center">
              <img src="/logo.svg" alt="Kuakata Multimedia Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <h2 className="text-3xl font-black text-white">
            {mode === 'login' ? 'পোর্টালে লগইন করুন' : 'পাসওয়ার্ড/পিন রিসেট'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            কুয়াকাটা মাল্টিমিডিয়া টিম অ্যান্ড পোর্টফোলিও সিস্টেম
          </p>
        </div>

        {/* Feedback Alerts */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2.5">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* LOGIN MODE */}
        {mode === 'login' && (
          <>
            {/* Role Tab Selector (Admin vs Member) */}
            <div className="grid grid-cols-2 gap-2 glass-panel p-2 rounded-2xl mb-8 border border-slate-800">
              <button
                type="button"
                id="page-tab-login-admin"
                onClick={() => {
                  setLoginRoleTab('admin');
                  setError('');
                }}
                className={`py-3 px-4 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 ${
                  loginRoleTab === 'admin'
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>অ্যাডমিন (Google)</span>
              </button>

              <button
                type="button"
                id="page-tab-login-member"
                onClick={() => {
                  setLoginRoleTab('member');
                  setError('');
                }}
                className={`py-3 px-4 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 ${
                  loginRoleTab === 'member'
                    ? 'bg-brand-amber text-dark-900 shadow-md shadow-brand-amber/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>টিম কর্মী (মোবাইল & পিন)</span>
              </button>
            </div>

            {/* TAB 1: ADMIN LOGIN (GOOGLE & SUPER ADMIN) */}
            {loginRoleTab === 'admin' && (
              <div className="space-y-4 animate-fade-in">
                
                {/* Super Admin Single Click Primary Button */}
                <button
                  type="button"
                  id="page-btn-super-admin"
                  onClick={() => handleGoogleLogin('shuvokuakata27@gmail.com')}
                  className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:brightness-110 text-dark-900 font-extrabold text-sm shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.01]"
                >
                  <Crown className="w-5 h-5 text-dark-900" />
                  <span>Google Sign In (shuvokuakata27@gmail.com)</span>
                </button>

                {/* Generic Google Account Selector */}
                <button
                  type="button"
                  id="page-btn-google-login"
                  onClick={() => handleGoogleLogin()}
                  className="w-full py-3.5 px-5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.01]"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>অন্যান্য Google ইমেইল দিয়ে সাইন ইন</span>
                </button>

                <div className="relative my-4 text-center">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800" /></div>
                  <span className="relative px-3 bg-dark-900 text-[11px] text-slate-500 font-medium">অথবা ইমেইল/পাসওয়ার্ড লিখুন</span>
                </div>

                <form onSubmit={handleAdminLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">অ্যাডমিন ইমেইল</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="shuvokuakata27@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-xs glass-input"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
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
                      <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-xs glass-input"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg shadow-brand-red/30 hover:scale-[1.01] transition-transform"
                  >
                    অ্যাডমিন পোর্টালে লগইন করুন
                  </button>
                </form>
              </div>
            )}

            {/* TAB 2: MEMBER LOGIN (MOBILE PHONE & PIN CODE) */}
            {loginRoleTab === 'member' && (
              <form onSubmit={handleMemberPhonePinSubmit} className="space-y-4 animate-fade-in">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">মোবাইল নম্বর (Phone Number)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-brand-amber absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="যেমন: 01822111222"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-xs glass-input font-mono font-bold text-white"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold text-slate-300">৪-সংখ্যার গোপন PIN কোড</label>
                    <span className="text-[10px] text-slate-400">(ডিফল্ট পিন: 1234)</span>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-brand-amber absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      required
                      maxLength={6}
                      placeholder="••••"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-xs glass-input font-mono tracking-widest text-white font-bold"
                    />
                  </div>
                </div>

                {/* Quick Member Selector */}
                <div className="pt-2">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1.5">ডেমো টিম মেম্বারদের নম্বর (১-ক্লিক স্যাম্পল):</span>
                  <div className="grid grid-cols-3 gap-2 text-[10px]">
                    <button
                      type="button"
                      onClick={() => { setPhone('01822111222'); setPin('1234'); }}
                      className="p-2 rounded-xl glass-panel text-slate-300 hover:text-brand-amber border border-slate-800 text-center font-bold"
                    >
                      রাফি (01822111222)
                    </button>
                    <button
                      type="button"
                      onClick={() => { setPhone('01933333444'); setPin('1234'); }}
                      className="p-2 rounded-xl glass-panel text-slate-300 hover:text-brand-amber border border-slate-800 text-center font-bold"
                    >
                      নুসরাত (01933333444)
                    </button>
                    <button
                      type="button"
                      onClick={() => { setPhone('01644555666'); setPin('1234'); }}
                      className="p-2 rounded-xl glass-panel text-slate-300 hover:text-brand-amber border border-slate-800 text-center font-bold"
                    >
                      আরিফ (01644555666)
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-black bg-gradient-to-r from-amber-500 to-amber-600 text-dark-900 shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-transform"
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
              আপনার অ্যাকাউন্টের ইমেইল লিখুন। পাসওয়ার্ড রিসেট করার জন্য একটি ৬-সংখ্যার OTP কোড তৈরি করা হবে।
            </p>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">নিবন্ধিত ইমেইল</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="shuvokuakata27@gmail.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-xs glass-input"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setMode('login')}
                className="w-1/3 py-3 rounded-xl text-xs font-semibold glass-panel text-slate-300 flex items-center justify-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>পিছনে</span>
              </button>

              <button
                type="submit"
                className="w-2/3 py-3 rounded-xl text-xs font-bold bg-brand-red text-white shadow-md flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>OTP কোড পাঠান</span>
              </button>
            </div>
          </form>
        )}

        {mode === 'forgot_otp' && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="p-4 rounded-2xl bg-brand-red/10 border border-brand-red/30 text-center space-y-1">
              <span className="text-[11px] text-slate-400 block font-semibold">আপনার ভেরিফিকেশন OTP কোড:</span>
              <span className="text-3xl font-black text-brand-red tracking-widest block font-mono">{generatedOtp}</span>
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
                className="w-full px-4 py-3 rounded-xl text-center text-xl tracking-widest font-mono glass-input font-bold"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setMode('forgot_email')}
                className="w-1/3 py-3 rounded-xl text-xs font-semibold glass-panel text-slate-300"
              >
                পুনরায়
              </button>

              <button
                type="submit"
                className="w-2/3 py-3 rounded-xl text-xs font-bold bg-brand-red text-white shadow-md"
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
                className="w-full px-4 py-3 rounded-xl text-xs glass-input"
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
                className="w-full px-4 py-3 rounded-xl text-xs glass-input"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg"
            >
              পাসওয়ার্ড সেভ করুন
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
