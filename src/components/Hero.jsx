import React from 'react';
import { MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-draft-section">
      <div className="hero-draft-container container">
        {/* Left Text Content */}
        <div className="hero-left-content animate-fade-in-up">
          <span className="hero-subtitle">대한민국 최초 한식 짜장면</span>
          
          <h1 className="hero-headline">
            좋아하는 짜장면,<br />
            <span className="hero-headline-emphasis">속까지 편했으면</span> 했습니다.
          </h1>

          <p className="hero-narrative">
            전통의 지혜와 <strong>한식대가의 경험</strong>을 오늘의 방식으로 풀어내,<br />
            <strong>8일 밤낮, 192시간의 정성</strong>을 짜장에 담았습니다.
          </p>

          {/* 5 Core Philosophies */}
          <div className="hero-five-promises">
            <h4 className="promises-title">
              산내돌짜장이 다른 <span>5가지</span>
            </h4>
            <div className="promises-badges">
              <span className="promise-pill">30년 내공, 한식대가의 비법</span>
              <span className="promise-pill">야채를 우려 만든 수제기름</span>
              <span className="promise-pill">9시간 달인 상황버섯 육수</span>
              <span className="promise-pill">8일 밤낮, 192시간 숙성</span>
              <span className="promise-pill">주문 즉시 고객 맞춤 조리</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-buttons">
            <button onClick={scrollToMenu} className="hero-btn-dark">
              대표 메뉴 보기
            </button>
            <a 
              href="https://map.naver.com/p/search/%EC%82%B0%EB%82%B4%EB%8F%8C%EC%A7%9C%EC%9E%A5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-btn-outline"
            >
              <MapPin size={16} />
              <span>네이버 길찾기</span>
            </a>
          </div>
        </div>

        {/* Right Photo Space */}
        <div className="hero-right-visual animate-fade-in">
          <div className="main-photo-card">
            <div className="photo-image-container">
              <img 
                src="/dol_zzajang_main.png"
                alt="지글지글 끓는 산내돌짜장과 365 묵은지 쌈 대표 음식 사진" 
                className="main-food-img"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-draft-section {
          background-color: #fbf8f3;
          padding: 130px 0 80px 0;
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
        }

        .hero-draft-container {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 50px;
          align-items: center;
        }

        .hero-left-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-subtitle {
          font-size: 15px;
          font-weight: 700;
          color: #a24b33;
          letter-spacing: -0.2px;
          margin-bottom: 18px;
          display: inline-block;
        }

        .hero-headline {
          font-size: clamp(34px, 3.8vw, 54px);
          font-weight: 900;
          line-height: 1.25;
          color: #2b1e16;
          letter-spacing: -1.2px;
          margin-bottom: 24px;
          word-break: keep-all;
        }

        .hero-headline-emphasis {
          color: #a24b33;
          font-weight: 900;
        }

        .hero-narrative {
          font-size: 16px;
          line-height: 1.68;
          color: #55443b;
          margin-bottom: 32px;
          letter-spacing: -0.3px;
        }

        .hero-narrative strong {
          color: #2b1e16;
          font-weight: 700;
        }

        .hero-five-promises {
          margin-bottom: 36px;
          width: 100%;
        }

        .promises-title {
          font-size: 14px;
          font-weight: 700;
          color: #2b1e16;
          margin-bottom: 12px;
          letter-spacing: -0.3px;
        }

        .promises-title span {
          color: #a24b33;
        }

        .promises-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-width: 580px;
        }

        .promise-pill {
          background-color: #ede4d7;
          color: #3e2d23;
          font-size: 13.5px;
          font-weight: 600;
          padding: 7px 15px;
          border-radius: 20px;
          letter-spacing: -0.3px;
          border: 1px solid rgba(197, 168, 128, 0.35);
          transition: all 0.2s ease;
        }

        .promise-pill:hover {
          background-color: #e2d6c4;
          transform: translateY(-1px);
        }

        .hero-cta-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-btn-dark {
          background-color: #1f1916;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          padding: 13px 26px;
          border-radius: 25px;
          border: 1.5px solid #1f1916;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(31, 25, 22, 0.15);
        }

        .hero-btn-dark:hover {
          background-color: #3b2c25;
          border-color: #3b2c25;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(31, 25, 22, 0.22);
        }

        .hero-btn-outline {
          background-color: #fbf8f3;
          color: #1f1916;
          font-size: 15px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 25px;
          border: 1.5px solid #1f1916;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .hero-btn-outline:hover {
          background-color: #ede4d7;
          transform: translateY(-2px);
        }

        /* Right Main Photo Card */
        .hero-right-visual {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .main-photo-card {
          width: 100%;
          max-width: 480px;
          background: #f0e7da;
          padding: 12px;
          border-radius: 28px;
          box-shadow: 0 20px 45px rgba(43, 30, 22, 0.1);
          border: 1px solid rgba(197, 168, 128, 0.4);
          transition: transform 0.3s ease;
        }

        .main-photo-card:hover {
          transform: translateY(-4px);
        }

        .photo-image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background-color: #2b1e16;
          aspect-ratio: 4/3.4;
        }

        .main-food-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .main-photo-card:hover .main-food-img {
          transform: scale(1.04);
        }

        .photo-caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(20, 14, 11, 0.88) 0%, rgba(20, 14, 11, 0.5) 60%, transparent 100%);
          padding: 24px 20px 18px 20px;
          color: #ffffff;
        }

        .photo-tag {
          font-size: 11px;
          font-weight: 700;
          background-color: #c5a880;
          color: #1f1916;
          padding: 3px 9px;
          border-radius: 10px;
          display: inline-block;
          margin-bottom: 6px;
          letter-spacing: 0.3px;
        }

        .photo-title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 3px;
          color: #ffffff;
          letter-spacing: -0.3px;
        }

        .photo-desc {
          font-size: 12.5px;
          opacity: 0.85;
          margin: 0;
          letter-spacing: -0.2px;
        }

        @media (max-width: 640px) {
          .hero-draft-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-headline {
            font-size: 48px;
          }

          .hero-left-content {
            align-items: center;
            text-align: center;
          }

          .promises-badges {
            justify-content: center;
          }

          .hero-cta-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .hero-draft-section {
            padding: 100px 0 60px 0;
          }

          .hero-headline {
            font-size: clamp(31px, 9vw, 38px);
            letter-spacing: -1px;
            margin-bottom: 18px;
          }

          .hero-narrative {
            font-size: 15px;
            margin-bottom: 26px;
          }

          .hero-narrative br {
            display: none;
          }

          .hero-five-promises {
            margin-bottom: 28px;
          }

          .promises-badges {
            gap: 6px;
          }

          .hero-cta-buttons {
            gap: 8px;
          }

          .promise-pill {
            font-size: 12.5px;
            padding: 6px 12px;
          }

          .hero-cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          .hero-btn-dark, .hero-btn-outline {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .main-photo-card {
            padding: 8px;
            border-radius: 20px;
          }

          .photo-image-container {
            border-radius: 14px;
          }

          .photo-caption-overlay {
            padding: 20px 14px 14px;
          }

          .photo-title {
            font-size: 15px;
          }

          .photo-desc {
            font-size: 11.5px;
          }
        }
      `}</style>
    </section>
  );
}
