# 네이버 검색엔진(SEO) 기본 설정 문서

## 1. 개요
네이버 검색엔진 수집 및 색인을 위해 basic SEO 설정(robots.txt, sitemap.xml, canonical URL, OG 메타태그)을 추가하였습니다.

## 2. 주요 변경 사항
- **대표 도메인**: `https://homepage-mu-fawn-13.vercel.app/`
- **robots.txt**: 모든 검색 로봇 허용 및 `sitemap.xml` 경로 지정 (`public/robots.txt`)
- **sitemap.xml**: 사이트맵 파일 추가 (`public/sitemap.xml`)
- **index.html**:
  - `<link rel="canonical" href="https://homepage-mu-fawn-13.vercel.app/" />` 대표 URL 지정
  - `<meta name="naver-site-verification" content="9a2c4fcfd72388c8b16f017b4a2acaf91f1c6719" />` 소유확인 메타태그 추가
  - Meta Description 및 Open Graph(OG) 태그 지정/유지
- **소유확인 파일**: 
  - 네이버: `public/naverf4c8a6664ce3b861bcbee558d8525e1b.html`
  - 구글: `public/googlef323af8c6496346f.html`
- **Supabase 초기화 안전장치**: 환경변수 누락 시 빈 화면 방지를 위한 fallback 설정

## 3. 검증 결과
- `npm run build`: 성공
- 배포 플랫폼: Vercel (`homepage-mu-fawn-13.vercel.app`)
