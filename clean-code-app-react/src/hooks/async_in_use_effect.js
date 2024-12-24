/* 
  현재 리액트는 useEffect보다 TanStack query를 통해 데이터 통신하는 것을 권장하고있다
  useEffect() 내부의 비동기 함수

  useEffect의 콜백 함수로 비동기 함수를 바로 넣을 수 없다
  - 동작이 불안정해지기 때문
*/

// X
// useEffect의 콜백에 async가 안되는 이유
// async await는 promise를 반환하는데 useEffect는 다른 데이터를 반환하는 경우도 있기 때문에 리액트 개발진이 막아둠
useEffect(async () => {
  // 비동기 작업
  const result = await fetchData();
}, []);

// O
useEffect(() => {
  const fetchData = async () => {
    const result = await someFetch();
  };
  fetchData;
}, [dependency]);
