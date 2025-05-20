export const API_URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN_POST = () => {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
  };
};

export const TOKEN_VALIDATE_POST = (token: string) => {
  return {
    url: `${API_URL}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
  export function USER_POST() {
    return {
      url: API_URL + '/api/user',
  }
};