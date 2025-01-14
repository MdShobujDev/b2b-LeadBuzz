import Link from "next/link";
import {
  FaDatabase,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaPhoneVolume,
} from "react-icons/fa";
import { FaPeopleGroup, FaTableList } from "react-icons/fa6";

function Services() {
  const servicesItems = [
    {
      id: 1,
      title: "Data Enrichment",
      icon: <FaDatabase />,
      desc: "LinkedIn data enrichment, Leads Appending and Data Entry, Data Appending/Enrichment, Web Research, Cell Phone Number Enrichment , Any Site Data Collection",
    },
    {
      id: 2,
      title: "Lead Generation",
      icon: <FaTableList />,
      desc: "We are professional lead generation specialist with over 6 years+ of expertise in B2B Lead Generation, Email List Building, Skip Tracing, Contact Finding, and other related areas.",
    },
    {
      id: 3,
      title: "Email List Building",
      icon: <FaEnvelopeOpenText />,
      desc: "Email Verify with NeverBounce and also Send Emails by mail to check Bounce rate. So you will get a 100% Verified List with zero Bounce.",
    },
    {
      id: 4,
      title: "Terget Person",
      icon: <FaPeopleGroup />,
      desc: "We Can Provide 100% Verified List From Any Targeted -( Company, Niche, Industry, Title, Location, Keyword Related )",
    },
    {
      id: 5,
      title: "Email Filtering",
      icon: <FaEnvelope />,
      desc: "We Can Provide 100% Verified E-mail and Personal and Business Email List From Any Targeted -( Company, Niche, Industry, Title, Location, Keyword Related)",
    },
    {
      id: 6,
      title: "Cell Phone and Direct Phone Enrichment",
      icon: <FaPhoneVolume />,
      desc: "We Can Provide 100% Verified E-mail and Direct Phone Number List From Any Targeted -( Company, Niche, Industry, Title, Location, Keyword Related ) & Any phone number all premium tools, Zoominfo , Lusha , seamless and Kaspr",
    },
  ];
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 py-14 ">
        <h1 className="text-4xl text-center font-medium mb-8">Our Services</h1>
        <div className="grid min-[900px]:grid-cols-3 min-[550px]:grid-cols-2 grid-cols-1 gap-3">
          {servicesItems.map((item) => (
            <Link
              href="/services"
              key={item.id}
              className="flex flex-col gap-3 items-center rounded-xl p-5 cursor-pointer bg-white"
              style={{
                boxShadow: "0 25px 90px -15px rgba(0, 48, 104, .1)",
              }}
            >
              <div className="text-3xl text-purple-600">{item.icon}</div>
              <h2 className="text-xl font-medium text-center">{item.title}</h2>
              <p className="text-gray-600 text-sm text-center">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
