// 서버 요청 라이브러리

// 서버 주소
const server = "http://localhost:3000/api";

// 토큰을 가져오는 함수
function getBearerToken() {
  const user = JSON.parse(localStorage.getItem("user"));

  return 'Bearer ' + user.access_token;
}

/* USERS */

// 1. 유저 생성 요청
export async function createUser(newUser) {
  // fetch(요청주소, 옵션): 클라이언트에서 서버에 요청하는 함수
  const res = await fetch(`${server}/users`, {
    method: "POST", // 요청 메서드
    headers: { 'Content-Type': 'application/json' }, // 요청 헤더
    body: JSON.stringify(newUser) // 요청 body
  })

  if (!res.ok) { // 서버의 응답이 200(ok)이 아닌 경우
    throw new Error(`${res.status} ${res.statusText}`);
  }

  // 응답 객체를 리턴한다
  return await res.json();
}

// 2. 로그인 요청
export async function signIn(email, password) {
  const res = await fetch(`${server}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  return await res.json();
}



/* POSTS */

// 1. 피드 요청
export async function getFeed(limit, skip) {
  const res = await fetch(`${server}/posts/feed?limit=${limit}&skip=${skip}`, {
    headers: {
      // 메서드의 기본값: GET
      'Authorization': getBearerToken() // 로그인 토큰
    }
  });

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  return await res.json();
}

// 2. 게시물 한개 가져오기 요청
export async function getPost(id) {
  const res = await fetch(`${server}/posts/${id}`, {
    headers: {
      'Authorization': getBearerToken()
    }
  });

  if (!res.ok) {
    throw new Error(`${res.status}  ${res.statusText}`);
  }

  return await res.json();
}

// 3. 게시물 생성 요청
export async function createPost(formData) {
  const res = await fetch(`${server}/posts`, {
    method: "POST",
    headers: {
      "Authorization": getBearerToken()
    },
    body: formData
  })

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  return await res.json();
}

// 4. 게시물 삭제 요청
export async function deletePost(id) {
  const res = await fetch(`${server}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization':  getBearerToken()
    }
  })

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  return await res.json();
}

// 5. 좋아요 요청
export async function likePost(id) {
  const res = await fetch(`${server}/posts/${id}/like`, {
    method: 'POST',
    headers: {
      'Authorization':  getBearerToken()
    }
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

// 6. 좋아요 취소 요청
export async function unlikePost(id) {
  const res = await fetch(`${server}/posts/${id}/unlike`, {
    method: 'DELETE',
    headers: {
      'Authorization':  getBearerToken()
    }
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}



/* COMMENTS */

// 1. 댓글 가져오기 요청
export async function getComments(id) {
  const res = await fetch(`${server}/posts/${id}/comments`, {
    headers: {
      'Authorization':  getBearerToken()
    }
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

// 2. 댓글 생성 요청
export async function createComment(id, content) {
  const res = await fetch(`${server}/posts/${id}/comments`, {
    method: 'POST',
    headers: {
      "Authorization":  getBearerToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content })
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

// 3. 댓글 삭제 요청
export async function deleteComment(id) {
  const res = await fetch(`${server}/posts/comments/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization':  getBearerToken()
    }
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}



/* PROFILES */

// 1. 프로필 수정 요청
export async function updateProfile(editedProfile) {
  const res = await fetch(`${server}/users/user`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      "Authorization":  getBearerToken()
    },
    body: JSON.stringify(editedProfile)
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

// 2. 프로필 사진 수정 요청
export async function updateAvatar(formData) {
  const res = await fetch(`${server}/users/user`, {
    method: "PUT",
    headers: {
      "Authorization":  getBearerToken()
    },
    body: formData
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

// 3. 프로필 리스트 가져오기 요청
export async function getProfiles(username) {
  const res = await fetch(`${server}/profiles/?username=${username}`, {
    headers: {
      'Authorization':  getBearerToken()
    }
  });
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

// 4. 프로필 상세보기 요청
export async function getProfile(username) {
  const res = await fetch(`${server}/profiles/${username}`, {
    headers: {
      'Authorization':  getBearerToken()
    }
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

// 5. 타임라인 가져오기 요청
export async function getTimeline(username) {
  const res = await fetch(`${server}/posts/?username=${username}`, {
    headers: {
      'Authorization':  getBearerToken()
    }
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

// 6. 팔로워 리스트 가져오기 요청
export async function getFollowers(username) {
  const res = await fetch(`${server}/profiles/?followers=${username}`, {
    headers: {
      'Authorization':  getBearerToken()
    }
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

// 7. 팔로잉 리스트 가져오기 요청
export async function getFollowingUsers(username) {
  const res = await fetch(`${server}/profiles/?following=${username}`, {
    headers: {
      'Authorization':  getBearerToken()
    }
  });
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

// 8. 팔로우 요청
export async function follow(username) {
  const res = await fetch(`${server}/profiles/${username}/follow`, {
    method: 'POST',
    headers: {
      'Authorization':  getBearerToken()
    }
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

// 9. 언팔로우 요청
export async function unfollow(username) {
  const res = await fetch(`${server}/profiles/${username}/unfollow`, {
    method: 'DELETE',
    headers: {
      'Authorization':  getBearerToken()
    }
  })
  
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}