import React from "react";
/* 
  구조화 된 상태를 원한다면 useReducer()
  서드 파티 라이브러리를 사용하지 않고, 순수 자바스크립트 문법을 사용하여 상태를 체계적으로 구조화하여 관리할 수 있음

*/
const INIT_STATE = {
  isLoading: false,
  isSuccess: false,
  isFail: false,
};

const ACTION_STATE = {
  FETCH_LOADING: "FETCH_LOADING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAIL: "FETCH_FAIL",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_STATE.FETCH_LOADING:
      return { isLoading: true, isSuccess: false, isFail: false };
    case ACTION_STATE.FETCH_SUCCESS:
      return { isLoading: false, isSuccess: true, isFail: false };
    case ACTION_STATE.FETCH_FAIL:
      return { isLoading: false, isSuccess: false, isFail: true };

    default:
      return INIT_STATE;
  }
};
export default function use_state_to_use_reducer_01() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchData = () => {
    // fetch Data 시도
    dispatch({ type: "FETCH_LOADING" });
    fetch(url)
      .then(() => {
        // fetch Data 성공
        dispatch({ type: "FETCH_SUCCESS" });
      })
      .catch(() => {
        // fetch Data 실패
        dispatch({ type: "FETCH_FAIL" });
      });
  };
  if (promiseState === PROMISE_STATE.LOADING) return <LoadingComponent />;
  if (promiseState === PROMISE_STATE.ERROR) return <ErrorComponent />;
  if (promiseState === PROMISE_STATE.FINISH) return <SuccessComponent />;

  return <div>use_state_to_use_reducer_01</div>;
}
