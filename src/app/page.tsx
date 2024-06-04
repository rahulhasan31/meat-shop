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

export default function Home() {
  return (
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
  );
}
