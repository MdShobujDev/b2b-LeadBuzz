import PricingCard from "@/components/PricingPage/PricingCard";
import Banner from "@/components/ui/Banner";
import Hero from "@/components/ui/Hero";

const data = {
  title: `Flexible Pricing for Results-Driven B2B Lead Generation.`,
  description: `Choose a pricing plan that fits your business needs and budget. Our transparent and flexible packages are designed to deliver high-quality leads, ensuring maximum ROI for your B2B lead generation efforts.`,
};

const Pricing = () => {
  return (
    <section>
      <Hero title={data.title} description={data.description} />
      <PricingCard />
      <Banner />
    </section>
  );
};

export default Pricing;
