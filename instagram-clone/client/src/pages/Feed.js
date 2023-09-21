import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PostTemplate from "./shared/PostTemplate";
import { getFeed, deletePost, likePost, unlikePost } from "../service/api";
import Spinner from './shared/Spinner'
import AuthContext from "../auth/AuthContext";

export default function Feed() {
  const { user } = useContext(AuthContext)
  const [error,  setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);
  // 더보기 기능
  const [skip, setSkip] = useState(0);
  const limit = 5;

  // 키 스테이트
  console.log(posts);
  
  // 피드 요청
    useEffect(() => {
      fetchData()
    }, [skip])

    // 피드 요청 함수
    async function fetchData() {
      try {
        setError(null);
        setIsLoaded(false);

        // 서버 요청
        const data = await getFeed(limit, skip);

        // posts 업데이트 (더보기 기능)
        // 1. posts - 이전에 포함한 게시물
        // 2. data.posts - 새롭게 포함한 게시물
        const updatedPosts = [...posts, ...data.posts];

        setPosts(updatedPosts);
        setPostCount(data.postCount);

      } catch(error) {
        setError(error)
      } finally {
        setIsLoaded(true)
      }
    }

    // 좋아요
    async function handleLike(id) {
      try {
        // 서버 요청
        await likePost(id);

        // posts 업데이트
        const updatedPosts = posts.map(post => {
          if (post.id === id) {
            return {
              ...post,
              liked: true,
              likesCount: post.likesCount + 1
            }
          }
          return post;
        })

        setPosts(updatedPosts);

      } catch(error) {
        alert(error)
      }
    }

    // 좋아요 취소
    async function handleUnlike(id) {
      try {
        // 서버 요청
        await unlikePost(id);

        // posts 업데이트
        const updatedPosts = posts.map(post => {
          if (post.id === id) {
            return {
              ...post,
              liked: false,
              likesCount: post.likesCount - 1
            }
          }
          return post;
        })

        setPosts(updatedPosts);

      } catch(error) {
        alert(error)
      }
    }

    //게시물 삭제
    async function handleDelete(id) {
      try {
        // 서버 요청
        await deletePost(id);

        // posts 업데이트
        const remainingPosts = posts.filter(post => {
          if (id !== post.id) {
            return post;
          }
        });

        setPosts(remainingPosts);

      } catch(error) {
        alert(error)
      }
    }

    // 피드 목록
    const postList = posts.map(post => (
      <PostTemplate
        key={post.id}
        id={post.id}
        username={post.user.username}
        avatarUrl={post.user.avatarUrl}
        photoUrls={post.photoUrls}
        caption={post.caption}
        liked={post.liked}
        likesCount={post.likesCount}
        commentCount={post.commentCount}
        displayDate={post.displayDate}
        handleLike={handleLike}
        handleUnlike={handleUnlike}
        handleDelete={handleDelete}
        isMaster={user.username === post.user.username}
      />
    ))

    // 더 가져올 게시물이 있는지 확인
    // postCount: DB에 있는 게시물의 총 갯수
    // posts.length:  현재 클라이언트가 가지고 있는 게시물이 갯수
    const doesMoreExists = postCount > posts.length;

    // 더보기 버튼
    const moreButton = (
      <div className="flex justify-center my-2">
        <button
          className="p-1 text-blue-500 font-semibold"
          onClick={() => setSkip(skip + limit)} // skip을 증가시킨다
        >
          더보기
        </button>
      </div>
    )

    return (
      <>
        {postList.length > 0 ? (
          <ul>
            {postList}
          </ul>
        ) : (
          <div className="p-8 text-center">
            <Link
              to="/explore"
              className="text-blue-500"
            >
              Instagram 둘러보기
            </Link>
          </div>
        )}

        {doesMoreExists && moreButton}

        {!isLoaded && <Spinner />}

        {error && <p  className="text-red-500">{error.message}</p>}
      </>
    )
}