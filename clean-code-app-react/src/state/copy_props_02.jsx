import React from "react";

/* 
  불필요한 props 복사
  
  요약
  props 변경 X
  props 연산하여 넘기기
  useMemo 사용
*/

function copy_props_02({ value }) {
  return <div>{value}</div>;
}

function copy_props_02({ value }) {
  const [copyValue] = useState(값비싸고무거운연산(value));
  return <div>{copyValue}</div>;
}
// 굳이 useState 사용 필요 없음

function copy_props_02({ value }) {
  const copyValue = 값비싸고무거운연산(value);
  return <div>{copyValue}</div>;
}
// 컴포넌트 내부의 변수로 사용 >> 렌더링마다 불필요한 연산 가능성

function copy_props_02({ value }) {
  const [copyValue] = useMemo(() => 값비싸고무거운연산(value), []);
  return <div>{copyValue}</div>;
}
// Best >> useMemo를 활용하여 렌더링시마다 불필요한 연산 방지
// Best Best >> props를 복사, 변경하지 않는 것, props로 받기 전에 미리 연산을 해서 줄 것
