import React from 'react';
import { Instagram, BookOpen, ArrowUpRight } from 'lucide-react';

const instagramUrl = 'https://www.instagram.com/sannaedol_zzajang/';
const blogUrl = 'https://blog.naver.com/sannaedol_zzajang';

export default function Social() {
  return (
    <section id="social" className="social-section">
      <div className="container">
        <p className="social-label">산내 소식</p>
        <h2 className="social-title">
          <span className="social-title-desktop">산내돌짜장의 오늘을 만나보세요</span>
          <span className="social-title-mobile">산내의 최근 소식</span>
        </h2>
        <p className="social-intro">뜨거운 돌판의 순간과 매장에서 전하는 이야기를 담았습니다.</p>
        <div className="social-grid">
          <a className="social-card" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="인스타그램 (새 창)">
            <Instagram size={28} aria-hidden="true" />
            <span className="social-card-copy">
              <strong className="social-card-title-desktop">인스타그램 영상</strong>
              <small>@sannaedol_zzajang</small>
              <strong className="social-card-title-mobile">인스타그램</strong>
            </span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a className="social-card" href={blogUrl} target="_blank" rel="noopener noreferrer" aria-label="네이버 블로그 (새 창)">
            <BookOpen size={28} aria-hidden="true" />
            <span className="social-card-copy">
              <strong className="social-card-title-desktop">네이버 블로그</strong>
              <small>산내돌짜장의 소식과 이야기</small>
              <strong className="social-card-title-mobile">네이버 블로그</strong>
            </span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
      <style>{`
        .social-section { margin-top: 110px; padding: 82px 0; background: #fbf8f3; scroll-margin-top: 80px; }
        .social-label { color: #a24b33; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; margin-bottom: 12px; }
        .social-title { color: #2b1e16; font-size: clamp(28px, 3vw, 40px); font-weight: 800; margin: 0 0 12px; word-break: keep-all; }
        .social-intro { color: #55443b; font-size: 16px; margin: 0 0 28px; }
        .social-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
        .social-card { display: flex; align-items: center; gap: 18px; min-height: 112px; padding: 24px; background: #fff; color: #2b1e16; border: 1px solid #e9dccd; border-radius: 18px; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease; }
        .social-card:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(43, 30, 22, .09); }
        .social-card-copy { display: flex; flex: 1; flex-direction: column; gap: 6px; min-width: 0; }
        .social-card-copy strong { font-size: 19px; }
        .social-card-copy small { font-size: 14px; color: #66554b; }
        .social-title-mobile,
        .social-card-title-mobile { display: none; }
        @media (max-width: 767px) {
          .social-section { margin-top: 0; padding: 24px 0 0; scroll-margin-top: 236px; }
          .social-label,
          .social-intro { display: none; }
          .social-title {
            margin: 0 0 16px;
            font-size: 20px;
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: 0;
            text-align: left;
          }
          .social-title-desktop { display: none; }
          .social-title-mobile {
            display: inline;
            font-size: 20px;
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: 0;
          }
          .social-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .social-card {
            min-width: 0;
            min-height: 48px;
            justify-content: center;
            gap: 8px;
            padding: 8px 10px;
            border: 1px solid #e4d9cb;
            border-radius: 8px;
            box-shadow: none;
          }
          .social-card > svg:last-child,
          .social-card-copy small,
          .social-card-title-desktop { display: none; }
          .social-card-copy { flex: 0 1 auto; display: block; min-width: 0; }
          .social-card-copy .social-card-title-mobile {
            display: block;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.3;
            white-space: nowrap;
          }
          .social-card > svg:first-child { width: 20px; height: 20px; flex: 0 0 auto; }
        }
        @media (prefers-reduced-motion: reduce) { .social-card { transition: none; } }
      `}</style>
    </section>
  );
}
