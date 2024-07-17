"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/authService/authContext";
import Checkout from "@/components/Checkout/Checkout";
import React from "react";
import Spinner from "@/components/ui/Spinner/Spinner";
import useAuthCheck from "@/ulits/PriveteRoute";

const CheckoutPage = () => {
  const { isLoggedIn, userRole } = useAuthCheck();

  if (!isLoggedIn) return <Spinner />;
  return (
    <>
      {userRole === "user" || userRole === "admin" ? <Checkout /> : <Spinner />}
    </>
  );
};

export default CheckoutPage;
