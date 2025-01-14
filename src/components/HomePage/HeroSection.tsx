import Banner_left from "@/../public/images/Homepage/banner-left.svg";
import Banner_right from "@/../public/images/Homepage/banner-right.svg";
import BackgroundImage from "@/../public/images/Homepage/dots.png";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className=" max-w-7xl mx-auto px-5 flex items-center justify-center text-center h-[80vh] bg-center bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      <div>
        <h1 className="text-5xl font-bold">
          Get verified, targeted leads affordably, <br />
          tailored to your criteria.
        </h1>
        <p className=" text-sm mt-2 text-gray-600">
          Using your search criteria we will find & build highly targeted lead
          list within 48 hrs. Just let us know your requirements and be relaxed.
        </p>
        <div className=" mt-5 flex gap-3 items-center justify-center">
          <Link
            href="/"
            className=" bg-rose-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-rose-600 transition-all"
          >
            CONTACT US
          </Link>
          <Link
            href="/"
            className=" bg-[#1DBF73] text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-[#18a865] transition-all"
          >
            HIRE US
          </Link>
        </div>
      </div>
      <div className=" absolute left-0 -bottom-20 min-[450px]:block hidden">
        <Image
          src={Banner_left}
          width={250}
          className="lg:w-[250px] sm:w-[220px] w-[180px]"
          alt="Banner_left"
        />
      </div>
      <div
        className=" 
      sm:block hidden
      absolute  right-0 -bottom-20"
      >
        <Image
          src={Banner_right}
          width={240}
          className="lg:w-[240px] w-[200px]"
          alt="Banner_right"
        />
      </div>
    </section>
  );
};

export default HeroSection;
