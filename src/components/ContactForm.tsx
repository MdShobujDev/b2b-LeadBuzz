"use client";
import ContactImage from "@/../public/images/contact.png";
import Image from "next/image";
import styled from "styled-components";

const Input = styled.input({
  border: "2px solid #4b5563",
  outline: "none",
  borderRadius: "0.25rem",
  padding: "4px 8px",
  background: "transparent",
  width: "100%",
});
const Textarea = styled.textarea({
  border: "2px solid #4b5563",
  outline: "none",
  borderRadius: "0.25rem",
  padding: "4px 8px",
  background: "transparent",
  width: "100%",
  color: "#4b5563",
});

const ContactForm = () => {
  return (
    <section className=" bg-gray-100">
      <div
        className="max-w-7xl mx-auto px-5
   py-10"
      >
        <div className=" flex justify-between items-center">
          <div className=" flex-1 md:block hidden">
            <Image src={ContactImage} alt="img" className="" width={500} />
          </div>
          <div className="flex-1">
            <form
              action=""
              className=" bg-white p-5 rounded-md shadow flex flex-col gap-3  w-full"
            >
              <div className=" flex gap-3 w-full min-[950px]:flex-row flex-col md:flex-col min-[500px]:flex-row">
                <div className=" flex flex-col gap-1 w-full">
                  <label htmlFor="">First Name:</label>
                  <Input
                    type="text"
                    name="First_Name"
                    id="First_Name"
                    required
                  />
                </div>
                <div className=" flex flex-col gap-1 w-full ">
                  <label htmlFor="">Last Name:</label>
                  <Input type="text" name="Last_Name" id="Last_Name" />
                </div>
              </div>
              <div className=" flex gap-3 min-[950px]:flex-row min-[500px]:flex-row md:flex-col flex-col">
                <div className=" flex flex-col gap-1 w-full">
                  <label htmlFor="Email">Email:</label>
                  <Input type="email" name="Email" id="Email" required />
                </div>
                <div className=" flex flex-col gap-1 w-full">
                  <label htmlFor="Number">Number:</label>
                  <Input type="text" name="Number" id="Number" required />
                </div>
              </div>
              <div className=" flex flex-col gap-1 w-full">
                <label htmlFor="Message">Message:</label>
                <Textarea name="Message" id="Message" rows={5}></Textarea>
              </div>
              <div className=" flex items-center justify-center">
                <button className=" bg-blue-500 text-white px-10 py-2 rounded-md">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
