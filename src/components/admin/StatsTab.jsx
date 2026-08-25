import React from 'react';
import { TrendingUp, PieChart, Activity } from 'lucide-react';

export default function StatsTab() {
  // Monthly Sales cleared (0)
  const monthlySales = [
    { month: '2월', amount: 0 },
    { month: '3월', amount: 0 },
    { month: '4월', amount: 0 },
    { month: '5월', amount: 0 },
    { month: '6월', amount: 0 },
    { month: '7월', amount: 0 }
  ];

  // SVG dimensions for Line Chart
  const svgWidth = 500;
  const svgHeight = 200;
  const padding = 30;
  const chartWidth = svgWidth - padding * 2;
  const chartHeight = svgHeight - padding * 2;

  // Max value for scaling
  const maxVal = 60;

  // Generate SVG points coordinates
  const points = monthlySales.map((item, index) => {
    const x = padding + (index / (monthlySales.length - 1)) * chartWidth;
    const y = padding + chartHeight - (item.amount / maxVal) * chartHeight;
    return { x, y, label: item.month, val: item.amount };
  });

  const pathD = points.reduce((acc, p, i) => {
    return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, '');

  // Menu sales shares cleared (0)
  const menuSales = [
    { name: '192시간 숙성 돌짜장', share: 0, amount: '0원', color: '#c5a880' },
    { name: '매콤달콤 매운 갈비찜', share: 0, amount: '0원', color: '#b94a38' },
    { name: '묵은지 돌짜장', share: 0, amount: '0원', color: '#2c221e' }
  ];

  // Peak hour data cleared (0)
  const peakHours = [
    { hour: '11시~13시', count: 0, percentage: 0 },
    { hour: '13시~15시', count: 0, percentage: 0 },
    { hour: '15시~17시', count: 0, percentage: 0 },
    { hour: '17시~19시', count: 0, percentage: 0 },
    { hour: '19시~21시', count: 0, percentage: 0 }
  ];

  return (
    <div className="tab-content animate-fade-in">
      <div className="tab-header-title">
        <h2>통계 및 리포트</h2>
        <p>산내돌짜장 영업 실적 및 매출 통계 분석</p>
      </div>

      <div className="stats-main-grid">
        {/* Sales trend Line Chart */}
        <div className="stats-panel">
          <div className="panel-title-row">
            <h3><TrendingUp size={18} className="panel-icon" /> 월별 매출 추이 (백만원 단위)</h3>
          </div>
          
          <div className="chart-wrapper">
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="svg-line-chart">
              {/* Grid Lines */}
              {[0, 1, 2, 3].map((g, idx) => {
                const y = padding + (idx / 3) * chartHeight;
                return (
                  <line 
                    key={idx} 
                    x1={padding} 
                    y1={y} 
                    x2={svgWidth - padding} 
                    y2={y} 
                    stroke="rgba(197, 168, 128, 0.15)" 
                    strokeWidth="1"
                  />
                );
              })}

              {/* Area under the line */}
              <path 
                d={`${pathD} L ${points[points.length - 1].x} ${padding + chartHeight} L ${points[0].x} ${padding + chartHeight} Z`}
                fill="rgba(197, 168, 128, 0.08)"
              />

              {/* Line path */}
              <path 
                d={pathD} 
                fill="none" 
                stroke="var(--accent-gold-dark)" 
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Points circles and labels */}
              {points.map((p, idx) => (
                <g key={idx}>
                  <circle 
                    cx={p.x} 
                    cy={p.y} 
                    r="5" 
                    fill="var(--bg-dark)" 
                    stroke="var(--accent-gold-dark)" 
                    strokeWidth="2"
                  />
                  <text 
                    x={p.x} 
                    y={p.y - 12} 
                    textAnchor="middle" 
                    fontSize="11" 
                    fontWeight="700" 
                    fill="var(--text-dark)"
                  >
                    {p.val}M
                  </text>
                  <text 
                    x={p.x} 
                    y={padding + chartHeight + 18} 
                    textAnchor="middle" 
                    fontSize="11" 
                    fill="var(--text-muted)"
                  >
                    {p.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Menu item Share Bar */}
        <div className="stats-panel">
          <div className="panel-title-row">
            <h3><PieChart size={18} className="panel-icon" /> 시그니처 메뉴 판매 비율</h3>
          </div>
          
          <div className="pie-alternative-list">
            {menuSales.map((menu, idx) => (
              <div key={idx} className="menu-share-item">
                <div className="share-header">
                  <div className="share-color-label" style={{ backgroundColor: menu.color }}></div>
                  <strong className="share-name">{menu.name}</strong>
                  <span className="share-percentage">{menu.share}%</span>
                </div>
                <div className="share-progress-track">
                  <div 
                    className="share-progress-fill" 
                    style={{ 
                      width: `${menu.share}%`, 
                      backgroundColor: menu.color 
                    }}
                  ></div>
                </div>
                <span className="share-sub-amt">누적 매출: {menu.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Peak Hours bar chart */}
        <div className="stats-panel full-width">
          <div className="panel-title-row">
            <h3><Activity size={18} className="panel-icon" /> 시간대별 매장 혼잡도 (누적 방문 고객 기준)</h3>
          </div>
          
          <div className="peak-hours-grid">
            {peakHours.map((hour, idx) => (
              <div key={idx} className="peak-hour-column">
                <div className="peak-bar-track">
                  <div 
                    className="peak-bar-fill animate-grow-height" 
                    style={{ 
                      height: `${hour.percentage}%`,
                      background: hour.percentage > 90 ? 'var(--accent-spicy)' : 'var(--accent-gold-dark)'
                    }}
                  >
                    <span className="peak-bar-tooltip">{hour.count}명</span>
                  </div>
                </div>
                <span className="peak-hour-label">{hour.hour}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .stats-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .stats-panel {
          background: #ffffff;
          border: 1px solid rgba(197, 168, 128, 0.2);
          border-radius: 20px;
          padding: 30px;
          box-shadow: var(--shadow-sm);
        }

        .stats-panel.full-width {
          grid-column: span 2;
        }

        .chart-wrapper {
          padding: 10px 0;
          display: flex;
          justify-content: center;
        }

        .svg-line-chart {
          width: 100%;
          max-width: 500px;
          height: auto;
          overflow: visible;
        }

        /* Menu Share Styles */
        .pie-alternative-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .menu-share-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .share-header {
          display: flex;
          align-items: center;
          font-size: 13.5px;
        }

        .share-color-label {
          width: 12px;
          height: 12px;
          border-radius: 4px;
          margin-right: 8px;
        }

        .share-name {
          color: var(--text-dark);
        }

        .share-percentage {
          margin-left: auto;
          font-weight: 700;
          color: var(--bg-dark);
        }

        .share-progress-track {
          width: 100%;
          height: 8px;
          background: var(--bg-secondary);
          border-radius: 4px;
          overflow: hidden;
        }

        .share-progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1s ease-out;
        }

        .share-sub-amt {
          font-size: 11px;
          color: var(--text-muted);
          text-align: right;
        }

        /* Peak Hours Bar Chart */
        .peak-hours-grid {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          height: 240px;
          padding-top: 30px;
          border-bottom: 1.5px solid rgba(197, 168, 128, 0.2);
        }

        .peak-hour-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 60px;
        }

        .peak-bar-track {
          width: 32px;
          height: 180px;
          background: var(--bg-secondary);
          border-radius: 8px;
          position: relative;
          display: flex;
          align-items: flex-end;
        }

        .peak-bar-fill {
          width: 100%;
          border-radius: 8px;
          position: relative;
          transition: height 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .peak-bar-tooltip {
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-dark);
          color: var(--text-light);
          font-size: 10.5px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          pointer-events: none;
        }

        .peak-bar-fill:hover .peak-bar-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(-2px);
        }

        .peak-hour-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          white-space: nowrap;
          margin-bottom: -15px;
          padding-top: 4px;
        }

        @keyframes growHeight {
          from { height: 0; }
        }

        .animate-grow-height {
          animation: growHeight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (max-width: 992px) {
          .stats-main-grid {
            grid-template-columns: 1fr;
          }
          .stats-panel.full-width {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
}
