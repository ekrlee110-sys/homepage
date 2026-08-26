import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCheck, Shield } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  // Do not show user navbar in admin pages
  if (isAdmin) return null;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, navigate to home and then scroll (using router or window.location)
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="navbar-container glass-panel">
      <div className="navbar-content container">
        <Link to="/" className="nav-logo">
          <span className="logo-hanja">山內</span>
          <span className="logo-korean">돌짜장</span>
        </Link>

        <div className="nav-links">
          <button onClick={() => scrollToSection('story')} className="nav-link-btn">브랜드 스토리</button>
          <button onClick={() => scrollToSection('menu')} className="nav-link-btn">대표 메뉴</button>
          <button onClick={() => scrollToSection('reservation')} className="nav-link-btn">예약 문의</button>
        </div>

        <div className="nav-actions">
          <button className="nav-auth-btn" onClick={onOpenAuth}>
            <UserCheck size={16} />
            <span>로그인 / 가입</span>
          </button>
          
         
        </div>
      </div>

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: 100;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
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
          gap: 6px;
          font-weight: 900;
          letter-spacing: -0.5px;
          font-size: 22px;
          color: var(--bg-dark);
          transition: transform 0.2s ease;
        }

        .nav-logo:hover {
          transform: scale(1.02);
        }

        .logo-hanja {
          color: var(--accent-gold-dark);
          font-family: var(--font-title);
          font-weight: 500;
          border: 1.5px solid var(--accent-gold-dark);
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 14px;
          margin-right: 2px;
        }

        .logo-korean {
          font-weight: 800;
          color: var(--text-dark);
        }

        .nav-links {
          display: flex;
          gap: 36px;
        }

        .nav-link-btn {
          font-size: 15px;
          font-weight: 500;
          color: var(--text-dark);
          transition: color 0.2s ease;
          position: relative;
          padding: 8px 0;
        }

        .nav-link-btn::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: var(--accent-gold-dark);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link-btn:hover {
          color: var(--accent-gold-dark);
        }

        .nav-link-btn:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-auth-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-dark);
          color: var(--text-light);
          padding: 10px 18px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(44, 34, 30, 0.15);
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .nav-auth-btn:hover {
          background: #463630;
          transform: translateY(-2px);
        }

        .nav-admin-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          color: var(--accent-gold-dark);
          border: 1.5px solid var(--accent-gold-dark);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease, transform 0.2s ease;
        }

        .nav-admin-btn:hover {
          background: var(--accent-gold-dark);
          color: var(--text-light);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none; /* Hide links on mobile for simplicity */
          }
          .logo-korean {
            font-size: 18px;
          }
          .nav-auth-btn span, .nav-admin-btn span {
            display: none;
          }
          .nav-auth-btn, .nav-admin-btn {
            padding: 8px;
            border-radius: 50%;
          }
        }
      `}</style>
    </nav>
  );
}
