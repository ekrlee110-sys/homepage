import React from 'react';
import storyPoster from '../assets/sannae-story-love-care.png';
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
               src="/brand_story_main.jpg.jpg"

                alt="산내돌짜장 브랜드 메인 스토리 대표 사진" 
                className="card-bg-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Bottom 2 Smaller Photo Cards */}
          <div className="bottom-photo-row">
            {/* Bottom Left Card */}
            <div className="photo-card bottom-card">
              <div className="photo-inner">
                <img 
                  src="/ChatGPT%20Image%202026년%209월%203일%20오전%2012_30_55.png"
                  alt="묵은지 끓이는 과정 사진" 
                  className="card-bg-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="photo-card bottom-card">
              <div className="photo-inner">
                <img 
                  src="/Edit_set-menu_image_composition_202608080730.jpeg" 
                  alt="묵은지 돌짜장과 갈비찜 세트" 
                  className="card-bg-img story-set-card-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Story Text Narrative */}
        <div className="story-text-content animate-fade-in-up">
          <span className="story-label">
            <span className="story-label-desktop">OUR STORY</span>
            <span className="story-label-mobile">브랜드 이야기</span>
          </span>

          <h2 className="story-main-heading">
            <span className="story-heading-desktop">
              익숙한 짜장면에<br />
              <span className="story-headline-emphasis">한식의 시간</span>을 더해,<br />
              <span className="story-headline-final">우리만의 짜장을 만들었습니다.</span>
            </span>
            <span className="story-heading-mobile">
              익숙한 짜장면에<br />
              <span className="story-headline-emphasis story-headline-mobile-emphasis">한식의 시간</span>을 더했습니다
            </span>
          </h2>

          <div className="story-paragraphs">
            <div className="story-paragraphs-desktop">
              <p className="story-p-lead">
                짜장면은 좋아하지만 먹고 난 뒤의 <span className="story-body-emphasis">무거움</span>은 늘 아쉬웠습니다.
              </p>
              <p className="story-p-sub">
                그래서 오래 이어온 우리 음식의 지혜와 <span className="story-body-emphasis-neutral">한식대가의 경험</span>을 우리만의 짜장에 담았습니다.
              </p>
            </div>
            <div className="story-paragraphs-mobile">
              <p>짜장면은 좋아하지만,<br />먹고 난 뒤의 <span className="story-mobile-emphasis">무거움</span>은 늘 아쉬웠습니다.</p>
              <p>오래 이어온 우리 음식의 지혜와<br /><span className="story-mobile-emphasis">한식대가의 경험</span>을 짜장에 담았습니다.</p>
            </div>
          </div>

          {/* Highlight Quote Box with Red/Brown Accent Bar */}
          <div className="story-quote-card">
            <div className="quote-accent-bar"></div>
            <div className="quote-message">
              <div className="story-quote-desktop">
                <p className="quote-line-1">짧은 시간에 만드는 짜장이 아니라,</p>
                <p className="quote-line-2">
                  조금 느리더라도 <span className="highlight-brown">속이 편한 짜장</span>을 만들고 싶었습니다.
                </p>
              </div>
              <p className="story-quote-mobile">
                조금 느리더라도,<br />
                <span className="highlight-brown">속이 편한 짜장</span>을 만들고 싶었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
<div className="story-poster-section">
  <div className="story-poster-divider">산내의 시작</div>
  <img
    src={storyPoster}
    alt="사랑, 정성, 잇다 - 산내돌짜장 브랜드 이야기"
    className="story-poster-image"
  />
