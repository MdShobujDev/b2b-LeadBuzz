import Hero from "@/components/ui/Hero";

const data = {
  title: `Unlock High-Quality Leads to Drive Your Business Forward`,
  description: `Discover the power of targeted B2B lead generation. We connect you with high-quality prospects, tailored to your business needs, to help you drive growth and achieve measurable success.`,
};

const Services = () => {
  return (
    <section>
      <Hero title={data.title} description={data.description} />
    </section>
  );
};

export default Services;
