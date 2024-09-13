"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/authService/authContext";
import Checkout from "@/components/Checkout/Checkout";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/ui/Spinner/Spinner";

const CheckoutPage = () => {
  const { isLoggedIn, logout, userRole } = useAuth();
  const router = useRouter();
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     return <Spinner />;
  //   }
  // }, []);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 2500);
  });
  if (isLoading) return <Spinner />;
  return (
    <>
      {(isLoggedIn && userRole === "user") ||
      (isLoggedIn && userRole === "admin") ? (
        <Checkout />
      ) : (
        <>{router.push("/")}</>
      )}
    </>
  );
};

export default CheckoutPage;
