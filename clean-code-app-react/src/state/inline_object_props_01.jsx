import React from "react";
/* 
  객체 Props 지양하기

  - 변하지 않는 값일 경우 컴포넌트 외부로 드러내기
  - 필요한 값만 객체를 분해해서 Props로 내려준다.
  - 정말 값 비싼 연산, 너무 잦은 연산이 있을 경우 useMemo() 활용하여 계산된 값을 메모이제이션한다.
  
*/

export default function inline_object_props_01({ heavyState }) {
  const [propArr, setPropArr] = useState(["hello", "hello"]);

  const computedState = useMemo(
    () => ({
      heavyState: heavyState,
    }),
    [heavyState]
  );

  return (
    <ChildComponent
      // objProps={{}} 한번에 객체,배열로 모두 내려보내지 말고 분해해서 내려보내는게 좋다
      // ArrProps={[]}
      hello="world"
      hello2={propArr.at(0)}
      computedState={{ heavyState: heavyState }}
      computedState2={{ heavyState: heavyState }}
    ></ChildComponent>
  );
}