</div>
      <style>{`
      .story-poster-section {
  width: 100%;
  padding: 90px 24px 110px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.story-poster-image {
  display: block;
  width: 100%;
  max-width: 1120px;
  height: auto;
  object-fit: contain;
  border-radius: 0;
}

.story-poster-divider { display: none; }

@media (max-width: 768px) {
  .story-poster-section {
    flex-direction: column;
    align-items: stretch;
    padding: 32px 16px 48px;
  }

  .story-poster-divider {
    display: block;
    width: fit-content;
    max-width: 100%;
    align-self: center;
    box-sizing: border-box;
    margin: 0 0 20px;
    padding: 0;
    background: transparent;
    color: #382B23;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.35;
    text-align: center;
    white-space: nowrap;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  .story-poster-divider::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin: 10px auto 0;
    background: #B9A797;
  }

  .story-poster-image {
    width: 100%;
    max-width: 100%;
  }
}
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
          height: 200px;
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
          object-position: center center;
        }

        .story-set-card-img {
          object-fit: cover;
          opacity: 1;
          filter: brightness(0.72) saturate(1.13) contrast(1.03);
          transform: scale(1.2) translate(-7px, 7px);
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

        .story-heading-mobile { display: none; }
        .story-label-mobile { display: none; }
        .story-paragraphs-mobile,
        .story-quote-mobile { display: none; }

        .story-headline-emphasis {
          color: #a24b33;
          font-weight: 900;
        }

        .story-headline-strong {
          font-weight: 950;
        }

        .story-headline-final {
          white-space: nowrap;
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

        .story-body-emphasis {
          color: #a24b33;
          font-weight: 600;
        }

        .story-body-emphasis-neutral {
          color: #4a3a31;
          font-weight: 600;
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
          font-weight: 400;
          color: #2b1e16;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .story-quote-desktop .highlight-brown { font-weight: 600; }

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
            height: 250px;
          }

          .story-set-card-img {
            filter: brightness(0.76) saturate(1.18) contrast(1.05);
          }

          .story-quote-card {
            padding: 16px 18px;
          }

          .quote-line-1, .quote-line-2 {
            font-size: 13.5px;
          }
        }

        @media (max-width: 767px) {
          .story-heading-desktop { display: none; }
          .story-heading-mobile { display: inline; }
          .story-label-desktop,
          .story-paragraphs-desktop,
          .story-quote-desktop { display: none; }
          .story-label-mobile,
          .story-paragraphs-mobile { display: block; }
          .story-quote-mobile { display: block; }

          .story-draft-section {
            padding-top: 32px;
            padding-bottom: 0;
          }

          .story-draft-container {
            display: flex;
            flex-direction: column;
            gap: 0;
          }

          .story-visual-grid {
            order: 0;
            margin-bottom: 20px;
          }

          .story-text-content {
            display: contents;
          }

          .story-label {
            order: 1;
            width: 100%;
            margin: 0 0 12px;
            padding-top: 14px;
            border-top: 1px solid rgba(197, 168, 128, 0.35);
            text-align: left;
            font-size: 14px;
            font-weight: 600;
            color: #a24b33;
            letter-spacing: 0;
          }

          .story-main-heading {
            order: 2;
          }

          .story-paragraphs {
            order: 3;
          }

          .story-quote-card {
            order: 4;
          }

          .story-main-heading {
            width: 100%;
            align-self: stretch;
            margin: 0 0 16px;
            font-size: 26px;
            font-weight: 700;
            line-height: 1.4;
            color: #2b1e16;
            letter-spacing: 0;
            text-align: left;
            overflow-wrap: break-word;
            word-break: keep-all;
          }
          .story-headline-emphasis { font-weight: inherit; }
          .story-headline-mobile-emphasis { white-space: nowrap; }

          .story-headline-final {
            white-space: normal;
          }

          .story-text-content,
          .story-paragraphs {
            width: 100%;
            min-width: 0;
          }

          .story-p-lead,
          .story-p-sub {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.65;
            letter-spacing: 0;
            overflow-wrap: normal;
            word-break: keep-all;
          }

          .story-paragraphs-mobile p {
            margin: 0;
            text-align: left;
            color: #4a3a31;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.65;
            letter-spacing: 0;
            word-break: keep-all;
          }

          .story-paragraphs-mobile {
            align-self: stretch;
            text-align: left;
          }

          .story-paragraphs-mobile p + p { margin-top: 16px; }

          .story-mobile-emphasis { font-weight: 600; }

          .story-paragraphs {
            margin-bottom: 50px;
          }

          .bottom-photo-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .story-quote-card {
            width: 100%;
            padding: 16px;
            gap: 10px;
          }

          .quote-message {
            min-width: 0;
          }

          .quote-line-1,
          .quote-line-2 {
            font-size: 14px;
            line-height: 1.5;
            word-break: keep-all;
          }

          .story-quote-mobile {
            margin: 0;
            color: #2b1e16;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.65;
            letter-spacing: 0;
            word-break: keep-all;
          }

          .story-quote-mobile .highlight-brown { font-weight: 600; }
        }

        @media (max-width: 480px) {
          .bottom-photo-row {
            grid-template-columns: 1fr;
          }

          .bottom-card {
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
