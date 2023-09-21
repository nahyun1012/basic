import { useState, useEffect } from 'react';
import { getPublicData } from '../service/api';

export default function Dashboard() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [crime, setCrime] = useState([]);
  const [crimeCount, setCrimeCount] = useState(0);

  
  async function fetchData() {
    try {
      const data = await getPublicData();
      console.log(data);
      
      setCrime(data.items.item);
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
      ..
    </>
  )
}