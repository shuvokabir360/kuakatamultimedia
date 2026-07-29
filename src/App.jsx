import React, { useState, useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import LoginPage from './pages/LoginPage';
import FinanceAppView from './components/finance/FinanceAppView';
import MemberPortal from './components/member/MemberPortal';
import { RefreshCw, AlertTriangle } from 'lucide-react';

// Error Boundary Component to prevent Black Screen of Death
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Rendering Error Caught by Boundary:", error, errorInfo);
  }

  handleReset = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch(e){}
    window.location.href = window.location.origin + window.location.pathname;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center border border-rose-500/30">
            <AlertTriangle className="w-8 h-8" />
          </div>
          
          <h2 className="text-xl font-black text-white">অ্যাপ লোড হতে সমস্যা হয়েছে</h2>
          
          <p className="text-xs text-slate-400 max-w-sm">
            ব্রাউজার ক্যাশে থাকা পুরোনো ডাটা ক্লিন করে রিফ্রেশ বাটনে ক্লিক করুন।
          </p>

          <button
            onClick={this.handleReset}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <RefreshCw className="w-4 h-4" />
            <span>ক্যাশে রিমুভ ও পেজ রিফ্রেশ করুন</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

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

  const isFinanceAppActive = activeTab === 'admin-dashboard';

  return (
    <div className={`min-h-screen flex flex-col justify-between bg-dark-900 text-slate-100 ${isFinanceAppActive ? '' : 'pb-16 md:pb-0'}`}>
      
      {/* Show Standard Top Navbar only if not in Finance App view */}
      {!isFinanceAppActive && <Navbar onOpenAuthModal={() => setAuthModalOpen(true)} />}

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

        {/* Admin Dashboard: Full Kuakata Multimedia Finance & Team Management App */}
        {activeTab === 'admin-dashboard' && <FinanceAppView />}
        
        {/* Member Portal */}
        {activeTab === 'member-portal' && <MemberPortal />}
      </main>

      {/* Show Standard Footer & Dock only if not in Finance App View */}
      {!isFinanceAppActive && (
        <>
          <Footer />
          <MobileBottomNav />
        </>
      )}

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
    <ErrorBoundary>
      <DataProvider>
        <AuthProvider>
          <MainContent />
        </AuthProvider>
      </DataProvider>
    </ErrorBoundary>
  );
}
