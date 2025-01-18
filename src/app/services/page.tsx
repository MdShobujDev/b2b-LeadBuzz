import AboutOurServices from "@/components/AboutOurServices";
import Services from "@/components/HomePage/Services";
import Banner from "@/components/ui/Banner";
import Hero from "@/components/ui/Hero";

const data = {
  title: `Unlock High-Quality Leads to Drive Your Business Forward`,
  description: `Discover the power of targeted B2B lead generation. We connect you with high-quality prospects, tailored to your business needs, to help you drive growth and achieve measurable success.`,
};

const ServicesPage = () => {
  return (
    <section>
      <Hero title={data.title} description={data.description} />
      <Services />
      <AboutOurServices />
      <Banner />
    </section>
  );
};

export default ServicesPage;
