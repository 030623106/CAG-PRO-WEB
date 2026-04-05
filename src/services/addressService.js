const BASE_URL = "https://provinces.open-api.vn/api";

export const getProvinceService = async () => {
  const response = await fetch(`${BASE_URL}/p/`);
  const data = await response.json();

  return { response, data };
};

export const getDistrictService = async (provinceCode) => {
  const response = await fetch(`${BASE_URL}/p/${provinceCode}?depth=2`);
  const data = await response.json();

  return { response, data: data.districts || [] };
};
