import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/authService/authContext";

const useAuthCheck = () => {
  const { isLoggedIn, userRole } = useAuth();
  const router = useRouter();
  if (!(isLoggedIn && (userRole === "user" || userRole === "admin"))) {
    router.push("/");
  }
  

  return { isLoggedIn, userRole };
};

export default useAuthCheck;
