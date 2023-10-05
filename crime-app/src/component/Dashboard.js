import { useState, useEffect } from 'react';
import { getPublicData } from '../service/api';

import Murders from './Murders'

export default function Dashboard() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [crimes, setCrimes] = useState([]);
  const [crimeCount, setCrimeCount] = useState(0);

  
  async function fetchData() {
    try {
      const data = await getPublicData();
      // console.log(data);
      
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



  


  return (
    <>
      <Murders crimes={crimes} />
     
    </>
  )
}