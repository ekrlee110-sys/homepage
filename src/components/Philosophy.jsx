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
      desc1: '상황버섯을 9시간씩 세 번 달여 한식 짜장 소스의 바탕을 만듭니다.',
      desc2: '오랜 달임으로 깊고 은은한 감칠맛의 기초를 만듭니다.'
    },
    {
      num: '04',
      title: '8일 밤낮, 192시간 숙성',
      photoTitle: '사진 공간',
      photoDesc: '숙성 소스 / 날짜 표기 용기 / 저온 보관 장면',
      imgSrc: '/ChatGPT Image 2026년 9월 5일 오전 01_16_20.png',
      desc1: '완성한 한식 짜장 소스를 낮은 온도에서 8일간 숙성합니다.',
      desc2: '우리가 찾아낸 192시간, 깊은 감칠맛과 속이 편한 짜장이 완성되는 시간입니다.'
    },
    {
      num: '02',
      title: '주문 즉시 고객 맞춤 조리',
      photoTitle: '사진 공간',
      photoDesc: '주문 즉시 고객 맞춤 조리하는 웍 또는 돌판 장면',
      imgSrc: '/mugeunji_dol_zzajang.png',
      desc1: '한 번에 많이 만들어 덜어내지 않고, 주문 즉시 고객 맞춤 조리합니다.',
      desc2: '손이 더 가더라도 한 분 한 분께 제대로 대접하기 위한 방식입니다.'
    }
  ];

  return (
    <section id="philosophy" className="philosophy-section section-padding">
      <div className="container">
        {/* Header Title Area */}
        <div className="section-header text-center animate-fade-in-up">
          <span className="craft-label">TIME & CRAFT</span>
          
          <h2 className="philosophy-main-title">
            식탁에 오르는 시간 <span className="time-highlight">10분</span>,<br />
            <span className="philosophy-title-final">그러나 우리는 <span className="time-highlight time-highlight-strong">201시간</span>을 준비합니다.</span>
          </h2>

          <div className="time-pill-badge">
            <span>9시간 달인 상황버섯 육수 + 8일 밤낮, 192시간 숙성</span>
          </div>

          <h3 className="five-promises-heading">산내돌짜장이 <span className="five-promises-emphasis">다른 5가지</span></h3>
          <p className="section-guide-note">
            사진이 들어가면 더 강해지는 구간이라 각 카드 위에 고정 사진 공간을 넣었습니다.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="promises-grid animate-fade-in">
          {/* Top Row: 3 Cards */}
          <div className="cards-row top-row">
            {promises.slice(0, 3).map((item) => (
              <div key={item.num} className="promise-card">
                {/* Photo Space */}
                <div className={`card-photo-box ${item.num === '05' || item.num === '03' || item.num === '01' ? 'master-card-photo-box' : ''}`}>
                  <img 
                    src={item.imgSrc} 
                    alt={item.title} 
                    className={`card-bg-food-img ${item.num === '05' ? 'master-card-img' : ''} ${item.num === '03' || item.num === '01' ? 'broth-card-img' : ''}`}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  {item.num !== '05' && item.num !== '01' && item.num !== '03' && (
                    <div className="card-photo-overlay">
                      <span className="photo-label">{item.photoTitle}</span>
                      <span className="photo-guide">{item.photoDesc}</span>
                    </div>
                  )}
                </div>

                {/* Card Text Content */}
                <div className="card-body">
                  <span className="card-num">{item.num}</span>
                  <h4 className="card-title">{item.title}</h4>
                  <div className="card-desc-group">
                    <p>{item.desc1}</p>
                    <p>{item.desc2}</p>
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
                <div className={`card-photo-box ${item.num === '04' ? 'master-card-photo-box' : ''}`}>
                  <img 
                    src={item.imgSrc} 
                    alt={item.title} 
                    className={`card-bg-food-img ${item.num === '04' ? 'aging-card-img' : ''}`}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  {item.num !== '04' && (
                    <div className="card-photo-overlay">
                      <span className="photo-label">{item.photoTitle}</span>
                      <span className="photo-guide">{item.photoDesc}</span>
                    </div>
                  )}
                </div>

                {/* Card Text Content */}
                <div className="card-body">
                  <span className="card-num">{item.num}</span>
                  <h4 className="card-title">{item.title}</h4>
                  <div className="card-desc-group">
                    <p>{item.desc1}</p>
                    <p>{item.desc2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Closing Banner Statement */}
        <div className="closing-statement text-center animate-fade-in-up">
          <p className="statement-line-1">
            깊은 감칠맛과 <span className="highlight-brown">속이 편한 짜장</span>을 위해
          </p>
          <p className="statement-line-2">
            시간과 과정을 아끼지 않습니다.
          </p>
        </div>
      </div>

      <style>{`
        .philosophy-section {
          background-color: #fbf8f3;
          padding: 100px 0 110px 0;
          position: relative;
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .craft-label {
          font-size: 13.5px;
          font-weight: 800;
          color: #a24b33;
          letter-spacing: 1.8px;
          margin-bottom: 14px;
          display: inline-block;
        }

        .philosophy-main-title {
          font-size: 48px;
          font-weight: 900;
          line-height: 1.25;
          color: #2b1e16;
          letter-spacing: -1.2px;
          margin-bottom: 20px;
          word-break: keep-all;
        }

        .philosophy-title-final {
          white-space: nowrap;
        }

        .time-highlight {
          color: #a24b33;
          font-weight: 900;
        }

        .time-highlight-strong {
          font-weight: 950;
        }

        .time-pill-badge {
          display: inline-flex;
          align-items: center;
          background-color: #ede4d7;
          border: 1px solid rgba(197, 168, 128, 0.4);
          color: #4a3a31;
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
          color: #2b1e16;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }

        .five-promises-emphasis {
          color: #a24b33;
          font-weight: 900;
        }

        .section-guide-note {
          font-size: 13px;
          color: #7a685e;
          margin-bottom: 48px;
          letter-spacing: -0.2px;
        }

        /* Promises Grid */
        .promises-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 70px;
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
          background-color: #ede4d7;
          border: 1px solid rgba(197, 168, 128, 0.45);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(43, 30, 22, 0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .promise-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(43, 30, 22, 0.09);
        }

        .card-photo-box {
          height: 150px;
          position: relative;
          background-color: #e2d6c4;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
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
          position: static;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 42%;
          opacity: 1;
          filter: none;
          transform: none;
        }

        .promise-card:hover .aging-card-img {
          opacity: 1;
          transform: none;
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

        .promise-card:hover .card-bg-food-img {
          opacity: 0.35;
          transform: scale(1.05);
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
          color: #3b2c25;
          letter-spacing: -0.2px;
        }

        .photo-guide {
          font-size: 11.5px;
          color: #6a574c;
          line-height: 1.35;
          letter-spacing: -0.2px;
        }

        .card-body {
          padding: 22px 20px 24px 20px;
          background-color: #f5efe4;
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
          color: #2b1e16;
          margin-bottom: 12px;
          line-height: 1.35;
          letter-spacing: -0.4px;
        }

        .card-desc-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .card-desc-group p {
          font-size: 13px;
          color: #55443b;
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

        @media (max-width: 680px) {
          .philosophy-main-title {
            font-size: 22px;
          }
          .top-row, .bottom-row {
            grid-template-columns: 1fr;
          }
          .statement-line-1, .statement-line-2 {
            font-size: 20px;
          }
          .card-photo-box {
            height: 130px;
          }

          .master-card-photo-box {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
}
