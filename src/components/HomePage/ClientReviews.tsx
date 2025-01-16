"use client";
import { FaStar } from "react-icons/fa6";
import EmblaCarousel from "../ui/EmblaCarouse";

const clients = [
  {
    id: 1,
    name: "Jone Doe",
    start: "5",
    date: "4 Feb, 2024",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam voluptate nostrum excepturi minima est debitis perferendis?",
    photo: "",
  },
  {
    id: 2,
    name: "Jone Smit",
    start: "5",
    date: "3 Feb, 2022",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam voluptate nostrum excepturi minima est debitis perferendis?",
    photo: "",
  },
  {
    id: 3,
    name: "Mike Dso",
    start: "5",
    date: "4 Feb, 2024",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam voluptate nostrum excepturi minima est debitis perferendis?",
    photo: "",
  },
  {
    id: 4,
    name: "Loe Paw",
    start: "5",
    date: "4 Feb, 2024",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam voluptate nostrum excepturi minima est debitis perferendis?",
    photo: "",
  },
  {
    id: 5,
    name: "Sumit Leo",
    start: "5",
    date: "4 Feb, 2024",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam voluptate nostrum excepturi minima est debitis perferendis?",
    photo: "",
  },
];

function Reviews() {
  return (
    <section className=" bg-gray-100 py-20">
      <div className=" max-w-7xl mx-auto overflow-hidden flex min-[950px]:flex-row flex-col px-5 py-8 gap-5 ">
        <div className=" flex flex-col items-center ">
          <h1 className=" text-3xl font-medium">
            Over 1,000 Businesses Trust <strong>B2BLeadBuzz</strong> for
            Unmatched B2B Lead Generation Solutions
          </h1>
          <p className=" text-xs mt-2 text-gray-700">
            <strong>B2BLeadBuzz</strong> is a trusted B2B lead generation
            partner, empowering over 1,000 businesses worldwide. Our dedicated
            team is available 24/7 to deliver tailored strategies and
            data-driven solutions to help you achieve your sales and marketing
            goals.
          </p>
        </div>
        {/* Reviews section  */}
        <div className=" min-[950px]:w-2/5 w-full">
          <EmblaCarousel>
            {clients.map((item) => (
              <div
                key={item.id}
                className=" w-full min-[950px]:flex-[0_0_85%] min-[600px]:flex-[0_0_60%] flex-[0_0_90%] rounded-md bg-white p-4 select-none"
              >
                <div className=" flex items-start justify-between">
                  <div className=" flex items-start gap-2">
                    <div className=" bg-gray-300 w-14 h-14 rounded-full"></div>
                    <div>
                      <h2 className=" font-medium">{item.name}</h2>
                      <p className=" text-xs font-medium">{item.date}</p>
                    </div>
                  </div>
                  <div className=" flex items-center gap-2 text-orange-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className=" text-sm  text-gray-500 italic mt-2">
                  &ldquo; {item.review} &rdquo;
                </p>
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
