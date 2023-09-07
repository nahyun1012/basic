import { 
  useContext, 
  createContext,
  useState, 
  useEffect
} from "react";

import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

/*
  리액트 튜토리얼

  1. 리액트 소개
  2. JSX
  3. 컴포넌트
  4. 이벤트
  5. 화면 업데이트
  6. 리액트 라우터
  7. 데이터 요청
*/



/*
  리액트 소개

  1. 리액트란
  UI를 개발하기 위한 자바스크립트 라이브러리
  페이스북이 개발 및 유지
  가장 인기있는 프론트엔드 프레임워크

  2. 리액트 특징
  컴포넌트 기반
  * 컴포넌트: 복잡한 뷰를 설계하기 위한 재사용가능한 부품

  선언적 문법으로 사용리 편리한다

  3. 리액트 구조
  SPA(Single Page Application) - 자바스크립트를 사용하여 뷰를 업데이트한다
*/



/*
  JSX (JavaScript Extension)
  자바스크립트의 확장 문법
  가상의 엘리먼트를 생성하기 위해 사용한다
  선언적 문법
  일반 자바스크립트 객체로 변환된다

  1. JSX 기본문법
  2. JSX Fragment
  3. JSX에 변수 출력하기
  4. 조건부 렌더링
  5. 리스트 렌더링
*/


// 1. 기본문법
export default function App() {
  return <Snippet />
}

// function Snippet() {  // 가상 엘리먼트
//   return (
//     <form>
//       <h1>Google</h1>
//         <input
//           type="search"
//           className="class1 class2"
//           style={{ padding: "0.5rem", width: '20rem' }}
//           placeholder="구글 검색"
//           autoComplete="off"
//         />
//     </form>
//   )
// };



// // 2. Fragment
// 엘리먼트를 생성하지 않고 트리를 감쌀 수 있다
// function Snippet() {
//  // div 없으면 오류 >> 근데 괄호 남기고 div 지우면 실행 됨. 이때 그 빈 태그를 Fragment 라고 함
//   return ( 
//     <>
//       <h1>JSX Fragment</h1>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </>
//   )
// }


// // 3. JSX에 변수 출력하기
// function Snippet() {

//   let cat = {
//     name: "치즈",
//     age: 2,
//     home: null,
//     sound: function() {
//       return "야옹"
//     }
//   }
//   return (
//     <ul>
//       <li>이름: {cat.name}</li>
//       <li>나이: {cat.age}</li>
//       <li>집: {cat.home}</li>
//       <li>울음소리: {cat.sound()}</li>
//     </ul>
//   )
// }





/*
  조건부 렌더링

  1. &&(그리고)
  표현식1 && 표현식2
  표현식1이 참일 경우 표현식2가 렌더링된다

  2. ||(또는)
  표현식1 || 표현식2
  표현식1이 참일 경우 표현식2가 렌더링된다
  표현식1이 거짓일 경우 표현식2가 랜더링된다

  3. ?(삼항연산자)
  조건 ? 표현식1 : 표현식2
  조건이 참일 경우 표현식1이 렌더링된다
  조건이 거짓일 경우 표현식2가 렌더링된다
*/


// function Snippet() {
//   return (
//     <>
//       <h2>JSX Conditional rendering</h2>

//       <h3>&&</h3>
//       <p>{true && "나는 보입니다"}</p>
//       <p>{null && "나는 안보입니다"}</p>

//       <h3>||</h3>
//       <p>{"나는 보입니다" || "나는 안보입니다"}</p>
//       <p>{null || "나는 보입니다"}</p>

//       <h3>Ternary (삼항연산자)</h3>
//       <p>{true ? "조건이 참입니다" : "조건이 거짓입니다"}</p>
//       <p>{false ? "조건이 참입니다" : "조건이 거짓입니다"}</p>
//     </>
//   )
// }


// // 리스트 렌더링

// function  Snippet() {
//   const beers = [
//     { name: "Heineken", origin: "Netherlands" },
//     { name: "Guinness", origin: "Ireland" },
//     { name: "Asahi", origin: "Japan" }
//   ]

