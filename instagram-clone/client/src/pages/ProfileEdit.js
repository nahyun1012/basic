import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { updateProfile, updateAvatar } from "../service/api";
import AuthContext from "../auth/AuthContext";

export default function ProfileEdit() {
  const { user, setUser } = useContext(AuthContext);
  const [newName,  setNewName] = useState(user.name);
  const [newBio, setNewBio] = useState(user.bio);

  // 키 스테이트
  console.log(user);

  // 폼 제출버튼 disabled 처리용 객체
  const isEqual = { // 수정을 했울 때 제출버튼이 활성화 된다
    name: user.name === newName,
    bio: user.bio === newBio,
  };

  // 폼 제출처리
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      
      // 수정한 프로필 정보
      const editedProfile = {
        name: newName,
        bio: newBio
      };

      // 서버 요청
      const { user } = await updateProfile(editedProfile);

      // 요청 업데이트
      setUser(user);

      // 성공 메시지
      alert('수정되었습니다');

    } catch(error) {
      alert(error);
    }
  }

  // 파일 처리
  async function handleFile(e) {
    try {
      // 유저가 선택한 파일
      const file = e.target.files[0];

      // 폼데이터 타입: 서버에 파일을 전송할 떼 사용한다
      const formData = new FormData();

      // 폼데이터에 유저가 선택한 파일을 저장한다
      formData.append("avatar", file);

      // 서버 요청
      const { user } = await updateAvatar(formData);

      // 유저 업데이트
      setUser(user);

      // 성공 메시지
      alert("수정되었습니다");

    } catch(error) {
      alert(error)
    }
  }

  // 타이틀 업데이트
  useEffect(() => {
    document.title = '프로필 수정 + Instagram';
  }, [])

  return (
    <div className="mt-8 px-4">
      {/* 아바타 이미지, 아바타 업데이트 버튼 */}
      <div className="flex mb-4">
        <img 
          src={user.avatarUrl}
          className="w-16 h-16 object-cover rounded-full border"
        />

        <div className="flex flex-col grow items-start ml-4">
          <h3>{user.username}</h3>

          <label className="text-sm font-semibold text-blue-500 cursor-pointer">
            <input
              type="file"
              className="hidden"
              onChange={handleFile}
              accept="image/png, image/jpg, image/jpeg"
            />
            사진 업데이트
          </label>
        </div>
      </div>

      {/* 폼 */}
      <form onSubmit={handleSubmit}>
        {/* 이름 입력란 */}
        <div className="mb-2">
          <label htmlFor="name" className="block font-semibold">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border px-2 py-1 rounded w-full"
            value={newName}
            onChange={({ target }) => setNewName(target.value)}
          />
        </div>

        {/* 자기소개 입력란 */}
        <div className="mb-2">
          <label htmlFor="bio" className="block font-semibold">자기소개</label>
          <textarea
            id="bio"
            rows="3"
            name="bio"
            className="border px-2 py-1 rounded w-full resize-none"
            value={newBio}
            onChange={({ target }) => setNewBio(target.value)}
          />
        </div>

        {/* 제출 및 취소 버튼 */}
        <div className="flex">
          <button
            type="submit"
            className="text-sm font-semibold bg-gray-200 rounded-lg px-4 py-2 disabled:opacity-[0.2]"
            disabled={isEqual.name && isEqual.bio}
          >
            저장
          </button>

          <Link
            to={`/profiles/${user.username}`}
            className="text-sm font-semibold bg-gray-200 rounded-lg px-4 py-2 ml-2"
          >
            취소
          </Link>
        </div>
      </form>
    </div>
  )


}