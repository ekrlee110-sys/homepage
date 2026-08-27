import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

export default function AdminResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);
const [showPassword, setShowPassword] = useState(false);
  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if (!password || !passwordConfirm) {
      alert('새 비밀번호를 두 번 입력해주세요.');
      return;
    }

    if (password !== passwordConfirm) {
      alert('두 비밀번호가 서로 다릅니다.');
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      alert('비밀번호 변경에 실패했습니다.');
      return;
    }

    alert('새 비밀번호로 변경되었습니다.');
    navigate('/admin/login');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f7f5f0',
      }}
    >
      <form
        onSubmit={handleUpdatePassword}
        style={{
          width: '360px',
          padding: '40px',
          background: 'white',
          borderRadius: '20px',
        }}
      >
        <h1>새 비밀번호 설정</h1>

        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="새 비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '14px',
            marginBottom: '12px',
          }}
        />

        <input
         type={showPassword ? 'text' : 'password'}
          placeholder="새 비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          style={{
            width: '100%',
            padding: '14px',
            marginBottom: '16px',
          }}
        /><button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  style={{
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    cursor: 'pointer',
  }}
>
  {showPassword ? '🙈 비밀번호 숨기기' : '👁 비밀번호 보기'}
</button>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            cursor: 'pointer',
          }}
        >
          {loading ? '변경 중...' : '새 비밀번호 저장'}
        </button>
      </form>
    </div>
  );
}