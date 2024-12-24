import React from "react";
/* 
  객체보다는 단순한 Props
  객체 전체를 내리지말고 필요한 값만 내리기
*/
export default function primitive_props_02({ avatarImgUrl, userName, email }) {
  return (
    <div>
      <h1>{avatarImgUrl}</h1>
      <h2>{userName}</h2>
      <h3>{email}</h3>
    </div>
  );
}