//   const beerList = beers.map((beer, index) => (
//     <li key={index}>{beer.name} {beer.origin}</li>
//   ))
  
//   return (
//     <>
//       <h3>세계 맥주</h3>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }





// function Snippet() {
//   const beers = [
//     { name: "Heineken", origin: "Netherlands", available: false },
//     { name: "Guinness", origin: "Ireland", available: true },
//     { name: "Asahi", origin: "Japan", available: true }
//   ]

//   // Q. 리스트 렌더링
//   const beerRow = beers.map((beer, index) => ( // key는 고유한 값이기만 하면 아무거나 써도 됨
//     <tr key={index}>
//       <td>{beer.name}</td>
//       <td>{beer.origin}</td>
//       <td>{beer.available ? "Yes" : "No"}</td>
//     </tr>
//   ))

//   return (
//     <>
//       <h1>세계맥주</h1>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Origin</th>
//             <th>Available</th>
//           </tr>
//         </thead>
//         <tbody>
//           {beerRow}
//         </tbody>
//       </table>
//     </>
//   )
// }
// 처참하다.. 맞춘게 하나도 업ㅅ네..









/*
  컴포넌트

  1. 컴포넌트 힙성
  2. props
  3. children props
  4. useContext Hook
*/


// // 1. 컴포넌트 합성

// function Content() {
//   return (
//     <>
//       <h2>고양이는 액체일까?</h2>

//       {/* video */}
//       <img
//         src="https://img.sbs.co.kr/newimg/news/20180607/201190562_500.jpg"
//         alt="고양이"
//         width="100%"
//       />
//     </>
//   )
// }

// function Comments() {
//   return (
//     <ul>
//       <li>유치하게 등수는... 3빠</li>
//       <li>2빠</li>
//       <li>1빠</li>
//     </ul>
//   )
// }

// function Suggested() {
//   return (
//     <ul>
//       <li>고양이는 정말 폭력적일까?</li>
//       <li>고양이는 정말 자기가 신이라고 생각할까?</li>
//       <li>냥냥펀치는 얼마나 아플까?</li>
//     </ul>
//   )
// }

// function Snippet() {
//   return (
//     <>
//       <header>
//         <h1>YouTube</h1>
//       </header>

//       <main>
//         <Content/>

//         <h2>Comments</h2>
//         <Comments/>
//       </main>

//       <aside>
//         <h2>Suggested</h2>
//         <Suggested/>
//       </aside>
//     </>
//   )
// }





/*
  props
  컴포넌트에 전달되는 데이터
*/

// function Beer({ beer }) {
//   console.log(beer) // 전달받은 변수에 접근한다
  
//   return (
//     <ul>
//       <li>이름: {beer.name}</li>
//       <li>원산지: {beer.origin}</li>
//       <li>판매중: {beer.available ? "예" : "아니오"}</li>
//     </ul>
//   )
// }

// function Snippet() {

//   // 지역 변수(선언된 함수 안에서만 접근할 수 있다)
//   const irishBeer = {
//     name: "Guinness",
//     origin: "Ireland",
//     available: false
//   };

//   return (
//     <>
//       <h2>Beer</h2>
//       {/* Beer 컴포넌트에게 irishBeer 변수를 전달한다 */}
//       <Beer beer={irishBeer}/>
//     </>
//   )
// }





/*
  DATA, 컴포넌트 합성, props를 이용하여 왼쪽의 뷰를 완성해보세요
*/

// function Snippet() {
//   // 지역변수
//   const DATA = {
//     video: {
//       id: 'v0',
//       title: '고양이는 액체일까?',
//       source: "https://img.sbs.co.kr/newimg/news/20180607/201190562_500.jpg"
//     },
//     comments: [
//       { id: 'c0', content: '1빠' },
//       { id: 'c1', content: '2빠' },
//       { id: 'c2', content: '유치하게 등수는... 3빠' }
//     ],
//     suggestedVideos: [
//       { id: 's0', title: '고양이는 정말 폭력적일까?' },
//       { id: 's1', title: '고양이는 정말 자기가 신이라고 생각할까?' },
//       { id: 's2', title: '냥냥펀치는 얼마난 아플까?' }
//     ]
//   }

