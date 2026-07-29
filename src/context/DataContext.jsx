import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConnected } from '../services/supabaseClient';

const DataContext = createContext();

// Bengali Number Converter
export const toBnNum = (num) => {
  if (num === null || num === undefined) return '০';
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/\d/g, (digit) => bnDigits[digit]);
};

// Initial Mock Members matching exact screenshot 5
const INITIAL_MEMBERS = [
  {
    id: 'm1',
    name: 'Kabir Hossen Shuvo',
    type: 'মাসিক',
    designation: 'CEO & Lead Director',
    dept: 'Management',
    phone: '01711000000',
    pin: '1234',
    email: 'shuvokuakata27@gmail.com',
    balance: 0,
    bkash: '01711000000',
    nagad: '01711000000',
    bank: 'Dutch-Bangla Bank 2181050023058',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop',
    isPinnedTop: true,
    role: 'admin'
  },
  {
    id: 'm2',
    name: 'SM Almas',
    type: 'দৈনিক',
    designation: 'Director, Actor, Writer',
    dept: 'Direction',
    phone: '01822111222',
    pin: '1234',
    email: 'almas@kuakatamultimedia.com',
    balance: 8500,
    daily_rate: 2500,
    bkash: '01822111222',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm3',
    name: 'Masud Parves Sagor',
    type: 'দৈনিক',
    designation: 'Actor & DOP',
    dept: 'Acting',
    phone: '01911222333',
    pin: '1234',
    email: 'sagor@kuakatamultimedia.com',
    balance: 4000,
    daily_rate: 2000,
    bank: 'Islami Bank 2181050023054',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm4',
    name: 'Arif Apon',
    type: 'দৈনিক',
    designation: 'Actor',
    dept: 'Acting',
    phone: '01611333444',
    pin: '1234',
    email: 'apon@kuakatamultimedia.com',
    balance: 2000,
    daily_rate: 1500,
    bkash: '01611333444',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm5',
    name: 'Jafor Howlader',
    type: 'দৈনিক',
    designation: 'Actors',
    dept: 'Acting',
    phone: '01511444555',
    pin: '1234',
    email: 'jafor@kuakatamultimedia.com',
    balance: 1500,
    daily_rate: 1500,
    nagad: '01511444555',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm6',
    name: 'Siraj Musulli',
    type: 'দৈনিক',
    designation: 'Actor',
    dept: 'Acting',
    phone: '01311555666',
    pin: '1234',
    email: 'siraj@kuakatamultimedia.com',
    balance: 1500,
    daily_rate: 1500,
    bkash: '01311555666',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm7',
    name: 'Abu Hasan Milon',
    type: 'দৈনিক',
    designation: 'Actor & Assistant',
    dept: 'Acting',
    phone: '01833444555',
    pin: '1234',
    email: 'milon@kuakatamultimedia.com',
    balance: 1000,
    daily_rate: 1000,
    bkash: '01833444555',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop',
    role: 'member'
  }
];

// Initial Shootings History matching screenshot 2
const INITIAL_SHOOTINGS = [
  {
    id: 'sh-1',
    date: '2026-07-26',
    title: 'উমাইয়া জামাই',
    channel: 'Kuakata TV',
    director: 'Kabir Hossen Shuvo',
    present_count: 7,
    absent_count: 13,
    budget: 45000,
    expenses: 12500
  },
  {
    id: 'sh-2',
    date: '2026-07-25',
    title: 'নেতার লিংক ভাইরাল',
    channel: 'Gazi Entertainment',
    director: 'SM Almas',
    present_count: 15,
    absent_count: 5,
    budget: 60000,
    expenses: 18000
  },
  {
    id: 'sh-3',
    date: '2026-07-24',
    title: 'চাচার নিহার বউ তালাক',
    channel: 'Malbro TV',
    director: 'Kabir Hossen Shuvo',
    present_count: 12,
    absent_count: 9,
    budget: 50000,
    expenses: 15000
  },
  {
    id: 'sh-4',
    date: '2026-07-24',
    title: 'নেতার লিংক ভাইরাল (পার্ট ২)',
    channel: 'Gazi Entertainment',
    director: 'SM Almas',
    present_count: 1,
    absent_count: 0,
    budget: 20000,
    expenses: 5000
  }
];

