"use client";
import CountUp from "react-countup";

function Count() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(-45deg, #43BD82 0%, #008189 38%, #09299C 100%)",
      }}
    >
      <div>
        <div className="max-w-7xl mx-auto px-12 py-20 text-white">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center content-between gap-10">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold">
                <CountUp end={1.2} scrollSpyOnce duration={5} decimals={1} />
                K+
              </h2>
              <p className="text-gray-300">Projects Done</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold">
                <CountUp end={100} scrollSpyOnce duration={5} />+
              </h2>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold">
                <CountUp end={4.9} scrollSpyOnce duration={5} decimals={1} />
              </h2>
              <p className="text-gray-300">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold">
                <CountUp end={6} scrollSpyOnce duration={5} />+
              </h2>
              <p className="text-gray-300">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Count;
