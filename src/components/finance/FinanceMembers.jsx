import React, { useState } from 'react';
import { Users, Plus, ChevronRight, Search, Phone, Mail, Award, X } from 'lucide-react';
import { useData, toBnNum } from '../../context/DataContext';
import MemberProfileModal from './MemberProfileModal';

export default function FinanceMembers() {
  const { getSortedMembers, addMember } = useData();
  const sortedMembers = getSortedMembers();

  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Selected Member for Details & Edit Modal
  const [selectedMember, setSelectedMember] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    type: 'দৈনিক',
    designation: 'অভিনেতা',
    dept: 'Acting',
    phone: '01822111222',
    pin: '1234',
    email: '',
    balance: 0,
    bkash: ''
  });

  const filteredMembers = sortedMembers.filter(m =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (m.phone && m.phone.includes(searchQuery))
  );

  const handleAddSubmit = (e) => {
    e.preventDefault();
    addMember({
      ...formData,
      balance: Number(formData.balance),
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop'
    });

    setShowAddModal(false);
    setFormData({
      name: '',
      type: 'দৈনিক',
      designation: 'অভিনেতা',
      dept: 'Acting',
      phone: '01822111222',
      pin: '1234',
      email: '',
      balance: 0,
      bkash: ''
    });
  };

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

      {/* Member Cards List (Clicking opens MemberProfileModal) */}
      <div className="space-y-3">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className={`p-4 rounded-3xl bg-white border shadow-sm flex items-center justify-between cursor-pointer transition-transform hover:scale-[1.01] active:scale-95 ${
              member.isPinnedTop ? 'border-amber-300 ring-2 ring-amber-400/30 bg-amber-50/30' : 'border-slate-200/80'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div className="relative">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-200 shadow-md"
                />
                {member.isPinnedTop && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-slate-900 font-bold text-[10px] flex items-center justify-center shadow-md">
                    👑
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-black text-slate-900">{member.name}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                    member.type === 'মাসিক' 
                      ? 'bg-rose-100 text-rose-600 border border-rose-200' 
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}>
                    {member.type}
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 font-medium">{member.designation}</p>

                <div className="text-xs font-black text-slate-800 mt-1">
                  ব্যালেন্স: <span className={member.balance > 0 ? 'text-red-600' : 'text-slate-700'}>৳ {toBnNum((member.balance || 0).toLocaleString())}</span>
                </div>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
        ))}
      </div>

      {/* MEMBER PROFILE & EDIT MODAL */}
      <MemberProfileModal
        member={selectedMember}
        isOpen={Boolean(selectedMember)}
        onClose={() => setSelectedMember(null)}
      />

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-4">
            
            <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-slate-900">নতুন সদস্য যুক্ত করুন</h3>

            <form onSubmit={handleAddSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 font-bold mb-1">সদস্যের নাম</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: সাকিবা ইসলাম"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-bold mb-1">টাইপ (মাসিক/দৈনিক)</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold"
                  >
                    <option value="দৈনিক">দৈনিক</option>
                    <option value="মাসিক">মাসিক</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 font-bold mb-1">পদবি (Designation)</label>
                  <input
                    type="text"
                    required
                    placeholder="যেমন: অভিনেতা"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-bold mb-1">মোবাইল (Login Phone)</label>
                  <input
                    type="text"
                    required
                    placeholder="01822111222"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-bold mb-1">গোপন PIN</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="1234"
                    value={formData.pin}
                    onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold font-mono text-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">প্রাথমিক বকেয়া ব্যালেন্স (যদি থাকে)</label>
                <input
                  type="number"
                  placeholder="0"
                  value={formData.balance}
                  onChange={(e) => setFormData({ ...formData, balance: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-semibold"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-red-600 text-white font-black shadow-md"
                >
                  সদস্য সেভ করুন
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
