import React from "react";
/* 
  안전하게 Raw HTML 다루기 (XSS 공격 예방하기)
  1. 렌더링될 데이터
  2. 유저가 다시 한번 입력모드로 수정할 수 있는 데이터
    - 바로 input, textarea
  
    DOMPurify 사용하기 - BEST

    최신 HTML 사용 환경 일 시(아직 실험적)
    HTML Sanitizer API 존재

    eslint-plugin-risxss 라는 XSS를 경고하는 플러그인도 존재
*/

const SERVER_DATA = "<p>some raw html</p>";
export default function dangerously_set_inner_html_02() {
  const post = {
    // XSS(악성 스크립트 공격)
    content: `<img src="" onerror='alert("you were hacked"/'>`,
  };

  // 위험한 방법 예시
  const markup = { __html: SERVER_DATA };

  // DOMPurify 예시
  const sanitizeContent = { __html: DOMPurify.sanitize(SERVER_DATA) };

  /* X */
  return <div>{markup}</div>;

  /* 안전하지만 상대적으로 위험 */
  return <div>{sanitizeContent}</div>;

  /* 전보다 낫지만 이것만으로는 조금 위험 */
  return <div dangerouslySetInnerHTML={markup}></div>;

  /* Best 안전 */
  return <div dangerouslySetInnerHTML={sanitizeContent}></div>;
}
