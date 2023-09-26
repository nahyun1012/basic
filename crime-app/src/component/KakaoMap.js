import { useState, useEffect } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';

export default function KakaoMap() {
  const [positions, setPositions] = useState([]);

  const 강원 = { lat: 37.7457159751289, lng: 128.83147107603173 };
  const 경기 = { lat: 37.495037669825884, lng: 127.49235611185203 };
  const 경남 = { lat: 35.544799518803295, lng: 128.17507587575008 };
  const 경북 = { lat: 36.303072627570224, lng: 128.90595333593285 };
  const 광주 = { lat: 35.189655952462886, lng: 126.8277842963087 };
  const 대구 = { lat: 35.84921361555613, lng: 128.55630734608124 };
  const 대전 = { lat: 36.373504038630905, lng: 127.39756668275123 };
  const 부산 = { lat: 35.263570062783934, lng: 129.0911434614301 };
  const 서울 = { lat: 37.5763930844039, lng: 126.99331777887316 };
  const 세종 = { lat: 36.58754216625766, lng: 127.24996199654046 };
  const 울산 = { lat: 35.59986014786369, lng: 129.2283618807341 };
  const 인천 = { lat: 37.60806181084386, lng: 126.6888929888616 };
  const 전남 = { lat: 34.97493557164273, lng: 127.04373952001379 };
  const 전북 = { lat: 35.83286802285763, lng: 127.13370117040395 };
  const 제주 = { lat: 33.486156007586764, lng: 126.81524999262011 };
  const 충남 = { lat: 36.76053901433834, lng: 126.80288040037843 };
  const 충북 = { lat: 37.177561559002385, lng: 127.70361852770343 };
  const position = []

  for (var i = 0; i < 10; i++) {
    position.push(강원);
  }

  for (var i = 0; i < 48; i++) {
    position.push(경기);
  }

  for (var i = 0; i < 21; i++) {
    position.push(경남);
  }

  for (var i = 0; i < 18; i++) {
    position.push(경북);
  }

  for (var i = 0; i < 3; i++) {
    position.push(광주);
  }

  for (var i = 0; i < 16; i++) {
    position.push(대구);
  }

  for (var i = 0; i < 8; i++) {
    position.push(대전);
  }

  for (var i = 0; i < 21; i++) {
    position.push(부산);
  }

  for (var i = 0; i < 50; i++) {
    position.push(서울);
  }

  for (var i = 0; i < 1; i++) {
    position.push(세종);
  }

  for (var i = 0; i < 5; i++) {
    position.push(울산);
  }

  for (var i = 0; i < 11; i++) {
    position.push(인천);
  }

  for (var i = 0; i < 4; i++) {
    position.push(전남);
  }

  for (var i = 0; i < 7; i++) {
    position.push(전북);
  }

  for (var i = 0; i < 4; i++) {
    position.push(제주);
  }

  for (var i = 0; i < 13; i++) {
    position.push(충남);
  }

  for (var i = 0; i < 13; i++) {
    position.push(충북);
  }

  useEffect(() => {
    setPositions(position);
  },[])

  return (
    <Map
      center={{
        lat: 36.2683,
        lng: 127.6358,
      }}
      style={{
        width: "100%",
        height: "450px",
      }}
      level={13}
    >
      <MarkerClusterer
        averageCenter={true}
        minLevel={10}
      >
        {positions.map((pos) => (
          <MapMarker
            key={`${pos.lat}-${pos.lng}`}
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
