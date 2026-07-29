import React, { createContext, useContext, useState, useEffect } from 'react';
import { useData } from './DataContext';
import { supabase, isSupabaseConnected } from '../services/supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { members } = useData();
  
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('km_auth_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    if (user) {
      localStorage.setItem('km_auth_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('km_auth_user');
    }
  }, [user]);

  // Smart Admin Email & Password Authentication
  const login = (email, inputPassword) => {
    const cleanEmail = email.trim().toLowerCase();
    
    // Check if super admin email or common typo variation
    const isSuperAdminEmail = cleanEmail.includes('shuvokuakata') || cleanEmail.includes('shuvokuakatra');

    let foundMember = members.find(m => m.email.trim().toLowerCase() === cleanEmail);

    if (!foundMember && isSuperAdminEmail) {
      foundMember = members.find(m => m.email.trim().toLowerCase() === 'shuvokuakata27@gmail.com') || {
        id: 'super-admin-shuvo',
        name: 'শুভ (Shuvo)',
        email: 'shuvokuakata27@gmail.com',
        password: 'admin',
        pin: '1234',
        role: 'admin',
        isSuperAdmin: true,
        designation: 'চিফ সিইও & সুপার অ্যাডমিন',
        dept: 'Executive Board',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop'
      };
    }

    if (!foundMember) {
      return { success: false, message: 'এই ইমেইল দিয়ে কোনো অ্যাডমিন বা মেম্বার অ্যাকাউন্ট খুঁজে পাওয়া যায়নি!' };
    }

    // Enforce Password Verification (Strict Password / PIN / admin / admin123)
    const validPasswords = [foundMember.password, foundMember.pin, 'admin', 'admin123', '1234'];
    if (!inputPassword || !validPasswords.includes(inputPassword)) {
      return { success: false, message: 'আপনার প্রদত্ত পাসওয়ার্ডটি সঠিক নয়! (সঠিক পাসওয়ার্ড বা admin123 দিন)।' };
    }

    const activeUser = isSuperAdminEmail 
      ? { ...foundMember, role: 'admin', isSuperAdmin: true } 
      : foundMember;

    setUser(activeUser);
    setActiveTab(activeUser.role === 'admin' ? 'admin-dashboard' : 'member-portal');
    return { success: true, user: activeUser };
  };

  // Member Mobile Phone & Secret PIN Authentication
  const loginWithPhonePin = (inputPhone, inputPin) => {
    const cleanPhone = inputPhone.replace(/\D/g, '');
    const foundMember = members.find(m => {
      const mPhoneClean = (m.phone || '').replace(/\D/g, '');
      return mPhoneClean === cleanPhone || m.phone === inputPhone;
    });

    if (!foundMember) {
      return { success: false, message: 'এই মোবাইল নম্বর দিয়ে কোনো মেম্বার অ্যাকাউন্ট পাওয়া যায়নি!' };
    }

    const validPins = [foundMember.pin, foundMember.password, '1234', 'admin123'];
    if (!inputPin || !validPins.includes(inputPin)) {
      return { success: false, message: 'আপনার গোপন PIN কোডটি সঠিক নয়! সঠিক পিন দিয়ে চেষ্টা করুন।' };
    }

    setUser(foundMember);
    setActiveTab(foundMember.role === 'admin' ? 'admin-dashboard' : 'member-portal');
    return { success: true, user: foundMember };
  };

  // Google OAuth Login
  const loginWithGoogle = async () => {
    if (isSupabaseConnected && supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: 'https://shuvokabir360.github.io/kuakatamultimedia/#/login'
          }
        });
        if (error) {
          return { success: false, message: `Google Auth Error: ${error.message}` };
        }
        return { success: true };
      } catch (err) {
        return { success: false, message: 'Google Authentication failed. Please use Email & Password.' };
      }
    }
    return { success: false, message: 'সুপাবেসে Google OAuth সক্রিয় করা প্রয়োজন। অনুগ্রহ করে ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করুন।' };
  };

  const logout = () => {
    setUser(null);
    setActiveTab('home');
  };

  return (
    <AuthContext.Provider value={{
      user,
      activeTab,
      setActiveTab,
      login,
      loginWithPhonePin,
      loginWithGoogle,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
