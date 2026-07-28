import React from 'react';
import { Award, Thermometer, ShieldCheck } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="story-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">OUR PHILOSOPHY</span>
          <h2>짬뽕은 팔지 않는 짜장면집,<br /><span className="gold-text">산내돌짜장의 세 가지 고집</span></h2>
          <div className="header-line"></div>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <div className="icon-wrapper">
              <Award size={32} />
            </div>
            <h3>192시간 저온숙성의 맛</h3>
            <p>
              셰프의 깊은 노하우가 깃든 특제 짜장 소스는 192시간 동안의 엄격한 저온 숙성을 거칩니다. 
              인위적인 단맛을 배제하고 깊고 은은한 감칠맛과 풍부한 육즙을 이끌어내는 산내만의 핵심 비결입니다.
            </p>
          </div>

          <div className="story-card">
            <div className="icon-wrapper">
              <Thermometer size={32} />
            </div>
            <h3>마지막 한 입까지, 300℃ 돌판</h3>
            <p>
              뜨거운 돌판 위에 서빙되어 첫 젓가락부터 마지막 식사를 마칠 때까지 짜장면이 식지 않습니다. 
              온도가 유지되므로 면발의 쫄깃함이 오랫동안 살아가고, 돌판 바닥에 눋는 누룽지의 고소함까지 만끽할 수 있습니다.
            </p>
          </div>

          <div className="story-card">
            <div className="icon-wrapper">
              <ShieldCheck size={32} />
            </div>
            <h3>짜장과 매운 갈비찜의 단일 페어링</h3>
            <p>
              우리는 짬뽕을 만들지 않습니다. 오직 제대로 만든 '돌짜장'과 특유의 매콤달콤한 소스로 푹 쪄낸 '매운 갈비찜'의 페어링에만 집중합니다. 
              단 두 가지 대표 메뉴로 승부하는 명가의 맛을 느껴보세요.
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
