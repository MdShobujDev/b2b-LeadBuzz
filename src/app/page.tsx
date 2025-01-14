import AboutServices from "@/components/HomePage/AboutServices";
import Reviews from "@/components/HomePage/ClientReviews";
import Count from "@/components/HomePage/Count";
import HeroSection from "@/components/HomePage/HeroSection";
import HomeContact from "@/components/HomePage/HomeContact";
import Services from "@/components/HomePage/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutServices />
      <Services />
      <Count />
      <Reviews />
      <HomeContact />
    </>
  );
}
