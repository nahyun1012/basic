import { DISTRICTS  } from './constants/districts';
import KakaoMap from './component/KakaoMap';
import { useState, useEffect } from 'react';
import Dashboard from './component/Dashboard';
import TYPES from './constants/types';

console.log(TYPES)

export default function App() {
  const [type, setType] = useState("살인기수")

  const typeOptions = TYPES.map(type => (
    <option key={type.name} value={type.name}>{type.name}</option>
  ))
  
  return (
    <>
      <p className="text-2xl text-center">지역별 범죄 발생 통계</p>
      <div>
        <select onChange={(e) => setType(e.target.value)}>
          {typeOptions}
        </select>
      </div>

      <main>
        <Dashboard type={type} />
      </main>
    </>
  )
}