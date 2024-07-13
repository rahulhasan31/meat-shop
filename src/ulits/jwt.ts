import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  if (!token || typeof token !== "string") {
    throw new Error("Invalid token specified: missing or malformed token");
  }

  return jwtDecode(token);
};
