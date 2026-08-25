import React from 'react';
import { Award, Thermometer, ShieldCheck } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="story-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">OUR PHILOSOPHY</span>
          <h2>입은 즐겁게, 속은 편하게<br /><span className="gold-text">산내돌짜장의 세 가지 고집</span></h2>
          <div className="header-line"></div>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <div className="icon-wrapper">
              <Thermometer size={32} />
            </div>
            <h3>속이 편해야 한다는 고집</h3>
            <p>
              짜장면을 좋아해도 많이 드시지 못했던 어머니를 보며, 부담을 덜고 속이 편한 짜장면을 만드는 것을 첫 번째 기준으로 삼았습니다.
            </p>
          </div>

          <div className="story-card">
            <div className="icon-wrapper">
              <Award size={32} />
            </div>
            <h3>192시간 숙성의 고집</h3>
            <p>
              한식대가의 오랜 경험과 노하우를 담은 한식 짜장 소스를 192시간 숙성해, 깊은 감칠맛과 깔끔한 맛을 완성합니다.
            </p>
          </div>

          <div className="story-card">
            <div className="icon-wrapper">
              <ShieldCheck size={32} />
            </div>
            <h3>두 메뉴에 집중하는 고집</h3>
            <p>
              메뉴를 늘리기보다 돌짜장과 만인산 둥지갈비찜, 두 메뉴의 맛과 완성도를 높이는 데 집중합니다.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .story-section {
          background-color: var(--bg-secondary);
          position: relative;
        }

        .section-header {
          margin-bottom: 60px;
        }

        .subtitle {
          font-family: var(--font-title);
          font-size: 14px;
          letter-spacing: 2px;
          color: var(--accent-gold-dark);
          font-weight: 600;
          display: block;
          margin-bottom: 12px;
        }

        .section-header h2 {
          font-size: 36px;
          font-weight: 800;
          line-height: 1.35;
          color: var(--bg-dark);
        }

        .header-line {
          width: 60px;
          height: 3px;
          background-color: var(--accent-gold-dark);
          margin: 24px auto 0 auto;
        }

        .story-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 20px;
        }

        .story-card {
          background: var(--bg-primary);
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .story-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-gold-dark);
        }

        .icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(197, 168, 128, 0.12);
          color: var(--accent-gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .story-card:hover .icon-wrapper {
          background: var(--bg-dark);
          color: var(--text-light);
        }

        .story-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--bg-dark);
          margin-bottom: 16px;
        }

        .story-card p {
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-dark);
          opacity: 0.9;
        }

        @media (max-width: 992px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
}
