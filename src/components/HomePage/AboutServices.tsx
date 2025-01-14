import BackGroundImage from "@/../public/images/Homepage/dots.png";

const AboutServices = () => {
  return (
    <section
      className="   bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(-45deg, #43BD82 0%, #008189 38%, #09299C 100%)",
      }}
    >
      <div
        className="max-w-7xl mx-auto py-24 px-5 bg-center bg-no-repeat bg-cover "
        style={{
          backgroundImage: `url(${BackGroundImage.src})`,
        }}
      >
        <h1 className="text-center text-3xl font-bold text-white ">
          Empower Your Team with Reliable B2B Contact Data <br /> and Sales
          Intelligence
        </h1>
        <div className=" grid md:grid-cols-2 gap-5 mt-5">
          <div className=" bg-lime-100 flex-1 py-16 px-5 rounded-md text-center">
            <h2 className=" font-bold mb-3 text-2xl">Who We Help</h2>
            <p className=" text-sm text-gray-800">
              Achieve your go-to-market goals with data-driven solutions
              designed for sales, marketing, operations, and recruitment teams.
            </p>
          </div>
          <div className=" bg-teal-100 flex-1 py-16 px-5 rounded-md text-center">
            <h2 className=" font-bold mb-3 text-2xl">
              Comprehensive Data Coverage
            </h2>
            <p className=" text-sm text-gray-800 text-center">
              Target the right decision-makers at the perfect moment with
              actionable B2B insights. Drive lead generation and boost
              conversions with real-time buying signals and accurate contact
              intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
