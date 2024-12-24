import React, { useEffect } from "react";
/* 
  상태 로직 Custom Hook으로 뽑아내기
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

const useFetchData = (url) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  useEffect(() => {
    const fetchData = async () => {
      // fetch Data 시도
      dispatch({ type: "FETCH_LOADING" });
      await fetch(url)
        .then(() => {
          // fetch Data 성공
          dispatch({ type: "FETCH_SUCCESS" });
        })
        .catch(() => {
          // fetch Data 실패
          dispatch({ type: "FETCH_FAIL" });
        });
    };
    fetchData();
  }, [url]);

  return state;
};

export default function custom_hooks_02_() {
  const { isLoading, isFail, isSuccess } = useFetchData("url");
  if (isLoading) return <LoadingComponent />;
  if (isFail) return <ErrorComponent />;
  if (isSuccess) return <SuccessComponent />;

  return <div>custom_hooks_02_</div>;
}
