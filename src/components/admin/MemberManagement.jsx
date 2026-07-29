import React, { useState } from 'react';
import { Users, UserPlus, Edit3, Trash2, ShieldCheck, UserCheck, Search, DollarSign, X, Check, Phone, Lock } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function MemberManagement() {
  const { members, addMember, updateMember, deleteMember } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  // New Member Form State with default PIN '1234'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '01822111222',
    pin: '1234',
    role: 'member',
    designation: '৩ডি অ্যানিমেটর',
    dept: '3D & VFX',
    basic_salary: 50000,
    skills: 'Blender, Three.js, Maya'
  });

  const filteredMembers = members.filter(m =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (m.phone && m.phone.includes(searchQuery)) ||
    m.dept.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const skillsArray = typeof formData.skills === 'string'
      ? formData.skills.split(',').map(s => s.trim())
      : formData.skills;

    addMember({
      ...formData,
      basic_salary: Number(formData.basic_salary),
      skills: skillsArray,
      join_date: new Date().toISOString().split('T')[0]
    });

    setShowAddModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '01822111222',
      pin: '1234',
      role: 'member',
      designation: '৩ডি অ্যানিমেটর',
      dept: '3D & VFX',
      basic_salary: 50000,
      skills: 'Blender, Three.js, Maya'
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editingMember) return;
    const skillsArray = typeof editingMember.skills === 'string'
      ? editingMember.skills.split(',').map(s => s.trim())
      : editingMember.skills;

    updateMember({
      ...editingMember,
      basic_salary: Number(editingMember.basic_salary),
      skills: skillsArray
    });

    setEditingMember(null);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Action & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="মেম্বার নাম, মোবাইল বা ইমেইল..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl text-xs glass-input"
          />
        </div>

        <button
          id="btn-add-member"
          onClick={() => setShowAddModal(true)}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          <span>নতুন মেম্বার যুক্ত করুন</span>
        </button>
      </div>

      {/* Members Data Table */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-dark-800/80 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider">
              <tr>
                <th className="p-4">মেম্বার নাম & প্রোফাইল</th>
                <th className="p-4">মোবাইল & পিন (Login Creds)</th>
                <th className="p-4">রোল (Role)</th>
                <th className="p-4">ডিপার্টমেন্ট</th>
                <th className="p-4">বেসিক বেতন</th>
                <th className="p-4 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={member.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop'}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover border border-brand-red/40"
                      />
                      <div>
                        <span className="font-bold text-white block">{member.name}</span>
                        <span className="text-[11px] text-slate-400">{member.designation}</span>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 font-mono">
                    <div className="text-slate-200 font-bold flex items-center gap-1">
                      <Phone className="w-3 h-3 text-brand-amber" />
                      <span>{member.phone || 'N/A'}</span>
                    </div>
                    <div className="text-[11px] text-brand-amber font-semibold flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      <span>PIN: {member.pin || member.password || '1234'}</span>
                    </div>
                  </td>

                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      member.role === 'admin' 
                        ? 'bg-brand-red/10 text-brand-red border border-brand-red/30' 
                        : 'bg-brand-amber/10 text-brand-amber border border-brand-amber/30'
                    }`}>
                      {member.role === 'admin' ? <ShieldCheck className="w-3 h-3" /> : <UserCheck className="w-3 h-3" />}
                      {member.role === 'admin' ? 'অ্যাডমিন (Admin)' : 'টিম মেম্বার'}
                    </span>
                  </td>

                  <td className="p-4 text-slate-300 font-medium">{member.dept}</td>

                  <td className="p-4 font-bold text-emerald-400">
                    ৳ {(member.basic_salary || 0).toLocaleString()}
                  </td>

                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => setEditingMember(member)}
                      title="সম্পাদনা"
                      className="p-2 rounded-lg glass-panel text-slate-300 hover:text-brand-red hover:border-brand-red/40"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    {member.role !== 'admin' && (
                      <button
                        onClick={() => {
                          if (window.confirm(`${member.name}-কে রিমুভ করতে নিশ্চিত?`)) {
                            deleteMember(member.id);
                          }
                        }}
                        title="রিমুভ করুন"
                        className="p-2 rounded-lg glass-panel text-slate-300 hover:text-rose-400 hover:border-rose-500/40"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 border border-brand-red/40 shadow-2xl">
            <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-bold text-white mb-4">নতুন মেম্বার যুক্ত করুন</h3>
            
            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1 font-bold">পূর্ণ নাম (Member Full Name)</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: সাকিবা ইসলাম"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl text-xs glass-input"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-bold">মোবাইল নম্বর (Login Phone)</label>
                  <input
                    type="text"
                    required
                    placeholder="যেমন: 01822111222"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs glass-input font-mono font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-bold">গোপন PIN কোড (Login PIN)</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="যেমন: 1234"
                    value={formData.pin}
                    onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs glass-input font-mono tracking-widest font-bold text-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">ইমেইল ঠিকানা</label>
                  <input
                    type="email"
                    required
                    placeholder="sakiba@kuakatamultimedia.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs glass-input"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">পদবি (Designation)</label>
                  <input
                    type="text"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs glass-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">ডিপার্টমেন্ট</label>
                  <select
                    value={formData.dept}
                    onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs glass-input"
                  >
                    <option value="3D & VFX">3D & VFX</option>
                    <option value="Web Dev">Web Dev</option>
                    <option value="Video Production">Video Production</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">বেসিক বেতন (টাকা)</label>
                  <input
                    type="number"
                    required
                    value={formData.basic_salary}
                    onChange={(e) => setFormData({ ...formData, basic_salary: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs glass-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">বিশেষ দক্ষতা (কমা দিয়ে লিখুন)</label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl text-xs glass-input"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs glass-panel text-slate-300"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-black bg-brand-red text-white shadow-lg shadow-brand-red/30"
                >
                  মেম্বার সেভ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Member Modal */}
      {editingMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 border border-brand-red/40 shadow-2xl">
            <button onClick={() => setEditingMember(null)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-bold text-white mb-4">মেম্বার তথ্য & পিন আপডেট করুন</h3>
            
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1 font-bold">পূর্ণ নাম</label>
                <input
                  type="text"
                  required
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl text-xs glass-input"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-bold">মোবাইল নম্বর (Login Phone)</label>
                  <input
                    type="text"
                    required
                    value={editingMember.phone || ''}
                    onChange={(e) => setEditingMember({ ...editingMember, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs glass-input font-mono font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-bold">গোপন PIN কোড (Login PIN)</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={editingMember.pin || editingMember.password || ''}
                    onChange={(e) => setEditingMember({ ...editingMember, pin: e.target.value, password: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs glass-input font-mono tracking-widest font-bold text-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">পদবি</label>
                  <input
                    type="text"
                    required
                    value={editingMember.designation}
                    onChange={(e) => setEditingMember({ ...editingMember, designation: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs glass-input"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">বেসিক বেতন (টাকা)</label>
                  <input
                    type="number"
                    required
                    value={editingMember.basic_salary}
                    onChange={(e) => setEditingMember({ ...editingMember, basic_salary: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl text-xs glass-input"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingMember(null)}
                  className="px-4 py-2.5 rounded-xl text-xs glass-panel text-slate-300"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-black bg-brand-red text-white shadow-lg shadow-brand-red/30"
                >
                  আপডেট সেভ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
