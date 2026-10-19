/**
 * 산내돌짜장 홈페이지 마케팅 이벤트 기록 보조 함수.
 * UTM 유입 소스 측정은 GA4가 방문 URL의 utm_* 항목을 자동 처리한다.
 * 이 파일은 클릭 이벤트를 GTM dataLayer에 전달하는 용도이며,
 * GTM에 이벤트 태그/트리거가 없으면 GA4 보고서에 자동 집계되지 않는다.
 * 개인정보, 전화번호, 사용자의 식별정보를 이벤트에 포함하지 않는다.
 */
export function trackMarketingAction(action, placement) {
  if (typeof window === 'undefined') return;
  const approvedActions = ['phone_click', 'map_click', 'menu_click', 'waiting_click'];
  if (!approvedActions.includes(action)) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'sannae_marketing_action',
    action_name: action,
    placement: String(placement || 'unspecified').slice(0, 60),
    page_path: window.location.pathname,
  });
}
