import React, { useState } from "react";
/* 
  연관된 상태를 객체로 묶어내기
 */
export default function opject_state_01() {
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isFinish: false,
    isError: false,
  });
  // const [isLoading, setIsLoading] = useState(false);
  // const [isFinish, setIsFinish] = useState(false);
  // const [isError, SetIsError] = useState(false);

  const fetchData = () => {
    // fetch Data 시도
    setFetchState((prevState) => ({ ...prevState, isLoading: true }));

    fetch(url)
      .then(() => {
        // fetch Data 성공
        setFetchState((prevState) => ({
          ...prevState,
          isLoading: false,
          isFinish: true,
        }));
      })
      .catch(() => {
        // fetch Data 실패
        setFetchState((prevState) => ({
          ...prevState,
          isLoading: false,
          isError: true,
        }));
      });
  };
  if (promiseState === fetchState) return <LoadingComponent />;
  if (promiseState === fetchState) return <ErrorComponent />;
  if (promiseState === fetchState) return <SuccessComponent />;

  return <div>opject_state_01</div>;
}
