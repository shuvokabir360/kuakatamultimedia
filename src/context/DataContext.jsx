import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConnected } from '../services/supabaseClient';

const DataContext = createContext();

const INITIAL_MEMBERS = [
  {
    id: '1',
    name: 'তানভীর আহমেদ',
    email: 'admin@kuakatamultimedia.com',
    password: 'admin',
    phone: '+880 1711-000001',
    role: 'admin',
    designation: 'চিফ এনিমেশন ডিরেক্টর & সিইও',
    dept: '3D & VFX',
    basic_salary: 85000,
    join_date: '2022-01-15',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop',
    skills: ['Three.js', 'Blender', 'Cinema 4D', 'Unreal Engine'],
    status: 'Active'
  },
  {
    id: '2',
    name: 'রাফি রহমান',
    email: 'member@kuakatamultimedia.com',
    password: 'member',
    phone: '+880 1822-111222',
    role: 'member',
    designation: 'সিনিয়র ৩ডি মোশন ডিজাইনার',
    dept: '3D & VFX',
    basic_salary: 62000,
    join_date: '2022-06-10',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop',
    skills: ['After Effects', 'Blender', 'Octane Render'],
    status: 'Active'
  },
  {
    id: '3',
    name: 'নুসরাত জাহান',
    email: 'nusrat@kuakatamultimedia.com',
    password: '123',
    phone: '+880 1933-333444',
    role: 'member',
    designation: 'লিড ওয়েব & ইউএক্স আর্কিটেক্ট',
    dept: 'Web Dev',
    basic_salary: 68000,
    join_date: '2023-02-01',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop',
    skills: ['React.js', 'Next.js', 'Three.js', 'Tailwind'],
    status: 'Active'
  },
  {
    id: '4',
    name: 'আরিফুল ইসলাম',
    email: 'arif@kuakatamultimedia.com',
    password: '123',
    phone: '+880 1644-555666',
    role: 'member',
    designation: 'সিনিয়র ভিএফএক্স অ্যান্ড ভিডিও এডিটর',
    dept: 'Video Production',
    basic_salary: 55000,
    join_date: '2023-05-20',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop',
    skills: ['Premiere Pro', 'DaVinci Resolve', 'Nuke'],
    status: 'Active'
  },
  {
    id: '5',
    name: 'সামিরা খান',
    email: 'samira@kuakatamultimedia.com',
    password: '123',
    phone: '+880 1555-777888',
    role: 'member',
    designation: 'কনসেপ্ট আর্ট & ৩ডি ক্যারেক্টার মডেলার',
    dept: '3D & VFX',
    basic_salary: 58000,
    join_date: '2023-09-12',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop',
    skills: ['ZBrush', 'Substance Painter', 'Maya'],
    status: 'Active'
  }
];

const INITIAL_PROJECTS = [
  {
    id: 'p1',
    title: 'কুয়াকাটা বীচ ভার্চুয়াল ৩ডি এক্সপেরিয়েন্স',
    category: '3D & Web',
    description: 'কুয়াকাটা সমুদ্র সৈকতের সূর্যোদয় ও সূর্যাস্তের এক মনোরম ৩ডি রিয়েল-টাইম ওয়েব সিমুলেশন।',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop',
    demo_url: 'https://www.kuakatamultimedia.com/demo/beach3d',
    tags: ['Three.js', 'WebGL', 'React', 'Audio FX'],
    featured: true,
    client: 'কুয়াকাটা ট্যুরিজম ডাইরেক্টরেট'
  },
  {
    id: 'p2',
    title: 'সাইবারপাঙ্ক ঢাকা মোশন সিগনেচার',
    category: 'VFX & Motion',
    description: 'ভবিষ্যতের ঢাকাকে কেন্দ্র করে তৈরি ৩ডি মোশন রিফ্লেকশন ও ভিএফএক্স শট।',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop',
    demo_url: 'https://www.kuakatamultimedia.com/demo/cyberdhaka',
    tags: ['Unreal Engine 5', 'Octane', 'After Effects'],
    featured: true,
    client: 'ডিজিটাল বাংলাদেশ ভিশন'
  },
  {
    id: 'p3',
    title: 'রয়েল স্পোর্টস ৩ডি প্রোডাক্ট শোকেস',
    category: '3D Commercial',
    description: 'স্পোর্টস শ্যুর ৩ডি ফ্লোটিং আনবক্সিং এবং ডায়নামিক ৩৬০ ক্যামেরা এনিমেশন।',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop',
    demo_url: 'https://www.kuakatamultimedia.com/demo/royalsports',
    tags: ['Cinema 4D', 'Redshift', 'Three.js'],
    featured: true,
    client: 'রয়েল ফুটওয়্যার লিমিটেড'
  },
  {
    id: 'p4',
    title: 'কোস্টাল ওয়েভ ইন্টারেক্টিভ অডিও সিমুলেটর',
    category: 'Interactive Web',
    description: 'সমুদ্রের ঢেউ এবং সাউন্ড ওয়েভের সমন্বয়ে তৈরি ইন্টারেক্টিভ অডিও ওয়েব আর্ট।',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format&fit=crop',
    demo_url: 'https://www.kuakatamultimedia.com/demo/waveart',
    tags: ['Web Audio API', 'React Three Fiber'],
    featured: false,
    client: 'সাউন্ড আর্ট ল্যাব'
  }
];

