// src/components/StripeElement.tsx
"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";

const stripePromise = loadStripe(
  "pk_test_51M6YTaIOaRhLiCR9IUacPMWr7kIOpNT2oEv4gm3lLOoRyLZ0sQplaW3fiYroKVA63hTjrAq5homSPjhn01lr0z36007McI12l5"
);
console.log(stripePromise);

const StripeElement: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeElement;
