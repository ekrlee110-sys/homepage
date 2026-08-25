import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

export default function Hero() {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container container">
        <div className="hero-text animate-fade-in-up">
          <div className="tagline">
            <Flame size={16} className="spicy-text" />
            <span>대한민국 최초 한식 짜장면</span>
          </div>
          <h1>
            지글지글 끓는 돌판 위,<br />
            <span className="gold-text">192시간</span>의 기다림
          </h1>
          <p className="hero-description">
            산내돌짜장은 마지막 한 젓가락까지 식지 않는 뜨거운 감동을 드립니다.<br />
            <strong>9시간 달인 상황버섯을 192시간 숙성합니다.</strong><br />
            자극은 줄이고 감칠맛은 더한 속 편한 한식 짜장면 한 그릇에 집중합니다.
          </p>
          <div className="hero-actions">
            <button onClick={scrollToReservation} className="btn-primary">
              <span>지금 실시간 예약하기</span>
              <ArrowRight size={18} />
            </button>
            <a href="#menu" className="btn-secondary">대표 메뉴 보기</a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in">
          <div className="hero-image-border">
            <img 
              src="/mugeunji_dol_zzajang.png" 
              alt="산내돌짜장 대표메뉴 묵은지 돌짜장" 
              className="hero-image"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          background-color: var(--bg-primary);
          padding: 160px 0 100px 0;
          display: flex;
          align-items: center;
          position: relative;
          min-height: 90vh;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .tagline {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(197, 168, 128, 0.15);
          color: var(--accent-gold-dark);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          letter-spacing: 0.5px;
        }

        .hero-text h1 {
          font-size: 52px;
          line-height: 1.25;
          font-weight: 800;
          color: var(--bg-dark);
          margin-bottom: 24px;
        }

        .hero-description {
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-dark);
          margin-bottom: 40px;
        }

        .hero-description strong {
          color: var(--accent-spicy);
          font-weight: 600;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .btn-primary {
          background: var(--bg-dark);
          color: var(--text-light);
          padding: 16px 28px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: var(--shadow-md);
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .btn-primary:hover {
          background: #463630;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-dark);
          border: 1.5px solid rgba(44, 34, 30, 0.2);
          padding: 15px 28px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease, transform 0.2s ease;
        }

        .btn-secondary:hover {
          background: rgba(44, 34, 30, 0.04);
          border-color: var(--bg-dark);
          transform: translateY(-2px);
        }

        .hero-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hero-image-border {
          position: relative;
          border: 1.5px solid var(--accent-gold);
          padding: 12px;
          border-radius: 30px;
          background: #f5ede1;
          box-shadow: var(--shadow-lg);
          transition: transform 0.5s ease;
          overflow: hidden;
        }

        .hero-image-border:hover {
          transform: scale(1.02) rotate(1deg);
        }

        .hero-image {
          width: 100%;
          max-width: 450px;
          height: auto;
          aspect-ratio: 4/3;
          object-fit: cover;
          border-radius: 20px;
        }

        .hero-image-badge {
          position: absolute;
          bottom: 40px;
          left: -30px;
          background: var(--bg-dark);
          color: var(--text-light);
          padding: 16px 24px;
          border-radius: 16px;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .badge-title {
          font-family: var(--font-title);
          font-size: 20px;
          font-weight: 700;
          color: var(--accent-gold);
        }

        .badge-desc {
          font-size: 12px;
          font-weight: 400;
          opacity: 0.8;
          white-space: nowrap;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
          
          .hero-text {
            align-items: center;
          }

          .hero-text h1 {
            font-size: 40px;
          }

          .hero-image-badge {
            left: 10px;
            bottom: -20px;
            flex-direction: row;
            align-items: center;
            padding: 10px 18px;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}