const generateSeedAttendance = () => {
  const records = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  
  for (let i = 1; i <= 20; i++) {
    const dayStr = String(i).padStart(2, '0');
    const dateStr = `${year}-${month}-${dayStr}`;
    
    INITIAL_MEMBERS.forEach(member => {
      let status = 'Present';
      const rand = (i + parseInt(member.id) * 3) % 10;
      if (rand === 8) status = 'Absent';
      else if (rand === 9) status = 'Leave';
      else if (rand === 7) status = 'Half-day';
      
      records.push({
        id: `att-${member.id}-${dateStr}`,
        user_id: member.id,
        date: dateStr,
        status: status,
        checkIn: status !== 'Absent' ? '09:30 AM' : '-',
        checkOut: status !== 'Absent' ? '06:00 PM' : '-'
      });
    });
  }
  return records;
};

const generateSeedSalaries = (members, attendanceRecords) => {
  const salaries = [];
  const currentMonth = 'জুলাই ২০২৬';
  
  members.forEach(member => {
    const memberAtt = attendanceRecords.filter(r => r.user_id === member.id);
    const absentCount = memberAtt.filter(r => r.status === 'Absent').length;
    const leaveCount = memberAtt.filter(r => r.status === 'Leave').length;
    const halfDayCount = memberAtt.filter(r => r.status === 'Half-day').length;

    const perDayRate = Math.round(member.basic_salary / 30);
    const deduction = Math.round((absentCount * perDayRate) + (halfDayCount * perDayRate * 0.5));
    const bonus = member.role === 'admin' ? 5000 : 2500;
    const netSalary = member.basic_salary + bonus - deduction;

    salaries.push({
      id: `sal-${member.id}-2026-07`,
      user_id: member.id,
      user_name: member.name,
      month: currentMonth,
      month_key: '2026-07',
      basic_salary: member.basic_salary,
      bonus: bonus,
      deductions: deduction,
      absent_days: absentCount,
      leave_days: leaveCount,
      half_days: halfDayCount,
      net_salary: netSalary,
      paid_status: parseInt(member.id) % 2 === 1 ? 'Paid' : 'Pending',
      payment_date: parseInt(member.id) % 2 === 1 ? '2026-07-28' : null,
      transaction_id: parseInt(member.id) % 2 === 1 ? `TXN-KM-${Math.floor(100000 + Math.random() * 900000)}` : null,
      note: 'মাসিক পারফরম্যান্স অ্যালাউন্স সহ'
    });
  });

  return salaries;
};

