import React from 'react';

export default function BrandPhilosophy() {
  return (
    <section className="brand-philosophy-section" aria-label="산내돌짜장의 브랜드 철학">
      <div className="brand-philosophy-content container">
       <img
  src="/brand-frame.png"
  alt="천시일도·명전만리"
  style={{
    display: 'block',
    width: '100%',
    maxWidth: '900px',
    height: 'auto',
    margin: '0 auto 16px',
  }}
/>
        <p className="brand-philosophy-korean">천시일도 · 명전만리</p>
        <p className="brand-philosophy-meaning">
          시간을 들여 한 길을 만들면,<br />
          그 이름은 멀리 전해진다.
        </p>
      </div>

      <style>{`
        .brand-philosophy-section {
          padding: 38px 0 42px;
          background-color: #fbf8f3;
          border-top: 1px solid rgba(197, 168, 128, 0.28);
          border-bottom: 1px solid rgba(197, 168, 128, 0.28);
          text-align: center;
        }

        .brand-philosophy-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .brand-philosophy-hanja {
          margin: 0;
          color: #3b2c25;
          font-family: 'Noto Serif KR', 'Noto Sans KR', serif;
          font-size: clamp(32px, 3.2vw, 42px);
          font-weight: 750;
          line-height: 1.4;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .brand-philosophy-korean {
          margin: 4px 0 14px;
          color: #806b5c;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .brand-philosophy-meaning {
          margin: 0;
          color: #55443b;
          font-size: 16px;
          line-height: 1.7;
          letter-spacing: -0.25px;
          word-break: keep-all;
        }

        @media (max-width: 767px) {
          .brand-philosophy-section {
            padding: 28px 0 32px;
          }

          .brand-philosophy-hanja {
            font-size: clamp(27px, 8vw, 35px);
            letter-spacing: 0.015em;
          }

          .brand-philosophy-korean {
            margin-bottom: 10px;
            font-size: 14px;
          }

          .brand-philosophy-meaning {
            font-size: 15px;
            line-height: 1.65;
          }
        }
      `}</style>
    </section>
  );
}
