import React from "react";
/* 
  컴포넌트 내부에 컴포넌트 선언

  1. 결합도가 증가
    - 구조적으로 스코프적으로 종속된 개발이 된다
    - 나중에 확장성이 생겨서 분리될 때 굉장히 힘들어진다
  2. 성능 저하
    - 상위 컴포넌트 리렌더 => 하위 컴포넌트 재생성
  
  결론 - 컴포넌트 내부에 컴포넌트 선언은 최대한 지양
*/
export default function component_in_component_02() {
  return <div>component_in_component_02</div>;
}
