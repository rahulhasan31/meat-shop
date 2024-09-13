"use client";

import { useAuth } from "@/authService/authContext";
import Order from "@/components/Order/Order";
import Spinner from "@/components/ui/Spinner/Spinner";
import useAuthCheck from "@/ulits/PriveteRoute";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MyOrder = () => {
  const router = useRouter();
  const { isLoggedIn, logout, userRole } = useAuth();

  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 2500);
  });
  if (isLoading) return <Spinner />;
  return (
    <>
      <>
        {(isLoggedIn && userRole === "user") ||
        (isLoggedIn && userRole === "admin") ? (
          <Order />
        ) : (
          <>{router.push("/")}</>
        )}
      </>
    </>
  );
};

export default MyOrder;
