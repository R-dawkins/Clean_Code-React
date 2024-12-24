import React from "react";
/* 
  updater function을 사용해 prev state를 고려하면 예상치 못한 결과를 예방할 수 있다.
*/
export default function prev_state_01() {
  const [age, setAge] = useState(0);
  function updateState() {
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
  }
  function updaterFunction() {
    setAge((prevAge) => prevAge + 1); // setAge(42 => 43)
    setAge((prevAge) => prevAge + 1); // setAge(43 => 44)
    setAge((prevAge) => prevAge + 1); // setAge(44 => 45)
  }
  return <div>prev_state_01</div>;
}
