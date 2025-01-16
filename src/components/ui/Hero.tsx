import BackgroundImage from "@/../public/images/Homepage/dots.png";
import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
}
const Hero = ({ title, description }: HeroProps) => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover h-[70vh]"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      <div
        className=" h-full"
        style={{
          backgroundImage:
            "linear-gradient(-45deg, #43BD82 0%, #008189 38%, #09299C 100%)",
        }}
      >
        <div className=" max-w-7xl mx-auto px-5 flex flex-col text-white items-center justify-center text-center h-full ">
          <h1 className="sm:text-5xl text-4xl font-bold">{title}</h1>
          <p className=" sm:text-sm text-xs mt-2 text-gray-100">
            {description}
          </p>
          <div className=" mt-8 flex gap-3 items-center justify-center ">
            <Link
              href="/contact"
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
      </div>
    </section>
  );
};

export default Hero;
