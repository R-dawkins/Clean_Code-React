import React from "react";

const INFO = {
  name: "My Component",
  value: "Clean Code React",
};
export default function NotUpdateValue() {
  // 상수를 다루거나 아니면 일반적인 방치
  // 업데이트가 되지 않는 일반적인 객체
  // 리액트 상태(useState)로 바꾼다던가 혹은 아예 외부로 내보낸다.
  // 현재 상황에서는 외부로 내보내는 방법이 가장 적절함

  return <div>{INFO}</div>;
}
