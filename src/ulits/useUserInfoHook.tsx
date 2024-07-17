import { getUserInfo } from "@/authService/authservice";
import { useState, useEffect } from "react";
// adjust the import according to your project structure

interface UserInfo {
  id: string;
  // Add other user info fields here
}

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setLoading(true);
        const userInfo = await getUserInfo();
        if (userInfo) {
          setUserInfo(userInfo);
        } else {
          console.log("No user info found or token refresh failed.");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
        setError("Error fetching user info");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();

    // Start the token refresh interval if needed
  }, []);

  return { userInfo, loading, error };
};

export default useUserInfo;
