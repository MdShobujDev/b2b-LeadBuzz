import ContactForm from "@/components/HomePage/ContactForm";
import Loading from "@/components/Loading";
import Hero from "@/components/ui/Hero";
import { Suspense } from "react";

const data = {
  title: `Let's Connect and Drive Your Business Forward Together.`,
  description: `Have questions or ready to get started? Our team is here to provide the answers and support you need. Reach out today, and let's explore how we can help your business grow with tailored B2B lead generation solutions.`,
};

const Contact = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section>
        <Hero title={data.title} description={data.description} />
        <ContactForm />
      </section>
    </Suspense>
  );
};

export default Contact;
