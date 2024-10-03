import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { assets } from "../assets";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_modebz6", "template_y6jbkrc", form.current, {
        publicKey: "ybf8AyCXChqT6KH3l",
      })
      .then(
        () => {
          console.log("Message sent successfully!");
          // You might want to show a success message to the user here
        },
        (error) => {
          console.log("Failed to send message:", error.text);
          // You might want to show an error message to the user here
        }
      );
  };

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="w-[90%] flex sm:flex-row gap-x-4 items-center">
        <div className="w-[40%] h-[50vh]">
          <img src={assets.contactImg} alt="Contact Us" className="w-full h-full object-cover rounded-md" />
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-[50%] p-5 gap-y-5">
          <h1 className="font-bold text-2xl">Get in Touch</h1>
          <div className="flex flex-col justify-between w-full">
            <label className="font-bold">Name</label>
            <input type="text" name="user_name" placeholder="Enter your name" className="border-b-[2px] pb-2" required />
          </div>
          <div className="flex flex-col justify-between w-full">
            <label className="font-bold">Email</label>
            <input type="email" name="user_email" placeholder="Enter your email" className="border-b-[2px] pb-2" required />
          </div>
          <div className="flex flex-col justify-between w-full">
            <label className="font-bold">Message</label>
            <textarea name="message" placeholder="Your message or inquiry about our wigs" className="border-b-[2px] pb-2" required />
          </div>
          <div className="flex w-full justify-center">
            <input type="submit" value="Send" className="bg-purple-600 w-[30%] py-2 rounded-md text-white font-bold cursor-pointer hover:bg-purple-700" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
