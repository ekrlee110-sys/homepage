import React, { useState } from 'react';
import { Search, Filter, Sparkles, Send } from 'lucide-react';

export default function CustomersTab() {
  // Mock Customer list
  const [customers, setCustomers] = useState([
    { id: 1, name: '이경래', gender: '남성', age: 35, grade: 'Gold', frequency: '많음', sales: 150000, points: 5000, date: '2026-07-14' },
    { id: 2, name: '김민주', gender: '남성', age: 24, grade: 'VVIP', frequency: '많음', sales: 890000, points: 26000, date: '2026-07-14' },
    { id: 3, name: '윤아름', gender: '여성', age: 28, grade: 'Family', frequency: '적음', sales: 29000, points: 500, date: '2026-07-14' },
    { id: 4, name: '장민호', gender: '남성', age: 42, grade: 'VIP', frequency: '보통', sales: 345000, points: 12000, date: '2026-07-13' },
    { id: 5, name: '송지은', gender: '여성', age: 31, grade: 'VVIP', frequency: '많음', sales: 1250000, points: 50000, date: '2026-07-12' },
    { id: 6, name: '한재상', gender: '남성', age: 48, grade: 'Family', frequency: '적음', sales: 62000, points: 1500, date: '2026-07-12' },
    { id: 7, name: '최윤서', gender: '여성', age: 22, grade: 'Gold', frequency: '보통', sales: 180000, points: 6400, date: '2026-07-10' },
    { id: 8, name: '정동현', gender: '남성', age: 53, grade: 'VIP', frequency: '보통', sales: 410000, points: 15000, date: '2026-07-09' },
    { id: 9, name: '박하은', gender: '여성', age: 37, grade: 'Gold', frequency: '많음', sales: 240000, points: 9000, date: '2026-07-08' },
    { id: 10, name: '강현우', gender: '남성', age: 29, grade: 'Family', frequency: '적음', sales: 29000, points: 500, date: '2026-07-07' }
  ]);

  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('전체');
  const [selectedAge, setSelectedAge] = useState('전체');
  const [selectedGrade, setSelectedGrade] = useState('전체');
  const [selectedFreq, setSelectedFreq] = useState('전체');
  const [selectedAmount, setSelectedAmount] = useState('전체');

  // Point action state
  const [selectedCustId, setSelectedCustId] = useState(null);
  const [pointAmount, setPointAmount] = useState('');

  // Handle Point Awarding
  const handleAwardPoints = (e) => {
    e.preventDefault();
    if (!pointAmount || isNaN(pointAmount)) {
      alert('올바른 포인트 금액을 입력해 주세요.');
      return;
    }
    const addedPoints = parseInt(pointAmount);
    setCustomers(customers.map(c => {
      if (c.id === selectedCustId) {
        return { ...c, points: c.points + addedPoints };
      }
      return c;
    }));
    alert(`포인트 ${addedPoints.toLocaleString()}P가 지급되었습니다.`);
    setSelectedCustId(null);
    setPointAmount('');
  };

  // Filter Logic
  const filteredCustomers = customers.filter(c => {
    // 1. Search term match (Name)
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // 2. Gender match
    const matchesGender = selectedGender === '전체' || c.gender === selectedGender;
    
    // 3. Age match
    let matchesAge = true;
    if (selectedAge !== '전체') {
      if (selectedAge === '20대이하') matchesAge = c.age < 30;
      else if (selectedAge === '30대') matchesAge = c.age >= 30 && c.age < 40;
      else if (selectedAge === '40대') matchesAge = c.age >= 40 && c.age < 50;
      else if (selectedAge === '50대이상') matchesAge = c.age >= 50;
    }

    // 4. Grade match
    const matchesGrade = selectedGrade === '전체' || c.grade === selectedGrade;

    // 5. Frequency match
    const matchesFreq = selectedFreq === '전체' || c.frequency === selectedFreq;

    // 6. Purchase Amount match
    let matchesAmount = true;
    if (selectedAmount !== '전체') {
      if (selectedAmount === '10만원미만') matchesAmount = c.sales < 100000;
      else if (selectedAmount === '10만~30만원') matchesAmount = c.sales >= 100000 && c.sales < 300000;
      else if (selectedAmount === '30만~50만원') matchesAmount = c.sales >= 300000 && c.sales < 500000;
      else if (selectedAmount === '50만원이상') matchesAmount = c.sales >= 500000;
    }

    return matchesSearch && matchesGender && matchesAge && matchesGrade && matchesFreq && matchesAmount;
  });

  return (
    <div className="tab-content animate-fade-in">
      <div className="tab-header-title">
        <h2>고객관리</h2>
        <p>전체 고객 명단 및 필터링 검색 시스템</p>
      </div>

      {/* Filter Options Panel */}
      <div className="filter-panel">
        <div className="filter-title">
          <Filter size={18} />
          <span>상세 검색 필터</span>
        </div>
        
        <div className="filter-grid">
          {/* Search bar */}
          <div className="filter-item search-box">
            <label>고객명 검색</label>
            <div className="search-input-wrapper">
              <Search size={16} />
              <input 
                type="text" 
                placeholder="고객 이름 입력..." 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Gender filter */}
          <div className="filter-item">
            <label>성별</label>
            <select value={selectedGender} onChange={e => setSelectedGender(e.target.value)}>
              <option value="전체">전체 성별</option>
              <option value="남성">남성</option>
              <option value="여성">여성</option>
            </select>
          </div>

          {/* Age filter */}
          <div className="filter-item">
            <label>연령대</label>
            <select value={selectedAge} onChange={e => setSelectedAge(e.target.value)}>
              <option value="전체">전체 연령대</option>
              <option value="20대이하">20대 이하</option>
              <option value="30대">30대</option>
              <option value="40대">40대</option>
              <option value="50대이상">50대 이상</option>
            </select>
          </div>

          {/* Grade filter */}
          <div className="filter-item">
            <label>고객등급</label>
            <select value={selectedGrade} onChange={e => setSelectedGrade(e.target.value)}>
              <option value="전체">전체 등급</option>
              <option value="VVIP">VVIP</option>
              <option value="VIP">VIP</option>
              <option value="Gold">Gold</option>
              <option value="Family">Family</option>
            </select>
          </div>

          {/* Purchase Frequency */}
          <div className="filter-item">
            <label>구매빈도</label>
            <select value={selectedFreq} onChange={e => setSelectedFreq(e.target.value)}>
              <option value="전체">전체 구매빈도</option>
              <option value="많음">많음 (4회 이상)</option>
              <option value="보통">보통 (2~3회)</option>
              <option value="적음">적음 (1회)</option>
            </select>
          </div>

          {/* Purchase Amount */}
          <div className="filter-item">
            <label>구매금액대</label>
            <select value={selectedAmount} onChange={e => setSelectedAmount(e.target.value)}>
              <option value="전체">전체 구매금액</option>
              <option value="10만원미만">10만원 미만</option>
              <option value="10만~30만원">10만 ~ 30만원</option>
              <option value="30만~50만원">30만 ~ 50만원</option>
              <option value="50만원이상">50만원 이상</option>
            </select>
          </div>
        </div>
      </div>

      {/* Customer List Table */}
      <div className="table-wrapper">
        <div className="table-header">
          <h3>검색 결과 ({filteredCustomers.length}명)</h3>
        </div>
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>이름</th>
                <th>성별</th>
                <th>나이</th>
                <th>등급</th>
                <th>구매빈도</th>
                <th>누적매출액</th>
                <th>지급포인트</th>
                <th>가입일</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((cust) => (
                <tr key={cust.id}>
                  <td className="font-semibold">{cust.name}</td>
                  <td>{cust.gender}</td>
                  <td>{cust.age}세</td>
                  <td>
                    <span className={`grade-tag ${cust.grade.toLowerCase()}`}>
                      {cust.grade}
                    </span>
                  </td>
                  <td>{cust.frequency}</td>
                  <td className="font-semibold">{cust.sales.toLocaleString()}원</td>
                  <td className="gold-text font-semibold">{cust.points.toLocaleString()}P</td>
                  <td>{cust.date}</td>
                  <td>
                    <button 
                      className="point-award-btn"
                      onClick={() => setSelectedCustId(cust.id)}
                    >
                      <Sparkles size={13} />
                      <span>포인트 지급</span>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredCustomers.length === 0 && (
                <tr>
                  <td colSpan="9" className="text-center no-data">
                    조건에 부합하는 고객 정보가 존재하지 않습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Points Awarding Modal */}
      {selectedCustId !== null && (
        <div className="modal-overlay">
          <div className="point-modal animate-fade-in-up">
            <h3>포인트 즉시 지급</h3>
            <p className="modal-desc">
              선택한 고객<strong>({customers.find(c => c.id === selectedCustId)?.name})</strong>님에게 보너스 포인트를 수동 지급합니다.
            </p>
            <form onSubmit={handleAwardPoints}>
              <div className="point-input-group">
                <input 
                  type="number" 
                  placeholder="지급할 포인트 액수 (예: 1000)" 
                  required
                  value={pointAmount}
                  onChange={e => setPointAmount(e.target.value)}
                />
                <span className="unit">P</span>
              </div>
              <div className="modal-actions">
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => { setSelectedCustId(null); setPointAmount(''); }}
                >
                  취소
                </button>
                <button type="submit" className="btn-confirm">
                  <Send size={14} />
                  <span>보내기</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .filter-panel {
          background: #ffffff;
          border: 1px solid rgba(197, 168, 128, 0.2);
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: var(--shadow-sm);
        }

        .filter-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--bg-dark);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(197, 168, 128, 0.1);
          padding-bottom: 10px;
        }

        .filter-grid {
          display: grid;
          grid-template-columns: 1.5fr repeat(5, 1fr);
          gap: 16px;
        }

        .filter-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .filter-item label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .filter-item select, .search-input-wrapper input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid rgba(197, 168, 128, 0.3);
          border-radius: 8px;
          font-size: 13.5px;
          outline: none;
          background: #ffffff;
          color: var(--text-dark);
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-input-wrapper svg {
          position: absolute;
          left: 10px;
          color: var(--text-muted);
        }

        .search-input-wrapper input {
          padding-left: 32px;
        }

        .table-wrapper {
          background: #ffffff;
          border: 1px solid rgba(197, 168, 128, 0.2);
          border-radius: 20px;
          padding: 30px;
          box-shadow: var(--shadow-sm);
        }

        .table-header {
          margin-bottom: 20px;
        }

        .table-header h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--bg-dark);
        }

        .point-award-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(197, 168, 128, 0.12);
          color: var(--accent-gold-dark);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .point-award-btn:hover {
          background: var(--accent-gold-dark);
          color: #ffffff;
        }

        .no-data {
          color: var(--text-muted);
          padding: 40px 0 !important;
          font-size: 14px;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(44, 34, 30, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 110;
        }

        .point-modal {
          background: #ffffff;
          border: 1.5px solid var(--accent-gold);
          border-radius: 16px;
          padding: 30px;
          width: 100%;
          max-width: 380px;
          box-shadow: var(--shadow-lg);
        }

        .point-modal h3 {
          font-size: 18px;
          color: var(--bg-dark);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .modal-desc {
          font-size: 13.5px;
          color: var(--text-muted);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .point-input-group {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .point-input-group input {
          width: 100%;
          padding: 12px 36px 12px 16px;
          border: 1.5px solid rgba(197, 168, 128, 0.4);
          border-radius: 8px;
          font-size: 15px;
          outline: none;
        }

        .point-input-group input:focus {
          border-color: var(--accent-gold-dark);
        }

        .point-input-group .unit {
          position: absolute;
          right: 16px;
          font-size: 15px;
          font-weight: 700;
          color: var(--text-muted);
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .btn-cancel {
          background: var(--bg-secondary);
          color: var(--text-dark);
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 600;
        }

        .btn-confirm {
          background: var(--bg-dark);
          color: var(--text-light);
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .btn-confirm:hover {
          background: #463630;
        }

        @media (max-width: 1200px) {
          .filter-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .filter-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
