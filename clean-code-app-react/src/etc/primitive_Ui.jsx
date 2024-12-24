import React from "react";
/* 
  semantic
  웹 표준, 웹 접근성을 지키기 위한
  시멘틱 HTML element를 사용하기 편리하도록 하는 방법

  Type Script 활용

  ex) 
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  ...
  }

  const Button = (props: ButtonProps) => {
    return (
    <button {...props}> 구조분해로 Button의 기본 attribute를 다 가져올수도 있다.
    {children}
    </button>)
    }
*/

export default function primitive_Ui() {
  return <div>primitive_Ui</div>;
}
