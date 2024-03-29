const CODES = [
  { year: 2017, value: "f046e6e5-58f2-4716-8b74-be62f1a6c6fc_201910221520" },
  { year: 2016, value: "10bde8f1-739c-4b66-b6a6-ccf5339a658e_201910221521" },
  { year: 2015, value: "7e73ac26-d0fa-4444-9c2e-81fdad4eff1b_201912061355"}
]

export async function getPublicData(year) {

  const CODE = CODES.find(code => code.year == year);

  console.log(CODE)
  console.log(year);


  let url = `https://api.odcloud.kr/api/3074462/v1/uddi:${CODE.value}?page=1&perPage=10&serviceKey=VLv1nR5WuLzkk8zhGE7BXDRJ90Bz7lCRIY7m6P2eroKq8MR7g1Zz4n6EZix4Y%2BFwheFv1CsVCOu9KumO002s9A%3D%3D`

  

  const res = await fetch(url, {});

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  return res.json();
}