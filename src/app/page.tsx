"use client";

import AskedQuestions from "@/components/AskedQuestions/AskedQuestions";
import Banner from "@/components/Banner/Banner";
import BlogSection from "@/components/BlogSection/BlogSection";
import OrganicProducts from "@/components/OrganicProducts/OrganicProducts";
import OurOrganic from "@/components/OurOrganic/OurOrganic";
import OurTeam from "@/components/OurTeam/OurTeam";
import ParallaxSection from "@/components/ParallaxSecction/ParallaxSection";
import QualityBanner from "@/components/QualityBanner/QualityBanner";
import TowSlider from "@/components/TowSlider/TowSlider";
import TwoSection from "@/components/TwoSection/TwoSection";
import { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner/Spinner";

export default function Home() {
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 2500);
  });
  return (
    <>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <Banner />
          <QualityBanner />
          <TwoSection />
          <OurOrganic />
          <TowSlider />
          <OrganicProducts />
          <OurTeam />
          <AskedQuestions />
          <ParallaxSection />
          <BlogSection />
        </>
      )}
    </>
  );
}
