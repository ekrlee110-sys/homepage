import React from 'react';

export default function WhySannae() {
  const reasons = [
    {
      id: 1,
      image: '/ChatGPT 이미지 2026년 9월 29일 오후 05_43_01.png',
      imageAlt: '산내돌짜장 한옥 공간 이미지',
      imagePosition: 'center top',
      title: '한옥에서 즐기는 가족 외식',
      desc: '부모님과 아이가 함께하기 좋은 공간.'
    },
    {
      id: 2,
      image: '/brand_story_main.jpg.jpg',
      imageAlt: '음식을 준비하는 주방 이미지',
      imagePosition: 'center',
      title: '정성껏 준비하는 한 끼',
      desc: '불 앞에서 차근차근 준비한 음식을 내어드립니다.'
    },
    {
      id: 3,
      image: '/sannae-parking-lot.jpg.jpg',
      imageAlt: '산내돌짜장 한옥 매장 앞 넓은 주차 공간',
      imagePosition: 'center 55%',
      title: '넓은 주차 공간',
      desc: '주차 걱정 없이 편하게 방문할 수 있습니다.'
    },
    {
      id: 4,
      image: '/nearby-trip.png.png',
      imageAlt: '산내의 한옥과 산 풍경 이미지',
      imagePosition: 'center center',
      title: '대전 동구 8경과 함께',
      desc: '상소동 산림욕장·만인산 자연휴양림으로 이어지는 대전 근교 나들이길.'
    }
  ];

  const reasonDescriptionEmphasis = {
    1: '부모님과 아이가 함께',
    2: '차근차근 준비한 음식',
    3: '편하게 방문',
    4: '상소동 산림욕장·만인산 자연휴양림'
  };

  const renderReasonDescription = (item) => {
    const phrase = reasonDescriptionEmphasis[item.id];
    const phraseIndex = item.desc.indexOf(phrase);
    if (phraseIndex < 0) return item.desc;

    return (
      <>
        {item.desc.slice(0, phraseIndex)}
        <span className="why-desc-emphasis">{phrase}</span>
        {item.desc.slice(phraseIndex + phrase.length)}
      </>
    );
  };

  return (
    <section className="why-sannae-section section-padding">
      <div className="container">
        {/* Header Row */}
        <div className="why-header-row animate-fade-in-up">
          <div className="why-header-left">
            <span className="why-label">산내를 찾는 이유</span>
            <h2 className="why-headline">
              한 끼를 위해<br />
              일부러 찾아오는 이유
            </h2>
          </div>
          <div className="why-header-right">
            <p className="why-guide-text"></p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="why-cards-grid animate-fade-in">
          {reasons.map((item) => (
            <div key={item.id} className="why-card">
              <div className="why-photo-box">
                <img src={item.image} alt={item.imageAlt} style={{ objectPosition: item.imagePosition }} loading="lazy" />
              </div>

              {/* Text Info */}
              <div className="why-card-body">
                <h3 className="why-item-title">{item.title}</h3>
                <p className="why-item-desc">{renderReasonDescription(item)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-sannae-section {
          background-color: var(--brand-section-bg);
          padding: 100px 0 110px 0;
          position: relative;
          border-top: 1px solid var(--brand-section-divider);
        }

        .why-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 48px;
        }

        .why-label {
          font-size: 13.5px;
          font-weight: 800;
          color: var(--brand-card-accent);
          letter-spacing: 1.8px;
          margin-bottom: 12px;
          display: inline-block;
        }

        .why-headline {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.22;
          color: var(--brand-card-title);
          letter-spacing: -1.2px;
          margin: 0;
          word-break: keep-all;
        }

        .why-guide-text {
          font-size: 14px;
          color: var(--brand-card-body);
          letter-spacing: -0.3px;
          margin: 0;
        }

        /* 4 Cards Grid */
        .why-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .why-card {
          background-color: var(--brand-card-frame);
          border: 1px solid var(--brand-card-border);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: var(--brand-card-shadow);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .why-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--brand-card-shadow-hover);
        }

        .why-photo-box {
          height: 165px;
          background-color: var(--brand-photo-surface);
          overflow: hidden;
        }

        .why-photo-box img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .why-card-body {
          padding: 24px 20px 24px 20px;
          background-color: var(--brand-card-surface);
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .why-item-title {
          font-size: 17.5px;
          font-weight: 800;
          color: var(--brand-card-title);
          margin-bottom: 10px;
          letter-spacing: -0.4px;
          line-height: 1.35;
        }

        .why-item-desc {
          font-size: 13.5px;
          color: var(--brand-card-body);
          line-height: 1.55;
          margin: 0;
          letter-spacing: -0.2px;
        }

        @media (max-width: 1024px) {
          .why-headline {
            font-size: 38px;
          }
          .why-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .why-sannae-section { padding: 24px 0; }
          .why-desc-emphasis { font-weight: 700; }

          .why-label {
            color: var(--brand-card-accent);
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0;
            margin-bottom: 12px;
          }

          .why-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .why-headline {
            font-size: 28px;
            font-weight: 700;
            line-height: 1.35;
            letter-spacing: 0;
            overflow-wrap: normal;
            word-break: keep-all;
          }
          .why-guide-text {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.65;
          }
          .why-cards-grid {
            grid-template-columns: 1fr;
          }
          .why-photo-box {
            height: auto;
            aspect-ratio: 16 / 10;
          }
          .why-card-body {
            padding: 20px;
          }
          .why-item-title {
            font-size: 19px;
          }
          .why-item-desc {
            font-size: 15px;
            line-height: 1.6;
          }
        }
      `}</style>
    </section>
  );
}
