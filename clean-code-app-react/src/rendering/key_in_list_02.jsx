import React, { useEffect } from "react";
/* 
  리스트 내부에서의 Key

  Warning: Each child in a list should have a unique "key" prop

  어떤 ID를 넣는것이 베스트인가?

  1. uuid4 >> 회사에서 쓸만한 패키지

  2. 윈도우에 crypto.randomUUID() 최신 브라우저라면 사용가능

  요약

  순회 시 key를 넣을 때
  단순 index를 넣거나 렌더링마다 항상 새로운 값을 넣는 것을 경계하자
*/

export default function key_in_list_02() {
  const list = [];

  const handleAddItem = (value) => {
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        value: value,
      },
    ]);
  };

  useEffect(() => {
    /* 
    list를 만들때 꼭 ID를 부여하자
    혹은 새로운 아이템을 추가하는 함수를 만들때 그때 고유한 값을 넣어주자.
    */
  }, []);
  return (
    <React.Fragment>
      {/* X */}
      {/* 프로덕션 레벨에서 문제가 생길 수 있다. */}
      <ul>
        {list.map((item, index) => {
          <li key={index}>{item}</li>;
        })}
      </ul>

      {/* 중요한 개발이 아니라 편하게 사용할 때 */}
      <ul>
        {list.map((item, index) => {
          <li key={"문자열-" + index}>{item}</li>;
        })}
      </ul>

      {/* Best */}
      {/* 렌더링마다 넣는것이 아니라 렌더링 전에 만들어서 넣어주는게 베스트 */}
      <ul>
        {list.map((item) => {
          <li key={item.id}>{item}</li>;
        })}
      </ul>
    </React.Fragment>
  );
}
