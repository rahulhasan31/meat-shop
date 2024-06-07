import ProductBanner from "@/components/ui/ProductBanner/ProductBanner";
import ProductDetails from "@/components/ui/ProductDetails/ProductDetails";
import React from "react";

const SinglePage = ({ params }: any) => {
  return (
    <>
      <ProductBanner />
      <ProductDetails />
    </>
  );
};

export default SinglePage;
