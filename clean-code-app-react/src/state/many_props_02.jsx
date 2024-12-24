import React from "react";
/*
  너무 많은 props를 넘기는 경우 컴포넌트를 분리해보자
  => 결과보다는 일단 실행 => 분리의 대상?
  => TanStack Query, Form Library, 상태 관리자, Context API, Composition 등을 도입하기 전에 간단한 분리부터 해보기
 */
export default function many_props_02() {
  // Step1. One Depth 분리를 한다.
  // Step2. 확장성을 위한 분리를 위해 도메인 로직을 다른 곳으로 모아넣는다.
  // Step3.
  return (
    <JoinForm
      onSubmit={handleSubmit}
      onReset={handleReset}
      onCancel={handleCancel}
    >
      {/*   
      Step1. One Depth 분리
      <UserForm user={user}></UserForm>
      <AuthForm auth={auth}></AuthForm>
      <LocationForm location={location}></LocationForm>
      <FavoriteForm favorite={favorite}></FavoriteForm> 
      
      */}
      {/* Step2. 확장성을 위한 분리*/}
      <CheckBoxForm formData={user}></CheckBoxForm>
      <CheckBoxForm formData={auth}></CheckBoxForm>
      <RadioButtonForm formData={location}></RadioButtonForm>
      <SectionForm formData={favorite}></SectionForm>
    </JoinForm>
  );
}
