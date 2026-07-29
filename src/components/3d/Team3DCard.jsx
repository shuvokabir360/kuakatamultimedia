import React, { useState, useRef } from 'react';
import { ShieldCheck, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Team3DCard({ member, attendanceRate = 95 }) {
  const cardRef = useRef(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotX(rotateX);
    setRotY(rotateY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className="w-full cursor-pointer group"
    >
      <div
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${isHovered ? 1.03 : 1}, ${isHovered ? 1.03 : 1}, 1)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className={`relative rounded-2xl p-6 glass-card overflow-hidden border ${
          member.role === 'admin' ? 'border-brand-red/50 bg-dark-800/90' : 'border-slate-800 bg-dark-800/60'
        } shadow-xl hover:shadow-2xl hover:shadow-brand-red/20`}
      >
        {/* Top Glowing Gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-flame to-brand-gold opacity-70 group-hover:opacity-100 transition-opacity" />

        {/* Member Badge & Role */}
        <div className="flex justify-between items-start mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
            member.role === 'admin' 
              ? 'bg-brand-red/15 text-brand-red border border-brand-red/40' 
              : 'bg-brand-amber/10 text-brand-amber border border-brand-amber/30'
          }`}>
            {member.role === 'admin' ? <ShieldCheck className="w-3.5 h-3.5" /> : <Briefcase className="w-3.5 h-3.5" />}
            {member.dept}
          </span>
          <div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            <span>উপস্থিতি {attendanceRate}%</span>
          </div>
        </div>

        {/* Avatar & Title */}
        <div className="flex flex-col items-center text-center my-3">
          <div className="relative mb-4">
            {/* Glowing avatar ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-red via-brand-crimson to-brand-gold opacity-50 group-hover:opacity-100 blur-sm transition-all" />
            <img
              src={member.avatar}
              alt={member.name}
              className="relative w-24 h-24 rounded-full object-cover border-2 border-dark-900 shadow-md"
            />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-brand-red transition-colors">
            {member.name}
          </h3>
          <p className="text-xs text-slate-400 font-medium mt-1">
            {member.designation}
          </p>
        </div>

        {/* Skill tags */}
        <div className="mt-4 pt-3 border-t border-slate-800/80">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1 font-bold">
            <Sparkles className="w-3 h-3 text-brand-red" />
            বিশেষ দক্ষতা (Skills)
          </div>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {member.skills?.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-dark-700/80 text-slate-300 border border-slate-700/50 group-hover:border-brand-red/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
