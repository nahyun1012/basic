export async function getPublicData() {
  let url = "https://api.odcloud.kr/api/3074462/v1/uddi:f046e6e5-58f2-4716-8b74-be62f1a6c6fc_201910221520?page=1&perPage=10&serviceKey=VLv1nR5WuLzkk8zhGE7BXDRJ90Bz7lCRIY7m6P2eroKq8MR7g1Zz4n6EZix4Y%2BFwheFv1CsVCOu9KumO002s9A%3D%3D"

  const res = await fetch(url, {});

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  return res.json();
}