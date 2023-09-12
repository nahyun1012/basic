import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostTemplate from "./shared/PostTemplate";
import { getPost, deletePost, likePost, unlikePost } from "../service/api";
import Spinner from "./shared/Spinner";
import AuthContext from "../auth/AuthContext";

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)

  // 키 스테이트
  console.log(post);

  // 게시물 요청
  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const data = await getPost(id);

      setPost(data.post);

    } catch(error) {
      navigate('/notfound', { replace: true });
    }
  }

  // 좋아요 처리
  async function handleLike(id) {}

  // 좋아요 취소 처리
  async function handleUnlike(id) {}

  // 게시물 삭제 처리
  async function handleDelete(id) {}

  if (!post) {
    return <Spinner />
  }

  return (
    <PostTemplate
      id={post.id}
      username={post.user.username}
      avatarUrl={post.photoUrls}
      caption={post.caption}
      likesCount={post.likesCount}
      commentCount={post.commentCount}
      displayDate={post.displayDate}
      liked={post.liked}
      handleLike={handleLike}
      handleUnlike={handleUnlike}
      handleDelete={handleDelete}
      isMaster={user.username === post.user.username}
    />
  )
}