import React from "react";
/* 
  useEffect() 기명 함수와 함께 사용하기

  기명 함수 (named function)
  - 이름이 존재하는 함수

  화살표 함수는 무기명 함수라고 볼 수 있다

  useEffect를 기명 함수와 함께 사용하는 것의 장점
  - 에러 발생 시 어떤 함수에 발생했는지 알기 쉽다
*/
export default function use_effect_named_func_01() {
  useEffect(() => {
    // 화살표 함수를 사용해 무기명으로 useEffect를 사용하는 것과 달리
  }, []);

  useEffect(
    // useEffect를 기명함수와 함께 사용하여 해당 useEffect가 어떤 역할을 하는지 쉽게 파악하도록 할 수 있다.
    function onInit() {
      if (!isInit) {
        return;
      }
      setIsInit(false);
    },
    [isInit]
  );

  useEffect(function addEvent() {
    // clean up 함수를 사용할 때도 기명함수를 사용하면 파악하기가 쉽다
    document.addEventListener();

    return function removeEvent() {
      document.removeEventListener();
    };
  }, []);
  return <div>use_effect_named_func_01</div>;
}
