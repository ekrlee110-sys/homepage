import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Mail, Lock, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function AuthModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      alert(`${data.user.email}님, 반갑습니다! 로그인되었습니다.`);
      onClose();
      window.location.reload(); // Refresh session globally
    } catch (err) {
      let friendlyMessage = err.message;
      if (err.message === 'Invalid login credentials') {
        friendlyMessage = '이메일 또는 비밀번호가 일치하지 않습니다.';
      } else if (err.message === 'Email not confirmed') {
        friendlyMessage = '이메일 인증이 완료되지 않았습니다. 메일함을 확인해 주세요.';
      }
      setErrorMsg(friendlyMessage || '로그인 중 오류가 발생했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-card animate-fade-in-up">
        <button className="auth-close-btn" onClick={onClose} aria-label="닫기">
          <X size={20} />
        </button>
        
        <div className="auth-header">
          <h2>로그인</h2>
          <p className="auth-subtitle">
            산내돌짜장에 오신 것을 환영합니다.
          </p>
        </div>

        {errorMsg && (
          <div className="error-alert-modal">
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
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

          <button type="submit" className="auth-submit-btn" disabled={submitting}>
            {submitting ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <div className="auth-footer">
          <Link to="/signup" onClick={onClose} className="auth-footer-link">
            아직 회원이 아니신가요? 회원가입
          </Link>
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

        .auth-submit-btn:hover:not(:disabled) {
          background: #463630;
        }

        .auth-submit-btn:active:not(:disabled) {
          transform: scale(0.98);
        }

        .auth-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-alert-modal {
          background-color: rgba(185, 74, 56, 0.08);
          border: 1px solid var(--accent-spicy, #b94a38);
          color: var(--accent-spicy, #b94a38);
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 15px;
          animation: fadeIn 0.3s ease-out;
        }

        .auth-footer {
          text-align: center;
          margin-top: 25px;
        }

        .auth-footer-link {
          font-size: 13px;
          color: #a68453;
          font-weight: 500;
          transition: color 0.2s ease;
          text-decoration: none;
        }

        .auth-footer-link:hover {
          color: #2c221e;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
