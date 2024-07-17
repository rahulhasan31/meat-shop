import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/authService/authContext";

const useAuthCheck = () => {
  const { isLoggedIn, userRole } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!(isLoggedIn && (userRole === "user" || userRole === "admin"))) {
      router.push("/");
    }
  }, [isLoggedIn, userRole, router]);

  return { isLoggedIn, userRole };
};

export default useAuthCheck;
