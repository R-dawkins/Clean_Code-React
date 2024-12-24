import React from "react";
/* 
  Custom Hooks 반환의 종류

  Custom Hook을 항상 배열만으로 반환할 필요는 없다
 */
export default function return_custom_hooks_01() {
  const [value, setValue] = useSomeHooks(); //튜플 형태는 항상 getter를 왼쪽 (약속)
  const oneValue = useSomeHooks(); // 하나의 값만 리턴할 때는 괄호 없이
  const { first, second, third, rest } = useSomeHooks(); // 여러 값을 리턴할 때는 객체로 반환하는게 편리함
  // const [firstValue, secondValue, _, thirdValue] = useSomeHooks();
  return <div>return_custom_hooks_01</div>;
}
