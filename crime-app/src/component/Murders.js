import KakaoMap from './KakaoMap';
import RechartBar from './RechartBar';

export default function Murders({ crimes }) {
  
  const murders = crimes.filter(crime => crime["범죄중분류"] === "살인기수")
  
  const KangwonMurders = murders[0]
  let kangwonMurderCount = 0;
  
  for (let key in KangwonMurders) {
    if (key.split(" ")[0] === "강원") {
      kangwonMurderCount += parseInt(KangwonMurders[key]);
    }
  }
  console.log("강원 살인기수:", kangwonMurderCount)
  
  
  const GyeonggiMurders = murders[0]
  let GyeonggiMurderCount = 0;
  
  for (let key in GyeonggiMurders) {
    if (key.split(" ")[0] === "경기") {
      GyeonggiMurderCount += parseInt(GyeonggiMurders[key]);
    }
  }
  console.log("경기 살인기수:", GyeonggiMurderCount)
  
  
  const GyeongnamMurders = murders[0]
  let GyeongnamMurderCount = 0;
  
  for (let key in GyeongnamMurders) {
    if (key.split(" ")[0] === "경남") {
      GyeongnamMurderCount += parseInt(GyeongnamMurders[key]);
    }
  }
  console.log("경남 살인기수:", GyeongnamMurderCount)
  
  
  const GyeongbukMurders = murders[0]
  let GyeongbukMurderCount = 0;
  
  for (let key in GyeongbukMurders) {
    if (key.split(" ")[0] === "경북") {
      GyeongbukMurderCount += parseInt(GyeongbukMurders[key]);
    }
  }
  console.log("경북 살인기수:", GyeongbukMurderCount)
  
  
  const KwangjuMurders = murders[0]
  let KwangjuMurderCount = 0;
  
  for (let key in KwangjuMurders) {
    if (key.split(" ")[0] === "광주") {
      KwangjuMurderCount += parseInt(KwangjuMurders[key]);
    }
  }
  console.log("광주 살인기수:", KwangjuMurderCount)
  
  
  const DaeguMurders = murders[0]
  let DaeguMurderCount = 0;
  
  for (let key in DaeguMurders) {
    if (key.split(" ")[0] === "대구") {
      DaeguMurderCount += parseInt(DaeguMurders[key]);
    }
  }
  console.log("대구 살인기수:", DaeguMurderCount)
  
  
  const DaejeonMurders = murders[0]
  let DaejeonMurderCount = 0;
  
  for (let key in DaejeonMurders) {
    if (key.split(" ")[0] === "대전") {
      DaejeonMurderCount += parseInt(DaejeonMurders[key]);
    }
  }
  console.log("대전 살인기수:", DaejeonMurderCount)
  
  
  const BusanMurders = murders[0]
  let BusanMurderCount = 0;
  
  for (let key in BusanMurders) {
    if (key.split(" ")[0] === "부산") {
      BusanMurderCount += parseInt(BusanMurders[key]);
    }
  }
  console.log("부산 살인기수:", BusanMurderCount)
  
  
  const SeoulMurders = murders[0]
  let SeoulMurderCount = 0;
  
  for (let key in SeoulMurders) {
    if (key.split(" ")[0] === "서울") {
      SeoulMurderCount += parseInt(SeoulMurders[key]);
    }
  }
  console.log("서울 살인기수:", SeoulMurderCount)
  
  
  const SejongMurders = murders[0]
  let SejongMurderCount = 0;
  
  for (let key in SejongMurders) {
    if (key.split(" ")[0] === "세종") {
      SejongMurderCount += parseInt(SejongMurders[key]);
    }
  }
  console.log("세종 살인기수:", SejongMurderCount)
  
  
  const UlsanMurders = murders[0]
  let UlsanMurderCount = 0;
  
  for (let key in UlsanMurders) {
    if (key.split(" ")[0] === "울산") {
      UlsanMurderCount += parseInt(UlsanMurders[key]);
    }
  }
  console.log("울산 살인기수:", UlsanMurderCount)
  
  
  const IncheonMurders = murders[0]
  let IncheonMurderCount = 0;
  
  for (let key in IncheonMurders) {
    if (key.split(" ")[0] === "인천") {
      IncheonMurderCount += parseInt(IncheonMurders[key]);
    }
  }
  console.log("인천 살인기수:", IncheonMurderCount)
  
  
  const JeonamMurders = murders[0]
  let JeonamMurderCount = 0;
  
  for (let key in JeonamMurders) {
    if (key.split(" ")[0] === "전남") {
      JeonamMurderCount += parseInt(JeonamMurders[key]);
    }
  }
  console.log("전남 살인기수:", JeonamMurderCount)
  
  
  const JeonbukMurders = murders[0]
  let JeonbukMurderCount = 0;
  
  for (let key in JeonbukMurders) {
    if (key.split(" ")[0] === "전북") {
      JeonbukMurderCount += parseInt(JeonbukMurders[key]);
    }
  }
  console.log("전북 살인기수:", JeonbukMurderCount)
  
  
  const JejuMurders = murders[0]
  let JejuMurderCount = 0;
  
  for (let key in JejuMurders) {
    if (key.split(" ")[0] === "제주") {
      JejuMurderCount += parseInt(JejuMurders[key]);
    }
  }
  console.log("제주 살인기수:", JejuMurderCount)
  
  
  const ChungnamMurders = murders[0]
  let ChungnamMurderCount = 0;
  
  for (let key in ChungnamMurders) {
    if (key.split(" ")[0] === "충남") {
      ChungnamMurderCount += parseInt(ChungnamMurders[key]);
    }
  }
  console.log("충남 살인기수:", ChungnamMurderCount)
  
  
  const ChungbukMurders = murders[0]
  let ChungbukMurderCount = 0;
  
  for (let key in ChungbukMurders) {
    if (key.split(" ")[0] === "충북") {
      ChungbukMurderCount += parseInt(ChungbukMurders[key]);
    }
  }
  console.log("충북 살인기수:", ChungbukMurderCount)
  
  
  const murderCountPerCity = {
    강원: kangwonMurderCount,
    경기: GyeonggiMurderCount,
    경남: GyeongnamMurderCount,
    경북: GyeongbukMurderCount,
    광주: KwangjuMurderCount,
    대구: DaeguMurderCount,
    대전: DaejeonMurderCount,
    부산: BusanMurderCount,
    서울: SeoulMurderCount,
    세종: SejongMurderCount,
    울산: UlsanMurderCount,
    인천: IncheonMurderCount,
    전남: JeonamMurderCount,
    전북: JeonbukMurderCount,
    제주: JejuMurderCount,
    충남: ChungnamMurderCount,
    충북: ChungbukMurderCount
  }

  return (
    <>
      <KakaoMap murderCountPerCity={murderCountPerCity} /> 
      <RechartBar murderCountPerCity={murderCountPerCity} />
    </>
  )
}