//   return (
//     <>
//       <header>
//         <h1>YouTube</h1>
//       </header>

//       <main>
//         <Content video={DATA.video}/>

//         <h2>Comments</h2>
//         <Comments comments={DATA.comments}/>
//       </main>

//       <aside>
//         <h2>Suggested Videos</h2>
//         <Suggested suggestedVideos={DATA.suggestedVideos}/>
//       </aside>
//     </>
//   )
// }

// // 영상 부분
// function Content({ video }) {
//   console.log(video); // 전달이 잘 되었는지 확인

//   return (
//     <>
//      <h2>{video.title}</h2>
//      <img src={video.source} alt={video.title} width="100%"/>
//     </>
//   )
// }

// // 댓글
// function Comments({ comments }) {
//   console.log(comments);

//   const commentsList = comments.map(comments => (
//     <li key={comments.id}>{comments.content}</li>
//   ))

//   return (
//     <ul>
//       {commentsList}
//     </ul>
//   )
// }

// // 추천 영상
// function Suggested({ suggestedVideos }) {
//   console.log(suggestedVideos);

//   const suggestedVideoList = suggestedVideos.map(video => (
//     <li key={video.id}>{video.title}</li>
//   ))

//   return (
//     <ul>
//       {suggestedVideoList}
//     </ul>
//   )
// }
// 거의 맞춤~.. 그게 어디야





/*
  children props
  컴포넌트를 트리형태로 만들 수 있다
*/

// function Layout({ children }) {
//   return (
//     <>
//       <h1>Instagram</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>Posts</li>
//           <li>Profile</li>
//         </ul>
//       </nav>

//       <main style={{ padding: "1rem 0" }}>
//         {/*  Article 컴포넌트를 나타낸다 */}
//         {children}
//       </main>

//       <footer>
//         <small>2023 &copy; Instagram</small>
//       </footer>
//     </>
//   )
// }

// function Article() {
//   return (
//     <>
//       <img
//         src="https://pbs.twimg.com/media/EmDPwC6U8AAWzeZ.jpg"
//         alt=""
//         width="100%"
//       />

//       <p>
//         <b>snoop_dog </b>
//         주인 나가서 한컷.
//       </p>

//       <small>1일 전</small>
//     </>
//   )
// }

// function Snippet() {
//   return (
//     <Layout>
//       <Article/>
//     </Layout>
//   )
// }





/*
  useContext Hook
  하위 컴포넌트에 데이터를 전달할 수 있다(트리구조)

  *Hook으로 끝나는 것: 리액트가 제공하는 특별한 함수
*/

// const AuthContext = createContext();

// // 인증 관리
// function AuthProvider({ children }) {

//   // 유저 정보(지역 변수)
//   const value = { username: "maltese" };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// function Layout({ children }) {

//   // value 객체에 접근
//   const auth = useContext(AuthContext);

//   console.log(auth);

//   return (
//     <>
//       <h1>Instagram</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>Posts</li>
//           <li>Profile</li>
//         </ul>
//       </nav>
      
//       <p>안녕하세요, {auth.username}님!</p>

//       <main style={{ padding: "1rem 0" }}>
//         {/*  Article 컴포넌트를 나타낸다 */}
//         {children}
//       </main>

//       <footer>
//         <small>2023 &copy; Instagram</small>
//       </footer>
//     </>
//   )
// }

// function Article() {

//   // value 객체에 접근
//   const auth = useContext(AuthContext);

//   console.log(auth);

//   return (
//     <>
//       <img
//         src="https://pbs.twimg.com/media/EmDPwC6U8AAWzeZ.jpg"
//         alt=""
//         width="100%"
//       />

//       <p>
//         <b>snoop_dog </b>
//         주인 나가서 한컷.
//       </p>

//       <small>1일 전</small>
//     </>
//   )
// }

