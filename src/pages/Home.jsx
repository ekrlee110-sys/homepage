import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Philosophy from '../components/Philosophy';
import Menu from '../components/Menu';
import Trust from '../components/Trust';
import WhySannae from '../components/WhySannae';
import Reservation from '../components/Reservation';
import AuthModal from '../components/AuthModal';
import Navbar from '../components/Navbar';

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('login') === 'true') {
      setAuthOpen(true);
      // Clean query parameter from URL to prevent re-opening on page refresh
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location]);

  return (
    <div className="home-page">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      
      <main>
        <Hero />
        <Story />
        <Philosophy />
        <Menu />
        <Trust />
        <WhySannae />
        <Reservation />
      </main>

      {/* Authentication Popup */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
