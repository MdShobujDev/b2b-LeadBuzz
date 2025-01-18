import ContactForm from "@/components/ContactForm";
import Hero from "@/components/ui/Hero";

const data = {
  title: `Let's Connect and Drive Your Business Forward Together.`,
  description: `Have questions or ready to get started? Our team is here to provide the answers and support you need. Reach out today, and let's explore how we can help your business grow with tailored B2B lead generation solutions.`,
};

const Contact = () => {
  return (
    <section>
      <Hero title={data.title} description={data.description} />
      <ContactForm />
    </section>
  );
};

export default Contact;
