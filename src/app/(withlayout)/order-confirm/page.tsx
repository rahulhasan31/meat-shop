"use client";

import { useAuth } from "@/authService/authContext";
import Order from "@/components/Order/Order";
import OrderStatus from "@/components/OrderStatus/OrderStatus";
import Spinner from "@/components/ui/Spinner/Spinner";
import useAuthCheck from "@/ulits/PriveteRoute";
import { useRouter } from "next/navigation";
import React from "react";

const OrderConfirm = () => {
  const { isLoggedIn, logout, userRole } = useAuth();
  const router = useRouter();
  if (!isLoggedIn) return <Spinner />;
  return (
    <>
      {userRole === "admin" ? (
        <OrderStatus />
      ) : (
        <>
          <Spinner /> && {router.push("/")}
        </>
      )}
    </>
  );
};

export default OrderConfirm;
