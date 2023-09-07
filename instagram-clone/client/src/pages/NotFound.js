import { useEffect } from 'react';
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = `Page not found - Instagram`;
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold my-4 text-center">
        페이지를 사용할 수 없습니다.
      </h1>
      <p className="my-4 text-center">
        링크가 잘못었거나 페이지가 삭제되었습니다.
      </p>

      <Link to="/" className="block text-center text-blue-500 font-semibold">
        인스타그램으로 돌아가기.
      </Link>
    </div>
  )
}