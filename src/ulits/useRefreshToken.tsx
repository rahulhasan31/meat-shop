"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import { decodedToken } from "./jwt";
import { setCookiesToken, setToLocalStored } from "./local-sotorage";

const useRefreshToken = () => {
  const refreshTokenMake = async () => {
    const refresh = Cookies.get("refreshToken");
    if (!refresh) {
      console.error("No refresh token found in cookies");
      return null;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/refresh-token",
        { token: refresh },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { accessToken, refreshToken } = response.data;
      setToLocalStored("access", accessToken);
      setCookiesToken("refreshToken", refreshToken);

      return decodedToken(accessToken);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error refreshing token:", error.response.data);
      } else {
        console.error("Unexpected error:", error);
      }
      return null;
    }
  };

  return { refreshTokenMake };
};

export default useRefreshToken;
