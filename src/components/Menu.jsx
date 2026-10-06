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
      subTitle: '192시간 숙성으로 완성한 담백함',
      photoTitle: '메뉴 사진 공간',
      photoGuide: '192시간 숙성 돌짜장',
      description: '192시간 숙성한 짜장 소스의 담백하고 깊은 맛을 즐기는 돌짜장',
      image: '/ChatGPT Image 2026년 7월 26일 오전 08_46_40.png',
      imageScale: 1.08,
      imagePosition: 'center 52%',
      badge: '대표 메뉴'
    },
    {
      id: 'chubu-perilla',
      name: '추부깻잎 돌짜장',
      subTitle: '매장에서 10분 거리, 농장에서 자란 싱싱한 추부깻잎',
      photoTitle: '메뉴 사진 공간',
      photoGuide: '추부깻잎 돌짜장',
      description: '향긋한 추부깻잎과 통들깨, 꼬소하고 깔끔하게 즐기는 새로운 조합',
      image: chubuPerillaImage,
      imageScale: 0.94,
      imagePosition: 'center 51%',
      badge: '한식 대표'
    },
    {
      id: 'cheongyang-zzajang',
      name: '청양고추 돌짜장',
      subTitle: '화끈한 매운맛',
      photoTitle: '메뉴 사진 공간',
      photoGuide: '청양고추 돌짜장',
      description: '청양고추의 매운맛을 더한 화끈한 돌짜장',
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
      description: '12시간 푹 쪄낸 뒤, 24시간 더 숙성한 깊고 개운한 국내산 묵은지로 감싸 먹는 돌짜장',
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
      description: '부드러운 갈비살과 파채, 돌짜장과 함께 즐기는 매콤한 갈비찜',
      image: maninsanGalbiImage,
      imageScale: 1.00,
      imagePosition: 'center center',
      imageTranslateY: -5,
      badge: '대표 곁들임'
    }
  ];

  const sideDescriptionEmphasis = {
    'side-rice': '뜨거운 돌판에 슥슥 비벼',
    'side-cabbage': '칠리 비빔만두를 싸서'
  };

  const renderSideDescription = (side) => {
    if (side.id === 'side-rice') {
      const [firstLine, secondLine] = side.description.split('\n');
      return <>{side.subTitle}<br />{firstLine}<br />{secondLine}</>;
    }

    if (side.id === 'side-cabbage') {
      return side.description.split('\n').map((line, index) => (
        <React.Fragment key={index}>{index > 0 && <br />}{line}</React.Fragment>
      ));
    }

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
      name: '묵은지 쌈 돌짜장 한상',
      subTitle: '개운하고 매콤하게',
      photoTitle: '세트 사진 공간',
      photoGuide: '묵은지 쌈 세트',
      description: '묵은지의 개운함과 갈비찜의 매콤함이 만난, 세상에 없던 한상',
     image: '/묵은지 돌짜장 세트.png',
    },
    {
      id: 'set-chubu',
      name: '추부깻잎 돌짜장 한상',
      subTitle: '깔끔하고 매콤하게',
      photoTitle: '세트 사진 공간',
      photoGuide: '추부깻잎 돌짜장 세트',
      description: '추부깻잎과 통들깨의 깔끔하고 꼬소한 맛에 매콤한 둥지갈비찜이 더해진 꼬소하고 매콤한 한상',
      image: '/추부깻잎 돌짜장 세트.png',

    },
    {
      id: 'set-aged',
      name: '192시간 숙성 돌짜장 한상',
      subTitle: '담백하고 매콤하게',
      photoTitle: '세트 사진 공간',
      photoGuide: '192시간 숙성 돌짜장 세트',
      description: '192시간 숙성 돌짜장의 담백함과 둥지갈비찜의 매콤함을 함께 즐기는 담백하고 매콤한 한상',
      image: '/192숙성 돌짜장 세트-가로.png',
    },
    {
      id: 'set-cheongyang',
      name: '청양고추 돌짜장 한상',
      subTitle: '끝까지 화끈하게',
      photoTitle: '세트 사진 공간',
      photoGuide: '청양고추 돌짜장 세트',
      description: '화끈한 청양고추 돌짜장과 매콤한 둥지갈비찜이 만난 화끈한 한상',
      image: '/청양고추 돌짜장 세트.png',
    }
  ];


  const sideMenuItems = [
    {
      id: 'side-rice',
      name: '날치알 돌판 비빔밥',
      subTitle: '톡톡 씹히는 날치알, 고소한 김가루, 남은 짜장 양념.',
      photoTitle: '사이드 사진 공간',
      photoGuide: '날치알 돌판 비빔밥',
      description: '돌판에 비벼 먹는 완벽한 마무리.',
    image: '/side-rice.png'
    },
    {
      id: 'side-cabbage',
      name: '아삭 양배추 칠리 비빔만두',
      photoTitle: '사이드 사진 공간',
      photoGuide: '아삭 양배추 칠리',
      description: '새콤달콤한 양배추 샐러드에\n바삭한 튀김만두를 감싸 먹는 메뉴.\n입안이 산뜻하고 개운해지는 칠리 비빔만두.',
    image: '/side-cabbage.png'
    },
    {
      id: 'side-pancake',
      name: '김치부침개',
      subTitle: '직접 부쳐 먹는 재미. SELF 김치부침개.',
      photoTitle: '사이드 사진 공간',
      photoGuide: '김치부침개',
      description: '돌짜장이 나오는 동안 따끈하게 즐겨보세요.',
      image: '/side-pancake.png'
    }
  ];

  const signatureDescriptionEmphasis = {
    'aged-zzajang': '담백하고 깊은 맛',
    'chubu-perilla': '꼬소하고 깔끔하게',
    'cheongyang-zzajang': '화끈한 돌짜장',
    'mugeunji-zzajang': '24시간 더 숙성한 깊고 개운한 국내산 묵은지',
    'maninsan-galbi': '매콤한 갈비찜'
  };

  const renderSignatureDescription = (item) => {
    const phrase = signatureDescriptionEmphasis[item.id];
    const phraseIndex = item.description.indexOf(phrase);
    const desktopDescription = ['mugeunji-zzajang', 'maninsan-galbi'].includes(item.id) && phraseIndex >= 0
      ? <>
          {item.description.slice(0, phraseIndex)}
          <span className="signature-desc-emphasis">{phrase}</span>
          {item.description.slice(phraseIndex + phrase.length)}
        </>
      : item.description;
    const mobileDescription = phraseIndex < 0
      ? item.description
      : <>
          {item.description.slice(0, phraseIndex)}
          <span className="signature-desc-emphasis">{phrase}</span>
          {item.description.slice(phraseIndex + phrase.length)}
        </>;

    return (
      <>
        <span className="signature-description-desktop">{desktopDescription}</span>
        <span className="signature-description-mobile">{mobileDescription}</span>
      </>
    );
  };

  const renderSetDescription = (set) => {
    const emphasizedPhrases = {
      'set-aged': ['담백하고 매콤한 한상'],
      'set-mugeunji': ['세상에 없던 한상'],
      'set-chubu': ['꼬소하고 매콤한 한상'],
      'set-cheongyang': ['화끈한 한상']
    }[set.id] || [];
    const matches = emphasizedPhrases
      .map((phrase) => ({ phrase, index: set.description.indexOf(phrase) }))
      .filter(({ index }) => index >= 0)
      .sort((first, second) => first.index - second.index);
    const emphasizedDescription = [];
    let cursor = 0;

    matches.forEach(({ phrase, index }, matchIndex) => {
      if (index > cursor) emphasizedDescription.push(set.description.slice(cursor, index));
      emphasizedDescription.push(
        <span className="set-desc-emphasis" key={`${set.id}-${matchIndex}`}>{phrase}</span>
      );
      cursor = index + phrase.length;
    });
    emphasizedDescription.push(set.description.slice(cursor));

    return (
      <>
        <span className="set-description-desktop">{emphasizedDescription}</span>
        <span className="set-description-mobile">{emphasizedDescription}</span>
      </>
    );
  };

  const topSignatureIds = ['mugeunji-zzajang', 'maninsan-galbi'];
  const bottomSignatureIds = ['aged-zzajang', 'chubu-perilla', 'cheongyang-zzajang'];
  const topSignatureRow = topSignatureIds.map((id) => signatureItems.find((item) => item.id === id));
  const bottomSignatureRow = bottomSignatureIds.map((id) => signatureItems.find((item) => item.id === id));

  const renderSignatureCard = (item) => (
    <div key={item.id} className={`signature-card ${item.id === 'chubu-perilla' ? 'signature-card-chubu' : ''} ${item.id === 'mugeunji-zzajang' ? 'signature-card-mugeunji' : ''} ${item.id === 'maninsan-galbi' ? 'signature-card-galbi' : ''}`}>
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
        <p className="sig-item-subtitle">
         {item.subTitle}
        </p>
        {item.id === 'mugeunji-zzajang' && (
          <div className="mugeunji-mobile-heading">
            <span>개운한 묵은지에 싸 먹는</span>
            <strong>묵은지 쌈 돌짜장</strong>
          </div>
        )}
        {item.id === 'maninsan-galbi' && (
          <div className="galbi-mobile-intro">
            <p className="galbi-mobile-heading">돌짜장과 <span>찰떡궁합</span></p>
            <p className="galbi-mobile-description">
              부드러운 갈비살과 파채, 돌짜장과 함께 즐기는 <strong>매콤한 갈비찜</strong>
            </p>
          </div>
        )}
        <p className={`sig-item-desc ${item.id === 'maninsan-galbi' ? 'galbi-desktop-description' : ''}`}>
          {renderSignatureDescription(item)}
        </p>
      </div>
    </div>
  );

  return (
    <section id="menu" className="menu-draft-section section-padding">
      <div className="container">
        <div className="menu-header-row animate-fade-in-up">
          <div className="menu-header-left">
            <span className="menu-label signature-menu-label">단품 요리</span>
            <h2 className="menu-headline signature-intro-headline">
              가볍게 즐기는{' '}
              <span className="signature-heading-emphasis">단품 요리</span>
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
          <div className="closing-row">
            <span className="closing-emoji" aria-hidden="true">😊</span>
            <span className="closing-phrase closing-phrase-first">
              <span className="closing-line-plain">입은</span>{' '}
              <span className="closing-line-warm">즐겁게,</span>
            </span>
            <span className="closing-phrase closing-phrase-second">
              <span className="closing-line-plain">속은</span>{' '}
              <span className="closing-line-red">편하게</span>
            </span>
            <span className="closing-emoji closing-emoji-right" aria-hidden="true">😊</span>
          </div>
        </div>

        <div id="set-menu" className="set-menu-block">
          <div className="menu-header-row animate-fade-in-up">
            <div className="menu-header-left">
              <span className="menu-label">색다른 한상 요리</span>
              <h2 className="menu-headline">
                함께 오셨다면,<br />
                <span className="set-menu-heading-emphasis">색다른 한상 요리</span>로 더욱 풍성하게 즐겨보세요.
              </h2>
            </div>
          </div>

          <p className="set-menu-intro">돌짜장과 매콤한 둥지갈비찜을 함께 즐기는 <span className="set-menu-intro-emphasis">색다른 한상 요리</span></p>

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
                  <h3 className="set-item-name" style={set.id === 'set-mugeunji' ? { color: '#000000' } : undefined}>{set.name}</h3>
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
              <h2 className="menu-headline side-menu-title">
                함께하면 더 좋은{' '}
                <span className="side-menu-title-emphasis">사이드 메뉴</span>
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
                  {side.id === 'side-pancake' && (
                    <p className="side-pancake-subtitle">
                      직접 부쳐 먹는 재미. <span>SELF</span> 김치부침개.
                    </p>
                  )}
                  <p className={`side-item-desc ${side.id === 'side-pancake' ? 'side-pancake-desc' : ''} ${side.id === 'side-rice' ? 'side-rice-desc' : ''} ${side.id === 'side-cabbage' ? 'side-cabbage-desc' : ''}`}>
                    {renderSideDescription(side)}
                  </p>
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

        .side-menu-title {
          width: 100%;
          font-size: clamp(17px, calc(7.04vw - 2.8px), 46px);
          font-weight: 700;
          text-align: center;
          white-space: nowrap;
        }

        .side-menu-title-emphasis {
          color: #9B3A2E;
          font-size: 1.15em;
          font-weight: 700;
        }

        .signature-intro-headline { white-space: nowrap; }

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
        .galbi-mobile-intro { display: none; }
        .mugeunji-mobile-heading { display: none; }

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

        .aged-subtitle-emphasis { font-weight: 800; }

        .sig-item-desc {
          font-size: 13px;
          color: var(--brand-card-body);
          line-height: 1.6;
          margin-bottom: 0;
          letter-spacing: -0.2px;
        }

        .galbi-desktop-description .signature-desc-emphasis { font-weight: 700; }

        .set-item-desc {
          font-size: 13px;
          color: var(--brand-card-body);
          line-height: 1.6;
          margin-bottom: 18px;
          letter-spacing: -0.2px;
          flex: 1;
        }

        .set-desc-emphasis {
          color: var(--brand-card-body);
          font-weight: 600;
        }

        .side-item-desc {
          font-size: 13.5px;
          color: var(--brand-card-body);
          line-height: 1.55;
          margin: 0;
          letter-spacing: -0.2px;
        }

        .side-pancake-subtitle,
        .side-pancake-subtitle span { display: none; }
        .side-pancake-desc { white-space: nowrap; }
        .side-cabbage-desc { word-break: keep-all; }

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

        .closing-row {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          white-space: nowrap;
        }

        .closing-emoji {
          flex: 0 0 auto;
          margin-right: clamp(6px, 2vw, 8px);
          font-size: clamp(24px, calc(2.5vw + 15px), 32px);
          line-height: 1;
          color: #6B5143;
        }

        .closing-emoji-right {
          margin-right: 0;
          margin-left: clamp(6px, 2vw, 8px);
        }

        .closing-phrase {
          flex: 0 0 auto;
          font-size: clamp(22px, calc(2.5vw + 13px), 34px);
          font-weight: 400;
          font-family: var(--font-base);
          line-height: 1.35;
          letter-spacing: 0;
        }

        .closing-phrase-second { margin-left: clamp(14px, calc(1.43vw + 8.85px), 20px); }
        .closing-line-plain { color: #382B23; font-weight: 400; }
        .closing-line-warm { color: #6B5143; font-weight: 700; }
        .closing-line-red { color: #9B3A2E; font-weight: 700; }

        /* Set & Side Menu Blocks */
        .set-menu-block {
          padding-top: 20px;
          margin-bottom: 85px;
          border-top: 1px dashed var(--brand-section-divider);
        }

        .set-menu-intro {
          margin: -28px 0 28px;
          color: var(--brand-card-body);
          font-family: inherit;
          font-size: clamp(17.5px, calc(1.4vw + 12.46px), 20px);
          font-weight: 400;
          line-height: 1.6;
          text-align: center;
          word-break: keep-all;
        }

        .set-menu-intro-emphasis { font-weight: 600; }

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
        }

        @media (max-width: 767px) {
          .menu-draft-section { padding: 24px 0; }
          .signature-cards-layout { margin-bottom: 0; }
          .signature-card-mugeunji .sig-item-name,
          .signature-card-mugeunji .sig-item-subtitle { display: none; }
          .signature-card-galbi .sig-item-subtitle,
          .signature-card-galbi .galbi-desktop-description { display: none; }
          .signature-card-galbi .galbi-mobile-intro { display: block; }
          .galbi-mobile-heading {
            margin: 0 0 8px;
            color: var(--brand-card-body);
            font-size: 14.5px;
            font-weight: 700;
            line-height: 1.45;
            letter-spacing: 0;
            word-break: keep-all;
            overflow-wrap: normal;
          }
          .galbi-mobile-heading span { color: var(--brand-card-accent); }
          .galbi-mobile-description {
            margin: 0 0 12px;
            color: var(--brand-card-body);
            font-size: 15px;
            font-weight: 400;
            line-height: 1.65;
            letter-spacing: 0;
            word-break: keep-all;
          }
          .galbi-mobile-description strong { font-weight: 700; }
          .mugeunji-mobile-heading {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 12px;
          }
          .mugeunji-mobile-heading span {
            color: var(--brand-card-accent);
            font-size: 14.5px;
            font-weight: 600;
            line-height: 1.45;
            letter-spacing: 0;
            word-break: keep-all;
            overflow-wrap: normal;
          }
          .mugeunji-mobile-heading strong {
            color: var(--brand-card-title);
            font-size: 18px;
            font-weight: 800;
            line-height: 1.35;
            letter-spacing: -0.4px;
            word-break: keep-all;
            overflow-wrap: normal;
          }
          .menu-closing-statement {
            margin: 0;
            padding: 32px 0;
          }
          .set-menu-block {
            padding-top: 22px;
            margin-bottom: 32px;
          }
          .set-menu-block .menu-header-left,
          .set-menu-block .set-menu-intro {
            width: 87%;
            max-width: 560px;
            margin-left: auto;
            margin-right: auto;
            box-sizing: border-box;
            text-align: left;
          }
          .set-menu-intro {
            margin-top: -8px;
            margin-bottom: 24px;
            padding: 0;
          }
          .side-menu-block { padding-top: 22px; }

          .side-pancake-subtitle {
            display: block;
            margin: 0 0 8px;
            color: var(--brand-card-body);
            font-size: 14.5px;
            font-weight: 600;
            line-height: 1.45;
            letter-spacing: -0.3px;
            white-space: normal;
            word-break: keep-all;
            overflow-wrap: normal;
          }

          .side-pancake-desc {
            white-space: normal;
            word-break: keep-all;
            overflow-wrap: normal;
          }
          .side-pancake-subtitle span {
            display: inline;
            color: var(--brand-card-accent);
            font-weight: 700;
          }

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

          .signature-menu-label {
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

          .side-menu-title {
            font-size: clamp(17px, calc(7.04vw - 2.8px), 46px);
            font-weight: 700;
            line-height: 1.35;
            text-align: center;
          }

          .signature-intro-headline { font-size: clamp(18px, 7vw, 28px); }

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

          .set-card-body .set-item-desc {
            font-size: 13.5px;
            line-height: 1.6;
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
            word-break: keep-all;
            overflow-wrap: normal;
          }

          .sig-item-desc,
          .set-item-desc,
          .side-item-desc {
            font-size: 15px;
            line-height: 1.65;
            word-break: keep-all;
            overflow-wrap: normal;
          }

          .signature-description-desktop { display: none; }
          .signature-description-mobile { display: inline; }
          .signature-desc-emphasis { font-weight: 700; }
          .set-description-desktop { display: none; }
          .set-description-mobile { display: inline; }
          .side-desc-emphasis { font-weight: 700; }
          .side-cabbage-desc {
            font-size: clamp(13px, calc(5vw - 3px), 15px);
          }
          .side-rice-desc {
            word-break: keep-all;
            overflow-wrap: normal;
            font-size: clamp(11px, calc(4.8077vw - 4.3788px), 15px);
          }

          .sig-item-subtitle,
          .set-item-subtitle {
            font-size: 14.5px;
            word-break: keep-all;
            overflow-wrap: normal;
          }

          .closing-row {
            width: calc(100% + 40px);
            margin-left: -20px;
            padding-inline: clamp(4px, 1.5vw, 8px);
            box-sizing: border-box;
            gap: 0;
          }

          .closing-phrase {
            font-family: 'Noto Serif KR', 'Nanum Myeongjo', Batang, serif;
            font-weight: 500;
            line-height: 1.35;
            letter-spacing: 0;
            white-space: nowrap;
          }

          .menu-closing-statement .closing-line-warm,
          .menu-closing-statement .closing-line-red {
            color: #9B3A2E;
            font-weight: 700;
          }
        }

        @media (max-width: 340px) {
          .closing-row { padding-inline: 0; }
          .closing-emoji {
            margin-right: 4px;
            font-size: 20px;
          }
          .closing-emoji-right {
            margin-right: 0;
            margin-left: 4px;
          }
          .closing-phrase { font-size: 20px; }
          .closing-phrase-second { margin-left: 4px; }
        }
      `}</style>
    </section>
  );
}
