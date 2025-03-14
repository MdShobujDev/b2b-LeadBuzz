import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(90deg, hsla(252, 40%, 29%, 1) 0%, hsla(270, 77%, 71%, 1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto p-6 flex flex-col justify-between gap-10 min-[950px]:flex-row">
        <div className="flex-[1_1_40%] py-2">
          <Link href={"/"} className=" text-2xl font-bold text-purple-200">
            B2B LEADBAZZ
          </Link>
          <p className="text-white text-sm sm:text-base font-light mt-3">
            We help businesses to build high quality hand curated contact list
            on their target criteria & outreach on them to generate qualified
            leads
          </p>
          {/* social links  */}
          <ul className="flex items-center gap-3 mt-4 text-2xl">
            <Link
              href="#"
              className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white p-1.5 rounded-full transition-all"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="#"
              className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white p-1.5 rounded-full transition-all"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href="#"
              className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white p-1.5 rounded-full transition-all"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white p-1.5 rounded-full transition-all"
            >
              <FaInstagram size={20} />
            </Link>
          </ul>
        </div>
        <div className="min-[950px]:flex-[1_1_60%] grid md:grid-cols-3 min-[500px]:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <h2 className="sm:text-lg mb-5 text-white">Company</h2>
            <ul className="text-white sm:text-base text-sm font-light flex flex-col gap-1">
              <li className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2">
                About Us
              </li>
              <li className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2">
                Contact Us
              </li>
              <li className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2">
                Why Hire Us
              </li>
              <li className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2">
                Terms and Conditions
              </li>
            </ul>
          </div>
          <div>
            <h2 className="sm:text-lg mb-5 text-white">Explore</h2>
            <ul className="text-white sm:text-base text-sm font-light flex flex-col gap-1">
              <li className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2">
                Our Services
              </li>
              <li className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2">
                Pricing
              </li>
              <li className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2">
                Portfolio
              </li>
              <li className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2">
                Our Team
              </li>
            </ul>
          </div>
          <div>
            <h2 className="sm:text-lg mb-5 text-white">Contact Us</h2>
            <ul className="text-white sm:text-base text-sm font-light flex flex-col gap-1">
              <li>+88 01572994969</li>
              <li>info@b2bleadbazz.com</li>
              <li>Kashiahata, Dhunat, Bogra, Zip 5841, Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>
      </div>
      {/* bottom footer section  */}
      <div className="border-t">
        <div className=" py-2  text-center  flex items-center justify-between  px-5 sm:flex-row flex-col max-w-7xl mx-auto">
          <div className=" flex text-white gap-1 text-sm ">
            <p>Developed by</p>
            <a
              href="https://www.facebook.com/MdShobujDev"
              target="_blank"
              className=" underline hover:text-sky-400 transition-all"
            >
              Md Shobuj
            </a>
          </div>
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} All rights reserved by{" "}
            <Link href={"/"} className=" underline">
              B2B LeadBazz
            </Link>
          </p>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
