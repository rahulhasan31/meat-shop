"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { decodedToken } from "@/ulits/jwt";
import Cookies from "js-cookie";

import dayjs from "dayjs";
import {
  storeUserInfo,
  storeCookies,
  getUserInfo,
  isSignUp,
  isLoggedIn as checkIsLoggedIn,
} from "./authservice";

export interface AuthContextType {
  isLoggedIn: boolean;
  userRole: string | null;
  login: ({
    access,
    refreshToken,
  }: {
    access: string;
    refreshToken: string;
  }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<any>(null);
  console.log("userInfo", userInfo);
  // console.log("isLoggedIn", isLoggedIn);
  // console.log("userInfo role", userInfo?.role);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        if (userInfo) {
          setUserInfo(userInfo);
          setUserRole(userInfo?.role);
        } else {
          console.log("No user info found or token refresh failed.");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();

    // Start the token refresh interval
  }, []);
  useEffect(() => {
    const userLogin = checkIsLoggedIn();
    setIsLoggedIn(userLogin);
    if (userLogin) {
      // console.log("userInfo setuser", userInfo?.role);

      setUserRole(userInfo?.role);
    }
  }, [userInfo?.role]);

  const login = ({
    access,
    refreshToken,
  }: {
    access: string;
    refreshToken: string;
  }) => {
    storeUserInfo({ access });
    storeCookies({ refreshToken });

    setUserRole(userInfo?.role);
    setIsLoggedIn(true);
    router.push("/"); // Redirect to dashboard or any other page
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    localStorage.removeItem("access");
    Cookies.remove("refreshToken");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
