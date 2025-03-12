"use client";
import ContactImage from "@/../public/images/contact.png";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

const Input = styled.input`
  border: 2px solid #9ca3af;
  outline: none;
  border-radius: 0.25rem;
  padding: 7px 8px;
  background: transparent;
  width: 100%;
  color: #4b5563;
  &:focus {
    border: 2px solid #1f2937;
  }
`;
const Textarea = styled.textarea`
  border: 2px solid #9ca3af;
  outline: none;
  border-radius: 0.25rem;
  padding: 4px 8px;
  background: transparent;
  width: 100%;
  color: #4b5563;
  &:focus {
    border: 2px solid #1f2937;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Phone_Number: "",
    Message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          First_Name: "",
          Last_Name: "",
          Email: "",
          Phone_Number: "",
          Message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <section className=" bg-gray-100 ">
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
              onSubmit={handleSubmit}
              className=" p-5 rounded-md  shadow flex flex-col gap-3  w-full"
            >
              <div className=" flex gap-3 w-full min-[950px]:flex-row flex-col md:flex-col min-[500px]:flex-row">
                <div className=" flex flex-col gap-1 w-full">
                  <label htmlFor="">First Name:</label>
                  <Input
                    type="text"
                    name="First_Name"
                    id="First_Name"
                    value={formData.First_Name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className=" flex flex-col gap-1 w-full ">
                  <label htmlFor="">Last Name:</label>
                  <Input
                    type="text"
                    name="Last_Name"
                    id="Last_Name"
                    value={formData.Last_Name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className=" flex gap-3 min-[950px]:flex-row min-[500px]:flex-row md:flex-col flex-col">
                <div className=" flex flex-col gap-1 w-full">
                  <label htmlFor="Email">Email:</label>
                  <Input
                    type="email"
                    name="Email"
                    id="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className=" flex flex-col gap-1 w-full">
                  <label htmlFor="Phone_Number">Phone Number:</label>
                  <Input
                    type="text"
                    name="Phone_Number"
                    id="Phone_Number"
                    value={formData.Phone_Number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-1 w-full">
                <label htmlFor="Message">Message:</label>
                <Textarea
                  name="Message"
                  id="Message"
                  rows={5}
                  value={formData.Message}
                  onChange={handleChange}
                ></Textarea>
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
