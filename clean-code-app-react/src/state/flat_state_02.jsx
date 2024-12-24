import React from "react";
/* 
  연관된 상태 단순화하기
  Keep
  It
  Simple
  Stupid
*/
const PROMISE_STATE = {
  INIT: "init",
  LOADING: "loading",
  FINISH: "finish",
  ERROR: "error",
};
export default function flat_state_02() {
  const [promiseState, setPromiseState] = useState(PROMISE_STATE.INIT);

  const fetchData = () => {
    // fetch Data 시도
    setPromiseState(PROMISE_STATE.LOADING);

    fetch(url)
      .then(() => {
        // fetch Data 성공
        setPromiseState(PROMISE_STATE.FINISH);
      })
      .catch(() => {
        // fetch Data 실패
        setPromiseState(PROMISE_STATE.ERROR);
      });
  };
  if (promiseState === PROMISE_STATE.LOADING) return <LoadingComponent />;
  if (promiseState === PROMISE_STATE.ERROR) return <ErrorComponent />;
  if (promiseState === PROMISE_STATE.FINISH) return <SuccessComponent />;

  return <div>flat_state_02</div>;
}
