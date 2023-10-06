export default function f(crimes, 분류) {
  
  const murders = crimes.filter(crime => crime["범죄중분류"] === 분류)
  
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