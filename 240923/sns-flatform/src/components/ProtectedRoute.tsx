import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
//  로그인 된 사람의 정보를 가지고 있는 변수

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser;
  console.log(user);
  if (user === null) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoute;
