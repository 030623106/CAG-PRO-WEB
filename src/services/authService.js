export const loginService = async (api, account, password) => {

  const response = await fetch(`${api}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      account,
      password
    })
  });

  const data = await response.json();

  return { response, data };
};