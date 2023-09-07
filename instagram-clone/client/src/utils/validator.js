// 클라이언트 측 폼데이터 유효성 검사 라이브러리

// 이메일 유효성 검사
export function  isEmail(email) {
  // 정규식: 문자열 검색을 위한 패턴을 제공한다. /패턴/
  const patt = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/

  if (email.match(patt)) {
    return true;
  }

  return false;
}

// 유저이름 유효성 검사
export function isUsername(username) {
  const patt = /^[a-zA-Z0-9]{5,}$/

  if (username.match(patt)) {
    return true;
  }

  return false;
}

// 비밀번호 유효성 검사
export function isPassword(password) {
  if (password.trim().length >= 5) {
    return true;
  }

  return false;
}