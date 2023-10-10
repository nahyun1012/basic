import { useState, useEffect } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';

export default function KakaoMap({ 
  countPerCity,
}) {
  const [positions, setPositions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  console.log(new Date().toLocaleString())

  const cities = [
    { name: "강원", crd: { lat: 37.7457159751289, lng: 128.83147107603173 }},
    { name: "경기", crd: { lat: 37.495037669825884, lng: 127.49235611185203 }},
    { name: "경남", crd: { lat: 35.544799518803295, lng: 128.17507587575008 }},
    { name: "경북", crd: { lat: 36.303072627570224, lng: 128.90595333593285 }},
    { name: "광주", crd: { lat: 35.189655952462886, lng: 126.8277842963087 }},
    { name: "대구", crd: { lat: 35.84921361555613, lng: 128.55630734608124 }},
    { name: "대전", crd: { lat: 36.373504038630905, lng: 127.39756668275123 }},
    { name: "부산", crd: { lat: 35.263570062783934, lng: 129.0911434614301 }},
    { name: "서울", crd: { lat: 37.5763930844039, lng: 126.99331777887316 }},
    { name: "세종", crd: { lat: 36.58754216625766, lng: 127.24996199654046 }},
    { name: "울산", crd: { lat: 35.59986014786369, lng: 129.2283618807341 }},
    { name: "인천", crd: { lat: 37.60806181084386, lng: 126.6888929888616 }},
    { name: "전남", crd: { lat: 34.97493557164273, lng: 127.04373952001379 }},
    { name: "전북", crd: { lat: 35.83286802285763, lng: 127.13370117040395 }},
    { name: "제주", crd: { lat: 33.486156007586764, lng: 126.81524999262011 }},
    { name: "충남", crd: { lat: 36.76053901433834, lng: 126.80288040037843 }},
    { name: "충북", crd: { lat: 37.177561559002385, lng: 127.70361852770343 }},
  ]

  function f() {
    setIsLoaded(false);

    const arr = []

    cities.forEach(city => {
      let perCount = countPerCity[city.name];
  
      for (var i = 0; i < perCount; i++) {
        arr.push(city.crd);
      }
    })

    setPositions(arr)
    setIsLoaded(true)
  }

  useEffect(() => {
    f()
  }, [countPerCity]) 

  if (!isLoaded) {
    return <p>...</p>
  }

  return (
    <Map
      center={{
        lat: 36.2683,
        lng: 127.6358,
      }}
      className="h-[1000px] w-full"
      level={12}
    >
      <MarkerClusterer
        averageCenter={true}
        minLevel={10}
      >
        {positions.map((pos) => (
          <MapMarker
            key={Math.random()}
            position={{
              lat: pos.lat,
              lng: pos.lng,
            }}
          />
        ))}
      </MarkerClusterer>
    </Map>
  );
}