"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/authService/authContext";
import Checkout from "@/components/Checkout/Checkout";
import React from "react";
import Spinner from "@/components/ui/Spinner/Spinner";

const CheckoutPage = () => {
  const { isLoggedIn, logout, userRole } = useAuth();
  const router = useRouter();
  return (
    <>
      {(isLoggedIn && userRole === "user") || userRole === "admin" ? (
        <>
          <Checkout />
        </>
      ) : (
        <>
          <>{router.push("/")}</>
        </>
      )}
    </>
  );
};

export default CheckoutPage;
