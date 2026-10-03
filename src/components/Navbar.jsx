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
      const header = document.querySelector('.navbar-container');
      const top = element.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 75) - 16;
      window.scrollTo({ top: Math.max(0, top), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="navbar-container glass-panel" aria-label="주요 메뉴">
      <div className="navbar-content container">
        <Link to="/" className="nav-logo">
          <img src={logoImg} alt="산내돌짜장 로고" className="logo-img" />
        </Link>

        <span className="nav-brand-copy">대한민국 최초 <strong>韓食</strong> 짜장면</span>

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

      <div className="nav-links-row">
        <div className="nav-links">
          <button onClick={() => scrollToSection('story')} className="nav-link-btn">브랜드 이야기</button>
          <button onClick={() => scrollToSection('philosophy')} className="nav-link-btn">산내돌짜장의 고집 5가지</button>
          <button onClick={() => scrollToSection('menu')} className="nav-link-btn">대표 메뉴</button>
          <button onClick={() => scrollToSection('set-menu')} className="nav-link-btn">세트 메뉴</button>
          <button onClick={() => scrollToSection('trust')} className="nav-link-btn">인증과 신뢰</button>
          <button onClick={() => scrollToSection('social')} className="nav-link-btn">영상·소식</button>
          <button onClick={() => scrollToSection('reservation')} className="nav-link-btn">오시는 길</button>
        </div>
      </div>

      <div className="mobile-shortcuts container" aria-label="내용 바로가기">
        {[
          ['story', '브랜드 이야기'],
          ['menu', '대표 메뉴'],
          ['philosophy', '192시간 숙성과학'],
          ['trust', '인증·방송'],
          ['trust-sharing', '나눔·후원'],
          ['reservation', '매장 안내'],
        ].map(([id, label]) => (
          <button type="button" key={id} onClick={() => scrollToSection(id)}>{label}</button>
        ))}
      </div>

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          background: rgba(251, 248, 243, 0.94);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(197, 168, 128, 0.25);
          box-shadow: 0 2px 10px rgba(43, 30, 22, 0.04);
        }

        .navbar-content {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: none;
          height: 112px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
          text-decoration: none;
        }

        .nav-brand-copy {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #3b2c25;
          font-size: clamp(38px, 6.95vw, 100px);
          font-weight: 800;
          line-height: 1;
          white-space: nowrap;
        }

        .nav-brand-copy strong {
          color: #9B3A2E;
          font-weight: inherit;
        }

        .logo-img {
          width: 38px;
          height: 38px;
          object-fit: cover;
          border-radius: 50%;
          transition: transform 0.2s ease;
          box-shadow: 0 2px 8px rgba(43, 30, 22, 0.08);
        }

        .nav-logo:hover .logo-img {
          transform: scale(1.06);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-links-row {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
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
          flex: 0 0 auto;
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
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
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

        .mobile-shortcuts { display: none; }

        .home-page [id] { scroll-margin-top: 174px !important; }

        @media (max-width: 1280px) {
          .nav-links {
            gap: 12px;
          }
          .nav-link-btn {
            font-size: 12.5px;
          }
        }

        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-links-row { display: none; }
          .navbar-content {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas:
              'logo'
              'brand';
            gap: 4px 8px;
            height: auto;
            min-height: 0;
            padding-top: 6px;
            padding-bottom: 8px;
          }
          .nav-logo { grid-area: logo; }
          .logo-img { width: 34px; height: 34px; }
          .nav-brand-copy {
            position: static;
            grid-area: brand;
            justify-self: center;
            max-width: 100%;
            transform: none;
            font-size: clamp(19px, 5.8vw, 50px);
          }
          .nav-actions {
            display: none;
          }
          .mobile-shortcuts {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 6px;
            padding-top: 8px;
            padding-bottom: 8px;
          }
          .mobile-shortcuts button {
            min-height: 44px;
            min-width: 0;
            padding: 6px 3px;
            border: 1px solid #e4d9cb;
            border-radius: 8px;
            background: #fffaf4;
            color: #3b2c25;
            font-family: inherit;
            font-size: clamp(11px, 3vw, 13px);
            font-weight: 600;
            letter-spacing: -0.5px;
            cursor: pointer;
          }
          .mobile-shortcuts button:hover,
          .mobile-shortcuts button:focus-visible {
            background: #efe2d3;
            border-color: #a24b33;
          }
          .home-page [id] { scroll-margin-top: 236px !important; }
        }

        @media (min-width: 861px) and (max-width: 1000px) {
          .nav-brand-copy { font-size: clamp(34px, 6vw, 62px); }
        }

        @media (max-width: 360px) {
          .nav-brand-copy { font-size: clamp(17px, 5.6vw, 20px); }

          .navbar-content {
            grid-template-columns: minmax(0, 1fr);
          }
          .logo-img { width: 30px; height: 30px; }
        }
      `}</style>
    </nav>
  );
}
