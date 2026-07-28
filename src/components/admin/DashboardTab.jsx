import React from 'react';
import { Users, DollarSign, ShoppingBag, PlusCircle, Award } from 'lucide-react';

export default function DashboardTab() {
  const stats = [
    { title: '전체 고객 수', value: '1,248명', change: '+12% 이번달', icon: <Users size={20} />, color: '#c5a880' },
    { title: '누적 매출액', value: '45,820,000원', change: '+8.5% 이번달', icon: <DollarSign size={20} />, color: '#b94a38' },
    { title: '총 거래 건수', value: '1,532건', change: '+15.2% 이번달', icon: <ShoppingBag size={20} />, color: '#2c221e' }
  ];

  const recentRegistrations = [
    { name: '김민준', grade: 'VVIP', time: '5분 전', action: '신규 회원가입' },
    { name: '이서연', grade: 'Gold', time: '18분 전', action: '매운갈비찜 구매' },
    { name: '박우진', grade: 'VIP', time: '1시간 전', action: '돌짜장 구매' },
    { name: '최지우', grade: 'Family', time: '2시간 전', action: '신규 회원가입' },
    { name: '정현우', grade: 'Gold', time: '3시간 전', action: '돌짜장 구매' }
  ];

  // SVG Chart: Grade Distribution (VVIP, VIP, Gold, Family)
  // Percentages: VVIP: 10%, VIP: 20%, Gold: 40%, Family: 30%
  const gradeData = [
    { label: 'VVIP (10%)', count: 125, percentage: 10, color: '#b94a38' },
    { label: 'VIP (20%)', count: 250, percentage: 20, color: '#c5a880' },
    { label: 'Gold (40%)', count: 499, percentage: 40, color: '#a68453' },
    { label: 'Family (30%)', count: 374, percentage: 30, color: '#82756e' }
  ];

  const newCustomers = [
    { id: 1, name: '이경래', grade: 'Gold', spend: '150,000원', visits: 4, date: '2026-07-14' },
    { id: 2, name: '윤아름', grade: 'Family', spend: '29,000원', visits: 1, date: '2026-07-14' },
    { id: 3, name: '장민호', grade: 'VIP', spend: '345,000원', visits: 8, date: '2026-07-13' },
    { id: 4, name: '송지은', grade: 'VVIP', spend: '820,000원', visits: 18, date: '2026-07-12' },
    { id: 5, name: '한재상', grade: 'Family', spend: '62,000원', visits: 2, date: '2026-07-12' }
  ];

  return (
    <div className="tab-content animate-fade-in">
      <div className="tab-header-title">
        <h2>대시보드</h2>
        <p>실시간 산내돌짜장 매장 요약 보고서</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <span className="stat-label">{stat.title}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-charts-grid">
        {/* Real-time Activites */}
        <div className="dashboard-panel">
          <div className="panel-title-row">
            <h3><PlusCircle size={18} className="panel-icon" /> 실시간 고객 등록 & 활동</h3>
          </div>
          <div className="activity-timeline">
            {recentRegistrations.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-badge" style={{ backgroundColor: idx === 0 ? '#b94a38' : '#c5a880' }}></div>
                <div className="timeline-details">
                  <div className="timeline-header">
                    <strong>{item.name}</strong>
                    <span className="grade-badge">{item.grade}</span>
                    <span className="timeline-time">{item.time}</span>
                  </div>
                  <p>{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grade Distribution Chart (SVG Bar Chart) */}
        <div className="dashboard-panel">
          <div className="panel-title-row">
            <h3><Award size={18} className="panel-icon" /> 등급별 고객 분포</h3>
          </div>
          
          <div className="chart-container">
            <div className="bar-chart">
              {gradeData.map((data, idx) => (
                <div key={idx} className="chart-bar-row">
                  <span className="chart-bar-label">{data.label}</span>
                  <div className="chart-bar-track">
                    <div 
                      className="chart-bar-fill animate-grow-width" 
                      style={{ 
                        width: `${data.percentage}%`, 
                        backgroundColor: data.color 
                      }}
                    >
                      <span className="chart-bar-value">{data.count}명</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Customers List */}
      <div className="dashboard-panel full-width">
        <div className="panel-title-row">
          <h3>신규 가입 고객 목록</h3>
        </div>
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>고객명</th>
                <th>등급</th>
                <th>누적 구매금액</th>
                <th>방문 빈도 (회)</th>
                <th>가입일</th>
              </tr>
            </thead>
            <tbody>
              {newCustomers.map((cust) => (
                <tr key={cust.id}>
                  <td className="font-semibold">{cust.name}</td>
                  <td>
                    <span className={`grade-tag ${cust.grade.toLowerCase()}`}>
                      {cust.grade}
                    </span>
                  </td>
                  <td>{cust.spend}</td>
                  <td>{cust.visits}회</td>
                  <td>{cust.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .tab-header-title {
          margin-bottom: 30px;
        }

        .tab-header-title h2 {
          font-size: 26px;
          font-weight: 800;
          color: var(--bg-dark);
          margin-bottom: 6px;
        }

        .tab-header-title p {
          font-size: 14px;
          color: var(--text-muted);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: #ffffff;
          border: 1px solid rgba(197, 168, 128, 0.2);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          gap: 20px;
          align-items: center;
          box-shadow: var(--shadow-sm);
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 13.5px;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 4px;
        }

        .stat-value {
          font-size: 22px;
          font-weight: 800;
          color: var(--bg-dark);
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-change {
          font-size: 12px;
          color: #4a8f5e;
          font-weight: 600;
        }

        .dashboard-charts-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 40px;
        }

        .dashboard-panel {
          background: #ffffff;
          border: 1px solid rgba(197, 168, 128, 0.2);
          border-radius: 20px;
          padding: 30px;
          box-shadow: var(--shadow-sm);
        }

        .dashboard-panel.full-width {
          grid-column: span 2;
        }

        .panel-title-row {
          margin-bottom: 24px;
          border-bottom: 1.5px solid rgba(197, 168, 128, 0.15);
          padding-bottom: 16px;
        }

        .panel-title-row h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--bg-dark);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .panel-icon {
          color: var(--accent-gold-dark);
        }

        /* Activity Timeline */
        .activity-timeline {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .timeline-item {
          display: flex;
          gap: 16px;
          position: relative;
        }

        .timeline-badge {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }

        .timeline-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 100%;
        }

        .timeline-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
        }

        .grade-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 4px;
          background: var(--bg-secondary);
          color: var(--accent-gold-dark);
        }

        .timeline-time {
          margin-left: auto;
          font-size: 12px;
          color: var(--text-muted);
        }

        .timeline-details p {
          font-size: 13px;
          color: var(--text-dark);
          opacity: 0.85;
        }

        /* Bar Chart Styles */
        .chart-container {
          padding: 10px 0;
        }

        .bar-chart {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .chart-bar-row {
          display: grid;
          grid-template-columns: 100px 1fr;
          align-items: center;
          gap: 16px;
        }

        .chart-bar-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-dark);
        }

        .chart-bar-track {
          background: var(--bg-secondary);
          height: 28px;
          border-radius: 6px;
          overflow: hidden;
          width: 100%;
        }

        .chart-bar-fill {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 12px;
          border-radius: 6px;
          transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .chart-bar-value {
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
        }

        /* Admin Table Styles */
        .table-responsive {
          width: 100%;
          overflow-x: auto;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .admin-table th, .admin-table td {
          padding: 16px;
          font-size: 14px;
          border-bottom: 1px solid rgba(197, 168, 128, 0.15);
        }

        .admin-table th {
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(197, 168, 128, 0.05);
        }

        .font-semibold {
          font-weight: 600;
        }

        .grade-tag {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .grade-tag.vvip {
          background: rgba(185, 74, 56, 0.1);
          color: #b94a38;
        }

        .grade-tag.vip {
          background: rgba(197, 168, 128, 0.15);
          color: #a68453;
        }

        .grade-tag.gold {
          background: rgba(197, 168, 128, 0.3);
          color: #8c734b;
        }

        .grade-tag.family {
          background: rgba(130, 117, 110, 0.1);
          color: #82756e;
        }

        @keyframes growWidth {
          from { width: 0; }
        }

        .animate-grow-width {
          animation: growWidth 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .dashboard-charts-grid {
            grid-template-columns: 1fr;
          }
          .dashboard-panel.full-width {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
}
