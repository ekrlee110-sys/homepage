import React from 'react';

export default function HanokSpace() {
  return (
    <section className="hanok-space-section" aria-labelledby="hanok-space-title">
      <div className="hanok-space-image-wrap">
        <img
            src="/전통 한옥 식당과 푸른 산 풍경.png"
          alt="푸른 산을 배경으로 한 산내돌짜장 한옥 매장 전경"
          className="hanok-space-image"
        />
        <div className="hanok-space-overlay">
          <div className="hanok-space-copy">
            <h2 id="hanok-space-title">한옥에서 즐기는 산내돌짜장</h2>
            <p>자연과 한옥의 여유 속에서 속이 편한 짜장을 즐겨보세요.</p>
          </div>
        </div>
      </div>

      <style>{`
        .hanok-space-section {
          background-color: #fbf8f3;
          padding: 0 0 100px;
        }

        .hanok-space-image-wrap {
          position: relative;
          width: calc(100% - 48px);
          max-width: 1152px;
          margin: 0 auto;
          height: 460px;
          overflow: hidden;
          background-color: #2b1e16;
        }

        .hanok-space-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 58% center;
        }

        .hanok-space-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 72px max(24px, calc((100% - 1200px) / 2 + 24px));
          background: linear-gradient(to top, rgba(25, 18, 14, 0.78), rgba(25, 18, 14, 0.12) 58%, transparent 78%);
        }

        .hanok-space-copy {
          color: #ffffff;
        }

        .hanok-space-copy h2 {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 900;
          line-height: 1.25;
          letter-spacing: -1.2px;
          word-break: keep-all;
        }

        .hanok-space-copy p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 17px;
          line-height: 1.6;
          letter-spacing: -0.3px;
          word-break: keep-all;
        }

        @media (max-width: 640px) {
          .hanok-space-section {
            padding-bottom: 60px;
          }

          .hanok-space-image-wrap {
            height: 300px;
          }

          .hanok-space-image {
            object-position: 61% center;
          }

          .hanok-space-overlay {
            padding: 32px 16px;
            background: linear-gradient(to top, rgba(25, 18, 14, 0.82), rgba(25, 18, 14, 0.08) 68%, transparent 86%);
          }

          .hanok-space-copy h2 {
            margin-bottom: 8px;
            font-size: clamp(27px, 8vw, 34px);
          }

          .hanok-space-copy p {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
