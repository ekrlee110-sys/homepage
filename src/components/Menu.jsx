import React from 'react';
import chubuPerillaImage from '../pages/추부.png';
import cheongyangImage from '../pages/ChatGPT Image 2026년 9월 7일 오후 08_41_12 (2).png';
import mugeunjiImage from '../pages/ChatGPT Image 2026년 9월 7일 오후 08_41_13 (3).png';
import maninsanGalbiImage from '../assets/maninsan-galbi.png';

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
      subTitle: '돌짜장과 함께 곁들이는 대표 메뉴.',
      photoTitle: '메뉴 사진 공간',
      photoGuide: '만인산 둥지 갈비찜',
      description: '부드러운 갈빗살과 파채를 돌짜장과 함께 즐기는 대표 곁들임 요리.',
      image: maninsanGalbiImage,
      imageScale: 1.00,
      imagePosition: 'center center',
      imageTranslateY: -5,
      badge: '대표 곁들임'
    }
  ];

  const sideDescriptionEmphasis = {
    'side-rice': '뜨거운 돌판에 슥슥 비벼',
    'side-cabbage': '칠리 비빔만두를 싸서',
    'side-pancake': '테이블에서 직접 부쳐'
  };

  const renderSideDescription = (side) => {
    const phrase = sideDescriptionEmphasis[side.id];
    const phraseIndex = side.description.indexOf(phrase);
    if (phraseIndex < 0) return side.description;

    return (
      <>
        {side.description.slice(0, phraseIndex)}
        <span className="side-desc-emphasis">{phrase}</span>
        {side.description.slice(phraseIndex + phrase.length)}
      </>
    );
  };

  const setMenuItems = [
    {
      id: 'set-mugeunji',
      name: '묵은지 쌈 돌짜장 세트',
      subTitle: '개운한 조합을 좋아한다면.',
      photoTitle: '세트 사진 공간',
      photoGuide: '묵은지 쌈 세트',
      description: '묵은지 쌈 돌짜장과 만인산 둥지 갈비찜을 함께 즐기는 산내돌짜장만의 세트.',
     image: '/묵은지 돌짜장 세트.png',
    },
    {
      id: 'set-chubu',
      name: '추부깻잎 돌짜장 세트',
      subTitle: '깔끔하고 참!고소한 조합을 좋아한다면.',
      photoTitle: '세트 사진 공간',
      photoGuide: '추부깻잎 돌짜장 세트',
      description: '추부깻잎 돌짜장과 만인산 둥지 갈비찜을 함께 즐기는 세트.',
      image: '/추부깻잎 돌짜장 세트.png',

    },
    {
      id: 'set-aged',
      name: '192시간 숙성 돌짜장 세트',
      subTitle: '처음 방문이라면 가장 먼저.',
      photoTitle: '세트 사진 공간',
      photoGuide: '192시간 숙성 돌짜장 세트',
      description: '192시간 숙성 돌짜장과 만인산 둥지 갈비찜을 함께 즐기는 산내돌짜장만의 세트.',
      image: '/192숙성 돌짜장 세트-가로.png',
    },
    {
      id: 'set-cheongyang',
      name: '청양고추 돌짜장 세트',
      subTitle: '칼칼한 맛을 좋아한다면.',
      photoTitle: '세트 사진 공간',
      photoGuide: '청양고추 돌짜장 세트',
      description: '청양고추 돌짜장과 만인산 둥지 갈비찜을 함께 즐기는 산내돌짜장만의 세트.',
      image: '/청양고추 돌짜장 세트.png',
    }
  ];


  const sideMenuItems = [
    {
      id: 'side-rice',
      name: '날치알 돌판 비빔밥',
      photoTitle: '사이드 사진 공간',
      photoGuide: '날치알 돌판 비빔밥',
      description: '남은 짜장에 날치알밥을 넣고, 뜨거운 돌판에 슥슥 비벼 드세요.',
    image: '/side-rice.png'
    },
    {
      id: 'side-cabbage',
      name: '아삭 양배추 칠리 비빔만두',
      photoTitle: '사이드 사진 공간',
      photoGuide: '아삭 양배추 칠리',
      description: '아삭한 양배추에 칠리 비빔만두를 싸서 함께 즐겨보세요.',
    image: '/side-cabbage.png'
    },
    {
      id: 'side-pancake',
      name: '김치부침개',
      photoTitle: '사이드 사진 공간',
      photoGuide: '김치부침개',
      description: '테이블에서 직접 부쳐, 따끈할 때 바로 즐기는 김치부침개.',
      image: '/side-pancake.png'
    }
  ];

  const signatureDescriptionEmphasis = {
    'aged-zzajang': '기본 맛',
    'chubu-perilla': '참 꼬소하게',
    'cheongyang-zzajang': '강한 매운맛',
    'mugeunji-zzajang': '묵은지로 돌짜장을 감싸',
    'maninsan-galbi': '부드러운 갈빗살과 파채'
  };

  const renderSignatureDescription = (item) => {
    const phrase = signatureDescriptionEmphasis[item.id];
    const phraseIndex = item.description.indexOf(phrase);
    const mobileDescription = phraseIndex < 0
      ? item.description
      : <>
          {item.description.slice(0, phraseIndex)}
          <span className="signature-desc-emphasis">{phrase}</span>
          {item.description.slice(phraseIndex + phrase.length)}
        </>;

    return (
      <>
        <span className="signature-description-desktop">{item.description}</span>
        <span className="signature-description-mobile">{mobileDescription}</span>
      </>
    );
  };

  const renderSetDescription = (set) => {
    const phrase = '함께 즐기는';
    const phraseIndex = set.description.indexOf(phrase);
    const mobileDescription = phraseIndex < 0
      ? set.description
      : <>
          {set.description.slice(0, phraseIndex)}
          <span className="set-desc-emphasis">{phrase}</span>
          {set.description.slice(phraseIndex + phrase.length)}
        </>;

    return (
      <>
        <span className="set-description-desktop">{set.description}</span>
        <span className="set-description-mobile">{mobileDescription}</span>
      </>
    );
  };

  const topSignatureIds = ['mugeunji-zzajang', 'maninsan-galbi'];
  const bottomSignatureIds = ['aged-zzajang', 'chubu-perilla', 'cheongyang-zzajang'];
  const topSignatureRow = topSignatureIds.map((id) => signatureItems.find((item) => item.id === id));
  const bottomSignatureRow = bottomSignatureIds.map((id) => signatureItems.find((item) => item.id === id));

  const renderSignatureCard = (item) => (
    <div key={item.id} className={`signature-card ${item.id === 'chubu-perilla' ? 'signature-card-chubu' : ''}`}>
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
      </div>
      <div className="sig-card-body">
        <h3 className="sig-item-name">{item.name}</h3>
        <p className="sig-item-subtitle">{item.subTitle}</p>
        <p className="sig-item-desc">{renderSignatureDescription(item)}</p>
      </div>
    </div>
  );

  return (
    <section id="menu" className="menu-draft-section section-padding">
      <div className="container">
        <div className="menu-header-row animate-fade-in-up">
          <div className="menu-header-left">
            <span className="menu-label">대표 메뉴</span>
            <h2 className="menu-headline">
              처음 오셨다면,<br />
              <span className="signature-heading-emphasis">이렇게 고르세요</span>.
            </h2>
          </div>
        </div>

        <div className="signature-cards-layout animate-fade-in">
          <div className="signature-cards-grid signature-cards-grid-second">
            {topSignatureRow.map(renderSignatureCard)}
          </div>
          <div className="signature-cards-grid">
            {bottomSignatureRow.map(renderSignatureCard)}
          </div>
        </div>

        <div className="menu-closing-statement text-center animate-fade-in-up">
          <p className="closing-line-1">
            <span className="closing-line-desktop">입은 즐겁게,</span>
          </p>
          <p className="closing-line-2">
            <span className="closing-line-desktop highlight-brown">속은 편하게.</span>
          </p>
          <div className="closing-mobile-stack">
            <p className="closing-mobile-line">
              <span className="closing-line-plain">입은</span>{' '}
              <span className="closing-line-warm">즐겁게</span>
            </p>
            <span className="closing-mobile-emoji" aria-hidden="true">😊</span>
            <p className="closing-mobile-line">
              <span className="closing-line-plain">속은</span>{' '}
              <span className="closing-line-red">편하게</span>
            </p>
          </div>
        </div>

        <div id="set-menu" className="set-menu-block">
          <div className="menu-header-row animate-fade-in-up">
            <div className="menu-header-left">
              <span className="menu-label">세트 메뉴</span>
              <h2 className="menu-headline">
                함께 오셨다면,<br />
                세트로 <span className="set-menu-heading-emphasis">더 풍성하게</span> 즐겨보세요.
              </h2>
            </div>
          </div>

          <div className="set-cards-grid animate-fade-in">
            {setMenuItems.map((set) => (
              <div key={set.id} className="set-card-item">
                <div className="set-photo-box">
                  <img
                    src={set.image}
                    alt={set.name}
                    className={`set-card-img ${
                      set.id === 'set-cheongyang'
                        ? 'set-card-img-cheongyang'
                        : set.id === 'set-aged'
                        ? 'set-card-img-aged'
                        : set.id === 'set-chubu'
                        ? 'set-card-img-chubu'
                        : set.id === 'set-mugeunji'
                        ? 'set-card-img-mugeunji'
                        : ''
                    }`}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="set-card-body">
                  <h3 className="set-item-name">{set.name}</h3>
                  <p className="set-item-subtitle">{set.subTitle}</p>
                  <p className="set-item-desc">{renderSetDescription(set)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="side-menu" className="side-menu-block">
          <div className="menu-header-row animate-fade-in-up">
            <div className="menu-header-left">
              <span className="menu-label">곁들임 메뉴</span>
              <h2 className="menu-headline">
                한 끼를 <span className="side-menu-heading-emphasis">더 맛있게 채우는</span><br />
                곁들임 메뉴
              </h2>
            </div>
          </div>

          <div className="side-cards-grid animate-fade-in">
            {sideMenuItems.map((side) => (
              <div key={side.id} className="side-card-item">
                <div className="side-photo-box">
                  <img
                    src={side.image}
                    alt={side.name}
                    className="side-card-img"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="side-card-body">
                  <h3 className="side-item-name">{side.name}</h3>
                  <p className="side-item-desc">{renderSideDescription(side)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .menu-draft-section {
          background-color: var(--brand-section-bg);
          padding: 100px 0 110px 0;
          position: relative;
          border-top: 1px solid var(--brand-section-divider);
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
          color: var(--brand-card-accent);
          letter-spacing: 1.8px;
          margin-bottom: 12px;
          display: inline-block;
        }

        .menu-headline {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.22;
          color: var(--brand-card-title);
          letter-spacing: -1.2px;
          margin: 0;
          word-break: keep-all;
        }

        .menu-guide-text {
          font-size: 14px;
          color: var(--brand-card-body);
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
          background-color: var(--brand-card-frame);
          border: 1px solid var(--brand-card-border);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: var(--brand-card-shadow);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .signature-card:hover, .set-card-item:hover, .side-card-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--brand-card-shadow-hover);
        }

        .sig-photo-box {
          height: 250px;
          position: relative;
          background-color: var(--brand-photo-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .set-photo-box {
          aspect-ratio: 3 / 2;
          position: relative;
          background-color: var(--brand-photo-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .side-photo-box {
          aspect-ratio: 3 / 2;
          position: relative;
          background-color: var(--brand-photo-surface);
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
          opacity: 1;
          filter: saturate(0.85);
          transition: opacity 0.3s ease, transform 0.4s ease;
        }

        .set-card-img {
          object-fit: cover;
          object-position: center;
        }

        .signature-card:hover .sig-card-img,
        .set-card-item:hover .set-card-img,
        .side-card-item:hover .side-card-img {
          opacity: 0.4;
          transform: scale(1.05);
        }

        .set-card-item:hover .set-card-img {
          opacity: 1;
          transform: none;
        }

        .side-card-item:hover .side-card-img {
          opacity: 1;
          transform: none;
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

        .set-card-img-cheongyang {
          object-position: center;
        }

        .set-card-img-aged {
          object-position: center;
        }

        .set-card-img-chubu {
          object-position: center;
        }

        .set-card-img-mugeunji {
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
          color: var(--brand-card-title);
          letter-spacing: -0.2px;
        }

        .sig-photo-name, .set-photo-name, .side-photo-name {
          font-size: 12px;
          color: var(--brand-card-body);
          letter-spacing: -0.2px;
        }

        .sig-card-body {
          padding: 24px 20px 22px 20px;
          background-color: var(--brand-card-surface);
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .signature-description-mobile { display: none; }
        .set-description-mobile { display: none; }

        .signature-card-chubu .sig-card-body {
          flex: 1;
          background-color: var(--brand-card-surface);
        }

        .set-card-body {
          padding: 24px 20px 22px 20px;
          background-color: var(--brand-card-surface);
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .side-card-body {
          padding: 22px 20px 24px 20px;
          background-color: var(--brand-card-surface);
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .sig-item-name, .set-item-name, .side-item-name {
          font-size: 18px;
          font-weight: 800;
          color: var(--brand-card-title);
          margin-bottom: 8px;
          letter-spacing: -0.4px;
        }

        .sig-item-subtitle, .set-item-subtitle {
          font-size: 13.5px;
          font-weight: 700;
          color: var(--brand-card-accent);
          margin-bottom: 12px;
          line-height: 1.45;
          letter-spacing: -0.3px;
        }

        .sig-item-desc {
          font-size: 13px;
          color: var(--brand-card-body);
          line-height: 1.6;
          margin-bottom: 0;
          letter-spacing: -0.2px;
        }

        .set-item-desc {
          font-size: 13px;
          color: var(--brand-card-body);
          line-height: 1.6;
          margin-bottom: 18px;
          letter-spacing: -0.2px;
          flex: 1;
        }

        .side-item-desc {
          font-size: 13.5px;
          color: var(--brand-card-body);
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
          color: var(--brand-card-body);
          background-color: var(--brand-card-frame);
          padding: 6px 12px;
          border-radius: 12px;
          border: 1px solid var(--brand-card-border);
          align-self: flex-start;
        }

        .set-badge-label {
          color: var(--brand-card-body);
        }

        .set-badge-value {
          color: var(--brand-card-accent);
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
          color: var(--brand-card-title);
          line-height: 1.35;
          margin: 0;
          letter-spacing: -1px;
        }

        .highlight-brown {
          color: var(--brand-card-accent);
        }

        .closing-mobile-stack { display: none; }

        /* Set & Side Menu Blocks */
        .set-menu-block {
          padding-top: 20px;
          margin-bottom: 85px;
          border-top: 1px dashed var(--brand-section-divider);
        }

        .side-menu-block {
          padding-top: 20px;
          border-top: 1px dashed var(--brand-section-divider);
        }

        .set-cards-grid, .side-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
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

        @media (max-width: 767px) {
          .menu-draft-section { padding: 24px 0; }
          .closing-line-1,
          .closing-line-2 { display: none; }
          .closing-mobile-stack {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 8px;
          }
          .signature-cards-layout { margin-bottom: 0; }
          .menu-closing-statement {
            margin: 0;
            padding: 32px 0;
          }
          .set-menu-block {
            padding-top: 22px;
            margin-bottom: 32px;
          }
          .side-menu-block { padding-top: 22px; }

          .menu-label {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0;
            margin-bottom: 12px;
          }

          .set-menu-block .menu-label {
            color: var(--brand-card-accent);
            font-size: 20px;
            font-weight: 600;
          }

          .side-menu-block .menu-label {
            color: var(--brand-card-accent);
            font-size: 20px;
            font-weight: 600;
          }

          .menu-headline {
            font-size: 28px;
            font-weight: 700;
            line-height: 1.35;
            letter-spacing: 0;
            overflow-wrap: normal;
            word-break: keep-all;
          }

          .signature-heading-emphasis { color: #9B3A2E; }
          .set-menu-heading-emphasis { color: #9B3A2E; }
          .side-menu-heading-emphasis { color: #9B3A2E; }

          .signature-cards-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
          }

          .signature-cards-grid .signature-card,
          .signature-cards-grid-second .signature-card:first-child,
          .signature-cards-grid-second .signature-card:last-child {
            grid-column: 1;
          }

          .sig-photo-box {
            height: auto;
            aspect-ratio: 3 / 2;
          }

          .set-cards-grid,
          .side-cards-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
          }

          .sig-card-body,
          .set-card-body,
          .side-card-body {
            padding: 20px;
          }

          .sig-item-name,
          .set-item-name,
          .side-item-name {
            font-size: 18px;
          }

          .sig-item-desc,
          .set-item-desc,
          .side-item-desc {
            font-size: 15px;
            line-height: 1.65;
          }

          .signature-description-desktop { display: none; }
          .signature-description-mobile { display: inline; }
          .signature-desc-emphasis { font-weight: 700; }
          .set-description-desktop { display: none; }
          .set-description-mobile { display: inline; }
          .set-desc-emphasis { font-weight: 700; }
          .side-desc-emphasis { font-weight: 700; }

          .sig-item-subtitle,
          .set-item-subtitle {
            font-size: 14.5px;
          }

          .closing-line-1,
          .closing-line-2 {
            font-family: 'Noto Serif KR', 'Nanum Myeongjo', Batang, serif;
            font-size: 28px;
            font-weight: 400;
            line-height: 1.35;
            letter-spacing: 0;
          }

          .closing-mobile-line {
            margin: 0;
            font-family: 'Noto Serif KR', 'Nanum Myeongjo', Batang, serif;
            font-size: 28px;
            font-weight: 400;
            line-height: 1.35;
            letter-spacing: 0;
            white-space: nowrap;
          }

          .menu-closing-statement .closing-line-plain { color: #382B23; font-weight: 400; }
          .menu-closing-statement .closing-line-warm { color: #6B5143; font-weight: 700; }
          .menu-closing-statement .closing-line-red { color: #9B3A2E; font-weight: 700; }
          .closing-mobile-emoji {
            display: block;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 32px;
            line-height: 1;
            color: #6B5143;
          }
        }
      `}</style>
    </section>
  );
}
