import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConnected } from '../services/supabaseClient';

const DataContext = createContext();

// Bengali Number Converter
export const toBnNum = (num) => {
  if (num === null || num === undefined) return '০';
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/\d/g, (digit) => bnDigits[digit]);
};

// Exact 17 Members matching Screenshot 1 & Screenshot 2 - ALL BALANCES SET TO ZERO (0)
const EXACT_MEMBERS_LIST = [
  {
    id: 'm-1',
    name: 'Kabir Hossen Shuvo',
    type: 'মাসিক',
    designation: 'CEO',
    dept: 'Executive Board',
    phone: '01711000000',
    pin: '1234',
    email: 'shuvokuakata27@gmail.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop',
    isPinnedTop: true,
    role: 'admin'
  },
  {
    id: 'm-2',
    name: 'SM Almas',
    type: 'দৈনিক',
    designation: 'Director, Actor, Writer',
    dept: 'Direction',
    phone: '01822111222',
    pin: '1234',
    email: 'almas@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-3',
    name: 'Masud Parves Sagor',
    type: 'দৈনিক',
    designation: 'Actor',
    dept: 'Acting',
    phone: '01911222333',
    pin: '1234',
    email: 'sagor@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-4',
    name: 'Arif Apon',
    type: 'দৈনিক',
    designation: 'Actor',
    dept: 'Acting',
    phone: '01611333444',
    pin: '1234',
    email: 'apon@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-5',
    name: 'Jafor Howlader',
    type: 'দৈনিক',
    designation: 'Actors',
    dept: 'Acting',
    phone: '01511444555',
    pin: '1234',
    email: 'jafor@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-6',
    name: 'Siraj Musulli',
    type: 'দৈনিক',
    designation: 'Actor',
    dept: 'Acting',
    phone: '01311555666',
    pin: '1234',
    email: 'siraj@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-7',
    name: 'Abu Hasan Milon',
    type: 'দৈনিক',
    designation: 'Actor',
    dept: 'Acting',
    phone: '01833444555',
    pin: '1234',
    email: 'milon@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-8',
    name: 'Rimi',
    type: 'দৈনিক',
    designation: 'Actoes',
    dept: 'Acting',
    phone: '01844555666',
    pin: '1234',
    email: 'rimi@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-9',
    name: 'Nizam Uddin',
    type: 'দৈনিক',
    designation: 'Actor',
    dept: 'Acting',
    phone: '01855666777',
    pin: '1234',
    email: 'nizam@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-10',
    name: 'Mohsin Mama',
    type: 'দৈনিক',
    designation: 'Actor',
    dept: 'Acting',
    phone: '01866777888',
    pin: '1234',
    email: 'mohsin@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-11',
    name: 'Jisan Musulli',
    type: 'দৈনিক',
    designation: 'Actors',
    dept: 'Acting',
    phone: '01877888999',
    pin: '1234',
    email: 'jisan@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-12',
    name: 'Akhinur Noon Nahar',
    type: 'দৈনিক',
    designation: 'Actors',
    dept: 'Acting',
    phone: '01888999000',
    pin: '1234',
    email: 'akhinur@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-13',
    name: 'Ziaur Rahman',
    type: 'মাসিক',
    designation: 'Editor & DOP',
    dept: 'Editing',
    phone: '01899000111',
    pin: '1234',
    email: 'ziaur@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-14',
    name: 'Abubakar Abir',
    type: 'মাসিক',
    designation: 'Ass. Director, Actors',
    dept: 'Direction',
    phone: '01800111222',
    pin: '1234',
    email: 'abir@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-15',
    name: 'Sojib Mazi',
    type: 'দৈনিক',
    designation: 'Production',
    dept: 'Production',
    phone: '01811222333',
    pin: '1234',
    email: 'sojib@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-16',
    name: 'মালা আক্তার',
    type: 'দৈনিক',
    designation: 'অভিনেতা',
    dept: 'Acting',
    phone: '01822333444',
    pin: '1234',
    email: 'mala@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop',
    role: 'member'
  },
  {
    id: 'm-17',
    name: 'Emon Molla',
    type: 'দৈনিক',
    designation: 'Actor',
    dept: 'Acting',
    phone: '01833444555',
    pin: '1234',
    email: 'emon@kuakatamultimedia.com',
    balance: 0,
    daily_rate: 0,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop',
    role: 'member'
  }
];

const INITIAL_SHOOTINGS = [];
const INITIAL_PAYMENTS = [];

const INITIAL_CLIENTS = [
  {
    id: 'c1',
    name: 'Malbro Entertainment',
    contract_amount: 150000,
    received_amount: 90000,
    due_amount: 60000
  },
  {
    id: 'c2',
    name: 'Mehidi Multimedia',
    contract_amount: 0,
    received_amount: 0,
    due_amount: 0
  }
];

