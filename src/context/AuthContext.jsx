import React, { createContext, useContext, useState, useEffect } from 'react';
import { useData } from './DataContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { members } = useData();
  
  // Current user state (null if not logged in)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('km_auth_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [activeTab, setActiveTab] = useState('home'); // home, team, portfolio, admin-dashboard, member-portal, contact

  useEffect(() => {
    if (user) {
      localStorage.setItem('km_auth_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('km_auth_user');
    }
  }, [user]);

  // Login handler
  const login = (email, password) => {
    // Demo auto-fill or exact match
    const foundMember = members.find(m => m.email.toLowerCase() === email.toLowerCase());

    if (foundMember) {
      setUser(foundMember);
      if (foundMember.role === 'admin') {
        setActiveTab('admin-dashboard');
      } else {
        setActiveTab('member-portal');
      }
      return { success: true, user: foundMember };
    }

    // Default admin fallback
    if (email === 'admin@kuakatamultimedia.com' || email === 'admin') {
      const adminMember = members.find(m => m.role === 'admin') || members[0];
      setUser(adminMember);
      setActiveTab('admin-dashboard');
      return { success: true, user: adminMember };
    }

    // Default member fallback
    if (email === 'member@kuakatamultimedia.com' || email === 'member') {
      const memberUser = members.find(m => m.role === 'member') || members[1];
      setUser(memberUser);
      setActiveTab('member-portal');
      return { success: true, user: memberUser };
    }

    return { success: false, message: 'ইমেইল অথবা পাসওয়ার্ড সঠিক নয়' };
  };

  const logout = () => {
    setUser(null);
    setActiveTab('home');
  };

  const switchRoleDemo = (roleType) => {
    if (roleType === 'admin') {
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
      logout,
      switchRoleDemo
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
