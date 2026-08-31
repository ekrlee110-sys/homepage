# 네이버 검색엔진(SEO) 기본 설정 문서

## 1. 개요
네이버 검색엔진 수집 및 색인을 위해 basic SEO 설정(robots.txt, sitemap.xml, canonical URL, OG 메타태그)을 추가하였습니다.

## 2. 주요 변경 사항
- **대표 도메인**: `https://sannaedol.com/`
- **robots.txt**: 모든 검색 로봇 허용 및 `sitemap.xml` 경로 지정 (`public/robots.txt`)
- **sitemap.xml**: 사이트맵 파일 추가 (`public/sitemap.xml`)
- **index.html**:
  - `<link rel="canonical" href="https://sannaedol.com/" />` 대표 URL 지정
  - Meta Description 및 Open Graph(OG) 태그 지정/유지

## 3. 검증 결과
- `npm run build`: 성공
- 개발 서버(`npm run dev`): 정상 구동 및 메타태그 적용 확인