// Initial Payments matching screenshot 3
const INITIAL_PAYMENTS = [
  {
    id: 'p1',
    member_name: 'Jakir Kalapara',
    method: 'বিকাশ',
    account: '০১৬৪৩৩8৯১৯৫',
    amount: 2000,
    date: '29/07/2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop'
  },
  {
    id: 'p2',
    member_name: 'Masud Parves Sagor',
    method: 'ব্যাংক',
    account: '২১৮১০৫০০২৩০৫৮',
    amount: 20500,
    date: '28/07/2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop'
  }
];

// Initial Client Ledgers matching screenshot 1
const INITIAL_CLIENTS = [
  {
    id: 'c1',
    name: 'Malbro Entertainment',
    contract_amount: 84000,
    received_amount: 60000,
    due_amount: 24000
  },
  {
    id: 'c2',
    name: 'Gazi Digital Channel',
    contract_amount: 150000,
    received_amount: 110000,
    due_amount: 40000
  }
];

export const DataProvider = ({ children }) => {
  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem('km_finance_members');
    return saved ? JSON.parse(saved) : INITIAL_MEMBERS;
  });

  const [shootings, setShootings] = useState(() => {
    const saved = localStorage.getItem('km_finance_shootings');
    return saved ? JSON.parse(saved) : INITIAL_SHOOTINGS;
  });

  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem('km_finance_payments');
    return saved ? JSON.parse(saved) : INITIAL_PAYMENTS;
  });

  const [clients, setClients] = useState(() => {
    const saved = localStorage.getItem('km_finance_clients');
    return saved ? JSON.parse(saved) : INITIAL_CLIENTS;
  });

  const [attendanceLogs, setAttendanceLogs] = useState([]);

  useEffect(() => {
    localStorage.setItem('km_finance_members', JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem('km_finance_shootings', JSON.stringify(shootings));
  }, [shootings]);

  useEffect(() => {
    localStorage.setItem('km_finance_payments', JSON.stringify(payments));
  }, [payments]);

  useEffect(() => {
    localStorage.setItem('km_finance_clients', JSON.stringify(clients));
  }, [clients]);

  // Add Member
  const addMember = (newMem) => {
    const memberObj = {
      ...newMem,
      id: 'm-' + Date.now(),
      balance: newMem.balance || 0
    };
    setMembers(prev => [...prev, memberObj]);
  };

  // Update Member
  const updateMember = (updated) => {
    setMembers(prev => prev.map(m => m.id === updated.id ? updated : m));
  };

  // Delete Member
  const deleteMember = (id) => {
    setMembers(prev => prev.filter(m => m.id !== id));
  };

  // Add Payment & Update Member Balance
  const addPayment = (paymentData) => {
    const newPay = {
      ...paymentData,
      id: 'pay-' + Date.now(),
      date: new Date().toLocaleDateString('en-GB')
    };

    setPayments(prev => [newPay, ...prev]);

    // Reduce member due balance
    if (paymentData.member_id) {
      setMembers(prev => prev.map(m => {
        if (m.id === paymentData.member_id) {
          const newBal = Math.max(0, (m.balance || 0) - paymentData.amount);
          return { ...m, balance: newBal };
        }
        return m;
      }));
    }
  };

  // Add Shooting
  const addShooting = (shootingData) => {
    const newSh = {
      ...shootingData,
      id: 'sh-' + Date.now(),
      present_count: 0,
      absent_count: 0
    };
    setShootings(prev => [newSh, ...prev]);
  };

  // Sorted members with Kabir Hossen Shuvo ALWAYS PINNED ON TOP
  const getSortedMembers = () => {
    const shuvo = members.find(m => m.isPinnedTop || m.name.toLowerCase().includes('kabir hossen shuvo'));
    const others = members.filter(m => !(m.isPinnedTop || m.name.toLowerCase().includes('kabir hossen shuvo')));

    others.sort((a, b) => (b.balance || 0) - (a.balance || 0));

    return shuvo ? [shuvo, ...others] : others;
  };

  return (
    <DataContext.Provider value={{
      members,
      getSortedMembers,
      addMember,
      updateMember,
      deleteMember,
      shootings,
      addShooting,
      payments,
      addPayment,
      clients,
      attendanceLogs,
      toBnNum
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
