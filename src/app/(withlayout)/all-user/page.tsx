"use client";

import { useAuth } from "@/authService/authContext";
import Order from "@/components/Order/Order";
import Spinner from "@/components/ui/Spinner/Spinner";
import User from "@/components/User/User";
import useAuthCheck from "@/ulits/PriveteRoute";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AllUser = () => {
  const { isLoggedIn, logout, userRole } = useAuth();
  const router = useRouter();
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 2500);
  });
  if (isLoading) return <Spinner />;
  return (
    <>
      {isLoggedIn && userRole === "admin" ? <User /> : <>{router.push("/")}</>}
    </>
  );
};

export default AllUser;
