import BlogSection from "@/components/BlogSection/BlogSection";
import QualityBanner from "@/components/QualityBanner/QualityBanner";
import ProductBanner from "@/components/ui/ProductBanner/ProductBanner";
import React from "react";

const ShopBlogPage = () => {
  return (
    <div className="">
      <ProductBanner />
      <BlogSection />
      <QualityBanner />
    </div>
  );
};

export default ShopBlogPage;
