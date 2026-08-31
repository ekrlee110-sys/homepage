import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Reservation() {
  return (
    <section id="reservation" className="visit-draft-section">
      <div className="container">
        {/* Main VISIT Block */}
        <div className="visit-grid">
          {/* Left Store Info & Action Buttons */}
          <div className="visit-left-content animate-fade-in-up">
            <span className="visit-label">VISIT</span>
            <h2 className="visit-headline">
              소중한 사람과 함께하는<br />
              편안한 한 끼.
            </h2>
            <p className="visit-guide-text">
              마지막 구간은 길찾기와 문의로 바로 연결되는 전환 구간입니다.
            </p>

            {/* Info Table / List */}
            <div className="visit-info-list">
              <div className="visit-info-row">
                <span className="info-key">주소</span>
                <span className="info-val">대전광역시 동구 산내로 457</span>
              </div>

              <div className="visit-info-row">
                <span className="info-key">전화</span>
                <a href="tel:0507-1340-0457" className="info-val tel-link">0507-1340-0457</a>
              </div>

              <div className="visit-info-row">
                <span className="info-key">주차</span>
                <span className="info-val">매장 전용 주차장과 식당 옆 골목길까지 약 50대 주차 가능</span>
              </div>

              <div className="visit-info-row">
                <span className="info-key">영업시간</span>
                <div className="info-val schedule-list">
                  <p>화~금 11:30~20:00</p>
                  <p>토·일 11:00~20:00</p>
                  <p>브레이크타임 15:30~16:30</p>
                  <p>라스트오더 19:20</p>
                  <p className="highlight-holiday">매주 월요일 휴무 (공휴일·임시공휴일은 정상영업)</p>
                </div>
              </div>

              <div className="visit-info-row">
                <span className="info-key">웨이팅 · 방문 문의</span>
                <div className="info-val waiting-desc">
                  <p>시간 지정 예약은 받지 않습니다.</p>
                  <p>캐치테이블 웨이팅 또는 전화 문의를 이용해 주세요.</p>
                  <p className="waiting-sub">캐치테이블 이용이 어려우신 분은 전화 주시면, 가능한 빠르게 입장하실 수 있도록 도와드립니다.</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA Buttons */}
            <div className="visit-actions">
              <a 
                href="https://map.naver.com/p/search/%EC%82%B0%EB%82%B4%EB%8F%8C%EC%A7%9C%EC%9E%A5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-naver-map"
              >
                <MapPin size={16} />
                <span>네이버 길찾기</span>
              </a>

              <a 
                href="tel:0507-1340-0457" 
                className="btn-call-inquiry"
              >
                <Phone size={16} />
                <span>전화 문의 0507-1340-0457</span>
              </a>
            </div>
          </div>

          {/* Right Map Photo Container */}
          <div className="visit-right-map animate-fade-in">
            <a 
              href="https://map.naver.com/p/search/%EC%82%B0%EB%82%B4%EB%8F%8C%EC%A7%9C%EC%9E%A5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-card-link"
            >
              <div className="map-placeholder-box">
                <div className="map-overlay-content">
                  <span className="map-title">지도 / 방문 안내 공간</span>
                  <span className="map-subtitle">네이버 지도 캡처 또는 매장 외관 + 지도 조합</span>
                  <span className="map-click-hint">클릭 시 네이버 지도로 연결됩니다</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Brand Logo & Slogan */}
        <div className="visit-footer-brand text-center animate-fade-in-up">
          <div className="footer-logo-box">
            <img src={logoImg} alt="산내돌짜장 로고" className="footer-logo-img" />
          </div>
          <p className="footer-slogan-sub">대한민국 최초 한식 짜장면</p>
          <h3 className="footer-slogan-main">속이 편한 짜장, 산내돌짜장</h3>
          <p className="footer-copy">&copy; {new Date().getFullYear()} 산내돌짜장. All Rights Reserved.</p>
        </div>
      </div>

      <style>{`
        .visit-draft-section {
          background-color: #1f1916;
          color: #fbf8f3;
          padding: 100px 0 60px 0;
          position: relative;
        }

        .visit-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 60px;
          align-items: flex-start;
          margin-bottom: 90px;
        }

        .visit-left-content {
          text-align: left;
        }

        .visit-label {
          font-size: 13.5px;
          font-weight: 800;
          color: #c5a880;
          letter-spacing: 1.8px;
          margin-bottom: 14px;
          display: inline-block;
        }

        .visit-headline {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.25;
          color: #ffffff;
          letter-spacing: -1.2px;
          margin-bottom: 12px;
          word-break: keep-all;
        }

        .visit-guide-text {
          font-size: 14px;
          color: #a8998f;
          margin-bottom: 36px;
          letter-spacing: -0.2px;
        }

        /* Info List */
        .visit-info-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          margin-bottom: 36px;
        }

        .visit-info-row {
          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 14px;
          line-height: 1.6;
        }

        .info-key {
          font-weight: 700;
          color: #c5a880;
          letter-spacing: -0.2px;
        }

        .info-val {
          color: #e4dad1;
          letter-spacing: -0.2px;
        }

        .tel-link {
          color: #ffffff;
          font-weight: 700;
          text-decoration: none;
        }

        .tel-link:hover {
          color: #c5a880;
          text-decoration: underline;
        }

        .schedule-list p, .waiting-desc p {
          margin: 0 0 3px 0;
        }

        .highlight-holiday {
          color: #e07a5f;
          font-weight: 600;
        }

        .waiting-sub {
          font-size: 13px;
          color: #a8998f;
          margin-top: 6px !important;
        }

        /* Action Buttons */
        .visit-actions {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn-naver-map {
          background-color: #ffffff;
          color: #1f1916;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 12px 26px;
          border-radius: 30px;
          font-size: 14.5px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transition: all 0.2s ease;
        }

        .btn-naver-map:hover {
          background-color: #ede4d7;
          transform: translateY(-2px);
        }

        .btn-call-inquiry {
          background-color: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 11px 22px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-call-inquiry:hover {
          border-color: #c5a880;
          color: #c5a880;
          transform: translateY(-2px);
        }

        /* Right Map Box */
        .visit-right-map {
          width: 100%;
          height: 100%;
          min-height: 480px;
        }

        .map-card-link {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
        }

        .map-placeholder-box {
          width: 100%;
          height: 100%;
          min-height: 480px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
          transition: all 0.3s ease;
        }

        .map-placeholder-box:hover {
          border-color: #c5a880;
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-3px);
        }

        .map-overlay-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .map-title {
          font-size: 16px;
          font-weight: 800;
          color: #ffffff;
        }

        .map-subtitle {
          font-size: 13px;
          color: #a8998f;
        }

        .map-click-hint {
          font-size: 12px;
          color: #c5a880;
          margin-top: 10px;
          font-weight: 600;
        }

        /* Footer Brand Center */
        .visit-footer-brand {
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-logo-box {
          margin-bottom: 16px;
        }

        .footer-logo-img {
          width: 72px;
          height: 72px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
        }

        .footer-slogan-sub {
          font-size: 13px;
          color: #e07a5f;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }

        .footer-slogan-main {
          font-size: 22px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.5px;
          margin-bottom: 20px;
        }

        .footer-copy {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.35);
          margin: 0;
        }

        @media (max-width: 1024px) {
          .visit-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .visit-headline {
            font-size: 36px;
          }
          .visit-right-map {
            min-height: 320px;
          }
          .map-placeholder-box {
            min-height: 320px;
          }
        }

        @media (max-width: 640px) {
          .visit-headline {
            font-size: 30px;
          }
          .visit-info-row {
            grid-template-columns: 1fr;
            gap: 6px;
          }
          .visit-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn-naver-map, .btn-call-inquiry {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
