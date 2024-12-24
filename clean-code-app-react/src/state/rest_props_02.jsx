import React from "react";
/* 
  ...props 주의할 점
  코드를 예측하기 어렵다
  
  그렇기 때문에 모든 props를 한번에 내려보내지 말고
  관련 있는 것들과 아닌 것을 구분하여 내려보내기
*/
const ParentComponent = (props) => {
  const { 관련_없는_props, 관련_있는_props, ...나머지_props } = props;
  return (
    <ChildOrHOCComponent
      관련_있는_props={관련_있는_props}
      {...나머지_props}
    ></ChildOrHOCComponent>
  );
};
export default function rest_props_02() {
  return <div>rest_props_02</div>;
}
