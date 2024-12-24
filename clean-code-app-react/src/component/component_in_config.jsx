import React from "react";
/* 
  1. 변하지 않는 상수는 컴포넌트 함수 외부로
  2. 컴포넌트를 선언할 때 과거에는 표현식으로 했지만 현재는 선언문으로 하는 추세
  3. 플래그성 상태나 ref, 서드 파티 라이브러리의 훅들은 상단에 그다음은 커스텀 훅이나 리액트 훅
  4. 그다음 이벤트 함수와 같은 함수들, 컴포넌트 내부에서 사용하지 않는 함수는 외부로 빼기
  5. useEffect는 최대한 적게, main JSX에 근접하게 위치시키기 (return 문 근처)
  6. Styled Component와 같은 것들은 최하단에 위치
  7. 컴포넌트 구성에 정답은 없다
*/

/* 
const DEFAULT_COUNT = 100;

interface SomeComponentProps {}

const SomeComponent = ({prop1, prop2}: SomeComponentProps) => {
  let isHold = false;
  }

*/

export default function component_in_config() {
  return <div>component_in_config</div>;
}
