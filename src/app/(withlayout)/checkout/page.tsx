"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/authService/authContext";
import Checkout from "@/components/Checkout/Checkout";
import React from "react";
import Spinner from "@/components/ui/Spinner/Spinner";

const CheckoutPage = () => {
  const { isLoggedIn, logout, userRole } = useAuth();
  const router = useRouter();
  if (!isLoggedIn) return <Spinner />;
  return (
    <>
      {userRole === "user" || userRole === "admin" ? (
        <Checkout />
      ) : (
        <>
          <Spinner /> && {router.push("/")}
        </>
      )}
    </>
  );
};

export default CheckoutPage;
