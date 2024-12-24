import React from "react";
/* 
  인라인 스타일 주의하기
*/
const myButtonStyle = {
  warning: { backgroundColor: "yellow", fontSize: "14px" },
  danger: { backgroundColor: "red", fontSize: "14px" },
}; // 동적으로 변하지 않는 객체는 항상 컴포넌트 밖으로 빼기 (렌더링 때 마다 평가 방지하기 위함)
export default function inline_style_02() {
  return (
    <>
      <button style={myButtonStyle.warning}>inline_style_02</button>
      <button style={myButtonStyle.danger}>inline_style_02</button>
    </>
  );
}
