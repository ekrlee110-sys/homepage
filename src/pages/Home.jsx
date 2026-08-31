import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import logoImg from '../assets/logo.png';
import Story from '../components/Story';
import Philosophy from '../components/Philosophy';
import Menu from '../components/Menu';
import Trust from '../components/Trust';
import WhySannae from '../components/WhySannae';
import Reservation from '../components/Reservation';
import AuthModal from '../components/AuthModal';
import Navbar from '../components/Navbar';
import { Instagram, Phone, MapPin, Clock } from 'lucide-react';

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

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={logoImg} alt="산내돌짜장 로고" className="footer-logo-img" />
            <p>192시간의 정성스런 기다림으로 최고의 한그릇을 대접합니다.</p>
          </div>

          <div className="footer-info">
            <h4>STORE INFO</h4>
            <div className="footer-links">
              <div className="footer-link-item">
                <Clock size={16} />
                <span>매일 11:30 - 20:00 (라스트오더 19:15, 월요일 휴무)</span>
              </div>
              <div className="footer-link-item">
                <Phone size={16} />
                <span>0507-1340-0457</span>
              </div>
              <div className="footer-link-item">
                <MapPin size={16} />
                <span>대전광역시 동구 산내로 (대전본점)</span>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <h4>SOCIAL CHANNELS</h4>
            <p>인스타그램에서 산내돌짜장의 최신 소식을 만나보세요.</p>
            <a 
              href="https://www.instagram.com/sannaedol_zzajang/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
            >
              <Instagram size={18} />
              <span>공식 인스타그램 가기</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p>&copy; {new Date().getFullYear()} 산내돌짜장. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Authentication Popup */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />

      <style>{`
        .footer {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding: 80px 0 30px 0;
          border-top: 1.5px solid var(--accent-gold);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1fr;
          gap: 50px;
          margin-bottom: 50px;
        }

        .footer-logo-img {
          height: 60px;
          width: auto;
          object-fit: contain;
          margin-bottom: 16px;
        }

        .footer-brand p {
          font-size: 14px;
          opacity: 0.75;
          line-height: 1.6;
        }

        .footer-info h4, .footer-social h4 {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--accent-gold);
          margin-bottom: 20px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          opacity: 0.8;
        }

        .footer-social p {
          font-size: 14px;
          opacity: 0.8;
          margin-bottom: 20px;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-light);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-btn:hover {
          background: var(--accent-gold);
          color: var(--bg-dark);
          border-color: var(--accent-gold);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 30px;
          font-size: 12.5px;
          opacity: 0.5;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </div>
  );
}
