"use client";

import { useAuth } from "@/authService/authContext";
import Order from "@/components/Order/Order";
import OrderStatus from "@/components/OrderStatus/OrderStatus";
import Spinner from "@/components/ui/Spinner/Spinner";
import useAuthCheck from "@/ulits/PriveteRoute";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrderConfirm = () => {
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
      {isLoggedIn && userRole === "admin" ? (
        <OrderStatus />
      ) : (
        <>{router.push("/")}</>
      )}
    </>
  );
};

export default OrderConfirm;
