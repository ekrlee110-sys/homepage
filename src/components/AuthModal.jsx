import React, { useState } from 'react';
import { X, Mail, Lock, User, Phone } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? `${formData.email}님, 반갑습니다! (실제 로그인은 Supabase 연결 시 지원됩니다.)` : `${formData.name}님, 회원가입이 완료되었습니다! (실제 계정 생성은 Supabase 연결 시 지원됩니다.)`);
    onClose();
  };

  return (
    <div className="auth-overlay">
      <div className="auth-card animate-fade-in-up">
        <button className="auth-close-btn" onClick={onClose} aria-label="닫기">
          <X size={20} />
        </button>
        
        <div className="auth-header">
          <h2>{isLogin ? '로그인' : '회원가입'}</h2>
          <p className="auth-subtitle">
            {isLogin 
              ? '산내돌짜장에 오신 것을 환영합니다.' 
              : '가입하시고 다양한 멤버십 혜택을 받아보세요.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="input-group">
              <label><User size={16} />이름</label>
              <input
                type="text"
                name="name"
                required
                placeholder="홍길동"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="input-group">
            <label><Mail size={16} />이메일</label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@sannae.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label><Phone size={16} />연락처</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="010-1234-5678"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="input-group">
            <label><Lock size={16} />비밀번호</label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="auth-submit-btn">
            {isLogin ? '로그인' : '회원가입 완료'}
          </button>
        </form>

        <div className="auth-footer">
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? '아직 회원이 아니신가요? 회원가입' : '이미 계정이 있으신가요? 로그인'}
          </button>
        </div>
      </div>

      <style>{`
        .auth-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(44, 34, 30, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }
        
        .auth-card {
          background: #fdfbf7;
          border: 1px solid rgba(197, 168, 128, 0.3);
          border-radius: 20px;
          padding: 40px;
          width: 100%;
          max-width: 440px;
          position: relative;
          box-shadow: 0 20px 50px rgba(44, 34, 30, 0.15);
        }

        .auth-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #82756e;
          transition: color 0.2s ease;
        }

        .auth-close-btn:hover {
          color: #2c221e;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .auth-header h2 {
          font-size: 24px;
          color: #2c221e;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .auth-subtitle {
          font-size: 14px;
          color: #82756e;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label {
          font-size: 13px;
          font-weight: 500;
          color: #3a2e2b;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .input-group input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(197, 168, 128, 0.4);
          border-radius: 10px;
          background: #ffffff;
          font-size: 14px;
          color: #2c221e;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-group input:focus {
          border-color: #a68453;
          box-shadow: 0 0 0 3px rgba(197, 168, 128, 0.2);
        }

        .auth-submit-btn {
          background: #2c221e;
          color: #fdfbf7;
          font-size: 15px;
          font-weight: 600;
          padding: 14px;
          border-radius: 10px;
          margin-top: 10px;
          transition: background 0.2s ease, transform 0.1s ease;
        }

        .auth-submit-btn:hover {
          background: #463630;
        }

        .auth-submit-btn:active {
          transform: scale(0.98);
        }

        .auth-footer {
          text-align: center;
          margin-top: 25px;
        }

        .auth-footer button {
          font-size: 13px;
          color: #a68453;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .auth-footer button:hover {
          color: #2c221e;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
