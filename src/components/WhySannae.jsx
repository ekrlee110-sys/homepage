import React from 'react';

export default function WhySannae() {
  const reasons = [
    {
      id: 1,
      photoTitle: '사진 공간',
      photoDesc: '한옥 매장 외관',
      title: '한옥에서 즐기는 가족 외식',
      desc: '부모님과 아이가 함께하기 좋은 공간.'
    },
    {
      id: 2,
      photoTitle: '사진 공간',
      photoDesc: '매장 내부 좌석',
      title: '편안한 매장 분위기',
      desc: '한 끼를 천천히 즐기기 좋은 내부 공간.'
    },
    {
      id: 3,
      photoTitle: '사진 공간',
      photoDesc: '넓은 주차장',
      title: '넓은 주차 공간',
      desc: '주차 걱정 없이 편하게 방문할 수 있습니다.'
    },
    {
      id: 4,
      photoTitle: '사진 공간',
      photoDesc: '만인산 길 / 산내 풍경',
      title: '나들이와 함께',
      desc: '만인산·상소동 나들이길에 들르기 좋은 산내의 한 켠.'
    }
  ];

  return (
    <section className="why-sannae-section section-padding">
      <div className="container">
        {/* Header Row */}
        <div className="why-header-row animate-fade-in-up">
          <div className="why-header-left">
            <span className="why-label">WHY SANNAE</span>
            <h2 className="why-headline">
              한 끼를 위해<br />
              일부러 찾아오는 이유
            </h2>
          </div>
          <div className="why-header-right">
            <p className="why-guide-text">여기는 공간과 지역성을 보여주는 사진이 꼭 필요합니다.</p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="why-cards-grid animate-fade-in">
          {reasons.map((item) => (
            <div key={item.id} className="why-card">
              {/* Photo Box */}
              <div className="why-photo-box">
                <div className="why-photo-overlay">
                  <span className="w-photo-title">{item.photoTitle}</span>
                  <span className="w-photo-desc">{item.photoDesc}</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="why-card-body">
                <h3 className="why-item-title">{item.title}</h3>
                <p className="why-item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-sannae-section {
          background-color: #fbf8f3;
          padding: 100px 0 110px 0;
          position: relative;
          border-top: 1px solid rgba(197, 168, 128, 0.2);
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
          color: #a24b33;
          letter-spacing: 1.8px;
          margin-bottom: 12px;
          display: inline-block;
        }

        .why-headline {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.22;
          color: #2b1e16;
          letter-spacing: -1.2px;
          margin: 0;
          word-break: keep-all;
        }

        .why-guide-text {
          font-size: 14px;
          color: #705c51;
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
          background-color: #ede4d7;
          border: 1px solid rgba(197, 168, 128, 0.45);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(43, 30, 22, 0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(43, 30, 22, 0.1);
        }

        .why-photo-box {
          height: 165px;
          background-color: #e4d7c5;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 16px;
          overflow: hidden;
        }

        .why-photo-overlay {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .w-photo-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #3b2c25;
          letter-spacing: -0.2px;
        }

        .w-photo-desc {
          font-size: 12px;
          color: #6a574c;
          letter-spacing: -0.2px;
        }

        .why-card-body {
          padding: 24px 20px 24px 20px;
          background-color: #f5efe4;
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .why-item-title {
          font-size: 17.5px;
          font-weight: 800;
          color: #2b1e16;
          margin-bottom: 10px;
          letter-spacing: -0.4px;
          line-height: 1.35;
        }

        .why-item-desc {
          font-size: 13.5px;
          color: #55443b;
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

        @media (max-width: 640px) {
          .why-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .why-headline {
            font-size: 30px;
          }
          .why-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
