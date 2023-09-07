import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function AuthRequired({ children }) {
  
  // 전달받은 user 데이터에 접근
  const { user } = useContext(AuthContext);

  // 유저가 없을 경우 로그인페이지로 이동시킨다
  if (!user) {
    return <Navigate to="/accounts/login" replace={true}/>
  }

  return children;
}