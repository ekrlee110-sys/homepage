import React from 'react';

export default function Trust() {
  const masterCertificates = [
    {
      id: 1,
      photoTitle: '인증 사진 공간',
      photoDesc: '대한민국 한식대가 인증서',
      title: '대한민국 한식대가',
      desc: '대표 핵심 권위는 크게 노출.'
    },
    {
      id: 2,
      photoTitle: '인증 사진 공간',
      photoDesc: '대한민국 신지식인',
      title: '대한민국 신지식인',
      desc: '공식 선정 이력은 신뢰를 빠르게 만듭니다.'
    },
    {
      id: 3,
      photoTitle: '인증 사진 공간',
      photoDesc: '해양수산부 장관상',
      title: '해양수산부 장관상',
      desc: '수상 이력은 요약 설명만 붙이면 충분합니다.'
    },
    {
      id: 4,
      photoTitle: '인증 사진 공간',
      photoDesc: '발효대가 / 발효명인',
      title: '발효대가',
      desc: '발효와 숙성의 권위를 보조하는 구간.'
    },
    {
      id: 5,
      photoTitle: '인증 사진 공간',
      photoDesc: '한돈 인증서',
      title: '한돈 인증',
      desc: '갈비찜과 재료 신뢰 구간에 함께 사용.'
    },
    {
      id: 6,
      photoTitle: '보조 사진 공간',
      photoDesc: '방송 자료 / 상패 모음',
      title: '방송 및 상패',
      desc: 'KBS · SBS 등 방송 자료도 보조로 배치.'
    }
  ];

  const reviews = [
    {
      id: 1,
      quote: '"돌짜장이 이렇게 맛있을 줄 몰랐어요."',
      author: '실제 고객 리뷰'
    },
    {
      id: 2,
      quote: '"짜장면을 먹고 나면 항상 더부룩했는데, 여기는 속이 정말 편안해서 신기했습니다."',
      author: '실제 네이버 영수증 리뷰 (속 편안함 관련)'
    },
    {
      id: 3,
      quote: '"부모님 모시고 왔는데 자극적이지 않고 깊은 맛이라며 너무 좋아하셨어요."',
      author: '실제 네이버 영수증 리뷰 (가족 외식 관련)'
    }
  ];

  return (
    <section id="trust" className="trust-draft-section section-padding">
      <div className="container">
        {/* 1. MASTER & TRUST Section */}
        <div className="master-trust-block">
          <div className="master-trust-container">
            {/* Left Header */}
            <div className="trust-header-left animate-fade-in-up">
              <span className="trust-label">MASTER & TRUST</span>
              <h2 className="trust-headline">
                인증과 신뢰도<br />
                사진으로 보여주는<br />
                구간
              </h2>
              <p className="trust-desc">
                여기는 글보다 실제 인증서와 상패 사진이 더 강합니다. 그래서 텍스트보다 먼저 사진 박스를 배치하는 구조로 잡았습니다.
              </p>
            </div>

            {/* Right 6 Cards Grid (2 cols x 3 rows) */}
            <div className="trust-cards-grid animate-fade-in">
              {masterCertificates.map((item) => (
                <div key={item.id} className="trust-card">
                  {/* Photo Space */}
                  <div className="trust-photo-box">
                    <div className="trust-photo-overlay">
                      <span className="t-photo-title">{item.photoTitle}</span>
                      <span className="t-photo-desc">{item.photoDesc}</span>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="trust-card-body">
                    <h4 className="trust-item-title">{item.title}</h4>
                    <p className="trust-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. REAL VOICE Section */}
        <div className="real-voice-block">
          <div className="real-voice-container">
            {/* Left Big Experience Photo Card */}
            <div className="voice-photo-card animate-fade-in">
              <div className="voice-photo-box">
                <div className="voice-photo-overlay">
                  <span className="v-photo-title">고객 경험 사진 공간</span>
                  <span className="v-photo-sub">가족 외식 장면 / 돌짜장 식사 장면 / 매장 분위기 사진</span>
                  <span className="v-photo-guide">리뷰 구간은 고객 모습이 들어가면 신뢰가 더 살아납니다.</span>
                </div>
              </div>
              <div className="voice-card-bottom"></div>
            </div>

            {/* Right Review List */}
            <div className="voice-content-right animate-fade-in-up">
              <span className="trust-label">REAL VOICE</span>
              <h2 className="voice-headline">
                먹어본 사람들의 말이<br />
                가장 정확합니다.
              </h2>

              <div className="reviews-list">
                {reviews.map((rev) => (
                  <div key={rev.id} className="review-card">
                    <p className="review-quote">{rev.quote}</p>
                    <span className="review-author">{rev.author}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .trust-draft-section {
          background-color: #fbf8f3;
          padding: 100px 0 110px 0;
          position: relative;
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .trust-label {
          font-size: 13.5px;
          font-weight: 800;
          color: #a24b33;
          letter-spacing: 1.8px;
          margin-bottom: 14px;
          display: inline-block;
        }

        /* 1. MASTER & TRUST */
        .master-trust-block {
          margin-bottom: 110px;
        }

        .master-trust-container {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 60px;
          align-items: flex-start;
        }

        .trust-header-left {
          text-align: left;
        }

        .trust-headline {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.22;
          color: #2b1e16;
          letter-spacing: -1.2px;
          margin-bottom: 24px;
          word-break: keep-all;
        }

        .trust-desc {
          font-size: 15px;
          color: #5a483e;
          line-height: 1.68;
          letter-spacing: -0.3px;
          max-width: 440px;
        }

        /* 6 Grid Cards */
        .trust-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .trust-card {
          background-color: #ede4d7;
          border: 1px solid rgba(197, 168, 128, 0.45);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(43, 30, 22, 0.04);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .trust-card:hover {
          transform: translateY(-4px);
        }

        .trust-photo-box {
          height: 135px;
          background-color: #e4d7c5;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 12px;
        }

        .trust-photo-overlay {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .t-photo-title {
          font-size: 13px;
          font-weight: 700;
          color: #3b2c25;
        }

        .t-photo-desc {
          font-size: 11.5px;
          color: #6a574c;
        }

        .trust-card-body {
          padding: 18px 16px;
          background-color: #f5efe4;
          text-align: left;
          flex: 1;
        }

        .trust-item-title {
          font-size: 15.5px;
          font-weight: 800;
          color: #2b1e16;
          margin-bottom: 6px;
          letter-spacing: -0.3px;
        }

        .trust-item-desc {
          font-size: 12px;
          color: #6a574c;
          line-height: 1.45;
          margin: 0;
          letter-spacing: -0.2px;
        }

        /* 2. REAL VOICE */
        .real-voice-block {
          padding-top: 40px;
          border-top: 1px dashed rgba(197, 168, 128, 0.35);
        }

        .real-voice-container {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 50px;
          align-items: center;
        }

        .voice-photo-card {
          background-color: #ede4d7;
          border: 1px solid rgba(197, 168, 128, 0.45);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(43, 30, 22, 0.05);
          height: 380px;
          display: flex;
          flex-direction: column;
        }

        .voice-photo-box {
          flex: 1;
          background-color: #e4d7c5;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
        }

        .voice-photo-overlay {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .v-photo-title {
          font-size: 15px;
          font-weight: 800;
          color: #3b2c25;
        }

        .v-photo-sub {
          font-size: 12.5px;
          color: #6a574c;
          line-height: 1.4;
        }

        .v-photo-guide {
          font-size: 12px;
          color: #8c2d19;
          font-weight: 600;
          margin-top: 4px;
        }

        .voice-card-bottom {
          height: 100px;
          background-color: #ede4d7;
          border-top: 1px solid rgba(197, 168, 128, 0.3);
        }

        .voice-content-right {
          text-align: left;
        }

        .voice-headline {
          font-size: 44px;
          font-weight: 900;
          line-height: 1.22;
          color: #2b1e16;
          letter-spacing: -1.2px;
          margin-bottom: 32px;
          word-break: keep-all;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-card {
          background-color: #ede4d7;
          border: 1px solid rgba(197, 168, 128, 0.45);
          border-radius: 18px;
          padding: 20px 24px;
          box-shadow: 0 4px 14px rgba(43, 30, 22, 0.03);
          transition: transform 0.25s ease;
        }

        .review-card:hover {
          transform: translateX(4px);
        }

        .review-quote {
          font-size: 15px;
          font-weight: 700;
          color: #2b1e16;
          margin-bottom: 6px;
          letter-spacing: -0.3px;
          line-height: 1.5;
        }

        .review-author {
          font-size: 12px;
          color: #7a685e;
          display: block;
        }

        @media (max-width: 1024px) {
          .master-trust-container, .real-voice-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .trust-headline, .voice-headline {
            font-size: 36px;
          }
        }

        @media (max-width: 640px) {
          .trust-headline, .voice-headline {
            font-size: 28px;
          }
          .trust-cards-grid {
            grid-template-columns: 1fr;
          }
          .voice-photo-card {
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
}
