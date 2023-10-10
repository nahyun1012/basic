import { useState, useEffect } from 'react';
import { getPublicData } from '../service/api';
import KakaoMap from './KakaoMap';
import RechartBar from './RechartBar';
import RechartPie from './RechartPie';
import f from '../utils/f';

export default function Dashboard({ type, year }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [crimes, setCrimes] = useState([]);
  const [crimeCount, setCrimeCount] = useState(0);

  
  async function fetchData() {
    try {
      const data = await getPublicData(year);
      console.log(data);
      
      setCrimes(data.data);
      setCrimeCount(data.totalCount);
      
    } catch(error) {
      setError(error)
    } finally {
      setIsLoaded(true);
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [year])

  if (error) {
    return <p>{error.message}</p>
  }

  if (!isLoaded) {
    return (
      <div>
        <div className="animate-spin"></div>
      </div>
    )
  }

  const countPerCity = f(crimes, type);

  return (
    <div className="grid grid-cols-2">
      <div className="">
        <KakaoMap countPerCity={countPerCity} /> 
      </div>
      <div className="pt-7">
        <div>
          <p className="text-xl text-center font-normal py-1">
            사고 지역별 상세 내용
          </p>
          <RechartBar countPerCity={countPerCity} />
        </div>
        <div className="py-10">
          <RechartPie countPerCity={countPerCity} />
        </div>
      </div>
    </div>
  )
}