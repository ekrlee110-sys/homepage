import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, UserCheck, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import logoImg from '../assets/logo.png';

export default function Navbar({ onOpenAuth }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth events
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  // Do not show user navbar in admin pages
  if (isAdmin) return null;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="navbar-container glass-panel">
      <div className="navbar-content container">
        <Link to="/" className="nav-logo">
          <img src={logoImg} alt="산내돌짜장 로고" className="logo-img" />
        </Link>

        {/* Draft Navigation Menu */}
        <div className="nav-links">
          <button onClick={() => scrollToSection('story')} className="nav-link-btn">브랜드 이야기</button>
          <button onClick={() => scrollToSection('philosophy')} className="nav-link-btn">산내돌짜장의 고집 5가지</button>
          <button onClick={() => scrollToSection('menu')} className="nav-link-btn">대표 메뉴</button>
          <button onClick={() => scrollToSection('set-menu')} className="nav-link-btn">세트 메뉴</button>
          <button onClick={() => scrollToSection('trust')} className="nav-link-btn">인증과 신뢰</button>
          <button onClick={() => scrollToSection('reservation')} className="nav-link-btn">오시는 길</button>
        </div>

        {/* Right Actions */}
        <div className="nav-actions">
          {user ? (
            <div className="user-nav-info">
              <span className="user-email-tag">{user.user_metadata?.name || user.email.split('@')[0]}님</span>
              <button className="nav-auth-btn logout-btn" onClick={handleLogout}>
                <LogOut size={15} />
                <span>로그아웃</span>
              </button>
            </div>
          ) : (
            <button className="nav-auth-text-btn" onClick={onOpenAuth}>
              <UserCheck size={16} />
              <span>로그인</span>
            </button>
          )}

          <a 
            href="https://map.naver.com/p/search/%EC%82%B0%EB%82%B4%EB%8F%8C%EC%A7%9C%EC%9E%A5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-map-btn"
          >
            <MapPin size={15} />
            <span>길찾기</span>
          </a>
        </div>
      </div>

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 75px;
          z-index: 100;
          display: flex;
          align-items: center;
          background: rgba(251, 248, 243, 0.94);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(197, 168, 128, 0.25);
          box-shadow: 0 2px 10px rgba(43, 30, 22, 0.04);
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-link-btn {
          background: none;
          border: none;
          font-size: 14.5px;
          font-weight: 600;
          color: #3b2c25;
          cursor: pointer;
          padding: 6px 2px;
          position: relative;
          transition: color 0.2s ease;
          letter-spacing: -0.3px;
        }

        .nav-link-btn:hover {
          color: #a24b33;
        }

        .nav-link-btn::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: #a24b33;
          transition: all 0.25s ease;
          transform: translateX(-50%);
        }

        .nav-link-btn:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-auth-text-btn {
          background: none;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 13.5px;
          font-weight: 600;
          color: #66554b;
          padding: 6px 10px;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-auth-text-btn:hover {
          background-color: #ede4d7;
          color: #1f1916;
        }

        .nav-map-btn {
          background-color: #1f1916;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(31, 25, 22, 0.18);
          transition: all 0.2s ease;
          letter-spacing: -0.2px;
        }

        .nav-map-btn:hover {
          background-color: #3b2c25;
          transform: translateY(-1px);
        }

        .user-nav-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .user-email-tag {
          font-size: 13px;
          font-weight: 600;
          color: #3b2c25;
        }

        .logout-btn {
          background: none;
          border: 1px solid rgba(197, 168, 128, 0.5);
          color: #66554b;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 10px;
          border-radius: 14px;
          font-size: 12px;
          cursor: pointer;
        }

        .logout-btn:hover {
          background: #ede4d7;
          color: #1f1916;
        }

        @media (max-width: 1024px) {
          .nav-links {
            gap: 14px;
          }
          .nav-link-btn {
            font-size: 13px;
          }
        }

        @media (max-width: 860px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
