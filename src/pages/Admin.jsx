import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Home, 
  LogOut, 
  User, 
  Menu, 
  X 
} from 'lucide-react';
import DashboardTab from '../components/admin/DashboardTab';
import CustomersTab from '../components/admin/CustomersTab';
import StatsTab from '../components/admin/StatsTab';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: '대시보드', icon: <LayoutDashboard size={18} /> },
    { id: 'customers', label: '고객관리', icon: <Users size={18} /> },
    { id: 'stats', label: '통계/리포트', icon: <BarChart3 size={18} /> }
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar Mobile Toggle Button */}
      <button 
        className="mobile-sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Left Sidebar */}
      <aside className={`admin-sidebar glass-panel-dark ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo-text">
            <span className="logo-hanja">山內</span>
            <span className="logo-korean text-light">돌짜장</span>
          </Link>
          <span className="admin-badge">ADMIN</span>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-link ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false); // Close sidebar on mobile
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link home-link">
            <Home size={18} />
            <span>홈페이지 가기</span>
          </Link>
          <button className="sidebar-link logout-btn" onClick={() => alert('로그아웃 되었습니다.')}>
            <LogOut size={18} />
            <span>로그아웃</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        {/* Top Header */}
        <header className="admin-header glass-panel">
          <div className="header-breadcrumbs">
            <span>관리자 센터</span>
            <span className="separator">&gt;</span>
            <span className="active-crumb">
              {menuItems.find(m => m.id === activeTab)?.label}
            </span>
          </div>

          <div className="admin-profile">
            <div className="profile-info">
              <span className="profile-name">최고관리자</span>
              <span className="profile-role">마스터 계정</span>
            </div>
            <div className="profile-avatar">
              <User size={20} />
            </div>
          </div>
        </header>

        {/* Dynamic Tab Body */}
        <div className="admin-content">
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'customers' && <CustomersTab />}
          {activeTab === 'stats' && <StatsTab />}
        </div>
      </main>

      <style>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background-color: #fdfbf7;
        }

        /* Sidebar Styles */
        .admin-sidebar {
          width: 260px;
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 95;
          padding: 30px 20px;
          border-radius: 0;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
        }

        .sidebar-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 40px;
        }

        .logo-text {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 20px;
          font-weight: 800;
        }

        .logo-hanja {
          color: var(--accent-gold);
          border-color: var(--accent-gold);
        }

        .text-light {
          color: #fdfbf7;
        }

        .admin-badge {
          font-size: 10px;
          letter-spacing: 1px;
          color: var(--accent-gold);
          font-weight: 700;
          background: rgba(197, 168, 128, 0.15);
          padding: 2px 8px;
          border-radius: 4px;
          align-self: flex-start;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 14px;
          color: rgba(255, 255, 255, 0.7);
          padding: 14px 18px;
          border-radius: 12px;
          font-size: 14.5px;
          font-weight: 500;
          transition: all 0.3s ease;
          width: 100%;
          text-align: left;
        }

        .sidebar-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .sidebar-link.active {
          color: var(--bg-dark);
          background: var(--accent-gold);
          font-weight: 700;
        }

        .sidebar-footer {
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
        }

        .logout-btn {
          color: rgba(185, 74, 56, 0.8);
        }

        .logout-btn:hover {
          color: #ff6347;
          background: rgba(185, 74, 56, 0.1);
        }

        /* Main Content Styles */
        .admin-main {
          margin-left: 260px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .admin-header {
          position: sticky;
          top: 0;
          height: 70px;
          z-index: 90;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          border-radius: 0;
          border-bottom: 1px solid rgba(197, 168, 128, 0.15);
        }

        .header-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-muted);
        }

        .separator {
          color: rgba(197, 168, 128, 0.4);
        }

        .active-crumb {
          color: var(--bg-dark);
          font-weight: 700;
        }

        .admin-profile {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .profile-name {
          font-size: 13.5px;
          font-weight: 700;
          color: var(--text-dark);
        }

        .profile-role {
          font-size: 11px;
          color: var(--text-muted);
        }

        .profile-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--bg-secondary);
          color: var(--accent-gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(197, 168, 128, 0.3);
        }

        .admin-content {
          padding: 40px;
          flex-grow: 1;
        }

        /* Mobile Adjustments */
        .mobile-sidebar-toggle {
          display: none;
          position: fixed;
          top: 15px;
          left: 15px;
          z-index: 105;
          background: var(--bg-dark);
          color: #ffffff;
          padding: 8px;
          border-radius: 8px;
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 992px) {
          .admin-sidebar {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }

          .admin-sidebar.open {
            transform: translateX(0);
          }

          .admin-main {
            margin-left: 0;
          }

          .mobile-sidebar-toggle {
            display: block;
          }

          .admin-header {
            padding-left: 70px;
          }
        }
      `}</style>
    </div>
  );
}
