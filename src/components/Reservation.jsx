import React, { useState } from 'react';
import { Calendar, Users, Clock, User, Phone, CheckCircle } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2명',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '2명',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="reservation" className="reserve-section section-padding">
      <div className="container">
        <div className="reserve-wrapper">
          <div className="reserve-info-panel">
            <span className="subtitle">RESERVATION</span>
            <h2>실시간 테이블 예약</h2>
            <p className="reserve-desc">
              192시간 숙성 돌짜장의 깊은 풍미와 갓 서빙된 지글지글 뜨거운 돌판 요리를 더욱 편안하게 즐기실 수 있도록 자리를 준비해 드립니다.
            </p>
            
            <div className="info-details">
              <div className="info-item">
                <strong>영업 시간</strong>
                <span>11:30 ~ 20:00 (라스트오더 19:15)</span>
              </div>
              <div className="info-item">
                <strong>정기 휴무</strong>
                <span>매주 월요일 (월요일이 공휴일인 경우 정상 영업)</span>
              </div>
              <div className="info-item">
                <strong>매장 문의</strong>
                <span>0507-1340-0457</span>
              </div>
              <div className="info-item">
                <strong>오시는 길</strong>
                <span>대전광역시 동구 산내로 (넓은 주차장 완비)</span>
              </div>
            </div>
          </div>

          <div className="reserve-form-panel glass-panel">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="reserve-form">
                <div className="form-grid">
                  <div className="input-field">
                    <label><User size={16} /> 예약자명</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="성함을 입력해주세요" 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-field">
                    <label><Phone size={16} /> 연락처</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      placeholder="010-0000-0000" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-field">
                    <label><Calendar size={16} /> 방문 날짜</label>
                    <input 
                      type="date" 
                      name="date" 
                      required 
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-field">
                    <label><Clock size={16} /> 방문 시간</label>
                    <select 
                      name="time" 
                      required 
                      value={formData.time}
                      onChange={handleChange}
                    >
                      <option value="">시간 선택</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                    </select>
                  </div>

                  <div className="input-field full-width">
                    <label><Users size={16} /> 인원 수</label>
                    <select 
                      name="guests" 
                      value={formData.guests}
                      onChange={handleChange}
                    >
                      <option value="1명">1명</option>
                      <option value="2명">2명</option>
                      <option value="3명">3명</option>
                      <option value="4명">4명</option>
                      <option value="5명~8명">단체 (5명 ~ 8명)</option>
                      <option value="8명 이상">단체 (8명 초과)</option>
                    </select>
                  </div>

                  <div className="input-field full-width">
                    <label>요청 사항 (선택)</label>
                    <textarea 
                      name="message" 
                      rows="3" 
                      placeholder="아기가 있어요, 창가 자리 원해요 등 요청사항을 남겨주세요."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="reserve-submit-btn">예약 신청하기</button>
              </form>
            ) : (
              <div className="reserve-success text-center animate-fade-in">
                <CheckCircle size={56} className="success-icon" />
                <h3>예약 신청이 완료되었습니다!</h3>
                <p className="success-msg">
                  방문 시간 맞추어 자리를 조율하겠습니다.<br />
                  예약 세부 현황은 카카오 알림톡으로 발송해 드립니다.
                </p>
                <div className="summary-card">
                  <p><strong>예약자:</strong> {formData.name}님</p>
                  <p><strong>일시:</strong> {formData.date} {formData.time}</p>
                  <p><strong>인원:</strong> {formData.guests}</p>
                </div>
                <button onClick={handleReset} className="reserve-reset-btn">새로운 예약 신청</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .reserve-section {
          background-color: var(--bg-secondary);
        }

        .reserve-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        .reserve-info-panel h2 {
          font-size: 36px;
          font-weight: 800;
          color: var(--bg-dark);
          margin-bottom: 20px;
        }

        .reserve-desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-dark);
          opacity: 0.9;
          margin-bottom: 40px;
        }

        .info-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .info-item strong {
          font-size: 14px;
          color: var(--accent-gold-dark);
        }

        .info-item span {
          font-size: 15px;
          color: var(--text-dark);
          font-weight: 500;
        }

        .reserve-form-panel {
          border-radius: 24px;
          padding: 40px;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(197, 168, 128, 0.3);
        }

        .reserve-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .input-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-field.full-width {
          grid-column: span 2;
        }

        .input-field label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .input-field input, .input-field select, .input-field textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(197, 168, 128, 0.4);
          border-radius: 10px;
          background: #ffffff;
          font-size: 14px;
          color: var(--text-dark);
          outline: none;
          transition: all 0.2s ease;
        }

        .input-field input:focus, .input-field select:focus, .input-field textarea:focus {
          border-color: var(--accent-gold-dark);
          box-shadow: 0 0 0 3px rgba(197, 168, 128, 0.15);
        }

        .reserve-submit-btn {
          width: 100%;
          background: var(--bg-dark);
          color: var(--text-light);
          padding: 16px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          box-shadow: var(--shadow-md);
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .reserve-submit-btn:hover {
          background: #463630;
          transform: translateY(-2px);
        }

        .reserve-success {
          padding: 20px 0;
        }

        .success-icon {
          color: #4a8f5e;
          margin-bottom: 20px;
        }

        .reserve-success h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--bg-dark);
        }

        .success-msg {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .summary-card {
          background: rgba(197, 168, 128, 0.1);
          border: 1px solid rgba(197, 168, 128, 0.2);
          border-radius: 12px;
          padding: 16px;
          text-align: left;
          max-width: 320px;
          margin: 0 auto 24px auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 14px;
        }

        .reserve-reset-btn {
          background: transparent;
          color: var(--accent-gold-dark);
          border: 1.5px solid var(--accent-gold-dark);
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .reserve-reset-btn:hover {
          background: var(--accent-gold-dark);
          color: var(--text-light);
        }

        @media (max-width: 992px) {
          .reserve-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .reserve-form-panel {
            padding: 30px 20px;
          }
        }

        @media (max-width: 576px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .input-field.full-width {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
