import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import logoImg from '../assets/logo.png';
import { 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Eye, 
  EyeOff, 
  Check, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Signup() {
  
  // Form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  // Visibilities
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Focus states for real-time validation trigger
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
  });

  // Agreements state
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    privacy: false,
    marketing: false,
    sms: false,
    emailChannel: false,
    kakao: false,
  });

  // Terms and Privacy detail toggle
  const [showTermsDetail, setShowTermsDetail] = useState(false);
  const [showPrivacyDetail, setShowPrivacyDetail] = useState(false);

  // Submit states
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // Phone number formatter
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const digits = input.replace(/\D/g, ''); // Keep only digits
    
    let formatted = '';
    if (digits.length <= 3) {
      formatted = digits;
    } else if (digits.length <= 7) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
    } else {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
    }
    
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  // Synchronize agreements
  const handleAgreeAll = (checked) => {
    setAgreements({
      all: checked,
      terms: checked,
      privacy: checked,
      marketing: checked,
      sms: checked,
      emailChannel: checked,
      kakao: checked,
    });
  };

  const handleAgreeChange = (key, checked) => {
    setAgreements((prev) => {
      const updated = { ...prev, [key]: checked };
      
      // Sync marketing sub-channels
      if (key === 'marketing') {
        updated.sms = checked;
        updated.emailChannel = checked;
        updated.kakao = checked;
      }
      
      // If any marketing subchannel changes, sync marketing main checkbox
      if (key === 'sms' || key === 'emailChannel' || key === 'kakao') {
        updated.marketing = updated.sms || updated.emailChannel || updated.kakao;
      }
      
      // Check if all criteria are satisfied for 'all'
      updated.all = 
        updated.terms && 
        updated.privacy && 
        updated.sms && 
        updated.emailChannel && 
        updated.kakao;
        
      return updated;
    });
  };

  // Real-time validations
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email);
  
  const isPasswordLengthValid = formData.password.length >= 8;
  const isPasswordSpecialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
  const isPasswordValid = isPasswordLengthValid && isPasswordSpecialCharValid;
  
  const isConfirmPasswordValid = formData.confirmPassword === formData.password && formData.confirmPassword.length > 0;
  const isNameValid = formData.name.trim().length >= 2;
  const isPhoneValid = formData.phone.replace(/\D/g, '').length >= 10; // Mobile standard

  // Form validity
  const isFormValid = 
    isEmailValid && 
    isPasswordValid && 
    isConfirmPasswordValid && 
    isNameValid && 
    isPhoneValid && 
    agreements.terms && 
    agreements.privacy;

  // Supabase Signup Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSubmitting(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            phone: formData.phone,
            marketing_opt_in: agreements.marketing,
            marketing_sms: agreements.sms,
            marketing_email: agreements.emailChannel,
            marketing_kakao: agreements.kakao,
          }
        }
      });

      if (error) throw error;

      if (data?.user) {
        setSuccessMsg('회원가입이 성공적으로 완료되었습니다! 가입하신 이메일의 메일함을 확인하여 인증 링크를 클릭해 주세요.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
        });
        setAgreements({
          all: false,
          terms: false,
          privacy: false,
          marketing: false,
          sms: false,
          emailChannel: false,
          kakao: false,
        });
        setTouched({
          name: false,
          email: false,
          password: false,
          confirmPassword: false,
          phone: false,
        });
      }
    } catch (err) {
      let friendlyMessage = err.message;
      if (err.message === 'User already registered') {
        friendlyMessage = '이미 가입된 이메일 주소입니다.';
      } else if (err.message.includes('Password')) {
        friendlyMessage = '비밀번호 강도 조건을 충족하지 못했습니다.';
      }
      setErrorMsg(friendlyMessage || '회원가입 중 에러가 발생했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card animate-fade-in-up">
        {/* Brand Header */}
        <div className="brand-header text-center">
          <Link to="/" className="signup-logo">
            <img src={logoImg} alt="산내돌짜장 로고" className="logo-img" />
          </Link>
          <h2>멤버십 회원가입</h2>
          <p className="subtitle">192시간의 약속, 산내돌짜장의 회원이 되어 보세요.</p>
        </div>

        {successMsg ? (
          <div className="success-box text-center">
            <div className="success-icon-wrapper">
              <ShieldCheck size={48} className="gold-text" />
            </div>
            <h3>환영합니다!</h3>
            <p className="success-msg">{successMsg}</p>
            <Link to="/?login=true" className="login-link-btn">
              로그인하러 가기 <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="signup-form">
            {errorMsg && (
              <div className="error-alert">
                <AlertCircle size={18} />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* 이름 입력 */}
            <div className="form-group">
              <label htmlFor="name">
                <User size={16} />
                이름 (닉네임) <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="예: 홍길동"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  className={touched.name && !isNameValid ? 'input-error' : touched.name && isNameValid ? 'input-success' : ''}
                  required
                />
                {touched.name && isNameValid && <Check size={18} className="validation-icon success-icon" />}
              </div>
              {touched.name && !isNameValid && (
                <p className="validation-error">이름을 2자 이상 입력해 주세요.</p>
              )}
            </div>

            {/* 이메일 입력 */}
            <div className="form-group">
              <label htmlFor="email">
                <Mail size={16} />
                이메일 <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@sannae.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className={touched.email && !isEmailValid ? 'input-error' : touched.email && isEmailValid ? 'input-success' : ''}
                  required
                />
                {touched.email && isEmailValid && <Check size={18} className="validation-icon success-icon" />}
              </div>
              {touched.email && !isEmailValid && (
                <p className="validation-error">올바른 이메일 형식을 입력해 주세요.</p>
              )}
            </div>

            {/* 비밀번호 입력 */}
            <div className="form-group">
              <label htmlFor="password">
                <Lock size={16} />
                비밀번호 <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="비밀번호 입력"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={() => handleBlur('password')}
                  className={touched.password && !isPasswordValid ? 'input-error' : touched.password && isPasswordValid ? 'input-success' : ''}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-toggle-btn"
                  tabIndex="-1"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              
              {/* 비밀번호 유효성 조건 리스트 */}
              <div className="password-rules">
                <div className={`rule-item ${isPasswordLengthValid ? 'rule-met' : 'rule-unmet'}`}>
                  <Check size={12} />
                  <span>8자 이상</span>
                </div>
                <div className={`rule-item ${isPasswordSpecialCharValid ? 'rule-met' : 'rule-unmet'}`}>
                  <Check size={12} />
                  <span>특수문자 조합</span>
                </div>
              </div>
            </div>

            {/* 비밀번호 확인 */}
            <div className="form-group">
              <label htmlFor="confirmPassword">
                <Lock size={16} />
                비밀번호 확인 <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="비밀번호 재입력"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={() => handleBlur('confirmPassword')}
                  className={touched.confirmPassword && !isConfirmPasswordValid ? 'input-error' : touched.confirmPassword && isConfirmPasswordValid ? 'input-success' : ''}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="eye-toggle-btn"
                  tabIndex="-1"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {touched.confirmPassword && formData.confirmPassword.length > 0 && (
                isConfirmPasswordValid ? (
                  <p className="validation-success-text">비밀번호가 일치합니다.</p>
                ) : (
                  <p className="validation-error">비밀번호가 일치하지 않습니다.</p>
                )
              )}
            </div>

            {/* 휴대폰 번호 입력 */}
            <div className="form-group">
              <label htmlFor="phone">
                <Phone size={16} />
                휴대폰 번호 <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onBlur={() => handleBlur('phone')}
                  className={touched.phone && !isPhoneValid ? 'input-error' : touched.phone && isPhoneValid ? 'input-success' : ''}
                  required
                />
                {touched.phone && isPhoneValid && <Check size={18} className="validation-icon success-icon" />}
              </div>
              {touched.phone && !isPhoneValid && (
                <p className="validation-error">올바른 휴대폰 번호를 입력해 주세요.</p>
              )}
            </div>

            {/* 약관 동의 체크박스 영역 */}
            <div className="agreement-section">
              <div className="agreement-header">
                <h3>서비스 약관 동의</h3>
              </div>
              
              <div className="agreement-list">
                {/* 전체 동의 */}
                <label className="checkbox-container all-agreement">
                  <input
                    type="checkbox"
                    checked={agreements.all}
                    onChange={(e) => handleAgreeAll(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  <span className="agree-label-text">전체 약관에 동의합니다.</span>
                </label>

                <hr className="agreement-divider" />

                {/* 필수 1: 이용약관 */}
                <div className="agreement-item-wrapper">
                  <div className="agreement-item-row">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={agreements.terms}
                        onChange={(e) => handleAgreeChange('terms', e.target.checked)}
                        required
                      />
                      <span className="checkmark"></span>
                      <span className="agree-label-text">
                        [필수] 이용약관 동의
                      </span>
                    </label>
                    <button
                      type="button"
                      className="detail-toggle-btn"
                      onClick={() => setShowTermsDetail(!showTermsDetail)}
                    >
                      {showTermsDetail ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                  {showTermsDetail && (
                    <div className="agreement-detail-box">
                      제1조(목적) 본 약관은 산내돌짜장(이하 "회사")이 제공하는 인터넷 멤버십 서비스의 이용에 관한 권리와 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.
                      제2조(회원 가입 및 관리) 회원은 회사가 정한 등록 양식에 따라 정보를 기입한 후 본 약관에 동의함으로써 가입이 승인됩니다. 기입 정보는 실제 정보여야 하며 허위 기입 시 불이익을 받을 수 있습니다.
                    </div>
                  )}
                </div>

                {/* 필수 2: 개인정보 */}
                <div className="agreement-item-wrapper">
                  <div className="agreement-item-row">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={agreements.privacy}
                        onChange={(e) => handleAgreeChange('privacy', e.target.checked)}
                        required
                      />
                      <span className="checkmark"></span>
                      <span className="agree-label-text">
                        [필수] 개인정보 수집 및 이용 동의
                      </span>
                    </label>
                    <button
                      type="button"
                      className="detail-toggle-btn"
                      onClick={() => setShowPrivacyDetail(!showPrivacyDetail)}
                    >
                      {showPrivacyDetail ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                  {showPrivacyDetail && (
                    <div className="agreement-detail-box">
                      1. 수집 항목: 이름(닉네임), 이메일 주소, 비밀번호, 휴대폰 번호.
                      2. 수집 목적: 멤버십 서비스 제공, 고객 식별, 예약 문의 응대, 공지사항 전달.
                      3. 보유 및 이용 기간: 회원 탈퇴 시까지 혹은 관계 법령에 따른 보존 기간까지 안전하게 보관 후 파기합니다.
                    </div>
                  )}
                </div>

                {/* 선택: 마케팅 수신동의 */}
                <div className="agreement-item-wrapper">
                  <div className="agreement-item-row">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={agreements.marketing}
                        onChange={(e) => handleAgreeChange('marketing', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      <span className="agree-label-text">
                        [선택] 마케팅 정보 수신 동의
                      </span>
                    </label>
                  </div>
                  
                  {/* 마케팅 채널 상세 체크박스 */}
                  <div className="marketing-sub-channels">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={agreements.sms}
                        onChange={(e) => handleAgreeChange('sms', e.target.checked)}
                      />
                      <span className="checkmark sm-checkmark"></span>
                      <span className="agree-label-text-sm">SMS</span>
                    </label>
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={agreements.emailChannel}
                        onChange={(e) => handleAgreeChange('emailChannel', e.target.checked)}
                      />
                      <span className="checkmark sm-checkmark"></span>
                      <span className="agree-label-text-sm">이메일</span>
                    </label>
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={agreements.kakao}
                        onChange={(e) => handleAgreeChange('kakao', e.target.checked)}
                      />
                      <span className="checkmark sm-checkmark"></span>
                      <span className="agree-label-text-sm">카카오 알림톡</span>
                    </label>
                  </div>
                </div>

              </div>
            </div>

            {/* 가입하기 버튼 */}
            <button
              type="submit"
              className={`submit-btn ${isFormValid ? 'active-btn' : 'disabled-btn'}`}
              disabled={!isFormValid || submitting}
            >
              {submitting ? '가입 신청 중...' : '회원가입 완료'}
            </button>
          </form>
        )}

        {/* Footer Link */}
        <div className="signup-footer text-center">
          <p>
            이미 계정이 있으신가요?{' '}
            <Link to="/?login=true" className="login-link">
              로그인
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        .signup-container {
          min-height: 100vh;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .signup-card {
          background: var(--bg-primary);
          border: 1px solid rgba(197, 168, 128, 0.35);
          border-radius: 24px;
          padding: 48px;
          width: 100%;
          max-width: 520px;
          box-shadow: var(--shadow-lg);
          transition: var(--transition-smooth);
        }

        .signup-logo {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 900;
          letter-spacing: -0.5px;
          font-size: 24px;
          color: var(--bg-dark);
          margin-bottom: 16px;
          text-decoration: none;
        }

        .logo-img {
          height: 60px;
          width: auto;
          object-fit: contain;
        }

        .brand-header {
          margin-bottom: 36px;
        }

        .brand-header h2 {
          font-size: 24px;
          font-weight: 700;
          color: var(--bg-dark);
          margin-bottom: 8px;
        }

        .brand-header .subtitle {
          font-size: 14px;
          color: var(--text-muted);
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .error-alert {
          background-color: rgba(185, 74, 56, 0.08);
          border: 1px solid var(--accent-spicy);
          color: var(--accent-spicy);
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 13.5px;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: fadeIn 0.3s ease-out;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--bg-dark);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .form-group label .required {
          color: var(--accent-spicy);
          margin-left: 2px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-wrapper input {
          width: 100%;
          padding: 13px 16px;
          border: 1.5px solid rgba(197, 168, 128, 0.35);
          border-radius: 12px;
          background: #ffffff;
          font-size: 14px;
          color: var(--bg-dark);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-wrapper input:focus {
          border-color: var(--accent-gold-dark);
          box-shadow: 0 0 0 3.5px rgba(197, 168, 128, 0.18);
        }

        .input-wrapper input.input-error {
          border-color: var(--accent-spicy);
        }

        .input-wrapper input.input-error:focus {
          box-shadow: 0 0 0 3.5px rgba(185, 74, 56, 0.15);
        }

        .input-wrapper input.input-success {
          border-color: #2e7d32;
        }

        .validation-icon {
          position: absolute;
          right: 16px;
        }

        .success-icon {
          color: #2e7d32;
        }

        .eye-toggle-btn {
          position: absolute;
          right: 16px;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .eye-toggle-btn:hover {
          color: var(--bg-dark);
        }

        .validation-error {
          font-size: 12.5px;
          color: var(--accent-spicy);
          margin-top: 2px;
        }

        .validation-success-text {
          font-size: 12.5px;
          color: #2e7d32;
          margin-top: 2px;
        }

        .password-rules {
          display: flex;
          gap: 12px;
          margin-top: 4px;
        }

        .rule-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .rule-unmet {
          color: var(--text-muted);
          opacity: 0.65;
        }

        .rule-unmet svg {
          opacity: 0;
        }

        .rule-met {
          color: #2e7d32;
        }

        .rule-met svg {
          color: #2e7d32;
        }

        /* Agreement Section */
        .agreement-section {
          background: rgba(197, 168, 128, 0.08);
          border: 1px solid rgba(197, 168, 128, 0.25);
          border-radius: 16px;
          padding: 20px;
          margin-top: 10px;
        }

        .agreement-header h3 {
          font-size: 14.5px;
          font-weight: 700;
          color: var(--bg-dark);
          margin-bottom: 14px;
        }

        .agreement-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .agreement-divider {
          border: 0;
          height: 1px;
          background: rgba(197, 168, 128, 0.25);
          margin: 4px 0;
        }

        /* Checkbox Styling */
        .checkbox-container {
          display: block;
          position: relative;
          padding-left: 28px;
          cursor: pointer;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--bg-dark);
          user-select: none;
        }

        .checkbox-container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          position: absolute;
          top: 2px;
          left: 0;
          height: 18px;
          width: 18px;
          background-color: #ffffff;
          border: 1.5px solid rgba(197, 168, 128, 0.6);
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .checkbox-container:hover input ~ checkmark {
          border-color: var(--accent-gold-dark);
        }

        .checkbox-container input:checked ~ .checkmark {
          background-color: var(--accent-gold-dark);
          border-color: var(--accent-gold-dark);
        }

        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        .checkbox-container input:checked ~ .checkmark:after {
          display: block;
        }

        .checkbox-container .checkmark:after {
          left: 5px;
          top: 2px;
          width: 5px;
          height: 9px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .all-agreement {
          font-weight: 700;
        }

        .all-agreement .checkmark {
          height: 20px;
          width: 20px;
          border-width: 2px;
          border-color: var(--bg-dark);
        }

        .all-agreement input:checked ~ .checkmark {
          background-color: var(--bg-dark);
          border-color: var(--bg-dark);
        }

        .all-agreement .checkmark:after {
          left: 6px;
          top: 2px;
          width: 5px;
          height: 10px;
        }

        .agreement-item-wrapper {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .agreement-item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-toggle-btn {
          color: var(--text-muted);
          padding: 2px;
          cursor: pointer;
        }

        .detail-toggle-btn:hover {
          color: var(--bg-dark);
        }

        .agreement-detail-box {
          background: #ffffff;
          border: 1px solid rgba(197, 168, 128, 0.2);
          border-radius: 8px;
          padding: 12px;
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.5;
          max-height: 80px;
          overflow-y: auto;
          margin-left: 28px;
        }

        .marketing-sub-channels {
          display: flex;
          gap: 16px;
          margin-left: 28px;
          margin-top: 4px;
        }

        .agree-label-text-sm {
          font-size: 12.5px;
          color: var(--text-muted);
        }

        .sm-checkmark {
          height: 15px;
          width: 15px;
          top: 2px;
        }

        .checkbox-container .sm-checkmark:after {
          left: 4px;
          top: 1px;
          width: 4px;
          height: 8px;
        }

        /* Submit Button */
        .submit-btn {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          margin-top: 12px;
        }

        .disabled-btn {
          background-color: rgba(44, 34, 30, 0.1);
          color: var(--text-muted);
          cursor: not-allowed;
          border: 1.5px solid transparent;
        }

        .active-btn {
          background-color: var(--bg-dark);
          color: var(--text-light);
          box-shadow: 0 4px 12px rgba(44, 34, 30, 0.2);
        }

        .active-btn:hover {
          background-color: #463630;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(44, 34, 30, 0.3);
        }

        .active-btn:active {
          transform: translateY(0);
        }

        .signup-footer {
          margin-top: 32px;
          font-size: 13.5px;
          color: var(--text-muted);
        }

        .login-link {
          color: var(--accent-gold-dark);
          font-weight: 700;
          text-decoration: underline;
          margin-left: 4px;
        }

        .login-link:hover {
          color: var(--bg-dark);
        }

        /* Success screen */
        .success-box {
          padding: 24px 0;
        }

        .success-icon-wrapper {
          background: rgba(197, 168, 128, 0.1);
          width: 80px;
          height: 80px;
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px auto;
        }

        .success-box h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--bg-dark);
          margin-bottom: 12px;
        }

        .success-msg {
          font-size: 14.5px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .login-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-dark);
          color: var(--text-light);
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14.5px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .login-link-btn:hover {
          background: #463630;
          transform: translateX(2px);
        }
      `}</style>
    </div>
  );
}
