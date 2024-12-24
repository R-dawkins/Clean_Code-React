import React from "react";

export default function unnecessary_state_01() {
  /* 
    불필요한 상태를 만든다면?

    결국에는 리액트에 의해 관리되는 값이 늘어나는 것
    그러다보면 렌더링에 영향을 주는 값이 늘어나서 관리 포인트가 더더욱 늘어난다
    
    요약
    1. props를 useState에 넣지 않고 바로 return 문에 사용하기
    2. 컴포넌트 내부 변수는 렌더링마다 고유한 값을 가짐
    3. 따라서 useState가 아닌 const로 상태를 선언하는 게 좋은 경우도 있음
  */
  const [userList, setUserList] = useState(MOCK_DATA); //초기 상태 선언
  // const [complUserList, setCompolUserList] = useState(MOCK_DATA) // 변경 후 저장할 상태 선언
  // 컴포넌트 내부에서의 변수는?
  // 렌더링 마다 고유의 값을 가지는 값
  const complUserList = complUserList.filter((user) => user.completed === true);
  /*  useEffect(()=>{
  const newList = complUserList.filter((user)=>user.completed === true);
  setUserList(newList)
 },[userList]) */
  return <div>unnecessary_state_01</div>;
}