export const DataProvider = ({ children }) => {
  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem('km_members');
    return saved ? JSON.parse(saved) : INITIAL_MEMBERS;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('km_projects');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  const [attendance, setAttendance] = useState(() => {
    const saved = localStorage.getItem('km_attendance');
    return saved ? JSON.parse(saved) : generateSeedAttendance();
  });

  const [salaries, setSalaries] = useState(() => {
    const saved = localStorage.getItem('km_salaries');
    return saved ? JSON.parse(saved) : generateSeedSalaries(INITIAL_MEMBERS, generateSeedAttendance());
  });

  const [cloudSynced, setCloudSynced] = useState(isSupabaseConnected);

  // Sync from Supabase on load if connected
  useEffect(() => {
    if (!isSupabaseConnected || !supabase) return;

    const fetchFromSupabase = async () => {
      try {
        const { data: dbMembers } = await supabase.from('members').select('*');
        if (dbMembers && dbMembers.length > 0) setMembers(dbMembers);

        const { data: dbProjects } = await supabase.from('projects').select('*');
        if (dbProjects && dbProjects.length > 0) setProjects(dbProjects);

        const { data: dbAttendance } = await supabase.from('attendance').select('*');
        if (dbAttendance && dbAttendance.length > 0) setAttendance(dbAttendance);

        const { data: dbSalaries } = await supabase.from('salaries').select('*');
        if (dbSalaries && dbSalaries.length > 0) setSalaries(dbSalaries);

        setCloudSynced(true);
      } catch (err) {
        console.warn('Supabase fetch error, fallback to local:', err);
      }
    };

    fetchFromSupabase();
  }, []);

  // Sync to LocalStorage & Supabase
  useEffect(() => {
    localStorage.setItem('km_members', JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem('km_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('km_attendance', JSON.stringify(attendance));
  }, [attendance]);

  useEffect(() => {
    localStorage.setItem('km_salaries', JSON.stringify(salaries));
  }, [salaries]);

  // Recalculate salary for a member
  const recalculateMemberSalary = (userId, monthKey = '2026-07') => {
    const member = members.find(m => m.id === userId);
    if (!member) return;

    const memberAtt = attendance.filter(r => r.user_id === userId);
    const absentCount = memberAtt.filter(r => r.status === 'Absent').length;
    const leaveCount = memberAtt.filter(r => r.status === 'Leave').length;
    const halfDayCount = memberAtt.filter(r => r.status === 'Half-day').length;

    const perDayRate = Math.round(member.basic_salary / 30);
    const deduction = Math.round((absentCount * perDayRate) + (halfDayCount * perDayRate * 0.5));

    setSalaries(prev => prev.map(sal => {
      if (sal.user_id === userId && sal.month_key === monthKey) {
        const net = member.basic_salary + sal.bonus - deduction;
        const updated = {
          ...sal,
          basic_salary: member.basic_salary,
          absent_days: absentCount,
          leave_days: leaveCount,
          half_days: halfDayCount,
          deductions: deduction,
          net_salary: net
        };

        if (isSupabaseConnected && supabase) {
          supabase.from('salaries').upsert([updated]).then();
        }

        return updated;
      }
      return sal;
    }));
  };

  const resetUserPassword = (email, newPassword) => {
    const found = members.find(m => m.email.toLowerCase() === email.toLowerCase());
    if (!found) return { success: false, message: 'এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট পাওয়া যায়নি!' };

    const updatedMember = { ...found, password: newPassword };
    setMembers(prev => prev.map(m => m.email.toLowerCase() === email.toLowerCase() ? updatedMember : m));

    if (isSupabaseConnected && supabase) {
      supabase.from('members').upsert([updatedMember]).then();
    }

    return { success: true, message: 'পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে!' };
  };

  const addMember = (newMemberData) => {
    const newId = String(Date.now());
    const member = {
      ...newMemberData,
      id: newId,
      password: newMemberData.password || '123456',
      status: 'Active',
      avatar: newMemberData.avatar || `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop`
    };

    setMembers(prev => [...prev, member]);

    const newSal = {
      id: `sal-${newId}-2026-07`,
      user_id: newId,
      user_name: member.name,
      month: 'জুলাই ২০২৬',
      month_key: '2026-07',
      basic_salary: member.basic_salary,
      bonus: 0,
      deductions: 0,
      absent_days: 0,
      leave_days: 0,
      half_days: 0,
      net_salary: member.basic_salary,
      paid_status: 'Pending',
      payment_date: null,
      transaction_id: null,
      note: 'নতুন মেম্বারের বেতন অ্যাকাউন্ট'
    };

    setSalaries(prev => [...prev, newSal]);

    if (isSupabaseConnected && supabase) {
      supabase.from('members').insert([member]).then();
      supabase.from('salaries').insert([newSal]).then();
    }
  };

  const updateMember = (updatedData) => {
    setMembers(prev => prev.map(m => m.id === updatedData.id ? { ...m, ...updatedData } : m));
    if (isSupabaseConnected && supabase) {
      supabase.from('members').upsert([updatedData]).then();
    }
    recalculateMemberSalary(updatedData.id);
  };

  const deleteMember = (memberId) => {
    setMembers(prev => prev.filter(m => m.id !== memberId));
    setSalaries(prev => prev.filter(s => s.user_id !== memberId));
    setAttendance(prev => prev.filter(a => a.user_id !== memberId));

    if (isSupabaseConnected && supabase) {
      supabase.from('members').delete().eq('id', memberId).then();
    }
  };

  const setDailyAttendance = (userId, dateStr, status) => {
    const recordId = `att-${userId}-${dateStr}`;
    const newRecord = {
      id: recordId,
      user_id: userId,
      date: dateStr,
      status,
      checkIn: status !== 'Absent' ? '09:30 AM' : '-',
      checkOut: status !== 'Absent' ? '06:00 PM' : '-'
    };

    setAttendance(prev => {
      const existingIdx = prev.findIndex(a => a.user_id === userId && a.date === dateStr);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = newRecord;
        return updated;
      } else {
        return [...prev, newRecord];
      }
    });

    if (isSupabaseConnected && supabase) {
      supabase.from('attendance').upsert([newRecord]).then();
    }

    setTimeout(() => recalculateMemberSalary(userId), 50);
  };

  const updateSalaryStatus = (salaryId, newStatus, bonus = null, note = null) => {
    setSalaries(prev => prev.map(sal => {
      if (sal.id === salaryId) {
        const updatedBonus = bonus !== null ? Number(bonus) : sal.bonus;
        const newNet = sal.basic_salary + updatedBonus - sal.deductions;
        const isPaid = newStatus === 'Paid';

        const updatedSal = {
          ...sal,
          bonus: updatedBonus,
          net_salary: newNet,
          paid_status: newStatus,
          payment_date: isPaid ? new Date().toISOString().split('T')[0] : null,
          transaction_id: isPaid ? (sal.transaction_id || `TXN-KM-${Math.floor(100000 + Math.random() * 900000)}`) : null,
          note: note !== null ? note : sal.note
        };

        if (isSupabaseConnected && supabase) {
          supabase.from('salaries').upsert([updatedSal]).then();
        }

        return updatedSal;
      }
      return sal;
    }));
  };

  const addProject = (projectData) => {
    const newProj = { ...projectData, id: `p-${Date.now()}` };
    setProjects(prev => [...prev, newProj]);

    if (isSupabaseConnected && supabase) {
      supabase.from('projects').insert([newProj]).then();
    }
  };

  const deleteProject = (projectId) => {
    setProjects(prev => prev.filter(p => p.id !== projectId));
    if (isSupabaseConnected && supabase) {
      supabase.from('projects').delete().eq('id', projectId).then();
    }
  };

  const exportAllDataJSON = () => {
    const fullBackup = {
      members,
      projects,
      attendance,
      salaries,
      export_date: new Date().toISOString(),
      system: 'Kuakata Multimedia'
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `kuakata_multimedia_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const restoreAllDataJSON = (importedObj) => {
    if (importedObj.members) setMembers(importedObj.members);
    if (importedObj.projects) setProjects(importedObj.projects);
    if (importedObj.attendance) setAttendance(importedObj.attendance);
    if (importedObj.salaries) setSalaries(importedObj.salaries);

    if (isSupabaseConnected && supabase) {
      if (importedObj.members) supabase.from('members').upsert(importedObj.members).then();
      if (importedObj.projects) supabase.from('projects').upsert(importedObj.projects).then();
      if (importedObj.attendance) supabase.from('attendance').upsert(importedObj.attendance).then();
      if (importedObj.salaries) supabase.from('salaries').upsert(importedObj.salaries).then();
    }
  };

  return (
    <DataContext.Provider value={{
      members,
      projects,
      attendance,
      salaries,
      addMember,
      updateMember,
      deleteMember,
      setDailyAttendance,
      updateSalaryStatus,
      addProject,
      deleteProject,
      resetUserPassword,
      recalculateMemberSalary,
      exportAllDataJSON,
      restoreAllDataJSON,
      cloudSynced
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
