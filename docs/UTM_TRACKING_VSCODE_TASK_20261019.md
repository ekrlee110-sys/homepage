# 산내돌짜장 홈페이지 — VS Code / Vercel UTM 유입 추적 구현 지시
작성일: 2026-10-19 (Asia/Seoul)
담당: [02 마케팅·광고] 검수 → [06 홈페이지] 격리 작업 → 사장님 승인 후 운영 반영
운영 사이트: https://homepage-mu-fawn-13.vercel.app/
GitHub: ekrlee110-sys/homepage
격리 브랜치: feature/utm-tracking-20261019
운영 브랜치 main은 수정하지 마세요. Vercel 배포·광고 링크 변경·외부 게시 금지.

## 이미 확인된 사항
- 홈페이지 index.html에 GTM-KJ3G2VNW 설치
- 공개 GTM 컨테이너에서 GA4 측정 ID G-D1CSYKD8PH 확인
- GA4 속성 '산내돌짜장 홈페이지', 속성 ID 557289251
- 2026-10-12 ~ 2026-10-18 활성 사용자 37명, 조회수 48회
- GA4 관리자 https://analytics.google.com/analytics/web/#/a410669097p557289251/reports/intelligenthome
- UTM 파라미터 자체는 GA4가 방문 URL에서 인식하므로 별도의 중복 GA4 설치나 새 GTM 컨테이너를 만들지 말 것.

## VS Code/Copilot에게 맡길 작업
1. main 원본의 GTM/GA4 코드와 기존 이벤트 측정 중복 여부를 검토한다.
2. 제공한 src/utils/marketingTracking.js 의 dataLayer 이벤트를 검토하고, 주요 CTA에만 연결한다.
   - Hero.jsx 대표 메뉴 보기: trackMarketingAction('menu_click','hero')
   - Hero.jsx 네이버 길찾기: trackMarketingAction('map_click','hero')
   - Reservation.jsx 네이버 길찾기: trackMarketingAction('map_click','visit')
   - Reservation.jsx 전화 문의: trackMarketingAction('phone_click','visit')
   - 필요하면 Navbar.jsx 길찾기 클릭도 동일하게 기록한다.
3. GTM 기존 컨테이너에 이벤트 트리거/GA4 이벤트 태그가 이미 있는지 확인한다. 새 이벤트 태그를 추가하려면 별도 운영 설정 승인 후 진행한다. 중복 page_view 생성 금지.
4. URL의 utm_source, utm_medium, utm_campaign 보존과 기존 라우팅 동작 점검.
5. 9개 채널 UTM 링크를 확인한다. 네이버 플레이스/블로그/인스타그램/페이스북/유튜브/스레드/틱톡/당근/카카오채널.
6. 개발 미리보기에서 정상 이동 및 모바일 버튼 기능, 클릭 시 dataLayer 값, GA4 DebugView를 확인하고 증거를 정리한다.
7. 검수 결과를 보고하되 main 병합, Vercel Production 배포, 네이버·SNS 프로필 수정, 광고 집행은 하지 않는다.

## 9개 채널 링크 생성 규칙
기본 주소: https://homepage-mu-fawn-13.vercel.app/
전부 URL 인코딩된 utm_source/utm_medium/utm_campaign 사용.
- naver_place / referral / profile
- naver_blog / social / profile
- instagram / social / profile
- facebook / social / profile
- youtube / video / profile
- threads / social / profile
- tiktok / social / profile
- danggeun / social / profile
- kakao_channel / social / profile

예시: https://homepage-mu-fawn-13.vercel.app/?utm_source=instagram&utm_medium=social&utm_campaign=profile
주의: 광고 캠페인은 profile 대신 개별 캠페인명과 utm_content로 식별하며, 유료 검색은 실제 광고 매체 기준을 별도 결정한다.

## 검수 완료 기준
- 트래픽 UTM 출처가 테스트 GA4에서 구분되는 증거
- 전화/길찾기/메뉴 CTA 이벤트 값과 중복 없는 기록 증거
- 기존 홈페이지 문구, 전화번호, 메뉴, 이미지, CSS 변화 없음
- main과 운영 배포에 변경 없음
- 운영 반영은 사장님 개별 승인 후 별도 TASK로 수행
