import React from "react";
/* 
  Css in Js 인라인 스타일 지양하기
  css 객체를 만들 때 문자열로 만들지 말고 자바스크립트 객체로 만들기
  css in js는 성능에 민감하다. 따라서 

  장점
    - 외부로 분리했기 때문에 스타일 렌더링 될때마다 직렬화되지 않는다. => 한번만 된다.
    - 동적인 스타일을 실수로 건드는 확률이 적어진다
    - 스타일 관련 코드를 분리해서 로직에 집중하고 JSX를 볼때 조금 더 간결하게 볼 수 있다.

*/

const cardCss = {
  self: css({ backgroundColor: "red" }),
};
/* 
  타입 안정성
  자동 완성으로 생산성 DX
  export, 내부에서만 사용할 수도 있을 때
  export하는 경우 외부의 컴포넌트에서도 사용할 수 있다.
*/
export default function inline_css_in_js() {
  return <div css={cardCss.self}>inline_css_in_js</div>;
}
