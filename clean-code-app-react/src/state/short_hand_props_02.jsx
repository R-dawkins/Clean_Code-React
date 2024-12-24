import React from "react";

/* 
  short hand props 언제 사용할까?
  
*/

export default function short_hand_props_02({ isDarkMode, isLogin, ...props }) {
  return (
    <div>
      <header
        className="clean-header"
        title="Clean Code React"
        isDarkMode={isDarkMode} // 토글링 되는 값을 넘길 때
        isLogin={isLogin}
        hasPadding // 항상 Boolean이며 항상 true(or false)인게 보장되는 값을 넘길 때
        isFixed
        isAdmin
      ></header>
      <ChildComponent {...props} />
    </div>
  );
}
