import React from "react";
/* 
  JSX 컴포넌트 함수로 반환하는 경우 단점 
  1. scope를 알아보기 어렵다
  2. 반환 값을 바로 알기 어렵다
  3. props 전달 등 일반적인 패턴이 아니다
  결론 - JSX 컴포넌트를 함수로 반환하지 말자
 */
export default function return_jsx_function_02() {
  return <div>return_jsx_function_02</div>;
}
