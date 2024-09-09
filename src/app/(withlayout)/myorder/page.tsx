"use client";

import { useAuth } from "@/authService/authContext";
import Order from "@/components/Order/Order";
import Spinner from "@/components/ui/Spinner/Spinner";
import useAuthCheck from "@/ulits/PriveteRoute";
import { useRouter } from "next/navigation";
import React from "react";

const MyOrder = () => {
  const router = useRouter();
  const { isLoggedIn, logout, userRole } = useAuth();

  // if (!isLoggedIn) return <Spinner />;
  return (
    <>
      <>
        {(isLoggedIn && userRole === "user") || userRole === "admin" ? (
          <Order />
        ) : (
          <>
            <Spinner /> && {router.push("/")}
          </>
        )}
      </>
    </>
  );
};

export default MyOrder;
