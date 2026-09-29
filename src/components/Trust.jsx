import React from 'react';

export default function Trust() {
  const masterCertificates = [
    {
      id: 1,
      photoTitle: '',
      photoDesc: '',
      title: '대한민국 한식대가',
      desc: ''
    },
    {
      id: 2,
      photoTitle: '',
      photoDesc: '대한민국 신지식인',
      title: '대한민국 신지식인',
      desc: ''
    },
    {
      id: 3,
      photoTitle: '',
      photoDesc: '',
      title: '해양수산부 장관상',
      desc: ''
    },
    {
      id: 4,
      photoTitle: '',
      photoDesc: '',
      title: '발효대가',
      desc: ''
    },
    {
      id: 5,
      photoTitle: '',
      photoDesc: '',
      title: '한돈 인증',
      desc: ''
    },
    {
      id: 6,
      photoTitle: '',
      photoDesc: '',
      sectionTitle: '방송 · 미디어',
      title: '방송이 소개한 산내돌짜장',
      desc: '',
      broadcastGroups: [
        {
          network: 'KBS 2TV 생생정보',
          note: '2회 소개',
          appearances: [
            { details: '2161회 · 2024.11.08', menu: '묵은지짜장면' },
            { details: '888회 · 2019.08.26', menu: '돌짜장 / 통닭' }
          ]
        },
        {
          network: 'SBS 생방송투데이',
          appearances: [
            { details: '2979회 · 2022.01.18', menu: '돌짜장' }
          ]
        },
        {
          network: 'MBC 오늘N',
          appearances: [
            { details: '2665회 · 2026.02.25', menu: '묵은지돌짜장 / 매콤갈비찜' }
          ]
        }
      ]
    },
    {
      id: 7,
      photoTitle: '',
      photoDesc: '',
      title: '백악관 셰프가 찾은 산내돌짜장',
      desc: '산내돌짜장 방문 · 유튜브 소개',
      mediaImage: '/whitehouse-chef.png'
    }
  ];

  const reviews = [
    {
      id: 1,
      quote: '“돌판에 나오는 짜장이라 그런지 끝까지 따뜻하게 먹을 수 있어서 좋았어요!”',
      author: '네이버 방문자 리뷰 · 주주뽈롱 · 2026.09.25'
    },
    {
      id: 2,
      quote: '“주말에 가족끼리 밥먹으러 왔는데 정말 맛있네요”',
      author: '네이버 방문자 리뷰 · 엄태웅580 · 2026.09.27'
    },
    {
      id: 3,
      quote: '“애들도 좋아하고 만족스럽습니당~”',
      author: '네이버 방문자 리뷰 · plus0703 · 2026.09.26'
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
                인증과 신뢰도
              </h2>
              <p className="trust-desc"></p>
            </div>

            {/* Right 6 Cards Grid (2 cols x 3 rows) */}
            <div className="trust-cards-grid animate-fade-in">
              {masterCertificates.map((item) => (
                <div key={item.id} className={`trust-card ${item.broadcastGroups ? 'trust-media-card' : ''} ${item.mediaImage ? 'trust-guest-card' : ''}`}>
                  {/* Photo Space */}
                  {item.mediaImage ? (
                    <div className="trust-guest-photo-box">
                      <img
                        className="trust-guest-photo"
                        src={item.mediaImage}
                        alt="백악관 셰프와 산내돌짜장 대표가 매장에서 함께 찍은 사진"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className={`trust-photo-box ${item.broadcastGroups ? 'trust-media-photo-slot' : ''}`}>
                      <div className="trust-photo-overlay">
                        <span className="t-photo-title">{item.photoTitle}</span>
                        <span className="t-photo-desc">{item.photoDesc}</span>
                      </div>
                    </div>
                  )}

                  {/* Body Text */}
                  <div className="trust-card-body">
                    {item.sectionTitle && <span className="trust-media-section-title">{item.sectionTitle}</span>}
                    <h4 className="trust-item-title">{item.title}</h4>
                    {item.broadcastGroups ? (
                      <div className="broadcast-list">
                        {item.broadcastGroups.map((group) => (
                          <div className="broadcast-group" key={group.network}>
                            <div className="broadcast-group-heading">
                              <span className="broadcast-network">{group.network}</span>
                              {group.note && <span className="broadcast-repeat-note">{group.note}</span>}
                            </div>
                            <ul className="broadcast-appearances">
                              {group.appearances.map((appearance) => (
                                <li className="broadcast-entry" key={`${appearance.details}-${appearance.menu}`}>
                                  <span className="broadcast-details">{appearance.details}</span>
                                  <span className="broadcast-menu">{appearance.menu}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : item.mediaImage ? (
                      <p className="trust-guest-desc">{item.desc}</p>
                    ) : (
                      <p className="trust-item-desc">{item.desc}</p>
                    )}
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
              <img
                className="voice-photo"
                src="/family-dining-sannae-square.png"
                alt="산내돌짜장에서 가족이 함께 돌짜장을 나누는 모습"
                loading="lazy"
              />
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
          background-color: var(--brand-section-bg);
          padding: 100px 0 110px 0;
          position: relative;
          border-top: 1px solid var(--brand-section-divider);
        }

        .trust-label {
          font-size: 13.5px;
          font-weight: 800;
          color: var(--brand-card-accent);
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
          color: var(--brand-card-title);
          letter-spacing: -1.2px;
          margin-bottom: 24px;
          word-break: keep-all;
        }

        .trust-desc {
          font-size: 15px;
          color: var(--brand-card-body);
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
          background-color: var(--brand-card-frame);
          border: 1px solid var(--brand-card-border);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--brand-card-shadow);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .trust-card:hover {
          transform: translateY(-4px);
        }

        .trust-photo-box {
          height: 135px;
          background-color: var(--brand-photo-surface);
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
          color: var(--brand-card-title);
        }

        .t-photo-desc {
          font-size: 11.5px;
          color: var(--brand-card-body);
        }

        .trust-card-body {
          padding: 18px 16px;
          background-color: var(--brand-card-surface);
          text-align: left;
          flex: 1;
        }

        .trust-item-title {
          font-size: 15.5px;
          font-weight: 800;
          color: var(--brand-card-title);
          margin-bottom: 6px;
          letter-spacing: -0.3px;
        }

        .trust-item-desc {
          font-size: 12px;
          color: var(--brand-card-body);
          line-height: 1.45;
          margin: 0;
          letter-spacing: -0.2px;
        }

        .trust-media-photo-slot {
          height: 112px;
          background-color: var(--brand-photo-surface);
          border-bottom: 1px solid var(--brand-card-border);
        }

        .trust-guest-photo-box {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background-color: var(--brand-photo-surface);
        }

        .trust-guest-photo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center center;
        }

        .trust-guest-card .trust-card-body {
          padding: 18px 16px;
        }

        .trust-guest-card .trust-item-title {
          margin-bottom: 5px;
        }

        .trust-guest-desc {
          margin: 0;
          color: var(--brand-card-accent);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.45;
        }

        .trust-media-card .trust-card-body {
          padding: 20px;
        }

        .trust-media-section-title {
          display: block;
          margin-bottom: 6px;
          color: var(--brand-card-accent);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .trust-media-card .trust-item-title {
          margin-bottom: 8px;
          font-size: 18px;
          line-height: 1.4;
        }

        .broadcast-repeat-note {
          margin-left: 8px;
          padding-left: 8px;
          border-left: 1px solid var(--brand-card-border);
          color: var(--brand-card-accent);
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .broadcast-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 10px 0 0;
          padding: 0;
          list-style: none;
        }

        .broadcast-group + .broadcast-group {
          padding-top: 9px;
          border-top: 1px solid var(--brand-card-border);
        }

        .broadcast-group-heading {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
        }

        .broadcast-appearances {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin: 5px 0 0;
          padding: 0;
          list-style: none;
        }

        .broadcast-entry {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: baseline;
          column-gap: 8px;
          row-gap: 2px;
          min-width: 0;
          padding-left: 10px;
          border-left: 2px solid var(--brand-card-border);
        }

        .broadcast-network {
          color: var(--brand-card-title);
          font-size: 13px;
          font-weight: 800;
          line-height: 1.4;
        }

        .broadcast-details {
          color: var(--brand-card-body);
          font-size: 12.5px;
          font-weight: 700;
          line-height: 1.45;
        }

        .broadcast-menu {
          color: var(--brand-card-body);
          font-size: 13px;
          line-height: 1.45;
          overflow-wrap: anywhere;
        }

            gap: 9px;
          border-top: 1px dashed rgba(197, 168, 128, 0.35);
        }

        .real-voice-container {
          display: grid;
            font-size: 13.5px;
          gap: 50px;
          align-items: center;
        }

        .voice-photo-card {
          background-color: var(--brand-card-frame);
          border: 1px solid var(--brand-card-border);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--brand-card-shadow);
          aspect-ratio: 1 / 1;
        }

        .voice-photo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 50%;
        }

        .voice-content-right {
          text-align: left;
        }

        .voice-headline {
          font-size: 44px;
          font-weight: 900;
          line-height: 1.22;
          color: var(--brand-card-title);
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
          background-color: var(--brand-card-frame);
          border: 1px solid var(--brand-card-border);
          border-radius: 18px;
          padding: 20px 24px;
          box-shadow: var(--brand-card-shadow);
          transition: transform 0.25s ease;
        }

        .review-card:hover {
          transform: translateX(4px);
        }

        .review-quote {
          font-size: 15px;
          font-weight: 700;
          color: var(--brand-card-title);
          margin-bottom: 6px;
          letter-spacing: -0.3px;
          line-height: 1.5;
        }

        .review-author {
          font-size: 12px;
          color: var(--brand-card-body);
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

        @media (max-width: 767px) {
          .trust-headline, .voice-headline {
            font-size: clamp(28px, 6.5vw, 36px);
          }
          .trust-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }
          .trust-media-card {
            grid-column: 1 / -1;
          }
          .trust-guest-card {
            grid-column: 1 / -1;
            margin-top: 4px;
          }
          .trust-guest-photo-box {
            aspect-ratio: auto;
            height: auto;
          }
          .trust-guest-photo {
            width: 100%;
            height: auto;
            object-fit: contain;
            object-position: center center;
          }
          .trust-guest-card .trust-item-title {
            font-size: 17px;
          }
          .trust-guest-desc {
            font-size: 14px;
          }
          .trust-item-title {
            font-size: 15px;
            overflow-wrap: anywhere;
          }
          .trust-item-desc {
            font-size: 13px;
          }
          .broadcast-list {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .trust-media-card .trust-card-body {
            padding: 18px;
          }
          .broadcast-network {
            font-size: 14px;
          }
          .broadcast-details {
            font-size: 13px;
          }
          .broadcast-menu {
            font-size: 12.5px;
          }
          .review-quote {
            font-size: 15px;
          }
          .review-author {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .trust-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
