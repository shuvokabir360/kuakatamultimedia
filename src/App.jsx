import React, { useState, useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './components/admin/AdminDashboard';
import MemberPortal from './components/member/MemberPortal';

function MainContent() {
  const { activeTab, setActiveTab, user } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Sync route from URL Hash or Pathname (e.g. /login or #/login)
  useEffect(() => {
    const handleLocationRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.endsWith('/login') || hash === '#/login' || hash === '#login') {
        setActiveTab('login');
      }
    };

    handleLocationRoute();
    window.addEventListener('popstate', handleLocationRoute);
    window.addEventListener('hashchange', handleLocationRoute);

    return () => {
      window.removeEventListener('popstate', handleLocationRoute);
      window.removeEventListener('hashchange', handleLocationRoute);
    };
  }, [setActiveTab]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-dark-900 text-slate-100">
      
      {/* Top Navbar */}
      <Navbar onOpenAuthModal={() => setAuthModalOpen(true)} />

      {/* Main View Router */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <HeroSection />
            <TeamSection />
            <PortfolioSection />
            <ContactSection />
          </>
        )}

        {activeTab === 'team' && <TeamSection />}
        {activeTab === 'portfolio' && <PortfolioSection />}
        {activeTab === 'contact' && <ContactSection />}

        {/* Dedicated Standalone /login Route */}
        {activeTab === 'login' && <LoginPage />}

        {activeTab === 'admin-dashboard' && <AdminDashboard />}
        {activeTab === 'member-portal' && <MemberPortal />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Modal Quick Fallback */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <MainContent />
      </AuthProvider>
    </DataProvider>
  );
}
