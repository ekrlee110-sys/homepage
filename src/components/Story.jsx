import React from 'react';

export default function Story() {
  return (
    <section id="story" className="story-draft-section section-padding">
      <div className="container story-draft-container">
        {/* Left 3 Photo Boxes Grid */}
        <div className="story-visual-grid animate-fade-in">
          {/* Top Big Photo Card */}
          <div className="photo-card top-main-card">
            <div className="photo-inner">
              <img 
                src="/dol_zzajang_main.png" 
                alt="산내돌짜장 브랜드 메인 스토리 대표 사진" 
                className="card-bg-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="photo-placeholder-overlay">
                <span className="photo-card-title">브랜드 메인 스토리 사진</span>
                <span className="photo-card-sub">대표 사진 또는 브랜드 스토리 대표 이미지</span>
              </div>
            </div>
          </div>

          {/* Bottom 2 Smaller Photo Cards */}
          <div className="bottom-photo-row">
            {/* Bottom Left Card */}
            <div className="photo-card bottom-card">
              <div className="photo-inner">
                <img 
                  src="/mugeunji_dol_zzajang.png" 
                  alt="묵은지 끓이는 과정 사진" 
                  className="card-bg-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="photo-placeholder-overlay">
                  <span className="photo-card-title">과정 사진</span>
                  <span className="photo-card-sub">묵은지 끓이는 사진 또는 짧은 영상</span>
                </div>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="photo-card bottom-card">
              <div className="photo-inner">
                <img 
                  src="/chubu_perilla_zzajang.png" 
                  alt="장독대 숙성 분위기 사진" 
                  className="card-bg-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="photo-placeholder-overlay">
                  <span className="photo-card-title">분위기 사진</span>
                  <span className="photo-card-sub">장독대 / 숙성 / 한식의 시간감</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Story Text Narrative */}
        <div className="story-text-content animate-fade-in-up">
          <span className="story-label">OUR STORY</span>

          <h2 className="story-main-heading">
            중식의 짜장을,<br />
            한식의 방식으로 다시<br />
            만들었습니다.
          </h2>

          <div className="story-paragraphs">
            <p className="story-p-lead">
              짜장면은 좋아하지만 먹고 난 뒤의 무거움은 늘 아쉬웠습니다.
            </p>
            <p className="story-p-sub">
              그래서 오래 이어온 우리 음식의 지혜와 <strong>한식대가의 경험</strong>을 짜장에 담았습니다.
            </p>
          </div>

          {/* Highlight Quote Box with Red/Brown Accent Bar */}
          <div className="story-quote-card">
            <div className="quote-accent-bar"></div>
            <div className="quote-message">
              <p className="quote-line-1">짧은 시간에 만드는 짜장이 아니라,</p>
              <p className="quote-line-2">
                조금 느리더라도 <span className="highlight-brown">속이 편한 짜장</span>을 만들고 싶었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .story-draft-section {
          background-color: #fbf8f3;
          padding: 100px 0 110px 0;
          position: relative;
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .story-draft-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* Left Photo Visual Grid */
        .story-visual-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        .photo-card {
          background-color: #ede4d7;
          border: 1px solid rgba(197, 168, 128, 0.4);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 24px rgba(43, 30, 22, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .photo-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(43, 30, 22, 0.09);
        }

        .top-main-card {
          height: 270px;
        }

        .bottom-photo-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .bottom-card {
          height: 190px;
        }

        .photo-inner {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: #ede4d7;
        }

        .card-bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.25;
          filter: saturate(0.85);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .photo-card:hover .card-bg-img {
          opacity: 0.4;
          transform: scale(1.03);
        }

        .photo-placeholder-overlay {
          position: relative;
          z-index: 2;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .photo-card-title {
          font-size: 15.5px;
          font-weight: 700;
          color: #3b2c25;
          letter-spacing: -0.3px;
        }

        .photo-card-sub {
          font-size: 12.5px;
          color: #705c51;
          letter-spacing: -0.2px;
          line-height: 1.4;
        }

        /* Right Text Narrative */
        .story-text-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .story-label {
          font-size: 14px;
          font-weight: 800;
          color: #a24b33;
          letter-spacing: 1.5px;
          margin-bottom: 16px;
          display: inline-block;
        }

        .story-main-heading {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.25;
          color: #2b1e16;
          letter-spacing: -1.2px;
          margin-bottom: 26px;
          word-break: keep-all;
        }

        .story-paragraphs {
          margin-bottom: 30px;
        }

        .story-p-lead {
          font-size: 16px;
          color: #4a3a31;
          margin-bottom: 12px;
          line-height: 1.6;
          letter-spacing: -0.3px;
        }

        .story-p-sub {
          font-size: 16px;
          color: #4a3a31;
          line-height: 1.6;
          letter-spacing: -0.3px;
        }

        .story-p-sub strong {
          color: #2b1e16;
          font-weight: 700;
        }

        /* Quote Callout Card */
        .story-quote-card {
          background-color: #f2ebd9;
          border-radius: 16px;
          padding: 22px 26px;
          display: flex;
          align-items: stretch;
          gap: 18px;
          width: 100%;
          box-shadow: 0 4px 14px rgba(43, 30, 22, 0.04);
        }

        .quote-accent-bar {
          width: 4px;
          background-color: #8c2d19;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .quote-message {
          display: flex;
          flex-direction: column;
          gap: 4px;
          justify-content: center;
        }

        .quote-line-1 {
          font-size: 15px;
          font-weight: 700;
          color: #2b1e16;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .quote-line-2 {
          font-size: 15px;
          font-weight: 700;
          color: #2b1e16;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .highlight-brown {
          color: #8c2d19;
          font-weight: 800;
        }

        @media (max-width: 1024px) {
          .story-draft-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .story-main-heading {
            font-size: 38px;
          }

          .story-text-content {
            align-items: center;
            text-align: center;
          }

          .story-paragraphs {
            text-align: center;
          }

          .story-quote-card {
            text-align: left;
          }
        }

        @media (max-width: 640px) {
          .story-main-heading {
            font-size: 30px;
          }

          .bottom-photo-row {
            grid-template-columns: 1fr;
          }

          .top-main-card {
            height: 220px;
          }

          .bottom-card {
            height: 160px;
          }

          .story-quote-card {
            padding: 16px 18px;
          }

          .quote-line-1, .quote-line-2 {
            font-size: 13.5px;
          }
        }
      `}</style>
    </section>
  );
}
