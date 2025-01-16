import Image from "next/image";
import Link from "next/link";

import MangnetMan from "@/../public/images/Homepage/magnet-man.svg";
import SittingPerson from "@/../public/images/Homepage/sitting-person.svg";

const Banner = () => {
  return (
    <section
      className=" h-[60vh]"
      style={{
        backgroundImage:
          "linear-gradient(-45deg, #43BD82 0%, #008189 38%, #09299C 100%)",
      }}
    >
      <div className=" relative max-w-7xl mx-auto px-5 flex flex-col items-center justify-center h-full gap-5">
        <h1 className=" text-center text-white text-5xl font-bold">
          Take the next steps toward your <br /> growth goals.
        </h1>
        <Link
          href="/"
          className=" bg-rose-500 text-white px-5 py-3 rounded-md font-medium cursor-pointer hover:bg-rose-600 transition-all"
        >
          CONTACT US
        </Link>

        <div className=" absolute left-0 -top-28 min-[450px]:block hidden">
          <Image src={SittingPerson} alt="SittingPerson" width={90} />
        </div>
        <div className=" absolute right-0 bottom-0 min-[600px]:block hidden">
          <Image src={MangnetMan} alt="MangnetMan" width={200} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