// function Snippet() {
//   return (
//     <AuthProvider>
//       <Layout>
//         <Article/>
//       </Layout>
//     </AuthProvider>
//   )
// }





/*
  이벤트 처리
*/

// function Snippet() {
//   function handleClick() {
//     arguments;ErrorEvent("lol");
//   }

//   return (
//     <>
//       <h3>이벤트 처리</h3>
//       <button onClick={handleClick}>클릭</button>
//     </>
//   )
// } 





/*
  뷰 업데이트

  useState Hook 사용방법

  const [state, setstate] = useState(value)

  state: 컴포넌트 내의 변수(상태)
  setState(newState): state를 업데이트하는 메서드
  initialValue: state의 초기값(최초 렌더링 시)
*/

// function Snippet() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   )
// }






// function Snippet() {
//   const [subscribed, setSubscribed] = useState(false);

//   console.log(subscribed) // state값 추적

//   return(
//     <>
//       <h1>구독버튼</h1>
//       {/* subscribed를 현재 상태의 반대값으로 업데이트한다 */}
//       <button onClick={() => setSubscribed(!subscribed)}>
//         {subscribed ? "구독중" : "구독하기"}
//       </button>
//     </>
//   )
// }







// function Snippet() {
//   const [count, setCount] = useState(0);

//   // 지역함수(선언된 컴포넌트 내에서만 접근 가능)
//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//      <p>count: {count}</p>
//      {/* 합성된 컴포넌트에 지역함수를 전달한다 */}
//      <Button handleClick={handleClick}/>
//      {/* 소문자로 시작하면 엘리먼트로 인식하기 때문에 컴포넌트는 대문자로 시작해야함 */}
//     </>
//   )
// }

// function Button({ handleClick }) {
//   // 합성된 컴포넌트에서 메인 컴포넌트의 state를 변화시킬 수 있다
//   return (
//     <button onClick={handleClick}>+</button>
//   )
// }






/*
  리액트 라우터(Router)
  요청주소와 적합한 컴포넌트를 연결한다

  1. 라우터 기본
  2. 인승이 적용된 라우터
*/

// 1. 기본 라우터

// // 메인 컴포넌트
// function Snippet() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             {/* Link 컴포넌트의 to속성: 요청주소 */}
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/Posts">Posts</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* 요청주소와 일치하는 path를 가진 Route컴포넌트의 element가 렌더링된다 */}
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="about" element={<About />}/>
//         <Route path="posts" element={<Posts />}/>
//         {/* path에서 :매개변수 = 요청주소의 매개변수 */}
//         <Route path="post/:postId" element={<Post />}/>
//         <Route path="*" element={<NotFound />}/>
//       </Routes>
//     </Router>
//   )
// }

// // 홈
// function Home() {
//   return <h1>Home</h1>
// }

// // 게시물 목록
// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p1">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// // 게시물 상세보기
// function Post() {
//   // useParams훅을 사용하여 요청주소와 매개변수에 접근할 수 있다
//   const { postId } = useParams();

//   return (
//     <>
//       <h1>Title</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// // 소개
// function About() {
//   return <h1>About</h1>
// }

// // 페이지를 찾을 수 없습니다
// function NotFound() {
//   return <h1>NotFound</h1>
// }





// 2. 인증이 적용된 라우터

// // 메인 컴포넌트
// function Snippet() {
//   return (
//     <Router>
//       <AuthProvider>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/posts">Posts</Link>
//             </li>
//           </ul>
//         </nav>

//         <AuthStatus />

//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="posts" element={<Posts/>} />
//           <Route path="post/:postId" element={
//           <AuthRequired>
//             <Post />
//           </AuthRequired>
//           } />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   )
// }

// // 인증 컨택스트
// const AuthContext = createContext();

// // 유저 데이터 관리
// function AuthProvider({ children }) {
//   // 유저 데이터
//   const [user, setUser] = useState(null);

//   console.log(user) // user 추적

//   const value = { user, setUser };

