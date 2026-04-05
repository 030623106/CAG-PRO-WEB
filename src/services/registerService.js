export const registerService = async (api, payload) => {
  const response = await fetch(`${api}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  return { response, data };
};