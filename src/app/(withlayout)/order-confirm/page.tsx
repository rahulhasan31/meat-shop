"use client";

import Order from "@/components/Order/Order";
import Spinner from "@/components/ui/Spinner/Spinner";
import useAuthCheck from "@/ulits/PriveteRoute";
import React from "react";

const OrderConfirm = () => {
  const { isLoggedIn, userRole } = useAuthCheck();

  if (!isLoggedIn) return <Spinner />;
  return <>{userRole === "admin" ? <Order /> : <Spinner />}</>;
};

export default OrderConfirm;
