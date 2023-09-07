import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
  // 로컬스토리지로부터 초기 유저데이터를 가져온다 (로그인 상태 유지)
  const initialUser = JSON.parse(localStorage.getItem('user'));
  // 유저 데이터 관리
  const [user, setUser] = useState(initialUser);

  // 유저 상태 감시자
  useEffect(() => {
    if (user) { // 로그인
      localStorage.setItem('user', JSON.stringify(user));
    } else { // 로그아웃
      localStorage.removeItem('user');
    }
  }, [user])

  const value = { user, setUser };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}