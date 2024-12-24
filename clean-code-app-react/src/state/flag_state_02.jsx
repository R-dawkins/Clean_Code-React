import React, { useState } from "react";
/* 
  플래그 상태

  플래그 값
  - 프로그래밍에서 주로 특정 조건 혹은 제어를 위한 조건을 불리언으로 나타내는 값
  - 상태를 사용하지 않고 리액트 표현식을 통해 플래그 값으로 관리
 */
export default function flag_state_02() {
  const isLogin =
    hasToken &&
    hasCookie &&
    isValidCookie &&
    isNewUser === false &&
    isValidToken &&
    추가적인사항;

  return <div>{isLogin && "안녕하세요"}</div>;
}
