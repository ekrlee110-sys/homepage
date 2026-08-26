import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert('관리자 로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
      return;
    }

    navigate('/admin');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f7f5f0'
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          width: '360px',
          padding: '40px',
          background: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
        }}
      >
        <h1 style={{ marginBottom: '8px' }}>관리자 로그인</h1>
        <p style={{ marginBottom: '30px', color: '#666' }}>
          산내돌짜장 관리자 전용
        </p>

        <input
          type="email"
          placeholder="관리자 이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '14px',
            marginBottom: '12px',
            boxSizing: 'border-box'
          }}
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '14px',
            marginBottom: '20px',
            boxSizing: 'border-box'
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            cursor: 'pointer'
          }}
        >
          {loading ? '로그인 중...' : '관리자 로그인'}
        </button>
      </form>
    </div>
  );
}