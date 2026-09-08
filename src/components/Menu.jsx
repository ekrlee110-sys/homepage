import React from 'react';
import chubuPerillaImage from '../pages/추부.png';
import cheongyangImage from '../pages/ChatGPT Image 2026년 9월 7일 오후 08_41_12 (2).png';
import mugeunjiImage from '../pages/ChatGPT Image 2026년 9월 7일 오후 08_41_13 (3).png';
import maninsanGalbiImage from '../pages/ChatGPT Image 2026년 7월 26일 오전 08_45_34.png';

export default function Menu() {
  const signatureItems = [
    {
      id: 'aged-zzajang',
      name: '192시간 숙성 돌짜장',
      subTitle: '처음이라면 가장 먼저.',
      photoTitle: '메뉴 사진 공간',
      photoGuide: '192시간 숙성 돌짜장',
      description: '192시간 숙성 한식 짜장 소스의 기본 맛을 가장 잘 느낄 수 있는 메뉴.',
      image: '/ChatGPT Image 2026년 7월 26일 오전 08_46_40.png',
      imageScale: 1.08,
      imagePosition: 'center 52%',
      badge: '대표 메뉴'
    },
    {
      id: 'chubu-perilla',
      name: '추부깻잎 돌짜장',
      subTitle: '깔끔하고 꼬소한 맛을 좋아한다면.',
      photoTitle: '메뉴 사진 공간',
      photoGuide: '추부깻잎 돌짜장',
      description: '추부깻잎과 통들깨로 참 꼬소하게 즐기는 돌짜장.',
      image: chubuPerillaImage,
      imageScale: 0.94,
      imagePosition: 'center 51%',
      badge: '한식 대표'
    },
    {
      id: 'cheongyang-zzajang',
      name: '청양고추 돌짜장',
      subTitle: '매운맛을 제대로 즐기고 싶다면.',
      photoTitle: '메뉴 사진 공간',
      photoGuide: '청양고추 돌짜장',
      description: '청양고추의 강한 매운맛을 더해, 짜장의 진한 맛과 화끈한 여운을 함께 즐기는 돌짜장.',
      image: cheongyangImage,
      imageScale: 1.00,
      imagePosition: 'center 51%',
      badge: '대표 메뉴'
    },
    {
      id: 'mugeunji-zzajang',
      name: '묵은지 쌈 돌짜장',
      subTitle: '전국 최초 묵은지 돌짜장. 그 개운함을 즐기고 싶다면.',
      photoTitle: '메뉴 사진 공간',
      photoGuide: '묵은지 쌈 돌짜장',
      description: '푹 쪄낸 국내산 묵은지로 돌짜장을 감싸, 깊은 맛과 개운함을 함께 즐깁니다.',
      image: mugeunjiImage,
      imageScale: 1.02,
      imagePosition: 'center 51%',
      badge: '시그니처'
    },
    {
      id: 'maninsan-galbi',
      name: '만인산 둥지 갈비찜',
      subTitle: '돌짜장과 함께 즐기고 싶다면.',
      photoTitle: '메뉴 사진 공간',
      photoGuide: '만인산 둥지 갈비찜',
      description: '부드러운 갈빗살과 파채를 돌짜장과 함께 즐기는 대표 곁들임 요리.',
      image: maninsanGalbiImage,
      imageScale: 1.22,
      imagePosition: 'center center',
      imageTranslateY: -20,
      badge: '대표 곁들임'
    }
  ];

  const setMenuItems = [
    {
      id: 'set-aged',
      name: '192시간 숙성 세트',
      subTitle: '처음 방문이라면 가장 먼저.',
      photoTitle: '세트 사진 공간',
      photoGuide: '192시간 숙성 세트',
      description: '192시간 숙성 돌짜장과 만인산 둥지 갈비찜을 함께 즐기는 대표 세트.',
      price: '61,000원',
      image: '/dol_zzajang_main.png'
    },
    {
      id: 'set-chubu',
      name: '추부깻잎 세트',
      subTitle: '깔끔하고 꼬소한 조합을 좋아한다면.',
      photoTitle: '세트 사진 공간',
      photoGuide: '추부깻잎 세트',
      description: '추부깻잎 돌짜장과 갈비찜을 함께 즐기는 산뜻한 세트.',
      price: '63,000원',
      image: '/chubu_perilla_zzajang.png'
    },
    {
      id: 'set-mugeunji',
      name: '묵은지 쌈 세트',
      subTitle: '개운한 조합을 좋아한다면.',
      photoTitle: '세트 사진 공간',
      photoGuide: '묵은지 쌈 세트',
      description: '묵은지 쌈 돌짜장과 갈비찜을 함께 즐기는 산내돌짜장만의 세트.',
      price: '65,000원',
      image: '/mugeunji_dol_zzajang.png'
    }
  ];

  const sideMenuItems = [
    {
      id: 'side-rice',
      name: '날치알 돌판 비빔밥',
      photoTitle: '사이드 사진 공간',
      photoGuide: '날치알 돌판 비빔밥',
      description: '고소하게 마무리하고 싶을 때.',
      image: '/dol_zzajang_main.png'
    },
    {
      id: 'side-cabbage',
      name: '아삭 양배추 칠리',
      photoTitle: '사이드 사진 공간',
      photoGuide: '아삭 양배추 칠리',
      description: '아삭하고 가볍게 곁들이는 메뉴.',
      image: '/chubu_perilla_zzajang.png'
    },
    {
      id: 'side-pancake',
      name: '김치부침개',
      photoTitle: '사이드 사진 공간',
      photoGuide: '김치부침개',
      description: '첫 주문 시 반죽 1회 무료 제공',
      image: '/mugeunji_dol_zzajang.png'
    }
  ];

  const firstSignatureRow = signatureItems.slice(0, 3);
  const secondSignatureRow = signatureItems.slice(3, 5);

  const renderSignatureCard = (item) => (
    <div key={item.id} className={`signature-card ${item.id === 'chubu-perilla' ? 'signature-card-chubu' : ''}`}>
      {/* Photo Box */}
      <div className="sig-photo-box">
        <img 
          src={item.image} 
          alt={item.name} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: item.imagePosition,
            transform: `translateY(${item.imageTranslateY || 0}px) scale(${item.imageScale || 1})`,
            transformOrigin: 'center center'
          }}
          className={`sig-card-img ${item.id === 'aged-zzajang' || item.id === 'chubu-perilla' || item.id === 'cheongyang-zzajang' || item.id === 'maninsan-galbi' ? 'sig-card-img-featured' : ''} ${item.id === 'chubu-perilla' ? 'sig-card-img-chubu' : ''} ${item.id === 'mugeunji-zzajang' ? 'sig-card-img-mugeunji' : ''} ${item.id === 'maninsan-galbi' ? 'sig-card-img-galbi' : ''}`}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        {item.id !== 'aged-zzajang' && item.id !== 'chubu-perilla' && item.id !== 'cheongyang-zzajang' && item.id !== 'mugeunji-zzajang' && item.id !== 'maninsan-galbi' && (
          <div className="sig-photo-overlay">
            <span className="sig-photo-title">{item.photoTitle}</span>
            <span className="sig-photo-name">{item.photoGuide}</span>
          </div>
        )}
      </div>

      {/* Text Info */}
      <div className="sig-card-body">
        <h3 className="sig-item-name">{item.name}</h3>
        <p className="sig-item-subtitle">{item.subTitle}</p>
        <p className="sig-item-desc">{item.description}</p>
      </div>
    </div>
  );

  return (
    <section id="menu" className="menu-draft-section section-padding">
      <div className="container">
        {/* 1. SIGNATURE MENU Section */}
        <div className="menu-header-row animate-fade-in-up">
          <div className="menu-header-left">
            <span className="menu-label">SIGNATURE MENU</span>
            <h2 className="menu-headline">
              처음 오셨다면,<br />
              이렇게 고르세요.
            </h2>
          </div>
          <div className="menu-header-right">
            <p className="menu-guide-text">대표 메뉴는 사진이 꼭 있어야 전환이 좋습니다.</p>
          </div>
        </div>

        {/* 5 Signature Menu Cards in a 3 + 2 layout */}
        <div className="signature-cards-layout animate-fade-in">
          <div className="signature-cards-grid">
            {firstSignatureRow.map(renderSignatureCard)}
          </div>
          <div className="signature-cards-grid signature-cards-grid-second">
            {secondSignatureRow.map(renderSignatureCard)}
          </div>
        </div>

        {/* Middle Closing Headline */}
        <div className="menu-closing-statement text-center animate-fade-in-up">
          <p className="closing-line-1">입은 즐겁게,</p>
          <p className="closing-line-2">
            <span className="highlight-brown">속은 편하게.</span>
          </p>
        </div>

        {/* 2. SET MENU Section */}
        <div id="set-menu" className="set-menu-block">
          <div className="menu-header-row animate-fade-in-up">
            <div className="menu-header-left">
              <span className="menu-label">SET MENU</span>
              <h2 className="menu-headline">
                다시 오셨다면,<br />
                이번엔 색다르게 즐겨보세요.
              </h2>
            </div>
            <div className="menu-header-right">
              <p className="menu-guide-text">세트 메뉴도 사진이 있어야 고객이 바로 상상을 합니다.</p>
            </div>
          </div>

          <div className="set-cards-grid animate-fade-in">
            {setMenuItems.map((set) => (
              <div key={set.id} className="set-card-item">
                {/* Set Photo Box */}
                <div className="set-photo-box">
                  <img 
                    src={set.image} 
                    alt={set.name} 
                    className="set-card-img"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="set-photo-overlay">
                    <span className="set-photo-title">{set.photoTitle}</span>
                    <span className="set-photo-name">{set.photoGuide}</span>
                  </div>
                </div>

                {/* Set Text Info */}
                <div className="set-card-body">
                  <h3 className="set-item-name">{set.name}</h3>
                  <p className="set-item-subtitle">{set.subTitle}</p>
                  <p className="set-item-desc">{set.description}</p>
                  
                  <div className="set-price-badge">
                    <span className="set-badge-label">세트가</span>
                    <span className="set-badge-value">{set.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SIDE MENU Section */}
        <div id="side-menu" className="side-menu-block">
          <div className="menu-header-row animate-fade-in-up">
            <div className="menu-header-left">
              <span className="menu-label">SIDE MENU</span>
              <h2 className="menu-headline">
                한 끼를 더 맛있게 채우는<br />
                곁들임 메뉴
              </h2>
            </div>
            <div className="menu-header-right">
              <p className="menu-guide-text">사이드 메뉴는 작은 사진만 있어도 충분합니다.</p>
            </div>
          </div>

          <div className="side-cards-grid animate-fade-in">
            {sideMenuItems.map((side) => (
              <div key={side.id} className="side-card-item">
                {/* Side Photo Box */}
                <div className="side-photo-box">
                  <img 
                    src={side.image} 
                    alt={side.name} 
                    className="side-card-img"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="side-photo-overlay">
                    <span className="side-photo-title">{side.photoTitle}</span>
                    <span className="side-photo-name">{side.photoGuide}</span>
                  </div>
                </div>

                {/* Side Text Info */}
                <div className="side-card-body">
                  <h3 className="side-item-name">{side.name}</h3>
                  <p className="side-item-desc">{side.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .menu-draft-section {
          background-color: #fbf8f3;
          padding: 100px 0 110px 0;
          position: relative;
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .menu-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 48px;
        }

        .menu-label {
          font-size: 13.5px;
          font-weight: 800;
          color: #a24b33;
          letter-spacing: 1.8px;
          margin-bottom: 12px;
          display: inline-block;
        }

        .menu-headline {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.22;
          color: #2b1e16;
          letter-spacing: -1.2px;
          margin: 0;
          word-break: keep-all;
        }

        .menu-guide-text {
          font-size: 14px;
          color: #705c51;
          letter-spacing: -0.3px;
          margin: 0;
        }

        /* Signature Cards Grid */
        .signature-cards-layout {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 22px;
          margin-bottom: 75px;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .signature-cards-grid {
          display: contents;
        }

        .signature-cards-grid .signature-card {
          grid-column: span 2;
        }

        .signature-cards-grid-second .signature-card:first-child {
          grid-column: 2 / span 2;
        }

        .signature-cards-grid-second .signature-card:last-child {
          grid-column: 4 / span 2;
        }

        .signature-card, .set-card-item, .side-card-item {
          background-color: #ede4d7;
          border: 1px solid rgba(197, 168, 128, 0.45);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(43, 30, 22, 0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .signature-card:hover, .set-card-item:hover, .side-card-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(43, 30, 22, 0.1);
        }

        .sig-photo-box {
          height: 250px;
          position: relative;
          background-color: #e2d6c4;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .set-photo-box {
          height: 175px;
          position: relative;
          background-color: #e2d6c4;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .side-photo-box {
          height: 155px;
          position: relative;
          background-color: #e2d6c4;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .sig-card-img, .set-card-img, .side-card-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.22;
          filter: saturate(0.85);
          transition: opacity 0.3s ease, transform 0.4s ease;
        }

        .signature-card:hover .sig-card-img, 
        .set-card-item:hover .set-card-img,
        .side-card-item:hover .side-card-img {
          opacity: 0.4;
          transform: scale(1.05);
        }

        .sig-card-img-featured {
          opacity: 1;
          object-position: center 45%;
        }

        .sig-card-img-chubu {
          object-fit: cover;
          object-position: center;
        }

        .sig-card-img-mugeunji {
          opacity: 1;
          object-fit: cover;
          object-position: center;
        }

        .sig-card-img-galbi {
          opacity: 1;
          object-fit: cover;
          object-position: center;
        }

        .signature-card:hover .sig-card-img-featured {
          opacity: 1;
        }

        .sig-photo-overlay, .set-photo-overlay, .side-photo-overlay {
          position: relative;
          z-index: 2;
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .sig-photo-title, .set-photo-title, .side-photo-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #3b2c25;
          letter-spacing: -0.2px;
        }

        .sig-photo-name, .set-photo-name, .side-photo-name {
          font-size: 12px;
          color: #6a574c;
          letter-spacing: -0.2px;
        }

        .sig-card-body {
          padding: 24px 20px 22px 20px;
          background-color: #f5efe4;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .signature-card-chubu .sig-card-body {
          flex: 1;
          background-color: #f5efe4;
        }

        .set-card-body {
          padding: 24px 20px 22px 20px;
          background-color: #f5efe4;
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .side-card-body {
          padding: 22px 20px 24px 20px;
          background-color: #f5efe4;
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .sig-item-name, .set-item-name, .side-item-name {
          font-size: 18px;
          font-weight: 800;
          color: #2b1e16;
          margin-bottom: 8px;
          letter-spacing: -0.4px;
        }

        .sig-item-subtitle, .set-item-subtitle {
          font-size: 13.5px;
          font-weight: 700;
          color: #8c2d19;
          margin-bottom: 12px;
          line-height: 1.45;
          letter-spacing: -0.3px;
        }

        .sig-item-desc {
          font-size: 13px;
          color: #55443b;
          line-height: 1.6;
          margin-bottom: 0;
          letter-spacing: -0.2px;
        }

        .set-item-desc {
          font-size: 13px;
          color: #55443b;
          line-height: 1.6;
          margin-bottom: 18px;
          letter-spacing: -0.2px;
          flex: 1;
        }

        .side-item-desc {
          font-size: 13.5px;
          color: #55443b;
          line-height: 1.55;
          margin: 0;
          letter-spacing: -0.2px;
        }

        .set-price-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 600;
          color: #4a3a31;
          background-color: #ede4d7;
          padding: 6px 12px;
          border-radius: 12px;
          border: 1px solid rgba(197, 168, 128, 0.3);
          align-self: flex-start;
        }

        .set-badge-label {
          color: #6a574c;
        }

        .set-badge-value {
          color: #8c2d19;
          font-weight: 800;
        }

        /* Middle Closing Statement */
        .menu-closing-statement {
          margin-bottom: 90px;
          padding-top: 10px;
        }

        .closing-line-1, .closing-line-2 {
          font-size: 34px;
          font-weight: 900;
          color: #2b1e16;
          line-height: 1.35;
          margin: 0;
          letter-spacing: -1px;
        }

        .highlight-brown {
          color: #8c2d19;
        }

        /* Set & Side Menu Blocks */
        .set-menu-block {
          padding-top: 20px;
          margin-bottom: 85px;
          border-top: 1px dashed rgba(197, 168, 128, 0.35);
        }

        .side-menu-block {
          padding-top: 20px;
          border-top: 1px dashed rgba(197, 168, 128, 0.35);
        }

        .set-cards-grid, .side-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .menu-headline {
            font-size: 38px;
          }
          .signature-cards-grid {
            display: contents;
          }
          .signature-cards-layout {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
          .signature-cards-grid .signature-card {
            grid-column: span 2;
          }
          .signature-cards-grid-second .signature-card:first-child {
            grid-column: 1 / span 2;
          }
          .signature-cards-grid-second .signature-card:last-child {
            grid-column: 3 / span 2;
          }
          .set-cards-grid, .side-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .menu-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .menu-headline {
            font-size: 30px;
          }
          .signature-cards-grid {
            display: contents;
          }
          .signature-cards-layout {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .signature-cards-grid .signature-card,
          .signature-cards-grid-second .signature-card:first-child,
          .signature-cards-grid-second .signature-card:last-child {
            grid-column: 1 / span 2;
          }
          .closing-line-1, .closing-line-2 {
            font-size: 26px;
          }
        }
      `}</style>
    </section>
  );
}
