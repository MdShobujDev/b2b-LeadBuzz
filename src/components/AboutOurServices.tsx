const AboutOurServices = () => {
  return (
    <section className=" max-w-7xl mx-auto px-5 min-[450px]:pb-28 pt-3">
      <div className=" flex flex-col justify-center  bg-gray-100 my-4 rounded shadow gap-3 p-3">
        <h1 className="text-center text-3xl font-medium py-3">
          About Our Services: <span className=" text-rose-600">B2B</span> Lead
          Generation <br /> & Data Enrichment
        </h1>
        <h2 className=" text-2xl font-medium">
          Comprehensive Lead Generation Solutions
        </h2>
        <p className=" text-gray-700 text-sm">
          Are you seeking an expert data miner to collect mobile phone numbers,
          direct phone numbers, and personal email addresses? Look no further!
          We specialize in providing tailored solutions to find the right
          contacts, industries, and decision-makers for your business needs.
          <br />
          With expertise in B2B lead generation, email enrichment, and contact
          list building, we deliver verified, high-quality data to help you
          connect with your target audience effectively.
        </p>
        <div>
          <h2 className="text-2xl font-medium">What We Offer:</h2>
          <ul className=" mt-2 ml-4">
            <li>
              <h2 className=" font-medium">Contact Information:</h2>
              <ul className=" ml-8 text-sm text-gray-700 list-disc">
                <li>First & Last Name</li>
                <li>Job Title/Role</li>
                <li>Personal/Business Phone Numbers</li>
                <li>Business Email Addresses (100% Valid, Zero Bounce)</li>
                <li>LinkedIn Profile URLs</li>
              </ul>
            </li>
            <li>
              <h2 className=" font-medium"> Business Details:</h2>
              <ul className=" ml-8 text-sm text-gray-700 list-disc">
                <li>Company Name</li>
                <li>Website</li>
                <li>Address</li>
              </ul>
            </li>
            <li>
              <h2 className=" font-medium"> Custom Data:</h2>
              <ul>
                <li className=" ml-8 text-sm text-gray-700 list-disc">
                  Additional information tailored to your requirements.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h1 className=" text-2xl font-medium mb-2">Tools & Techniques</h1>
          <p className=" text-gray-700 text-sm ml-2">
            To ensure the highest quality and accuracy, we use industry-leading
            tools like:
          </p>

          <ul className=" ml-4 mt-2">
            <li className=" ml-8 text-sm text-gray-700 list-disc">
              <span className="font-bold">Phone Numbers:</span> Seamless.ai,
              ZoomInfo, Lusha, SalesQL, Apollo
            </li>
            <li className=" ml-8 text-sm text-gray-700 list-disc">
              <span className="font-bold">Email Verification:</span>{" "}
              NeverBounce, manual verification to ensure zero bounce rates
            </li>
            <li className=" ml-8 text-sm text-gray-700 list-disc">
              <span className="font-bold"> Personal Phone Numbers</span>: Lusha,
              ZoomInfo, ContactOut, Kendo, Seamless
            </li>
          </ul>
          <p className="text-gray-700 text-sm ml-2">
            We collect direct dials from verified sources and verify emails
            using advanced tools and techniques, ensuring 100% reliability.
          </p>
        </div>
        <div>
          <h1 className=" text-2xl font-medium mb-2">Why Choose Us?</h1>

          <ul className=" ml-4 mt-2">
            <li className=" ml-8 text-sm text-gray-700 list-disc">
              <span className="font-bold">Accurate Data:</span> Verified and
              enriched information ready for immediate use.
            </li>
            <li className=" ml-8 text-sm text-gray-700 list-disc">
              <span className="font-bold">Custom Solutions:</span> Tailored
              lists to meet your business needs.
            </li>
            <li className=" ml-8 text-sm text-gray-700 list-disc">
              <span className="font-bold">Expertise:</span> Proven experience in
              identifying decision-makers and key industry contacts.
            </li>
            <li className=" ml-8 text-sm text-gray-700 list-disc">
              <span className="font-bold">Zero Bounce Guarantee:</span> Ensuring
              your campaigns reach the right inbox.
            </li>
          </ul>
          <p className="text-gray-700 text-sm ml-2">
            Let us help you find the leads you need to grow your business!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutOurServices;
