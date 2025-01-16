import AboutServices from "@/components/HomePage/AboutServices";
import Reviews from "@/components/HomePage/ClientReviews";
import Count from "@/components/HomePage/Count";
import HeroSection from "@/components/HomePage/HeroSection";
import Services from "@/components/HomePage/Services";
import Banner from "@/components/ui/Banner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutServices />
      <Services />
      <Count />
      <Reviews />
      <Banner />
    </>
  );
}
