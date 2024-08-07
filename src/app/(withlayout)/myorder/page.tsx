"use client";

import { useAuth } from "@/authService/authContext";
import Order from "@/components/Order/Order";
import Spinner from "@/components/ui/Spinner/Spinner";
import useAuthCheck from "@/ulits/PriveteRoute";
import { useRouter } from "next/navigation";
import React from "react";

const MyOrder = () => {
  const { isLoggedIn, userRole } = useAuthCheck();

  if (!isLoggedIn) return <Spinner />;
  return (
    <>
      <>
        {userRole === "user" || userRole === "admin" ? <Order /> : <Spinner />}
      </>
    </>
  );
};

export default MyOrder;
