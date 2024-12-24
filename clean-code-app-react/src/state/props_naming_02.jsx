import React from "react";
/* 
  알아두면 좋은 Props 네이밍

  1. camel case 사용하기
  2. 무조건 true라면 isShow = {true}가 아닌 isShow로 축약하기 (short hand props 참고)
  3. 컴포넌트라면 대문자로 시작하기
*/
export default function props_naming_02() {
  return (
    <PropsNaming
      className={className}
      isShow
      ChildComponent={ChildComponent}
      notComponentProps={notComponentProps}
    ></PropsNaming>
  );
}
