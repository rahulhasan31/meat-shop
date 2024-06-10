import AskedQuestions from "@/components/AskedQuestions/AskedQuestions";
import OurTeam from "@/components/OurTeam/OurTeam";
import WhyChooce from "@/components/ui/About/whyChooce/WhyChooce";
import ProductBanner from "@/components/ui/ProductBanner/ProductBanner";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <ProductBanner />
      <WhyChooce />
      <OurTeam />
      <AskedQuestions />
    </>
  );
};

export default AboutPage;
