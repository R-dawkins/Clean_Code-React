import React from "react";
/* 
    React Fragment 
    Fragment는 DOM에 별도의 노드를 추가하지 않고 여러 자식을 그룹화할 수 있다
    <></> 빈 태그 대신 사용
    
  */
export default function fragment_02() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