//   // 하위 컴포넌트에 value 객체를 전달할 수 있다
//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
//   return children;
// }

// // 인증 상태 메시지
// function AuthStatus() {
//   // value 객체 접근
//   const { user, setUser } = useContext(AuthContext);

//   return user ? (
//     <p>
//       Hi, {user}! {" "}
//       <button onClick={() => setUser(null)}>Log Out</button>
//     </p>
//   ) : (
//     <p>Not logged in</p>
//   )
// }

// // 인증 검사
// function AuthRequired({ children }) {
//   const { user, setUser } = useContext(AuthContext);

//   // 로그인 처리
//   function handleSubmit(e) {
//     e.preventDefault(); // 새로고침 방지

//     const formData = new FormData(e.target);

//     // 서버요청

//     // formData.get("username"): 유저가 입력한 값에 접근

//     // user(state)를 유저(사용자)가 입력한 겂으로 업데이트한다
//     setUser(formData.get("username"));
//   }

//   if (!user) {
//     return (
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <input type="text" name="username" required />
//         <button type="submit">Login</button>
//       </form>
//     )
//   }

//   // children은 Post컴포넌트이다
//   return children;
// }

// // 홈
// function Home() {
//   return <h1>Home</h1>
// }

// // 게시물 목록
// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p1">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// // 게시물 상세보기
// function Post() {
//   const { postId } = useParams();

//   return (
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// // 페이지를 찾을 수 없습니다
// function NotFound() {
//   return <h1>NotFound</h1>
// }






/*
  데이터 요청하기

  1. useEffect Hook
  2. 데이터 요청 실제 예시
*/

/*
  useEffect
  리액트 앱에서 특정한 효과를 적용할 때 사용하는 Hook

  useEffect(effect): 컴포넌트가 렌더리 될 때마다 이펙트를 실행한다
  useEffect(effect, []): 최초 렌더링 시에만 이펙트를 실행한다
  useEffect(effect, [dep]): 최초 렌더링 시 또는 depandency가 업데이트 될 때 이펙트를 실행한다
*/


// function Snippet() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // 콘솔에 렌더링 시간을 출력한다
//     console.log('rendered at ' + new Date().toLocaleTimeString())
//   })

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   )
// }






// 2. 데이터 요청 실제 예시

// 서버에 데이터를 요청하는 함수
function fetchData() {

  const DATA = {
    username: 'snoop_dogg',
    image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fd9%2Ff8%2Fba%2Fd9f8ba8d5bfab74b22ca25d0d20940dd.jpg&type=sc960_832',
    bio: '반갑네 인간'
  }

  const promise = new Promise((res, rej) => {
    // 데이터를 전송받는데 2초가 걸린다고 가정한다
    setTimeout(() =>{
      res(DATA)
    }, 2000)
  })

  return promise;
}

function Snippet() {
  // 요청 실패 처리
  const [error, setError] = useState(null);
  // 로딩 상태 처리
  const [isLoaded, setIsLoaded] = useState(false);
  // 프로필을 지정할 변수
  const [profile, setProfile] = useState(null);

  // useEffect는 비동기적으로 작동한다 -> 가장 마지막에 실행된다
  useEffect(() => {
    // 서버에 데이터 요청
    fetchData()
      .then(data => { // 요청 성공 시 데이터 처리
        setProfile(data) // 응답데이터를 profile 변수에 저장한다
      })
      .catch(error => { // 요청 실패 시 에러 처리
        setError(error)
      })
      .finally(() => setIsLoaded(true)) // 성공, 실패와 관계없이 항상 실행되는 코드

      // state가 업데이트되면 해당 state가 선언된 컴포넌트가 다시 렌더링 된다
  }, [])

  if (error) {
    return <p>failed to fetch profile</p>
  }

  if(!isLoaded) {
    return <p>fetching profile...</p>
  }

  return (
    <>
      <h1>Profile</h1>
      <img
        src={profile.image}
        alt={profile.username}
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '50%'
        }}
      />
      <h3>{profile.username}</h3>
      <p>{profile.bio}</p>
    </>
  )
}
