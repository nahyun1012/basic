import { useState, useEffect } from 'react';
import { getPublicData } from '../service/api';
import KakaoMap from './KakaoMap';
import RechartBar from './RechartBar';
import f from '../utils/f';

export default function Dashboard({ type }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [crimes, setCrimes] = useState([]);
  const [crimeCount, setCrimeCount] = useState(0);

  
  async function fetchData() {
    try {
      const data = await getPublicData();
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
  }, [])

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
    <>
      <KakaoMap 
        countPerCity={countPerCity} 
      /> 
      <RechartBar 
        countPerCity={countPerCity} 
      />
    </>
  )
}