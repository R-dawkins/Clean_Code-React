import React, { useRef } from "react";
/* 
  리 렌더링 방지가 필요하다면 useState 대신 useRef

  컴포넌트의 전체적인 수명과 동일하게 지속된 정보를 일관적으로 제공해야하는 경우
*/
export default function ref_instead_of_state() {
  const isMount = useRef(false);

  useEffect(() => {
    isMount.current = true;

    return () => (isMount.current = false);
  }, []);
  return <div>ref_instead_of_state</div>;
}
