export async function getPublicData() {
  
  let url = "https://infuser.odcloud.kr/oas/docs?namespace=3074462/v1"

  url += "3074462/v1/uddi:efafd73f-3310-48f8-9f56-bddc1c51f3ba_201910221541"
  url += "3074462/v1/uddi:9ce2c7eb-438b-417e-9986-e458906f2bf6_201910221524"
  url += "3074462/v1/uddi:10bde8f1-739c-4b66-b6a6-ccf5339a658e_201910221521"
  url += "3074462/v1/uddi:f046e6e5-58f2-4716-8b74-be62f1a6c6fc_201910221520"
  url += "3074462/v1/uddi:3621ad6a-4570-49bf-a09b-fe9f4a63a248_201910221518"
  url += "3074462/v1/uddi:7e73ac26-d0fa-4444-9c2e-81fdad4eff1b_201912061355"

  const res = await fetch(url, {});

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  return res.json();
}