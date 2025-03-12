"use client";
import star from "@/../public/star.png";
import Image from "next/image";
const clients = [
  {
    id: 1,
    name: "Jone Doe",
    review:
      "Instant B2B Service helped us to approach the new clients. They are really fast delivered with high-quality. Very communicative, having kuge skilled on Contact List Building.",
    photo: "",
  },
  {
    id: 2,
    name: "Jone Smit",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam voluptate nostrum excepturi minima est debitis perferendis?",
    photo: "",
  },
  {
    id: 3,
    name: "Mike Dso",

    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam voluptate nostrum excepturi minima est debitis perferendis?",
    photo: "",
  },
  {
    id: 4,
    name: "Loe Paw",

    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam voluptate nostrum excepturi minima est debitis perferendis?",
    photo: "",
  },
  {
    id: 5,
    name: "Sumit Leo",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam voluptate nostrum excepturi minima est debitis perferendis?",
    photo: "",
  },
  {
    id: 6,
    name: "Navin Kala",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam voluptate nostrum excepturi minima est debitis perferendis?",
    photo: "",
  },
];

function Reviews() {
  return (
    <section className="sm:pb-20 pb-10 max-w-7xl mx-auto px-5">
      <div className=" flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-800">
          Users sharing their experience
        </h1>
        <p className="sm:text-base text-sm text-gray-600 mt-2">
          Real Stories, Real Success: Hear from Our Satisfied Clients
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {clients.map((i) => (
          <div
            key={i.id}
            className="group border p-7 flex flex-col gap-3 relative"
          >
            <svg
              data-v-922fb0dd=""
              className="w-5 sm:w-6 absolute right-5 top-5 group-hover:block hidden"
              viewBox="0 0 62 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-922fb0dd=""
                opacity="0.1"
                d="M36.8281 0H62.0001V25.315L51.906 45.5975H39.358L49.4015 25.315H36.8281V0Z"
                fill="#5b268f"
              ></path>
              <path
                data-v-922fb0dd=""
                opacity="0.1"
                d="M0 0H24.8838V25.5385L14.9053 46H2.50088L12.4294 25.5385H0V0Z"
                fill="#5b268f"
              ></path>
            </svg>
            <div className=" flex gap-3 sm:gap-5">
              <div className=" w-12 h-12 border bg-gray-300 rounded-full overflow-hidden"></div>
              <div>
                <h2 className=" text-base sm:text-xl font-medium">{i.name}</h2>
                <div className=" flex">
                  <Image src={star} alt="star" width={18} />
                  <Image src={star} alt="star" width={18} />
                  <Image src={star} alt="star" width={18} />
                  <Image src={star} alt="star" width={18} />
                  <Image src={star} alt="star" width={18} />
                </div>
              </div>
            </div>
            <p className=" text-xs sm:text-sm">{i.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
