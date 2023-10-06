export default function f(crimes) {
  
  const murders = crimes.filter(crime => crime["범죄중분류"] === "살인기수")
  
  const Murders = murders[0]
  let KangwonMurderCount = 0;
  let GyeonggiMurderCount = 0;
  let GyeongnamMurderCount = 0;
  let GyeongbukMurderCount = 0;
  let KwangjuMurderCount = 0;
  let DaeguMurderCount = 0;
  let DaejeonMurderCount = 0;
  let BusanMurderCount = 0;
  let SeoulMurderCount = 0;
  let SejongMurderCount = 0;
  let UlsanMurderCount = 0;
  let IncheonMurderCount = 0;
  let JeonamMurderCount = 0;
  let JeonbukMurderCount = 0;
  let JejuMurderCount = 0;
  let ChungnamMurderCount = 0;
  let ChungbukMurderCount = 0;

  for (let key in Murders) {
    if (key.split(" ")[0] === "강원") {
      KangwonMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "경기") {
      GyeonggiMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "경남") {
      GyeongnamMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "경북") {
      GyeongbukMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "광주") {
      KwangjuMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "대구") {
      DaeguMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "대전") {
      DaejeonMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "부산") {
      BusanMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "서울") {
      SeoulMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "세종") {
      SejongMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "울산") {
      UlsanMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "인천") {
      IncheonMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "전남") {
      JeonamMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "전북") {
      JeonbukMurderCount += parseInt(Murders[key]);
    } if (key.split(" ")[0] === "제주") {
      JejuMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "충남") {
      ChungnamMurderCount += parseInt(Murders[key]);
    } else if (key.split(" ")[0] === "충북") {
      ChungbukMurderCount += parseInt(Murders[key]);
    }
  }

  // console.log("강원 살인기수:", KangwonMurderCount)
  // console.log("경기 살인기수:", GyeonggiMurderCount)
  // console.log("경남 살인기수:", GyeongnamMurderCount)
  // console.log("경북 살인기수:", GyeongbukMurderCount)
  // console.log("광주 살인기수:", KwangjuMurderCount)
  // console.log("대구 살인기수:", DaeguMurderCount)
  // console.log("대전 살인기수:", DaejeonMurderCount)
  // console.log("부산 살인기수:", BusanMurderCount)
  // console.log("서울 살인기수:", SeoulMurderCount)
  // console.log("세종 살인기수:", SejongMurderCount)
  // console.log("울산 살인기수:", UlsanMurderCount)
  // console.log("인천 살인기수:", IncheonMurderCount)
  // console.log("전남 살인기수:", JeonamMurderCount)
  // console.log("전북 살인기수:", JeonbukMurderCount)
  // console.log("제주 살인기수:", JejuMurderCount)
  // console.log("충남 살인기수:", ChungnamMurderCount)
  // console.log("충북 살인기수:", ChungbukMurderCount)



  const attemptedmurders = crimes.filter(crime => crime["범죄중분류"] === "살인미수등")
  
  const AttemptedMurders = attemptedmurders[0]
  let KangwonAttemptedMurderCount = 0;
  let GyeonggiAttemptedMurderCount = 0;
  let GyeongnamAttemptedMurderCount = 0;
  let GyeongbukAttemptedMurderCount = 0;
  let KwangjuAttemptedMurderCount = 0;
  let DaeguAttemptedMurderCount = 0;
  let DaejeonAttemptedMurderCount = 0;
  let BusanAttemptedMurderCount = 0;
  let SeoulAttemptedMurderCount = 0;
  let SejongAttemptedMurderCount = 0;
  let UlsanAttemptedMurderCount = 0;
  let IncheonAttemptedMurderCount = 0;
  let JeonamAttemptedMurderCount = 0;
  let JeonbukAttemptedMurderCount = 0;
  let JejuAttemptedMurderCount = 0;
  let ChungnamAttemptedMurderCount = 0;
  let ChungbukAttemptedMurderCount = 0;

  for (let key in AttemptedMurders) {
    if (key.split(" ")[0] === "강원") {
      KangwonAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "경기") {
      GyeonggiAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "경남") {
      GyeongnamAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "경북") {
      GyeongbukAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "광주") {
      KwangjuAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "대구") {
      DaeguAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "대전") {
      DaejeonAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "부산") {
      BusanAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "서울") {
      SeoulAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "세종") {
      SejongAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "울산") {
      UlsanAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "인천") {
      IncheonAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "전남") {
      JeonamAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "전북") {
      JeonbukAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } if (key.split(" ")[0] === "제주") {
      JejuAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "충남") {
      ChungnamAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    } else if (key.split(" ")[0] === "충북") {
      ChungbukAttemptedMurderCount += parseInt(AttemptedMurders[key]);
    }
  }

  console.log("강원 살인미수 등:", KangwonAttemptedMurderCount)
  // console.log("경기 살인기수:", GyeonggiMurderCount)
  // console.log("경남 살인기수:", GyeongnamMurderCount)
  // console.log("경북 살인기수:", GyeongbukMurderCount)
  // console.log("광주 살인기수:", KwangjuMurderCount)
  // console.log("대구 살인기수:", DaeguMurderCount)
  // console.log("대전 살인기수:", DaejeonMurderCount)
  // console.log("부산 살인기수:", BusanMurderCount)
  // console.log("서울 살인기수:", SeoulMurderCount)
  // console.log("세종 살인기수:", SejongMurderCount)
  // console.log("울산 살인기수:", UlsanMurderCount)
  // console.log("인천 살인기수:", IncheonMurderCount)
  // console.log("전남 살인기수:", JeonamMurderCount)
  // console.log("전북 살인기수:", JeonbukMurderCount)
  // console.log("제주 살인기수:", JejuMurderCount)
  // console.log("충남 살인기수:", ChungnamMurderCount)
  // console.log("충북 살인기수:", ChungbukMurderCount)
  
  
  return {
    강원: KangwonMurderCount,
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
}