const INITIAL_CHANNELS = [
  { id: 'ch-1', name: 'Kuakata Multimedia', category: 'official', categoryLabel: 'অফিসিয়াল (নিজেদের)', logo: '/logo.svg', shootingCount: 9 },
  { id: 'ch-2', name: 'Malbro Entertainment', category: 'client', categoryLabel: 'ক্লায়েন্ট চ্যানেল', logo: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=100&auto=format&fit=crop', shootingCount: 14 },
  { id: 'ch-3', name: 'Mehidi Multimedia', category: 'client', categoryLabel: 'ক্লায়েন্ট চ্যানেল', logo: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=100&auto=format&fit=crop', shootingCount: 3 }
];

const INITIAL_DIRECTORS = [
  { id: 'dir-1', name: 'Kabir Hossen Shuvo', role: 'পরিচালক', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop', shootingCount: 1 },
  { id: 'dir-2', name: 'Saddam Mal', role: 'পরিচালক', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop', shootingCount: 13 },
  { id: 'dir-3', name: 'SM Almas', role: 'সহকারী পরিচালক', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop', shootingCount: 12 }
];

export const DataProvider = ({ children }) => {
  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem('km_finance_members');
    return saved ? JSON.parse(saved) : EXACT_MEMBERS_LIST;
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

  const [channels, setChannels] = useState(() => {
    const saved = localStorage.getItem('km_finance_channels');
    return saved ? JSON.parse(saved) : INITIAL_CHANNELS;
  });

  const [directors, setDirectors] = useState(() => {
    const saved = localStorage.getItem('km_finance_directors');
    return saved ? JSON.parse(saved) : INITIAL_DIRECTORS;
  });

  // Always sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('km_finance_members', JSON.stringify(members));
      localStorage.setItem('km_finance_shootings', JSON.stringify(shootings));
      localStorage.setItem('km_finance_payments', JSON.stringify(payments));
      localStorage.setItem('km_finance_clients', JSON.stringify(clients));
      localStorage.setItem('km_finance_channels', JSON.stringify(channels));
      localStorage.setItem('km_finance_directors', JSON.stringify(directors));
    } catch(e){}
  }, [members, shootings, payments, clients, channels, directors]);

  // Add Member
  const addMember = (newMem) => {
    const memberObj = {
      ...newMem,
      id: 'm-' + Date.now(),
      balance: newMem.balance || 0,
      email: newMem.email || `user${Date.now()}@kuakatamultimedia.com`,
      phone: newMem.phone || '01700000000'
    };
    setMembers(prev => [...(prev || []), memberObj]);
  };

  // Update Member
  const updateMember = (updated) => {
    setMembers(prev => (prev || []).map(m => m.id === updated.id ? updated : m));
  };

  // Delete Member
  const deleteMember = (id) => {
    setMembers(prev => (prev || []).filter(m => m.id !== id));
  };

  // Add Channel
  const addChannel = (newChannel) => {
    const chObj = {
      ...newChannel,
      id: 'ch-' + Date.now(),
      categoryLabel: newChannel.category === 'official' ? 'অফিসিয়াল (নিজেদের)' : 'ক্লায়েন্ট চ্যানেল',
      shootingCount: 0,
      logo: newChannel.logo || '/logo.svg'
    };
    setChannels(prev => [...(prev || []), chObj]);
  };

  // Add Director
  const addDirector = (newDirector) => {
    const dirObj = {
      ...newDirector,
      id: 'dir-' + Date.now(),
      role: newDirector.role || 'পরিচালক',
      shootingCount: 0,
      avatar: newDirector.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop'
    };
    setDirectors(prev => [...(prev || []), dirObj]);
  };

  // Reset User Password Service
  const resetUserPassword = (emailOrPhone, newPass) => {
    const target = (emailOrPhone || '').toLowerCase().trim();
    setMembers(prev => (prev || []).map(m => {
      if ((m.email || '').toLowerCase().trim() === target || m.phone === emailOrPhone) {
        return { ...m, password: newPass, pin: newPass };
      }
      return m;
    }));
    return { success: true };
  };

  // Add Payment & Update Member Balance
  const addPayment = (paymentData) => {
    const newPay = {
      ...paymentData,
      id: 'pay-' + Date.now(),
      date: new Date().toLocaleDateString('en-GB')
    };

    setPayments(prev => [newPay, ...(prev || [])]);

    // Reduce member due balance
    if (paymentData.member_id) {
      setMembers(prev => (prev || []).map(m => {
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
    setShootings(prev => [newSh, ...(prev || [])]);
  };

  // Sorted members with Kabir Hossen Shuvo ALWAYS PINNED ON TOP
  const getSortedMembers = () => {
    const safeMembers = members || EXACT_MEMBERS_LIST;
    const shuvo = safeMembers.find(m => m.isPinnedTop || (m.name && m.name.toLowerCase().includes('kabir hossen shuvo')));
    const others = safeMembers.filter(m => !(m.isPinnedTop || (m.name && m.name.toLowerCase().includes('kabir hossen shuvo'))));

    const orderMap = {
      'SM Almas': 1,
      'Masud Parves Sagor': 2,
      'Arif Apon': 3,
      'Jafor Howlader': 4,
      'Siraj Musulli': 5,
      'Abu Hasan Milon': 6,
      'Rimi': 7,
      'Nizam Uddin': 8,
      'Mohsin Mama': 9,
      'Jisan Musulli': 10,
      'Akhinur Noon Nahar': 11,
      'Ziaur Rahman': 12,
      'Abubakar Abir': 13,
      'Sojib Mazi': 14,
      'মালা আক্তার': 15,
      'Emon Molla': 16
    };

    others.sort((a, b) => (orderMap[a.name] || 99) - (orderMap[b.name] || 99));

    return shuvo ? [shuvo, ...others] : others;
  };

  return (
    <DataContext.Provider value={{
      members: members || EXACT_MEMBERS_LIST,
      getSortedMembers,
      addMember,
      updateMember,
      deleteMember,
      resetUserPassword,
      shootings: shootings || [],
      addShooting,
      payments: payments || [],
      addPayment,
      clients: clients || INITIAL_CLIENTS,
      channels: channels || INITIAL_CHANNELS,
      addChannel,
      directors: directors || INITIAL_DIRECTORS,
      addDirector,
      toBnNum
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
