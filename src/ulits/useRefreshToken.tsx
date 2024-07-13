"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { setCookiesToken, setToLocalStored } from "./local-sotorage";
import { decodedToken } from "./jwt";
// Import your token decoding function

const useRefreshToken = () => {
  const refreshTokenMake = async () => {
    const refresh = Cookies.get("refreshToken");
    // console.log("refresh", refresh);
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
      //   console.log("data", data);
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
  };

  return { refreshTokenMake };
};

export default useRefreshToken;
