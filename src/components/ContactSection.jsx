import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Globe } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '3D Project Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '3D Project Inquiry', message: '' });
    }, 4000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-red/40 text-xs font-bold text-brand-red">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>যোগাযোগ করুন</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            আপনার প্রজেক্টের <span className="text-gradient">৩ডি আইডিয়া বাস্তবায়ন</span> করতে প্রস্তুত?
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            কুয়াকাটা মাল্টিমিডিয়ার সাথে আপনার বিজনেস, অ্যানিমেশন বা ৩ডি কাস্টম সফটওয়্যার প্রজেক্ট আলোচনা করতে আমাদের বার্তা পাঠাতে পারেন।
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4 glass-panel p-4 rounded-xl border border-slate-800">
              <div className="p-3 rounded-lg bg-brand-red/10 text-brand-red">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">অফিস লোকেশন</h4>
                <p className="text-sm font-semibold text-white mt-0.5">কুয়াকাটা মাল্টিমিডিয়া টাওয়ার, ঢাকা & কুয়াকাটা, বাংলাদেশ</p>
              </div>
            </div>

            <div className="flex items-start gap-4 glass-panel p-4 rounded-xl border border-slate-800">
              <div className="p-3 rounded-lg bg-brand-amber/10 text-brand-amber">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">ইমেইল ঠিকানা</h4>
                <p className="text-sm font-semibold text-white mt-0.5">info@kuakatamultimedia.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 glass-panel p-4 rounded-xl border border-slate-800">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">হেল্পলাইন / হোয়াটসঅ্যাপ</h4>
                <p className="text-sm font-semibold text-white mt-0.5">+880 1711-000001 / +880 9600-112233</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-red/30 shadow-2xl relative">
            
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-brand-red" />
              বার্তা সরসারি পাঠান (Instant Inquiry)
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">বার্তা সফলভাবে পাঠানো হয়েছে!</h4>
                <p className="text-xs text-slate-300">আমাদের টিম অতিসত্বর আপনার ইমেইলে যোগাযোগ করবে। ধন্যবাদ!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">আপনার নাম</label>
                    <input
                      type="text"
                      required
                      placeholder="যেমন: আহসান হাবীব"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs glass-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">ইমেইল ঠিকানা</label>
                    <input
                      type="email"
                      required
                      placeholder="ahsan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs glass-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">বিষয়</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs glass-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">আপনার বার্তা</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="আপনার প্রজেক্ট সম্পর্কিত যেকোনো প্রশ্ন বা মেসেজ লিখুন..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs glass-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-xl shadow-brand-red/30 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>মেসেজ সেন্ড করুন</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
