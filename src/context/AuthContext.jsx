import React, { createContext, useContext, useState, useEffect } from 'react';
import { useData } from './DataContext';
import { supabase, isSupabaseConnected } from '../services/supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { members, loginOrCreateGoogleUser } = useData();
  
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

  // Handle Standard Login
  const login = (email, inputPassword) => {
    const isSuperAdminEmail = email.toLowerCase() === 'shuvokuakata27@gmail.com';
    const foundMember = members.find(m => m.email.toLowerCase() === email.toLowerCase());

    if (foundMember) {
      if (foundMember.password && inputPassword && foundMember.password !== inputPassword) {
        return { success: false, message: 'পাসওয়ার্ডটি সঠিক নয়! আবার চেষ্টা করুন।' };
      }

      const activeUser = isSuperAdminEmail ? { ...foundMember, role: 'admin', isSuperAdmin: true } : foundMember;
      setUser(activeUser);
      setActiveTab(activeUser.role === 'admin' ? 'admin-dashboard' : 'member-portal');
      return { success: true, user: activeUser };
    }

    // Super Admin Fallback
    if (isSuperAdminEmail) {
      const superAdminObj = {
        id: 'super-admin-shuvo',
        name: 'শুভ (Shuvo)',
        email: 'shuvokuakata27@gmail.com',
        role: 'admin',
        isSuperAdmin: true,
        designation: 'চিফ সিইও & সুপার অ্যাডমিন',
        dept: 'Executive Board',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop'
      };
      setUser(superAdminObj);
      setActiveTab('admin-dashboard');
      return { success: true, user: superAdminObj };
    }

    if (email === 'admin@kuakatamultimedia.com' || email === 'admin') {
      const adminMember = members.find(m => m.role === 'admin') || members[0];
      setUser(adminMember);
      setActiveTab('admin-dashboard');
      return { success: true, user: adminMember };
    }

    if (email === 'member@kuakatamultimedia.com' || email === 'member') {
      const memberUser = members.find(m => m.role === 'member') || members[1];
      setUser(memberUser);
      setActiveTab('member-portal');
      return { success: true, user: memberUser };
    }

    return { success: false, message: 'এই ইমেইল দিয়ে কোনো মেম্বার অ্যাকাউন্ট খুঁজে পাওয়া যায়নি!' };
  };

  // Handle Google OAuth Sign In
  const loginWithGoogle = async (googleProfile = null) => {
    // If Supabase OAuth is available
    if (isSupabaseConnected && supabase && !googleProfile) {
      try {
        await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: window.location.origin
          }
        });
        return;
      } catch (err) {
        console.warn('Supabase OAuth error, using Google profile simulator:', err);
      }
    }

    // Default Profile (e.g. shuvokuakata27@gmail.com or passed profile)
    const profile = googleProfile || {
      name: 'Shuvo (Super Admin)',
      email: 'shuvokuakata27@gmail.com',
      picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop'
    };

    const authenticatedUser = loginOrCreateGoogleUser(profile);
    setUser(authenticatedUser);
    setActiveTab(authenticatedUser.role === 'admin' ? 'admin-dashboard' : 'member-portal');
    return { success: true, user: authenticatedUser };
  };

  const logout = () => {
    setUser(null);
    setActiveTab('home');
  };

  const switchRoleDemo = (roleType) => {
    if (roleType === 'superadmin') {
      const superAdminUser = members.find(m => m.email.toLowerCase() === 'shuvokuakata27@gmail.com') || {
        id: 'super-admin-shuvo',
        name: 'শুভ (Shuvo)',
        email: 'shuvokuakata27@gmail.com',
        role: 'admin',
        isSuperAdmin: true,
        designation: 'চিফ সিইও & সুপার অ্যাডমিন',
        dept: 'Executive Board',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop'
      };
      setUser(superAdminUser);
      setActiveTab('admin-dashboard');
    } else if (roleType === 'admin') {
      const adminUser = members.find(m => m.role === 'admin') || members[0];
      setUser(adminUser);
      setActiveTab('admin-dashboard');
    } else if (roleType === 'member') {
      const memberUser = members.find(m => m.role === 'member') || members[1];
      setUser(memberUser);
      setActiveTab('member-portal');
    } else {
      setUser(null);
      setActiveTab('home');
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      activeTab,
      setActiveTab,
      login,
      loginWithGoogle,
      logout,
      switchRoleDemo
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
