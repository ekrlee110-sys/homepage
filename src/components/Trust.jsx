import React, { useEffect, useRef, useState } from 'react';
import Social from './Social';

export default function Trust() {
  const certificates = [{"id": "korean-food-master", "image": "/trust/updated/korean-food-master.jpg", "title": "대한민국 한식대가", "desc": "현대음식·소스 · 대한민국한식포럼 · 2025년"}, {"id": "korean-cuisine-master", "image": "/trust/updated/korean-cuisine-master.jpg", "title": "대한민국 한식조리명인", "desc": "발효음식 · 국제명인조리사협회 · 2022년"}, {"id": "fermentation-master", "image": "/trust/updated/fermentation-master.jpg", "title": "대한민국 발효대가", "desc": "한국장류발효인협회 · 2025년"}];
  const qualifications = [{"id": "kimchi-instructor", "image": "/trust/updated/kimchi-instructor.jpg", "title": "김치지도사", "desc": "대한민국한식포럼 · 민간자격 · 2024년", "crop": {"viewBox": "0 0 730 1055", "width": 1536, "height": 1055}}, {"id": "local-food-instructor", "image": "/trust/updated/local-food-instructor.jpg", "title": "향토음식지도사", "desc": "대한민국한식포럼 · 민간자격 · 2024년", "crop": {"viewBox": "791 0 745 1055", "width": 1536, "height": 1055}}, {"id": "soy-sauce-appraiser", "image": "/trust/updated/soy-sauce-appraiser.jpg", "title": "씨간장평가사", "desc": "한국장류발효인협회 · 2025년"}, {"id": "traditional-sauce-manager", "image": "/trust/updated/traditional-sauce-manager.jpg", "title": "전통장류관리사 2급", "desc": "한국전통치유발효협회 · 민간자격 · 2025년", "crop": {"viewBox": "0 0 730 1076", "width": 1536, "height": 1076}}, {"id": "traditional-sauce-maker", "image": "/trust/updated/traditional-sauce-maker.jpg", "title": "전통장류제조사 2급", "desc": "한국전통치유발효협회 · 민간자격 · 2025년", "crop": {"viewBox": "791 0 745 1076", "width": 1536, "height": 1076}}];
  const awards = [{"id": "local-food-award", "image": "/trust/updated/local-food-award.jpg", "title": "향토음식 부문 최우수상", "desc": "해양수산부장관상 · 한국조리과학연구회팀 · 2025년", "crop": {"viewBox": "791 0 745 1023", "width": 1536, "height": 1023}}, {"id": "master-chef-award", "image": "/trust/updated/master-chef-award.jpg", "title": "코리아마스터셰프챔피언십 최우수상", "desc": "한국조리기능장협회 · 2025년"}, {"id": "healing-food-award", "image": "/trust/updated/healing-food-award.jpg", "title": "대한민국 치유식품대전 최우수상", "desc": "서울특별시의회의장상 · 2025년"}, {"id": "knowledge-recognition", "image": "/trust/updated/knowledge-recognition.jpg", "title": "대한민국 신지식인", "desc": "한국신지식인협회중앙회 · K-푸드 미슐랭 분야"}, {"id": "consumer-assessment", "image": "/trust/updated/consumer-assessment.jpg", "title": "KCIA 외식업 우수 평가", "desc": "한국소비자산업평가 · 대전 동구 중식당 부문 · 2022년"}];
  const education = [{"id": "yonsei-course", "image": "/trust/updated/yonsei-course.jpg", "title": "외식산업고위자과정 수료", "desc": "연세대학교 생활환경대학원 · 제56기 · 2024년"}, {"id": "jangbogo-course", "image": "/trust/updated/jangbogo-course.jpg", "title": "장보고아카데미 수료", "desc": "장보고글로벌재단 · 7기 CEO 역량강화과정 · 2026년"}, {"id": "traditional-sauce-course", "image": "/trust/updated/traditional-sauce-course.jpg", "title": "전통장류제조사과정 수료", "desc": "한국전통치유발효협회 · 28시간 교육 · 2025년", "crop": {"viewBox": "791 0 745 1033", "width": 1536, "height": 1033}}, {"id": "korean-food-adviser", "image": "/trust/updated/korean-food-adviser.jpg", "title": "한식 자문위원 임명", "desc": "한국전통치유발효협회 · 2025년"}, {"id": "healing-food-appointment", "image": "/trust/updated/healing-food-appointment.jpg", "title": "국제힐링푸드연맹 위촉", "desc": "국제힐링푸드연맹 · 2025년"}, {"id": "journalist-commendation", "image": "/trust/updated/journalist-commendation.jpg", "title": "저널리스트아카데미 표창", "desc": "한국시민기자협회 뉴스포털1 · 2026년"}, {"id": "alumni-commendation", "image": "/trust/updated/alumni-commendation.jpg", "title": "총동창회 표창", "desc": "우송고등학교(대전상고) 총동창회 · 2025년"}, {"id": "sauce-education-commendation", "image": "/trust/updated/sauce-education-commendation.jpg", "title": "전통장류 교육 표창", "desc": "한국전통치유발효협회 · 2025년", "crop": {"viewBox": "0 0 730 1033", "width": 1536, "height": 1033}}];
  const support = [{"id": "red-cross-sharing", "image": "/trust/updated/red-cross-sharing.jpg", "title": "희망풍차 나눔음식점", "desc": "대한적십자사"}, {"id": "bridge-store", "image": "/trust/updated/bridge-store.jpg", "title": "브리지스토어", "desc": "희망을 잇다 · 산내돌짜장 대전본점"}];
  const serviceAwards = [{"id": "donggu-commendation", "image": "/trust/updated/donggu-commendation.jpg", "title": "장애인복지 증진 공로 표창", "desc": "대전광역시 동구청장 · 2025년"}, {"id": "junggu-commendation", "image": "/trust/updated/junggu-commendation.jpg", "title": "지역사회 공로 표창", "desc": "대전광역시 중구의회의장 · 2017년"}, {"id": "volunteer-commendation", "image": "/trust/updated/volunteer-commendation.jpg", "title": "봉사상 표창", "desc": "1004클럽나눔공동체 · 2026년"}, {"id": "fermentation-association-commendation", "image": "/trust/updated/fermentation-association-commendation.jpg", "title": "나눔·봉사 공로 표창", "desc": "한국전통치유발효협회 · 2025년"}];
  const relatedCertificates = [{"id": "korean-food-master-certificate", "image": "/trust/updated/korean-food-master-certificate.jpg", "title": "대한민국 한식대가 인증서", "desc": "현대음식·소스 · 대한민국한식포럼 · 2025년"}, {"id": "cuisine-master-certificate", "image": "/trust/updated/cuisine-master-certificate.jpg", "title": "대한민국 한식조리명인 인증서", "desc": "발효음식 · 국제명인조리사협회 · 2022년", "crop": {"viewBox": "791 0 745 1024", "width": 1536, "height": 1024}}];
  const media = [{"image": "/trust/photo-12.jpg", "title": "KBS 2TV 생생정보", "desc": "묵은지 돌짜장"}, {"image": "/trust/photo-13.jpg", "title": "KBS 2TV 생생정보", "desc": "통닭 돌짜장"}, {"image": "/trust/photo-14.jpg", "title": "SBS 생방송 투데이", "desc": "돌짜장"}, {"image": "/trust/photo-15.jpg", "title": "SBS 생방송 투데이", "desc": "짜장 소스"}, {"image": "/trust/photo-16.jpg", "title": "MBC 오늘N", "desc": "묵은지 돌짜장"}, {"image": "/trust/photo-17.jpg", "title": "MBC 오늘N", "desc": "산내돌짜장 소개"}, {"image": "/trust/photo-18.jpg", "title": "충청신문", "desc": "산내돌짜장 소개 · 2025년"}];
  const [selected, setSelected] = useState(null);
  const [expanded, setExpanded] = useState({});
  const viewer = useRef(null);
  useEffect(() => {
    if (selected && viewer.current && !viewer.current.open) viewer.current.showModal();
  }, [selected]);
  const picture = (item) => item.crop ? (
    <svg className="certificate-picture" viewBox={item.crop.viewBox} role="img" aria-label={item.title}>
      <title>{item.title}</title><image href={item.image} width={item.crop.width} height={item.crop.height} />
    </svg>
  ) : <img src={item.image} alt={item.title} loading="lazy" />;

  const credentialTitleEmphasis = {
    'korean-food-master': '한식대가',
    'korean-cuisine-master': '한식조리명인',
    'fermentation-master': '발효대가',
    'kimchi-instructor': '김치지도사',
    'local-food-instructor': '향토음식지도사',
    'soy-sauce-appraiser': '씨간장평가사',
    'traditional-sauce-manager': '전통장류관리사 2급',
    'traditional-sauce-maker': '전통장류제조사 2급',
    'local-food-award': '최우수상',
    'master-chef-award': '코리아마스터셰프챔피언십',
    'healing-food-award': '치유식품대전 최우수상',
    'knowledge-recognition': '대한민국 신지식인',
    'consumer-assessment': 'KCIA 외식업 우수 평가',
    'korean-food-master-certificate': '한식대가',
    'cuisine-master-certificate': '한식조리명인',
    'donggu-commendation': '장애인복지 증진 공로 표창',
    'junggu-commendation': '지역사회 공로 표창',
    'volunteer-commendation': '봉사상 표창',
    'fermentation-association-commendation': '나눔·봉사 공로 표창'
  };

  const broadcasterEmphasis = {
    'KBS 2TV 생생정보': 'KBS 2TV',
    'SBS 생방송 투데이': 'SBS',
    'MBC 오늘N': 'MBC',
    '충청신문': '충청신문'
  };

  const supportTitleEmphasis = {
    'red-cross-sharing': '희망풍차 나눔음식점',
    'bridge-store': '브리지스토어'
  };

  const supportDescriptionEmphasis = {
    'red-cross-sharing': '대한적십자사',
    'donggu-commendation': '대전광역시 동구청장',
    'junggu-commendation': '대전광역시 중구의회의장',
    'volunteer-commendation': '1004클럽나눔공동체',
    'fermentation-association-commendation': '한국전통치유발효협회'
  };

  const renderEvidenceTitle = (item, kind) => {
    const phrase = kind === 'media-evidence'
      ? broadcasterEmphasis[item.title]
      : kind === 'support-evidence'
        ? supportTitleEmphasis[item.id]
      : credentialTitleEmphasis[item.id];
    const phraseIndex = phrase ? item.title.indexOf(phrase) : -1;
    if (phraseIndex < 0) return item.title;
    const className = kind === 'media-evidence'
      ? 'broadcast-title-emphasis'
      : kind === 'support-evidence'
        ? 'support-org-emphasis'
        : 'credential-title-emphasis';

    return <>{item.title.slice(0, phraseIndex)}<span className={className}>{phrase}</span>{item.title.slice(phraseIndex + phrase.length)}</>;
  };

  const renderEvidenceDescription = (item) => {
    const phrase = supportDescriptionEmphasis[item.id];
    const phraseIndex = phrase ? item.desc.indexOf(phrase) : -1;
    if (phraseIndex < 0) return item.desc;
    return <>{item.desc.slice(0, phraseIndex)}<span className="support-org-emphasis">{phrase}</span>{item.desc.slice(phraseIndex + phrase.length)}</>;
  };

  const cards = (items, kind = '') => (
    <div className={`evidence-grid ${kind}`}>
      {items.map(item => <article className={`evidence-card ${kind}`} key={item.id || item.image}>
        <button type="button" className="evidence-photo" onClick={() => setSelected(item)} aria-label={`${item.title} 사진 크게 보기`}>
          {picture(item)}<span className="photo-zoom">크게 보기</span>
        </button>
        <div><h3>{renderEvidenceTitle(item, kind)}</h3><p>{renderEvidenceDescription(item)}</p></div>
      </article>)}
    </div>
  );
  const more = (title, items, kind = '') => <details className="evidence-more" onToggle={event => { const open = event.currentTarget.open; setExpanded(previous => ({ ...previous, [title]: open })); }}><summary>{title}<span>{items.length}건</span></summary>{expanded[title] && cards(items, kind)}</details>;

  const reviews = [
    {
      id: 1,
      quote: '“돌판에 나오는 짜장이라 그런지 끝까지 따뜻하게 먹을 수 있어서 좋았어요!”',
      author: '네이버 방문자 리뷰 · 주주뽈롱 · 2026.09.25'
    },
    {
      id: 2,
      quote: '“주말에 가족끼리 밥먹으러 왔는데 정말 맛있네요”',
      author: '네이버 방문자 리뷰 · 엄태웅580 · 2026.09.27'
    },
    {
      id: 3,
      quote: '“애들도 좋아하고 만족스럽습니당~”',
      author: '네이버 방문자 리뷰 · plus0703 · 2026.09.26'
    }
  ];

  return (
    <section id="trust" className="trust-draft-section section-padding">
      <div className="container">
        <nav className="trust-shortcuts" aria-label="인증과 나눔 바로가기">
          <a href="#trust-certificates">인증·수상</a><a href="#trust-media">방송·언론</a><a href="#trust-sharing">나눔·후원</a>
        </nav>
        <div className="evidence-block" id="trust-certificates">
          <span className="trust-label">인증·수상</span><h2 className="trust-headline"><span className="trust-mobile-emphasis">한식의 경험</span>을 한 그릇에 담습니다</h2>
          <p className="evidence-intro">한식과 발효의 경험에 <span className="trust-copy-emphasis">192시간 숙성의 정성</span>을 더했습니다.</p>
          {cards(certificates, 'main-certificates')}
          <p className="evidence-hint">사진을 누르면 문서를 크게 볼 수 있습니다</p>
          {more('대표 인증서 보기', relatedCertificates)}
          {more('한식·발효 자격', qualifications)}
          {more('수상·평가', awards)}
          {more('교육·대외활동', education)}
        </div>
        <div className="evidence-block" id="trust-media">
          <span className="trust-label">방송·언론</span><h2 className="trust-headline"><span className="trust-media-headline-emphasis">방송이 소개한</span> 산내돌짜장</h2>
          {cards(media.slice(0, 3), 'media-evidence')}
          {more('방송·언론 더 보기', media.slice(3), 'media-evidence')}
        </div>
        <div className="evidence-block" id="trust-sharing">
          <span className="trust-label">나눔·후원</span><h2 className="trust-headline">따뜻한 한 끼를 함께 나눕니다</h2>
          <div className="sharing-story">
            <div><h3><span className="support-org-emphasis">동구아름다운복지관</span>과 함께합니다</h3>
              <p>지역사회 장애인분들과 일상을 나누며 <span className="trust-copy-emphasis">꾸준히 후원</span>하고 있습니다.</p>
              <ul className="sharing-actions"><li>후원금 전달</li><li>매장 식사 지원</li><li>매달 감자탕용 등뼈 지원</li></ul>
              <p>직접 짜장면을 만들어 대접하는 <span className="trust-copy-emphasis">식사 봉사</span>에도 함께했습니다.</p>
            </div>
            <figure><img src="/trust/photo-19.jpg" alt="짜장면 식사 봉사를 위해 준비한 재료" loading="lazy" /><figcaption>식사 봉사를 위해 준비한 재료</figcaption></figure>
          </div>
          {cards(support, 'support-evidence')}
          {more('나눔·봉사 표창 보기', serviceAwards)}
        </div>

        {/* 2. REAL VOICE Section */}
        <div className="real-voice-block">
          <div className="real-voice-container">
            {/* Left Big Experience Photo Card */}
            <div className="voice-photo-card animate-fade-in">
              <img
                className="voice-photo"
                src="/family-dining-sannae-square.png"
                alt="산내돌짜장에서 가족이 함께 돌짜장을 나누는 모습"
                loading="lazy"
              />
            </div>

            {/* Right Review List */}
            <div className="voice-content-right animate-fade-in-up">
              <span className="trust-label">REAL VOICE</span>
              <h2 className="voice-headline">
                먹어본 사람들의 말이<br />
                가장 정확합니다.
              </h2>

              <div className="reviews-list">
                {reviews.map((rev) => (
                  <div key={rev.id} className="review-card">
                    <p className="review-quote">{rev.quote}</p>
                    <span className="review-author">{rev.author}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Social />

      <dialog ref={viewer} className="evidence-viewer" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) viewer.current.close(); }}>
        {selected && <>
          <div className="viewer-header"><div><h2>{selected.title}</h2><p>{selected.desc}</p></div><button type="button" onClick={() => viewer.current.close()} aria-label="사진 닫기">닫기 ×</button></div>
          <div className="viewer-picture">{picture(selected)}</div>
          <a className="viewer-original" href={selected.image} target="_blank" rel="noopener noreferrer">원본 사진 보기 ↗</a>
        </>}
      </dialog>

      <style>{`
        .trust-shortcuts { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:36px; }
        .trust-shortcuts a { padding:10px 18px; border:1px solid #d8d3c9; border-radius:24px; color:#285342; text-decoration:none; font-size:14px; font-weight:700; }
        .trust-shortcuts a:hover { background:#ecefe9; }
        .evidence-block { margin-bottom:80px; scroll-margin-top:100px; }
        .evidence-intro { max-width:760px; line-height:1.8; margin:0 0 28px; color:#444; word-break:keep-all; }
        .evidence-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; align-items:stretch; }
        .evidence-card { min-width:0; display:flex; flex-direction:column; border:1px solid #ded8ce; border-radius:10px; overflow:hidden; background:#fffdf8; }
        .evidence-photo { position:relative; display:flex; align-items:center; justify-content:center; width:100%; height:280px; flex:none; padding:18px; border:0; box-sizing:border-box; background:#f5f2ec; cursor:zoom-in; }
        .evidence-photo img, .certificate-picture { display:block; width:100%; height:100%; object-fit:contain; }
        .main-certificates .evidence-photo { height:320px; padding:18px; }
        .evidence-card > div { flex:1; padding:20px; border-top:1px solid #e5dfd5; }
        .evidence-card h3 { color:#171717; font-size:18px; line-height:1.5; margin:0 0 8px; word-break:keep-all; }
        .evidence-card p { color:#555; font-size:13px; line-height:1.7; margin:0; word-break:keep-all; }
        .photo-zoom { position:absolute; right:10px; bottom:10px; padding:4px 8px; background:rgba(255,255,255,.92); color:#555; font-size:11px; border-radius:4px; }
        .evidence-hint { margin:12px 0 24px; color:#666; font-size:12px; }
        .media-evidence .evidence-photo { height:190px; padding:12px; }
        .evidence-more { margin-top:12px; border:1px solid #ded8ce; border-radius:8px; background:#fffdf8; overflow:hidden; }
        .evidence-more summary { cursor:pointer; color:#285342; font-weight:700; padding:18px 20px; font-size:15px; }
        .evidence-more summary span { float:right; color:#777; font-weight:400; font-size:13px; }
        .evidence-more[open] summary { border-bottom:1px solid #ded8ce; }
        .evidence-more > .evidence-grid { padding:20px; }
        .support-evidence { grid-template-columns:repeat(2,minmax(0,1fr)); }
        .sharing-story { display:grid; grid-template-columns:1.5fr 1fr; gap:30px; margin:0 0 28px; padding:28px; background:#f5f2ec; border-radius:10px; }
        .sharing-story h3 { font-size:22px; line-height:1.5; margin:0 0 16px; word-break:keep-all; }
        .sharing-story p { font-size:15px; line-height:1.8; margin:0 0 14px; color:#444; word-break:keep-all; }
        .sharing-actions { display:flex; flex-wrap:wrap; gap:8px; list-style:none; padding:0; margin:18px 0; }
        .sharing-actions li { padding:8px 12px; border:1px solid #d8d3c9; border-radius:6px; background:#fffdf8; font-size:13px; color:#285342; }
        .sharing-story figure { margin:0; align-self:center; }
        .sharing-story img { width:100%; height:200px; object-fit:contain; display:block; }
        .sharing-story figcaption { font-size:12px; text-align:center; margin-top:8px; color:#666; }
        .evidence-viewer { width:min(960px,94vw); max-height:92dvh; padding:22px; border:0; border-radius:12px; box-sizing:border-box; background:#fffdf8; color:#171717; }
        .evidence-viewer::backdrop { background:rgba(0,0,0,.75); }
        .viewer-header { display:flex; justify-content:space-between; align-items:flex-start; gap:16px; margin-bottom:16px; }
        .viewer-header h2 { font-size:20px; margin:0 0 6px; line-height:1.5; }
        .viewer-header p { font-size:13px; line-height:1.6; color:#555; margin:0; }
        .viewer-header button { flex:none; border:1px solid #ccc; border-radius:6px; background:#fff; padding:10px 12px; cursor:pointer; color:#222; }
        .viewer-picture { height:65dvh; }
        .viewer-picture img { width:100%; height:100%; object-fit:contain; }
        .viewer-original { display:inline-block; margin-top:14px; color:#285342; font-size:13px; }
        .trust-shortcuts a:focus-visible, .evidence-photo:focus-visible, .evidence-more summary:focus-visible, .viewer-header button:focus-visible { outline:3px solid #39795d; outline-offset:-3px; }
        @media(max-width:900px) { .evidence-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } .main-certificates { grid-template-columns:repeat(3,minmax(0,1fr)); } .main-certificates .evidence-photo { height:240px; padding:12px; } .sharing-story { grid-template-columns:1fr; } }
        @media(max-width:540px) { .evidence-grid, .main-certificates, .support-evidence { grid-template-columns:1fr; } .evidence-block { margin-bottom:56px; } .main-certificates .evidence-photo { height:240px; } .evidence-photo { height:260px; } .evidence-card > div { padding:16px; } .evidence-more > .evidence-grid { padding:12px; } .sharing-story { padding:20px; } .sharing-story h3 { font-size:20px; } .evidence-viewer { padding:16px; } .viewer-header h2 { font-size:17px; } .trust-shortcuts a { padding:10px 14px; } }

        .trust-draft-section {
          background-color: var(--brand-section-bg);
          padding: 100px 0 0;
          position: relative;
          border-top: 1px solid var(--brand-section-divider);
        }

        .trust-label {
          font-size: 13.5px;
          font-weight: 800;
          color: var(--brand-card-accent);
          letter-spacing: 1.8px;
          margin-bottom: 14px;
          display: inline-block;
        }

        /* 1. MASTER & TRUST */
        .master-trust-block {
          margin-bottom: 110px;
        }

        .master-trust-container {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 60px;
          align-items: flex-start;
        }

        .trust-header-left {
          text-align: left;
        }

        .trust-headline {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.22;
          color: var(--brand-card-title);
          letter-spacing: -1.2px;
          margin-bottom: 24px;
          word-break: keep-all;
        }

        .trust-desc {
          font-size: 15px;
          color: var(--brand-card-body);
          line-height: 1.68;
          letter-spacing: -0.3px;
          max-width: 440px;
        }

        /* 6 Grid Cards */
        .trust-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .trust-card {
          background-color: var(--brand-card-frame);
          border: 1px solid var(--brand-card-border);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--brand-card-shadow);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .trust-card:hover {
          transform: translateY(-4px);
        }

        .trust-photo-box {
          height: 135px;
          background-color: var(--brand-photo-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 12px;
        }

        .trust-photo-overlay {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .t-photo-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--brand-card-title);
        }

        .t-photo-desc {
          font-size: 11.5px;
          color: var(--brand-card-body);
        }

        .trust-card-body {
          padding: 18px 16px;
          background-color: var(--brand-card-surface);
          text-align: left;
          flex: 1;
        }

        .trust-item-title {
          font-size: 15.5px;
          font-weight: 800;
          color: var(--brand-card-title);
          margin-bottom: 6px;
          letter-spacing: -0.3px;
        }

        .trust-item-desc {
          font-size: 12px;
          color: var(--brand-card-body);
          line-height: 1.45;
          margin: 0;
          letter-spacing: -0.2px;
        }

        .trust-media-photo-slot {
          height: 112px;
          background-color: var(--brand-photo-surface);
          border-bottom: 1px solid var(--brand-card-border);
        }

        .trust-guest-photo-box {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background-color: var(--brand-photo-surface);
        }

        .trust-guest-photo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center center;
        }

        .trust-guest-card .trust-card-body {
          padding: 18px 16px;
        }

        .trust-guest-card .trust-item-title {
          margin-bottom: 5px;
        }

        .trust-guest-desc {
          margin: 0;
          color: var(--brand-card-accent);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.45;
        }

        .trust-media-card .trust-card-body {
          padding: 20px;
        }

        .trust-media-section-title {
          display: block;
          margin-bottom: 6px;
          color: var(--brand-card-accent);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .trust-media-card .trust-item-title {
          margin-bottom: 8px;
          font-size: 18px;
          line-height: 1.4;
        }

        .broadcast-repeat-note {
          margin-left: 8px;
          padding-left: 8px;
          border-left: 1px solid var(--brand-card-border);
          color: var(--brand-card-accent);
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .broadcast-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 10px 0 0;
          padding: 0;
          list-style: none;
        }

        .broadcast-group + .broadcast-group {
          padding-top: 9px;
          border-top: 1px solid var(--brand-card-border);
        }

        .broadcast-group-heading {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
        }

        .broadcast-appearances {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin: 5px 0 0;
          padding: 0;
          list-style: none;
        }

        .broadcast-entry {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: baseline;
          column-gap: 8px;
          row-gap: 2px;
          min-width: 0;
          padding-left: 10px;
          border-left: 2px solid var(--brand-card-border);
        }

        .broadcast-network {
          color: var(--brand-card-title);
          font-size: 13px;
          font-weight: 800;
          line-height: 1.4;
        }

        .broadcast-details {
          color: var(--brand-card-body);
          font-size: 12.5px;
          font-weight: 700;
          line-height: 1.45;
        }

        .broadcast-menu {
          color: var(--brand-card-body);
          font-size: 13px;
          line-height: 1.45;
          overflow-wrap: anywhere;
        }


        .real-voice-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .voice-photo-card {
          background-color: var(--brand-card-frame);
          border: 1px solid var(--brand-card-border);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--brand-card-shadow);
          aspect-ratio: 1 / 1;
        }

        .voice-photo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 50%;
        }

        .voice-content-right {
          text-align: left;
        }

        .voice-headline {
          font-size: 44px;
          font-weight: 900;
          line-height: 1.22;
          color: var(--brand-card-title);
          letter-spacing: -1.2px;
          margin-bottom: 32px;
          word-break: keep-all;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-card {
          background-color: var(--brand-card-frame);
          border: 1px solid var(--brand-card-border);
          border-radius: 18px;
          padding: 20px 24px;
          box-shadow: var(--brand-card-shadow);
          transition: transform 0.25s ease;
        }

        .review-card:hover {
          transform: translateX(4px);
        }

        .review-quote {
          font-size: 15px;
          font-weight: 700;
          color: var(--brand-card-title);
          margin-bottom: 6px;
          letter-spacing: -0.3px;
          line-height: 1.5;
        }

        .review-author {
          font-size: 12px;
          color: var(--brand-card-body);
          display: block;
        }

        @media (max-width: 1024px) {
          .master-trust-container, .real-voice-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .trust-headline, .voice-headline {
            font-size: 36px;
          }
        }

        @media (max-width: 767px) {
          .trust-draft-section { padding: 24px 0; }

          .credential-title-emphasis,
          .trust-media-headline-emphasis { color: #9B3A2E; }
          .evidence-hint {
            color: #382B23;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.65;
            word-break: keep-all;
          }
          .media-evidence .evidence-card h3,
          .support-evidence .evidence-card h3,
          .sharing-story h3 { font-weight: 400; }
          .broadcast-title-emphasis,
          .support-org-emphasis,
          .trust-copy-emphasis { font-weight: 700; }

          .trust-label {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0;
            margin-bottom: 12px;
          }
          .evidence-block > .trust-label {
            color: var(--brand-card-accent);
            font-size: 20px;
            font-weight: 600;
          }
          .trust-headline,
          .voice-headline {
            font-size: 28px;
            font-weight: 700;
            line-height: 1.35;
            letter-spacing: 0;
            overflow-wrap: normal;
            word-break: keep-all;
          }
          .trust-headline { margin-bottom: 16px; }
          .trust-mobile-emphasis { color: #9B3A2E; }
          .evidence-intro {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.65;
          }
          .trust-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }
          .trust-media-card {
            grid-column: 1 / -1;
          }
          .trust-guest-card {
            grid-column: 1 / -1;
            margin-top: 4px;
          }
          .trust-guest-photo-box {
            aspect-ratio: auto;
            height: auto;
          }
          .trust-guest-photo {
            width: 100%;
            height: auto;
            object-fit: contain;
            object-position: center center;
          }
          .trust-guest-card .trust-item-title {
            font-size: 17px;
          }
          .trust-guest-desc {
            font-size: 14px;
          }
          .trust-item-title {
            font-size: 15px;
            overflow-wrap: anywhere;
          }
          .trust-item-desc {
            font-size: 13px;
          }
          .broadcast-list {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .trust-media-card .trust-card-body {
            padding: 18px;
          }
          .broadcast-network {
            font-size: 14px;
          }
          .broadcast-details {
            font-size: 13px;
          }
          .broadcast-menu {
            font-size: 12.5px;
          }
          .review-quote {
            font-size: 15px;
          }
          .review-author {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .trust-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
