export const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3001";

export const getAuthToken = (): string | null => {
  const tokens = sessionStorage.getItem("session");
  if (!tokens) return null;
  try {
    const accessToken = JSON.parse(tokens).accessToken;
    return accessToken;
  } catch (e) {
    console.error("Erro ao parsear token da sessão:", e);
    return null;
  }
};

export const getStandardHeaders = (): HeadersInit => {
  const headers: HeadersInit = {
    "Content-type": "application/json",
  };

  const token = getAuthToken(); // Pega o token
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};
