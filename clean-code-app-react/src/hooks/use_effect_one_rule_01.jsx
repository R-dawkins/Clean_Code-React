import React from "react";
/* 
  useEffect를 사용할 때 
  단일 책임 원칙 지키기 (SOLID 객체 지향 5대 원리중 하나)

  하나의 useEffect가 한가지의 역할만 하도록 하기
  방법
  - 기명 함수 사용
  - dependency Arrays에 너무 많은 관찰 대상이 들어가고 있는 게 아닌지 생각해보기
*/

export default function use_effect_one_rule_01() {
  return <div>use_effect_one_rule_01</div>;
}
