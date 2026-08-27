import React, { useState } from 'react';
import { Star, Leaf, Flame, Sparkles, Utensils } from 'lucide-react';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mainMenuItems = [
    {
      id: 'aged-zzajang',
      name: '192시간 숙성 돌짜장',
      category: 'zzajang',
      description: '산내돌짜장의 기준이 되는 대표 메뉴. 192시간 특제 숙성 소스로 깊은 감칠맛을 선사합니다.',
      prices: { mid: '29,000원', large: '40,000원' },
      image: '/dol_zzajang_main.png',
      badge: '대표 메뉴',
      icon: <Star size={16} />,
      badgeColor: '#a68453'
    },
    {
      id: 'chubu-perilla',
      name: '추부 깻잎 돌짜장',
      category: 'zzajang',
      description: '추부 깻잎과 통들깨를 더해 깔끔하고 고소하게 즐기는 한식 스타일 돌짜장.',
      prices: { mid: '31,000원', large: '42,000원' },
      image: '/chubu_perilla_zzajang.png',
      badge: '한식 대표',
      icon: <Leaf size={16} />,
      badgeColor: '#2e7d32'
    },
    {
      id: 'mugeunji-zzajang',
      name: '365 묵은지 쌈 돌짜장',
      category: 'zzajang',
      description: '365일 숙성 묵은지에 돌짜장을 싸 먹는 산내돌짜장만의 독창적인 시그니처 메뉴.',
      prices: { mid: '33,000원', large: '44,000원' },
      image: '/mugeunji_dol_zzajang.png',
      badge: '시그니처',
      icon: <Sparkles size={16} />,
      badgeColor: '#5c2a18'
    },
    {
      id: 'maninsan-galbi',
      name: '만인산 둥지갈비찜',
      category: 'galbi',
      description: '매콤한 갈비찜을 산더미 파채와 함께 즐기는 산내돌짜장의 대표 곁들임 메뉴.',
      prices: { mid: '35,000원', large: '47,000원' },
      image: '/spicy_galbi_zzim.png',
      badge: '대표 곁들임',
      icon: <Flame size={16} />,
      badgeColor: '#b94a38'
    }
  ];

  const setMenuItems = [
    {
      id: 'set-aged',
      name: '192시간 숙성 돌짜장 세트',
      description: '192시간 숙성 돌짜장(중) + 만인산 둥지갈비찜(중) + 음료',
      price: '61,000원',
      tag: 'BEST SET'
    },
    {
      id: 'set-chubu',
      name: '추부 깻잎 돌짜장 세트',
      description: '추부 깻잎 돌짜장(중) + 만인산 둥지갈비찜(중) + 음료',
      price: '63,000원',
      tag: 'POPULAR SET'
    },
    {
      id: 'set-mugeunji',
      name: '365 묵은지 쌈 돌짜장 세트',
      description: '365 묵은지 쌈 돌짜장(중) + 만인산 둥지갈비찜(중) + 음료',
      price: '65,000원',
      tag: 'SIGNATURE SET'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? mainMenuItems 
    : mainMenuItems.filter(item => item.category === selectedCategory);

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

        {/* 메인 메뉴 4종 Grid */}
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

        {/* 함께 먹으면 더 좋은 세트 영역 */}
        <div className="set-menu-section">
          <div className="set-header text-center">
            <Utensils size={24} className="set-icon" />
            <h3>함께 먹으면 더 좋은 세트</h3>
            <p className="set-subtitle">돌짜장과 만인산 둥지갈비찜의 환상적인 조합을 푸짐하게 즐겨보세요.</p>
          </div>

          <div className="set-grid">
            {setMenuItems.map((set) => (
              <div key={set.id} className="set-card glass-panel">
                <span className="set-tag">{set.tag}</span>
                <h4 className="set-name">{set.name}</h4>
                <p className="set-desc">{set.description}</p>
                <div className="set-price-row">
                  <span className="set-price-label">세트 할인가</span>
                  <span className="set-price">{set.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-notice">
          <p>⚠️ 저희 매장은 최상의 품질 유지를 위해 <strong>짬뽕은 판매하지 않습니다.</strong></p>
          <p>💡 <strong>맛있게 드시는 팁:</strong> 돌짜장을 드신 후 남은 양념에 둥지갈비찜 소스를 섞고, 밥을 비벼 드시면 더욱 환상적입니다.</p>
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
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
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
          padding-top: 90%; /* slightly compact ratio */
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
          top: 16px;
          left: 16px;
          color: #fff;
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 11.5px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .menu-info {
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .menu-info h3 {
          font-size: 18px;
          font-weight: 800;
          color: var(--bg-dark);
          margin-bottom: 10px;
        }

        .menu-desc {
          font-size: 13px;
          line-height: 1.55;
          color: var(--text-dark);
          opacity: 0.85;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .price-info {
          border-top: 1.5px dashed rgba(197, 168, 128, 0.3);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          font-size: 13.5px;
          font-weight: 500;
        }

        .price-label {
          color: var(--text-muted);
        }

        .price-value {
          color: var(--bg-dark);
          font-weight: 700;
        }

        /* 세트 메뉴 영역 스타일 */
        .set-menu-section {
          margin-top: 70px;
          padding: 40px;
          background: linear-gradient(135deg, rgba(197, 168, 128, 0.12) 0%, rgba(44, 34, 30, 0.04) 100%);
          border-radius: 24px;
          border: 1px solid rgba(197, 168, 128, 0.3);
        }

        .set-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-bottom: 32px;
        }

        .set-icon {
          color: var(--accent-gold-dark);
        }

        .set-header h3 {
          font-size: 24px;
          font-weight: 800;
          color: var(--bg-dark);
        }

        .set-subtitle {
          font-size: 14px;
          color: var(--text-dark);
          opacity: 0.8;
        }

        .set-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .set-card {
          padding: 28px 24px;
          border-radius: 18px;
          border: 1px solid rgba(197, 168, 128, 0.3);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .set-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-gold);
        }

        .set-tag {
          align-self: flex-start;
          background: var(--bg-dark);
          color: var(--accent-gold);
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 12px;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }

        .set-name {
          font-size: 18px;
          font-weight: 800;
          color: var(--bg-dark);
          margin-bottom: 8px;
        }

        .set-desc {
          font-size: 13px;
          color: var(--text-dark);
          opacity: 0.85;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .set-price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(197, 168, 128, 0.3);
          padding-top: 14px;
        }

        .set-price-label {
          font-size: 13px;
          color: var(--accent-spicy);
          font-weight: 600;
        }

        .set-price {
          font-size: 20px;
          font-weight: 800;
          color: var(--bg-dark);
        }

        .menu-notice {
          background-color: var(--bg-secondary);
          border: 1px solid rgba(197, 168, 128, 0.3);
          padding: 24px;
          border-radius: 16px;
          margin-top: 50px;
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

        @media (max-width: 1100px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .set-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .menu-grid {
            grid-template-columns: 1fr;
            max-width: 450px;
            margin: 40px auto 0 auto;
          }
          .set-menu-section {
            padding: 24px 16px;
          }
        }
      `}</style>
    </section>
  );
}
