import Link from "next/link";

const cardItems = [
  {
    id: 1,
    label: "Starter",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "20",
    includedSearvices: ["10 users", "2GB of storage", "Email support"],
    excludedSearvices: [
      "Help center access",
      "Phone support",
      "Community access",
    ],
  },
  {
    id: 2,
    label: "Pro",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "30",
    includedSearvices: [
      "20 users",
      "3GB of storage",
      "Email support",
      "Help center access",
    ],
    excludedSearvices: ["Phone support", "Community access"],
  },
  {
    id: 3,
    label: "Enterprise",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "50",
    includedSearvices: [
      "10 users",
      "2GB of storage",
      "Email support",
      "Help center access",
      "Phone support",
      "Community access",
    ],
    excludedSearvices: [],
  },
];

const PricingCard = () => {
  return (
    <div className="max-w-7xl px-5 mx-auto  pt-10 pb-36">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]  gap-4 md:gap-8">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                {item.label}
              </h2>

              <p className="mt-2 text-gray-700">{item.title}</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {item.price}$
                </strong>

                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>

              <Link
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="/contact"
              >
                Get Started
              </Link>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                {`What's included:`}
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                {item?.includedSearvices?.map((text, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700">{text} </span>
                  </li>
                ))}

                {item?.excludedSearvices?.map((text, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-gray-700"> {text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
