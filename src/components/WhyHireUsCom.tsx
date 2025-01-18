import { FaCircleCheck } from "react-icons/fa6";

const items = [
  {
    id: 1,
    title: "Manual Lead Research",
    desc: "Get manually researched & human verified current data in real time. No outdated, stale or pre-made data.",
  },
  {
    id: 2,
    title: "Affordable Pricing Offers",
    desc: "Affordable pricing offers. Save 30-50% list building cost than other vendors but get better quality data within 48 hours.",
  },
  {
    id: 3,
    title: "100% Accuracy Leads.",
    desc: "100% data accuracy with at least 97-98% email deliverability guarantee. You should pay for only valid leads.",
  },
  {
    id: 4,
    title: "Get FREE 50 leads",
    desc: "Get FREE leads for trying us depending on your specific search criteria. No SignUp or Credit Card needed.",
  },
  {
    id: 5,
    title: "Order Now & Pay Later.",
    desc: "Order now and Pay later. First get the lead list to check & review the quality & accuracy.",
  },
  {
    id: 6,
    title: "Save Your Time",
    desc: "No extra stress, No boring work to match and identify leads. Save a few hours a day for your prospecting.",
  },
  {
    id: 7,
    title: "Pay as Your Need",
    desc: "No Yearly or Month Subscription fee! Order and Pay as your need. Get full freedom in your data research.",
  },
  {
    id: 8,
    title: "Get Discount",
    desc: "Get 10% OFF when you place your re-order and 20% OFF If you bring a new customer for us.",
  },
];
function WhyHireUsCom() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center my-10">
          <h1 className="text-4xl font-bold">Why Hire Us</h1>
          <p>8 Reasons that make us Premium and Friendly</p>
        </div>
        <div className="grid min-[800px]:grid-cols-2 grid-cols-1 gap-3 mb-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 border rounded-md shadow hover:bg-gray-100 transition-all duration-150 ease-linear"
            >
              <div className="text-green-600 text-xl">
                <FaCircleCheck />
              </div>
              <div>
                <h2 className="font-medium">{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyHireUsCom;
