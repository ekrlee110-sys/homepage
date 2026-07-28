import React, { useState } from 'react';
import { Flame, Star, Coffee } from 'lucide-react';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuItems = [
    {
      id: 'aged-zzajang',
      name: '192시간 숙성 돌짜장',
      category: 'zzajang',
      description: '192시간 동안 저온 숙성시킨 산내만의 특제 소스와 신선한 해산물, 돼지고기가 뜨거운 돌판 위에서 지글지글 끓어 면발 속속들이 맛이 배어나는 시그니처 메뉴.',
      prices: { mid: '29,000원', large: '40,000원' },
      image: '/dol_zzajang_main.png',
      badge: '대표 메뉴',
      icon: <Star size={16} />,
      badgeColor: '#a68453'
    },
    {
      id: 'mugeunji-zzajang',
      name: '하루 한정 묵은지 돌짜장',
      category: 'zzajang',
      description: '잘 익은 국내산 숙성 묵은지와 돌짜장의 만남! 느끼함을 부드럽게 잡아주는 개운하고 아삭한 묵은지가 더해져 깊은 풍미와 함께 중독성 강한 맛을 냅니다.',
      prices: { mid: '33,000원', large: '44,000원' },
      image: '/mugeunji_dol_zzajang.png',
      badge: '한정 판매',
      icon: <Coffee size={16} />,
      badgeColor: '#5c2a18'
    },
    {
      id: 'spicy-galbi',
      name: '매콤달콤 매운 갈비찜',
      category: 'galbi',
      description: '부드러운 돼지갈비를 특제 비법 고춧가루 양념으로 조려내어 맛있게 매운맛을 자랑합니다. 돌짜장 면발을 갈비찜 소스에 비벼 드시면 환상의 조합을 이룹니다.',
      prices: { mid: '35,000원', large: '47,000원' },
      image: '/spicy_galbi_zzim.png',
      badge: '꿀조합 추천',
      icon: <Flame size={16} />,
      badgeColor: '#b94a38'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="menu-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">SIGNATURE MENU</span>
          <h2>산내돌짜장의 명품 메뉴</h2>
          <div className="header-line"></div>
          
          <div className="category-tabs">
            <button 
              className={`tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              전체 보기
            </button>
            <button 
              className={`tab-btn ${selectedCategory === 'zzajang' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('zzajang')}
            >
              돌짜장류
            </button>
            <button 
              className={`tab-btn ${selectedCategory === 'galbi' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('galbi')}
            >
              갈비찜류
            </button>
          </div>
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-image-container">
                <img src={item.image} alt={item.name} className="menu-image" />
                <div 
                  className="menu-badge"
                  style={{ backgroundColor: item.badgeColor }}
                >
                  {item.icon}
                  <span>{item.badge}</span>
                </div>
              </div>

              <div className="menu-info">
                <h3>{item.name}</h3>
                <p className="menu-desc">{item.description}</p>
                
                <div className="price-info">
                  <div className="price-row">
                    <span className="price-label">큰중 (2~3인분)</span>
                    <span className="price-value">{item.prices.mid}</span>
                  </div>
                  <div className="price-row">
                    <span className="price-label">큰대 (3~4인분)</span>
                    <span className="price-value">{item.prices.large}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-notice">
          <p>⚠️ 저희 매장은 최상의 품질 유지를 위해 <strong>짬뽕은 판매하지 않습니다.</strong></p>
          <p>💡 <strong>맛있게 드시는 팁:</strong> 돌짜장을 드신 후 남은 양념에 매운 갈비찜 소스를 섞고, 밥을 비벼 드시면 더욱 환상적입니다.</p>
        </div>
      </div>

      <style>{`
        .menu-section {
          background-color: var(--bg-primary);
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 30px;
        }

        .tab-btn {
          padding: 10px 24px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid rgba(44, 34, 30, 0.15);
          color: var(--text-dark);
          transition: all 0.3s ease;
          background: transparent;
        }

        .tab-btn.active, .tab-btn:hover {
          background: var(--bg-dark);
          color: var(--text-light);
          border-color: var(--bg-dark);
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 50px;
        }

        .menu-card {
          background: var(--bg-primary);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.2);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .menu-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-gold);
        }

        .menu-image-container {
          position: relative;
          width: 100%;
          padding-top: 100%; /* square ratio */
          overflow: hidden;
        }

        .menu-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .menu-card:hover .menu-image {
          transform: scale(1.08);
        }

        .menu-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          color: #fff;
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .menu-info {
          padding: 30px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .menu-info h3 {
          font-size: 20px;
          font-weight: 800;
          color: var(--bg-dark);
          margin-bottom: 12px;
        }

        .menu-desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-dark);
          opacity: 0.85;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .price-info {
          border-top: 1.5px dashed rgba(197, 168, 128, 0.3);
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 500;
        }

        .price-label {
          color: var(--text-muted);
        }

        .price-value {
          color: var(--bg-dark);
          font-weight: 700;
        }

        .menu-notice {
          background-color: var(--bg-secondary);
          border: 1px solid rgba(197, 168, 128, 0.3);
          padding: 24px;
          border-radius: 16px;
          margin-top: 60px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 14px;
          color: var(--text-dark);
        }

        .menu-notice strong {
          color: var(--accent-spicy);
        }

        @media (max-width: 992px) {
          .menu-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 40px auto 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
