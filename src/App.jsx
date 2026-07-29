import React, { useState } from 'react';
import { DataProvider } from './context/DataContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import AdminDashboard from './components/admin/AdminDashboard';
import MemberPortal from './components/member/MemberPortal';

function MainContent() {
  const { activeTab, user } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);

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

        {activeTab === 'admin-dashboard' && <AdminDashboard />}
        {activeTab === 'member-portal' && <MemberPortal />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
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
