import React, { useState, useEffect } from 'react';
import { Users, DollarSign, ShoppingBag, PlusCircle, Award } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

export default function DashboardTab() {
  const [totalCount, setTotalCount] = useState(0);
  const [recentProfiles, setRecentProfiles] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Query 1: Fetch total count of profiles (Optimized query with count count: 'exact', head: true)
        const { count, error: countError } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        if (countError) throw countError;
        setTotalCount(count || 0);

        // Query 2: Fetch only recent 5 profiles (Optimized with limit(5))
        const { data, error: dataError } = await supabase
          .from('profiles')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5);

        if (dataError) throw dataError;
        setRecentProfiles(data || []);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      }
    };

    fetchDashboardData();
  }, []);

  const stats = [
    { title: '전체 고객 수', value: `${totalCount.toLocaleString()}명`, change: '실시간 연동', icon: <Users size={20} />, color: '#c5a880' },
    { title: '누적 매출액', value: '0원', change: '거래 데이터 없음', icon: <DollarSign size={20} />, color: '#b94a38' },
    { title: '총 거래 건수', value: '0건', change: '거래 데이터 없음', icon: <ShoppingBag size={20} />, color: '#2c221e' }
  ];

  // Map database users to recent registrations
  const recentRegistrations = recentProfiles.map((item) => {
    let timeLabel = '방금 전';
    if (item.created_at) {
      const diffMs = new Date() - new Date(item.created_at);
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMins / 60);
      if (diffMins < 1) timeLabel = '방금 전';
      else if (diffMins < 60) timeLabel = `${diffMins}분 전`;
      else if (diffHours < 24) timeLabel = `${diffHours}시간 전`;
      else timeLabel = new Date(item.created_at).toISOString().split('T')[0];
    }
    return {
      name: item.name || '이름 없음',
      grade: 'Family',
      time: timeLabel,
      action: '신규 회원가입'
    };
  });

  // SVG Chart: Grade Distribution (all registered users fall into Family for now)
  const gradeData = [
    { label: 'VVIP (0%)', count: 0, percentage: 0, color: '#b94a38' },
    { label: 'VIP (0%)', count: 0, percentage: 0, color: '#c5a880' },
    { label: 'Gold (0%)', count: 0, percentage: 0, color: '#a68453' },
    { label: 'Family (100%)', count: totalCount, percentage: totalCount ? 100 : 0, color: '#82756e' }
  ];

  // Map database users to new customers preview list
  const newCustomers = recentProfiles.map((item, idx) => ({
    id: idx + 1,
    name: item.name || '이름 없음',
    grade: 'Family',
    spend: '0원',
    visits: 0,
    date: item.created_at ? new Date(item.created_at).toISOString().split('T')[0] : '미지정'
  }));

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
