"use client";
import { decodedToken } from "@/ulits/jwt";
import Cookies from "js-cookie";
import {
  getLocalStored,
  setCookiesToken,
  setToLocalStored,
  setUserStore,
} from "@/ulits/local-sotorage";
import dayjs from "dayjs";

export const storeUserInfo = ({ access }: { access: string }) => {
  return setToLocalStored("access", access);
};

export const storeCookies = ({ refreshToken }: { refreshToken: string }) => {
  console.log("refreshToken", refreshToken);
  return setCookiesToken("refreshToken", refreshToken);
};

export const getUserInfo = async () => {
  const authToken: string | null = getLocalStored("access");

  if (authToken) {
    const decoded: any = decodedToken(authToken);
    const isExp = dayjs.unix(decoded.exp).diff(dayjs()) < 1;
    console.log("isExp", isExp);

    if (isExp) {
      const refresh = Cookies.get("refreshToken");
      console.log("refresh", refresh);

      if (refresh) {
        try {
          const response = await fetch(
            "http://localhost:5000/api/v1/auth/refresh-token",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: refresh }),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to refresh token");
          }

          const data = await response.json();
          console.log("data", data);
          const newAccessToken = data.accessToken;
          const newRefreshToken = data.refreshToken;
          setToLocalStored("access", newAccessToken);
          setCookiesToken("refreshToken", newRefreshToken);

          // Decode the new access token to return the user info
          return decodedToken(newAccessToken);
        } catch (error) {
          console.error("Error refreshing token:", error);
          return null;
        }
      }
    } else {
      return decoded;
    }
  } else {
    return null;
  }
};

export const isSignUp = () => {
  const authToken = getLocalStored("access");
  return !!authToken;
};

export const isLoggedIn = () => {
  const authToken = getLocalStored("access");
  return !!authToken;
};

export const isUser = ({ user }: { user: any }) => {
  return setUserStore("user", user);
};

// export const isgetUserRole=()=>{
//     const getUserRole=getUserStoredRole('user')
//     if (getUserRole) {
//         const storedObject = JSON.parse(getUserRole);
//         return storedObject
//     }
// }
