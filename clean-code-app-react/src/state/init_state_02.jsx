import React, { useState } from "react";
/* 
  올바른 초기값 설정

  초기값?
  - 가장 먼저 렌더링 될 때 순간적으로 보여질 수 있는 값
  - 당연히 초기에 렌더링 되는 값

  초기값
  - 지키지 않을 경우? => 렌더링 이슈, 무한 루프, 타입 불일치로 의도치 않은 동작 => 런타임 에러
  - 넣지 않으면 undefined
  - 상태를 CURD => 상태를 지울때도 초기값을 잘 기억해놔야 원상태로 돌아간다.
  - 빈값? null 처리를 할 때 불필요한 방어코드도 줄여준다
 */
export default function init_state_02() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  const resetState = () => {
    setCount(INIT_COUNT_STATE);
  };
  return <div></div>;
}
