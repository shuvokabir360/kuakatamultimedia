import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  Gift, 
  Pencil, 
  Trash2, 
  Camera, 
  QrCode, 
  Copy, 
  Share2, 
  Download, 
  RefreshCw, 
  Plus, 
  Check, 
  CreditCard 
} from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';

export default function MemberProfileModal({ member, isOpen, onClose }) {
  const { updateMember, deleteMember } = useData();

  const [activeTab, setActiveTab] = useState('payment'); // 'payment' | 'attendance'
  const [showEditModal, setShowEditModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Edit Form State
  const [formData, setFormData] = useState({
    name: member?.name || '',
    designation: member?.designation || '',
    phone: member?.phone || '',
    type: member?.type || 'দৈনিক',
    daily_rate: member?.daily_rate || 0,
    monthly_salary: member?.monthly_salary || 0,
    bkash: member?.bkash || '',
    nagad: member?.nagad || '',
    bank: member?.bank || '',
    pin: member?.pin || '1234'
  });

  if (!isOpen || !member) return null;

  const personalLink = `https://kuakatamultimedia.com/member/${member.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(personalLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    
    // Validate 11-digit BD Phone
    const cleanPhone = (formData.phone || '').trim();
    if (!/^01[3-9]\d{8}$/.test(cleanPhone)) {
      alert('১১ ডিজিটের সঠিক বাংলাদেশী মোবাইল নম্বর লিখুন! (যেমন: 01700000000)');
      return;
    }

    updateMember({
      ...member,
      name: formData.name,
      designation: formData.designation,
      phone: cleanPhone,
      type: formData.type,
      daily_rate: Number(formData.daily_rate) || 0,
      monthly_salary: Number(formData.monthly_salary) || 0,
      bkash: formData.bkash.trim(),
      nagad: formData.nagad.trim(),
      bank: formData.bank.trim(),
      pin: formData.pin.trim() || '1234'
    });
    setShowEditModal(false);
    alert('প্রোফাইল তথ্য সফলভাবে আপডেট করা হয়েছে!');
  };

  const handleDelete = () => {
    if (window.confirm(`আপনি কি নিশ্চিত যে ${member.name} কে মুছে ফেলতে চান?`)) {
      deleteMember(member.id);
      onClose();
    }
  };

  return (
    <>
      {/* 1. MEMBER PROFILE DETAILS MODAL (Matching Screenshots 1 & 3) */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
        <div className="relative w-full max-w-sm bg-white rounded-3xl p-5 border border-slate-200 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto no-scrollbar">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="text-base font-black text-slate-900">সদস্যের প্রোফাইল</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Header Avatar & Badges */}
          <div className="text-center space-y-2">
            <div className="relative w-20 h-20 mx-auto">
              <img
                src={member.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop'}
                alt={member.name}
                className="w-full h-full rounded-full object-cover border-2 border-slate-200 shadow-md"
              />
              <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-red-600 text-white shadow-md border-2 border-white">
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>

            <div>
              <div className="flex items-center justify-center gap-2">
                <h4 className="text-lg font-black text-slate-900">{member.name}</h4>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                  member.type === 'মাসিক' 
                    ? 'bg-rose-100 text-rose-600 border border-rose-200'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}>
                  {member.type || 'মাসিক'}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">{member.designation}</p>
            </div>
          </div>

          {/* Rate & Balance Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] text-slate-500 font-bold block mb-0.5">রেট</span>
              <span className="text-sm font-black text-slate-900">
                ৳ {toBnNum(member.daily_rate || 0)}/{member.type === 'মাসিক' ? 'মাস' : 'দিন'}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] text-slate-500 font-bold block mb-0.5">ব্যালেন্স</span>
              <span className="text-sm font-black text-slate-900">
                ৳ {toBnNum(member.balance || 0)}
              </span>
            </div>
          </div>

          {/* Call Phone Box */}
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Phone className="w-4 h-4 text-red-500" />
              <span>{toBnNum(member.phone || '01713953527')}</span>
            </div>

            <a
              href={`tel:${member.phone || '01713953527'}`}
              className="px-3 py-1 rounded-xl bg-white border border-rose-200 text-rose-600 text-xs font-bold shadow-sm"
            >
              কল
            </a>
          </div>

          {/* Bonus Action Button */}
          <button className="w-full py-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-black flex items-center justify-center gap-1.5 shadow-sm">
            <Gift className="w-4 h-4 text-amber-600" />
            <span>বোনাস দিন</span>
          </button>

          {/* Payment vs Attendance Tabs */}
          <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 grid grid-cols-2 gap-1 text-xs font-bold">
            <button
              onClick={() => setActiveTab('payment')}
              className={`py-2 rounded-xl transition-all ${
                activeTab === 'payment'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500'
              }`}
            >
              💳 পেমেন্ট ({toBnNum(0)})
            </button>

            <button
              onClick={() => setActiveTab('attendance')}
              className={`py-2 rounded-xl transition-all ${
                activeTab === 'attendance'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500'
              }`}
            >
              📅 হাজিরা ({toBnNum(26)})
            </button>
          </div>

          {/* Payment Summary */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span>মোট পরিশোধিত</span>
              <span className="text-emerald-600">৳ {toBnNum(0)}</span>
            </div>
            <p className="text-xs text-slate-400 font-medium py-2">কোনো পেমেন্ট নেই</p>
          </div>

          {/* Monthly Ledger Box */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center text-xs text-slate-400 font-medium">
            কোনো মাসিক হিসাব নেই
          </div>

          {/* Personal QR Link Box (Matching Screenshot 1 & 3) */}
          <div className="p-4 rounded-3xl bg-emerald-50/50 border border-emerald-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-black text-emerald-900">
                <QrCode className="w-4 h-4 text-emerald-600" />
                <span>ব্যক্তিগত লিংক</span>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800">
                <span>চালু</span>
                <span className="w-8 h-4 bg-emerald-500 rounded-full inline-block relative p-0.5">
                  <span className="w-3 h-3 bg-white rounded-full block translate-x-4 transition-transform" />
                </span>
              </div>
            </div>

            {/* QR Code Graphic */}
            <div className="p-3 bg-white rounded-2xl border border-emerald-100 flex items-center justify-center">
              <div className="w-36 h-36 bg-slate-900 p-2 rounded-xl flex items-center justify-center text-white">
                <QrCode className="w-full h-full text-white" />
              </div>
            </div>

            <p className="text-[10px] text-slate-500 text-center leading-tight">
              শুধু এই লিংক/QR যিনি পাবেন, তিনিই হিসাব দেখতে পাবেন। যেকোনো সময় বন্ধ করতে পারবেন।
            </p>

            {/* Link Input Box */}
            <div className="p-2 bg-white rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-600 font-mono truncate max-w-[200px]">
                {personalLink}
              </span>
              <button
                onClick={handleCopyLink}
                className="p-1.5 text-slate-400 hover:text-slate-700"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Download / Share / Reset Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button className="py-2 rounded-xl bg-red-600 text-white text-xs font-extrabold flex items-center justify-center gap-1">
                <Download className="w-3.5 h-3.5" />
                <span>ডাউনলোড</span>
              </button>

              <button className="py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-extrabold flex items-center justify-center gap-1">
                <Share2 className="w-3.5 h-3.5" />
                <span>শেয়ার</span>
              </button>

              <button className="py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-extrabold flex items-center justify-center gap-1">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>রিসেট</span>
              </button>
            </div>

          </div>

          {/* Bottom Edit & Delete Actions */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => setShowEditModal(true)}
              className="py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs flex items-center justify-center gap-1.5"
            >
              <Pencil className="w-4 h-4" />
              <span>এডিট</span>
            </button>

            <button
              onClick={handleDelete}
              className="py-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 font-black text-xs flex items-center justify-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" />
              <span>মুছুন</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. PROFILE EDIT MODAL (Matching Screenshot 2) */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-4">
            
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-slate-900">প্রফাইল এডিট</h3>

            <form onSubmit={handleSaveEdit} className="space-y-3.5 text-xs">
              
              {/* 1. নাম */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="w-full">
                  <label className="block text-[10px] text-slate-400 font-bold mb-0.5">নাম</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent font-black text-slate-900 outline-none text-xs"
                  />
                </div>
                <Pencil className="w-4 h-4 text-slate-400 shrink-0" />
              </div>

              {/* 2. পদবী */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="w-full">
                  <label className="block text-[10px] text-slate-400 font-bold mb-0.5">পদবী</label>
                  <input
                    type="text"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full bg-transparent font-black text-slate-900 outline-none text-xs"
                  />
                </div>
                <Pencil className="w-4 h-4 text-slate-400 shrink-0" />
              </div>

              {/* 3. মোবাইল */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="w-full">
                  <label className="block text-[10px] text-slate-400 font-bold mb-0.5">মোবাইল</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent font-black text-slate-900 outline-none text-xs"
                  />
                </div>
                <Pencil className="w-4 h-4 text-slate-400 shrink-0" />
              </div>

              {/* 4. ধরন (দৈনিক/মাসিক) */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="w-full">
                  <label className="block text-[10px] text-slate-400 font-bold mb-0.5">ধরন (দৈনিক/মাসিক)</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-transparent font-black text-slate-900 outline-none text-xs"
                  >
                    <option value="দৈনিক">দৈনিক বেতন</option>
                    <option value="মাসিক">মাসিক বেতন</option>
                  </select>
                </div>
                <Pencil className="w-4 h-4 text-slate-400 shrink-0" />
              </div>

              {/* 5. বেতন পরিমাণ (দৈনিক রেট / মাসিক বেতন) */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="w-full">
                  <label className="block text-[10px] text-slate-400 font-bold mb-0.5">
                    {formData.type === 'দৈনিক' ? 'দৈনিক রেট (৳/দিন)' : 'মাসিক বেতন (৳/মাস)'}
                  </label>
                  <input
                    type="number"
                    value={formData.type === 'দৈনিক' ? formData.daily_rate : formData.monthly_salary}
                    onChange={(e) => setFormData({
                      ...formData,
                      [formData.type === 'দৈনিক' ? 'daily_rate' : 'monthly_salary']: e.target.value
                    })}
                    className="w-full bg-transparent font-black text-slate-900 outline-none text-xs"
                  />
                </div>
                <Pencil className="w-4 h-4 text-slate-400 shrink-0" />
              </div>

              {/* মোবাইল পেমেন্ট অ্যাকাউন্টসমূহ (bKash / Nagad / Bank) */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-black text-slate-800 block">ব্যাংক ও মোবাইল ব্যাংকিং অ্যাকাউন্ট</span>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <label className="block text-[10px] text-rose-600 font-bold mb-0.5">বিকাশ (bKash)</label>
                    <input
                      type="text"
                      placeholder="01700000000"
                      value={formData.bkash}
                      onChange={(e) => setFormData({ ...formData, bkash: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-800 outline-none text-xs font-mono"
                    />
                  </div>

                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <label className="block text-[10px] text-amber-600 font-bold mb-0.5">নগদ (Nagad)</label>
                    <input
                      type="text"
                      placeholder="01700000000"
                      value={formData.nagad}
                      onChange={(e) => setFormData({ ...formData, nagad: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-800 outline-none text-xs font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Save Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-lg shadow-red-500/30"
              >
                সংরক্ষণ করুন
              </button>

            </form>

          </div>
        </div>
      )}
    </>
  );
}
