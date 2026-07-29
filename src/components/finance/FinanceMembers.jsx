import React, { useState } from 'react';
import { Users, Plus, ChevronRight, Search, Phone, Mail, Award, X, Upload, Check, ShieldCheck, Wallet } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';
import MemberProfileModal from './MemberProfileModal';

export default function FinanceMembers() {
  const { getSortedMembers, addMember } = useData();
  const sortedMembers = getSortedMembers();

  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  // Preset Role Options
  const presetRoles = [
    'অভিনেতা',
    'অভিনেত্রী',
    'পরিচালক',
    'সহকারী পরিচালক',
    'ক্যামেরাম্যান',
    'মেকআপ আর্টিস্ট',
    'এডিটর',
    'প্রোডাকশন বয়',
    'সাউন্ড ম্যান',
    'লাইটিং ম্যান',
    'স্ক্রিপ্ট রাইটার'
  ];

  const [formData, setFormData] = useState({
    name: '',
    type: 'দৈনিক',
    roles: ['অভিনেতা'],
    customDesignation: '',
    phone: '',
    pin: '1234',
    daily_rate: 1500,
    monthly_salary: 25000,
    avatar: '',
    bkash: '',
    nagad: '',
    bank: '',
    balance: 0
  });

  const [phoneError, setPhoneError] = useState('');

  const toggleRole = (role) => {
    setFormData(prev => {
      const exists = prev.roles.includes(role);
      const updated = exists ? prev.roles.filter(r => r !== role) : [...prev.roles, role];
      return { ...prev, roles: updated.length > 0 ? updated : [role] };
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const validateBDPhone = (phoneStr) => {
    const clean = (phoneStr || '').trim();
    const bdRegex = /^01[3-9]\d{8}$/;
    return bdRegex.test(clean);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    
    // Validate 11-digit BD Phone
    if (!validateBDPhone(formData.phone)) {
      setPhoneError('১১ ডিজিটের সঠিক বাংলাদেশী মোবাইল নম্বর লিখুন (যেমন: 01700000000)');
      return;
    }
    setPhoneError('');

    const finalDesignation = formData.roles.length > 0
      ? formData.roles.join(', ')
      : (formData.customDesignation || 'অভিনেতা');

    addMember({
      name: formData.name.trim(),
      type: formData.type,
      designation: finalDesignation,
      dept: formData.roles[0] || 'Acting',
      phone: formData.phone.trim(),
      pin: formData.pin.trim() || '1234',
      daily_rate: formData.type === 'দৈনিক' ? Number(formData.daily_rate) : 0,
      monthly_salary: formData.type === 'মাসিক' ? Number(formData.monthly_salary) : 0,
      balance: Number(formData.balance) || 0,
      avatar: formData.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop',
      bkash: formData.bkash.trim(),
      nagad: formData.nagad.trim(),
      bank: formData.bank.trim()
    });

    setShowAddModal(false);
    setFormData({
      name: '',
      type: 'দৈনিক',
      roles: ['অভিনেতা'],
      customDesignation: '',
      phone: '',
      pin: '1234',
      daily_rate: 1500,
      monthly_salary: 25000,
      avatar: '',
      bkash: '',
      nagad: '',
      bank: '',
      balance: 0
    });
  };

  const filteredMembers = sortedMembers.filter(m =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (m.phone && m.phone.includes(searchQuery))
  );

  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900">সদস্য তালিকা</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            {toBnNum(sortedMembers.length)} জন সদস্য
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 rounded-2xl bg-red-600 text-white text-xs font-black shadow-md shadow-red-500/30 flex items-center gap-1.5 hover:bg-red-700 transition-transform active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>যোগ করুন</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          placeholder="মেম্বার নাম, পদবি বা মোবাইল..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm"
        />
      </div>

      {/* Member Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className={`p-4 rounded-3xl bg-white border shadow-sm flex items-center justify-between cursor-pointer transition-transform hover:scale-[1.01] active:scale-95 ${
              member.isPinnedTop ? 'border-amber-300 ring-2 ring-amber-400/30 bg-amber-50/30' : 'border-slate-200/80'
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="relative shrink-0">
                <img
                  src={member.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop'}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                {member.isPinnedTop && (
                  <div className="absolute -top-1 -right-1 bg-amber-500 text-white p-0.5 rounded-full shadow-sm">
                    <Award className="w-3 h-3" />
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-black text-slate-900 truncate">{member.name}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold shrink-0 ${
                    member.type === 'মাসিক' ? 'bg-indigo-50 text-indigo-600 border border-indigo-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {member.type}
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 font-semibold truncate mt-0.5">
                  {member.designation}
                </p>

                <div className="flex items-center gap-2 mt-1 text-[11px] font-bold">
                  <span className="text-slate-600">
                    {member.phone ? `📱 ${member.phone}` : 'মোবাইল যুক্ত নেই'}
                  </span>
                </div>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
          </div>
        ))}
      </div>

      {/* Member Profile Modal */}
      <MemberProfileModal
        member={selectedMember}
        isOpen={Boolean(selectedMember)}
        onClose={() => setSelectedMember(null)}
      />

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-4 max-h-[92vh] overflow-y-auto no-scrollbar">
            
            <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <h3 className="text-lg font-black text-slate-900">নতুন সদস্য যুক্ত করুন</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">১ম বার নাম, পদবি, বেতন দিয়ে দ্রুত অ্যাকাউন্ট খুলুন</p>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-3.5 text-xs">
              
              {/* Profile Photo Upload Row */}
              <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
                <img
                  src={formData.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop'}
                  alt="Preview"
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0 shadow-sm"
                />

                <label className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200 transition-colors shadow-sm">
                  <Upload className="w-3.5 h-3.5 text-red-600" />
                  <span>ছবি ফাইল আপলোড করুন</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>

              {/* 1. Name */}
              <div>
                <label className="block text-slate-700 font-black mb-1">সদস্যের নাম *</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: মোস্তফা সরয়ার ফারুকী"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-slate-800"
                />
              </div>

              {/* 2. Designation / Multiple Roles Dropdown Selector */}
              <div>
                <label className="block text-slate-700 font-black mb-1">পদবি / রোল (ড্রপডাউন সিলেক্ট - একাধিক সম্ভব) *</label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {presetRoles.map(role => {
                    const isSelected = formData.roles.includes(role);
                    return (
                      <button
                        type="button"
                        key={role}
                        onClick={() => toggleRole(role)}
                        className={`px-3 py-1.5 rounded-xl font-bold text-[11px] transition-all flex items-center gap-1 border ${
                          isSelected
                            ? 'bg-red-600 text-white border-red-600 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                        <span>{role}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Salary Type & Amount */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-black mb-1">বেতন ধরন *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-slate-800"
                  >
                    <option value="দৈনিক">দৈনিক বেতন</option>
                    <option value="মাসিক">মাসিক বেতন</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-black mb-1">
                    {formData.type === 'দৈনিক' ? 'দৈনিক রেট (৳/দিন) *' : 'মাসিক বেতন (৳/মাস) *'}
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="1500"
                    value={formData.type === 'দৈনিক' ? formData.daily_rate : formData.monthly_salary}
                    onChange={(e) => setFormData({
                      ...formData,
                      [formData.type === 'দৈনিক' ? 'daily_rate' : 'monthly_salary']: e.target.value
                    })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-slate-800"
                  />
                </div>
              </div>

              {/* 4. Phone (11 Digit BD Mobile Verification) */}
              <div>
                <label className="block text-slate-700 font-black mb-1">মোবাইল নম্বর (১১ ডিজিট আবশ্যক) *</label>
                <input
                  type="text"
                  required
                  maxLength={11}
                  placeholder="01700000000"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (phoneError) setPhoneError('');
                  }}
                  className={`w-full px-4 py-2.5 rounded-2xl bg-slate-50 border font-bold text-slate-800 font-mono ${
                    phoneError ? 'border-rose-500 ring-2 ring-rose-400/20' : 'border-slate-200'
                  }`}
                />
                {phoneError ? (
                  <p className="text-[11px] text-rose-600 font-bold mt-1">{phoneError}</p>
                ) : (
                  <p className="text-[10px] text-slate-400 font-medium mt-1">১১ ডিজিট যেমন: 01711223344</p>
                )}
              </div>

              {/* 5. PIN & bKash Optional section */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-black mb-1">লগইন PIN (ডিফল্ট: 1234)</label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="1234"
                    value={formData.pin}
                    onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-slate-800 font-mono text-red-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-black mb-1">বিকাশ নম্বর (অপশনাল)</label>
                  <input
                    type="text"
                    placeholder="01700000000"
                    value={formData.bkash}
                    onChange={(e) => setFormData({ ...formData, bkash: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-slate-800 font-mono"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-md shadow-red-500/20 flex items-center justify-center gap-1.5 transition-transform active:scale-95"
                >
                  <Check className="w-4 h-4" />
                  <span>সদস্য অ্যাকাউন্ট তৈরি করুন</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
