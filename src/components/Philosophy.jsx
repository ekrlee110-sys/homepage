import React from 'react';

export default function Philosophy() {
  const promises = [
    {
      num: '05',
      title: '30년 내공, 한식대가의 비법',
      photoTitle: '사진 공간',
      photoDesc: '대표 조리 사진 / 한식대가 인증서 / 상패',
      imgSrc: '/KakaoTalk_20260726_091448531.jpg',
      desc1: '전통의 발효와 숙성 지혜를 오늘의 짜장에 맞게 새롭게 풀어냈습니다.',
      desc2: '익숙한 짜장면을 한식의 방식으로 다시 만든 경험의 결과입니다.'
    },
    {
      num: '01',
      title: '야채를 우려 만든 수제기름',
      photoTitle: '사진 공간',
      photoDesc: '야채 활용 기름 만드는 장면 또는 짧은 조리 영상',
      imgSrc: '/fryer_4x2_5_no_distortion.png',
      desc1: '야채를 활용해 직접 만든 식물성 기름으로 짜장을 볶습니다.',
      desc2: '무거운 기름맛보다 깔끔한 맛을 선택했습니다.'
    },
    {
      num: '03',
      title: '9시간 달인 상황버섯 육수',
      photoTitle: '사진 공간',
      photoDesc: '상황버섯 차물 / 솥 / 달임수',
      imgSrc: '/ChatGPT Image 2026년 9월 5일 오전 12_10_07.png',
      desc1: '상황버섯을 3시간씩 세 번, 총 9시간 달여 한식 짜장 소스의 바탕을 만듭니다.',
      desc2: '오랜 달임으로 깊고 은은한 감칠맛의 기초를 만듭니다.'
    },
    {
      num: '04',
      title: '8일 밤낮, 192시간 숙성',
      photoTitle: '',
      photoDesc: '',
      imgSrc: '/ChatGPT Image 2026년 9월 5일 오전 01_16_20.png',
      desc1: '완성한 한식 짜장 소스를 낮은 온도에서 8일간 숙성합니다.',
      desc2: '우리가 찾아낸 192시간, 깊은 감칠맛과 속이 편한 짜장이 완성되는 시간입니다.'
    },
    {
      num: '02',
      title: '주문 즉시 고객 맞춤 조리',
      imgSrc: '/ChatGPT Image 2026년 9월 6일 오후 10_58_54.png',
      desc1: '한 번에 많이 만들어 덜어내지 않고, 주문 즉시 고객 맞춤 조리합니다.',
      desc2: '손이 더 가더라도 한 분 한 분께 제대로 대접하기 위한 방식입니다.'
    }
  ];

  const promiseDescriptionEmphasis = {
    '05': { desc2: '한식의 방식으로 다시 만든' },
    '01': { desc1: '직접 만든 식물성 기름' },
    '03': { desc1: '3시간씩 세 번' },
    '04': { desc1: '낮은 온도에서' },
    '02': { desc2: '한 분 한 분께 제대로 대접' }
  };

  const renderPromiseDescription = (item, key) => {
    const text = item[key];
    const phrase = promiseDescriptionEmphasis[item.num]?.[key];
    const phraseIndex = phrase ? text.indexOf(phrase) : -1;

    if (phraseIndex < 0) return text;

    return (
      <>
        {text.slice(0, phraseIndex)}
        <span className="promise-desc-emphasis">{phrase}</span>
        {text.slice(phraseIndex + phrase.length)}
      </>
    );
  };

  const renderPromiseTitle = (item) => {
    const mobileTitle = {
      '05': <><span className="promise-title-emphasis">30년 내공</span>, 한식대가의 비법</>,
      '01': <>야채를 우려 만든 <span className="promise-title-emphasis">수제기름</span></>,
      '03': <><span className="promise-title-emphasis">9시간</span> 달인 상황버섯 육수</>,
      '04': <>8일 밤낮, <span className="promise-title-emphasis">192시간</span> 숙성</>,
      '02': <><span className="promise-title-emphasis">주문 즉시</span> 고객 맞춤 조리</>
    }[item.num];

    return (
      <>
        <span className="promise-title-desktop">{item.title}</span>
        <span className="promise-title-mobile">{mobileTitle}</span>
      </>
    );
  };

  return (
    <section id="philosophy" className="philosophy-section section-padding">
      <div className="container">
        {/* Header Title Area */}
        <div className="section-header text-center animate-fade-in-up">
          <p className="philosophy-evidence-label">192시간 숙성과학</p>

          <h2 className="philosophy-main-title">
            <span className="philosophy-title-desktop">
              식탁에 오르는 시간 <span className="time-highlight">10분</span><br />
              그러나 우리는<br />
              <span className="time-highlight time-highlight-strong">192시간</span>을 기다립니다
            </span>
          </h2>

          <div className="time-pill-badge">
            <span className="aging-copy-desktop">9시간 달인 상황버섯 육수 + 8일 밤낮, 192시간 숙성</span>
            <span className="aging-copy-mobile">
              <span>9시간 달인 상황버섯 육수로 만든 짜장 소스</span>
              <span>한식대가의 비법으로 <span className="aging-copy-emphasis">8일간 저온 숙성</span>합니다</span>
            </span>
          </div>

          <h3 className="five-promises-heading">산내돌짜장이 <span className="five-promises-emphasis">다른 5가지</span></h3>
          <p className="section-guide-note"></p>
        </div>

        {/* 5 Cards Grid */}
        <div className="promises-grid animate-fade-in">
          {/* Top Row: 3 Cards */}
          <div className="cards-row top-row">
            {promises.slice(0, 3).map((item) => (
              <div key={item.num} className="promise-card">
                {/* Photo Space */}
                <div className={`card-photo-box ${item.num === '05' || item.num === '03' || item.num === '01' || item.num === '02' ? 'master-card-photo-box' : ''}`}>
                  {item.num === '02' ? (
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="custom-cooking-card-img"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : (
                    <img 
                      src={item.imgSrc} 
                      alt={item.title} 
                      className={`card-bg-food-img ${item.num === '05' ? 'master-card-img' : ''} ${item.num === '03' || item.num === '01' ? 'broth-card-img' : ''}`}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                  {item.num !== '05' && item.num !== '01' && item.num !== '03' && item.num !== '02' && (
                    <div className="card-photo-overlay">
                      <span className="photo-label">{item.photoTitle}</span>
                      <span className="photo-guide">{item.photoDesc}</span>
                    </div>
                  )}
                </div>

                {/* Card Text Content */}
                <div className="card-body">
                  <h4 className="card-title">{renderPromiseTitle(item)}</h4>
                  <div className="card-desc-group">
                    <p>{renderPromiseDescription(item, 'desc1')}</p>
                    <p>{renderPromiseDescription(item, 'desc2')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          <div className="cards-row bottom-row">
            {promises.slice(3, 5).map((item) => (
              <div key={item.num} className="promise-card">
                {/* Photo Space */}
                <div className={`card-photo-box ${item.num === '04' || item.num === '02' ? 'custom-cooking-card-photo-box' : ''} ${item.num === '04' ? 'aging-card-photo-box' : ''}`}>
                  <img 
                    src={item.imgSrc} 
                    alt={item.title} 
                    className={`${item.num === '02' ? 'custom-cooking-card-img' : 'card-bg-food-img'} ${item.num === '04' ? 'aging-card-img' : ''}`}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  {item.num !== '04' && item.num !== '02' && (
                    <div className="card-photo-overlay">
                      <span className="photo-label">{item.photoTitle}</span>
                      <span className="photo-guide">{item.photoDesc}</span>
                    </div>
                  )}
                </div>

                {/* Card Text Content */}
                <div className="card-body">
                  <h4 className="card-title">{renderPromiseTitle(item)}</h4>
                  <div className="card-desc-group">
                    <p>{renderPromiseDescription(item, 'desc1')}</p>
                    <p>{renderPromiseDescription(item, 'desc2')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .philosophy-section {
          background-color: var(--brand-section-bg);
          padding: 100px 0 110px 0;
          position: relative;
          border-top: 1px solid var(--brand-section-divider);
        }

        .craft-label {
          font-size: 13.5px;
          font-weight: 800;
          color: var(--brand-card-accent);
          letter-spacing: 1.8px;
          margin-bottom: 14px;
          display: inline-block;
        }

        .philosophy-evidence-label {
          margin: 0 0 12px;
          color: var(--brand-card-accent);
          font-size: 17px;
          font-weight: 800;
          line-height: 1.4;
          letter-spacing: 0.02em;
        }

        .philosophy-main-title {
          font-size: 48px;
          font-weight: 900;
          line-height: 1.25;
          color: var(--brand-card-title);
          letter-spacing: -1.2px;
          margin-bottom: 20px;
          word-break: keep-all;
        }

        .philosophy-title-final {
          white-space: nowrap;
        }

        .philosophy-title-mobile,
        .aging-copy-mobile { display: none; }

        .time-highlight {
          color: var(--brand-card-accent);
          font-weight: 900;
        }

        .time-highlight-strong {
          font-weight: 950;
        }

        .time-pill-badge {
          display: inline-flex;
          align-items: center;
          background-color: var(--brand-card-frame);
          border: 1px solid var(--brand-card-border);
          color: var(--brand-card-body);
          font-size: 13.5px;
          font-weight: 700;
          padding: 6px 18px;
          border-radius: 20px;
          margin-bottom: 30px;
          letter-spacing: -0.3px;
        }

        .five-promises-heading {
          font-size: 28px;
          font-weight: 800;
          color: var(--brand-card-title);
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }

        .five-promises-emphasis {
          color: var(--brand-card-accent);
          font-weight: 900;
        }

        .section-guide-note {
          font-size: 13px;
          color: var(--brand-card-body);
          margin-bottom: 48px;
          letter-spacing: -0.2px;
        }

        /* Promises Grid */
        .promises-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 0;
        }

        .cards-row {
          display: grid;
          gap: 24px;
        }

        .top-row {
          grid-template-columns: repeat(3, 1fr);
        }

        .bottom-row {
          grid-template-columns: repeat(2, 1fr);
          max-width: 780px;
          margin: 0 auto;
          width: 100%;
        }

        .promise-card {
          background-color: var(--brand-card-frame);
          border: 1px solid var(--brand-card-border);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--brand-card-shadow);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .promise-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--brand-card-shadow-hover);
        }

        .card-photo-box {
          height: 250px;
          position: relative;
          background-color: var(--brand-photo-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
        }

        .card-photo-box .master-card-img {
          object-position: 50% 0%;
          opacity: 1;
          filter: saturate(0.88);
          transform: scale(1.1) translateY(-15px);
        }

        .master-card-photo-box {
          height: 250px;
        }

        .custom-cooking-card-photo-box {
          height: 250px;
        }

        .card-photo-box .broth-card-img {
          object-position: 50% 50%;
          opacity: 1;
          filter: none;
          transform: none;
        }

        .promise-card:hover .broth-card-img {
          opacity: 1;
          transform: none;
        }

        .card-photo-box .aging-card-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          max-width: 100%;
          object-fit: cover;
          object-position: center top;
          opacity: 1;
          filter: none;
          transform: scale(1.12);
          transform-origin: center top;
        }

        .promise-card:hover .aging-card-img {
          opacity: 1;
          transform: scale(1.12);
        }

        .card-bg-food-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.2;
          filter: saturate(0.8);
          transition: opacity 0.3s ease, transform 0.4s ease;
        }

        .card-photo-box .custom-cooking-card-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          opacity: 1;
          filter: none;
          transform: none;
          transition: none;
        }

        .promise-card:hover .card-bg-food-img {
          opacity: 0.35;
          transform: scale(1.05);
        }

        .promise-card:hover .custom-cooking-card-img {
          opacity: 1;
          transform: none;
          filter: none;
        }

        .card-photo-overlay {
          position: relative;
          z-index: 2;
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .photo-label {
          font-size: 13.5px;
          font-weight: 700;
          color: var(--brand-card-title);
          letter-spacing: -0.2px;
        }

        .photo-guide {
          font-size: 11.5px;
          color: var(--brand-card-body);
          line-height: 1.35;
          letter-spacing: -0.2px;
        }

        .card-body {
          padding: 22px 20px 24px 20px;
          background-color: var(--brand-card-surface);
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .card-num {
          font-size: 13px;
          font-weight: 800;
          color: #8c2d19;
          margin-bottom: 6px;
          display: block;
        }

        .card-title {
          font-size: 17px;
          font-weight: 800;
          color: var(--brand-card-title);
          margin-bottom: 12px;
          line-height: 1.35;
          letter-spacing: -0.4px;
        }

        .promise-title-mobile { display: none; }

        .card-desc-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .card-desc-group p {
          font-size: 13px;
          color: var(--brand-card-body);
          line-height: 1.55;
          margin: 0;
          letter-spacing: -0.2px;
        }

        /* Closing Statement */
        .closing-statement {
          padding-top: 20px;
        }

        .statement-line-1, .statement-line-2 {
          font-size: 26px;
          font-weight: 900;
          color: #2b1e16;
          line-height: 1.4;
          margin: 0;
          letter-spacing: -0.8px;
        }

        .highlight-brown {
          color: #8c2d19;
        }

        @media (max-width: 1024px) {
          .philosophy-main-title {
            font-size: 38px;
          }
          .top-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .bottom-row {
            max-width: 100%;
          }
        }

        @media (max-width: 767px) {
          .philosophy-section { padding: 22px 0 24px; }
          .promise-title-desktop { display: none; }
          .promise-title-mobile { display: inline; }
          .card-title {
            color: #382B23;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.35;
            letter-spacing: 0;
            word-break: keep-all;
            overflow-wrap: normal;
          }
          .promise-title-emphasis {
            color: #9B3A2E;
            font-size: inherit;
            font-weight: inherit;
          }
          .philosophy-title-desktop,
          .aging-copy-desktop { display: none; }
          .philosophy-title-mobile,
          .aging-copy-mobile { display: inline; }
          .aging-copy-mobile > span { display: block; }
          .aging-copy-emphasis {
            color: #9B3A2E;
            font-size: inherit;
            font-weight: 700;
          }

          .philosophy-evidence-label {
            display: block;
            width: fit-content;
            max-width: 100%;
            margin: 0 auto;
            color: #382B23;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: 0;
            text-align: center;
            white-space: nowrap;
          }

          .philosophy-evidence-label::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            margin: 10px auto 0;
            background: #B9A797;
          }

          .philosophy-title-desktop,
          .aging-copy-desktop { display: none; }
          .aging-copy-mobile { display: inline; }

          .philosophy-main-title {
            margin: 20px 0 0;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.6;
            color: #6B6259;
            letter-spacing: 0;
            text-align: center;
            word-break: keep-all;
            overflow-wrap: normal;
          }
          .philosophy-main-title .time-highlight { font-weight: inherit; }
          .philosophy-title-final {
            white-space: normal;
          }
          .time-pill-badge {
            display: block;
            width: 100%;
            max-width: 100%;
            margin: 0 auto 30px;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: #6B6259;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.65;
            letter-spacing: 0;
            text-align: center;
            word-break: keep-all;
            overflow-wrap: normal;
          }
          .top-row, .bottom-row {
            grid-template-columns: 1fr;
          }
          .card-photo-box,
          .master-card-photo-box,
          .custom-cooking-card-photo-box {
            height: clamp(190px, 58vw, 260px);
          }
          .card-title {
            font-size: 18px;
          }
          .card-desc-group p {
            font-size: 14.5px;
          }
          .promise-desc-emphasis { font-weight: 700; }
          .statement-line-1, .statement-line-2 {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}
