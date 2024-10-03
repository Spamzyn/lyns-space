import React from "react";
import { assets } from "../assets";
import { useNavigate } from "react-router-dom";
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#f0f0f0] px-20 py-10 flex flex-col items-center mt-5">
      <div className="sm:w-[90%] w-full border-b-[2px] pb-10 flex sm:flex-row flex-col justify-between items-center gap-y-4">
        {/* Logo and Description */}
        <div className="sm:w-[30%] h-[90%] flex flex-col gap-y-3 items-center">
          <img
            onClick={() => navigate("/")}
            src={assets.logo} // Replace with your Wig app logo path
            alt="logo"
            className="w-[150px] cursor-pointer"
          />
          <p className="text-gray-400 text-center">
            Discover delicious and unique wig recipes tailored just for you! Indulge in a world of flavors with us.
          </p>
        </div>

        {/* Links Section */}
        <div className="sm:w-[60%] h-[90%] flex justify-between">
          <div className="flex flex-col gap-y-3">
            <h1 className="font-medium">Wig Recipes</h1>
            <div className="flex flex-col gap-y-3">
              <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">About Us</span>
              <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Our Blog</span>
              <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Submit a Recipe</span>
              <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Contact Us</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <h1 className="font-medium">Legal</h1>
            <div className="flex flex-col gap-y-3">
              <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Privacy Policy</span>
              <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Terms & Conditions</span>
              <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Cookies</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <h1 className="font-medium">Follow Us</h1>
            <div className="flex flex-col gap-y-3">
              <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Facebook</span>
              <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Instagram</span>
              <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Twitter</span>
              <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">YouTube</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons and Copyright */}
      <div className="mt-5 flex sm:flex-row flex-col-reverse gap-y-2 justify-between w-[90%]">
        <span className="text-[12px] text-gray-400">© 2024 Wig Recipes - All rights reserved</span>
        <div className="flex gap-x-5">
          <SlSocialFacebook className="text-3xl hover:text-orange-600 cursor-pointer" />
          <SlSocialInstagram className="text-3xl hover:text-orange-600 cursor-pointer" />
          <SlSocialTwitter className="text-3xl hover:text-orange-600 cursor-pointer" />
          <SlSocialYoutube className="text-3xl hover:text-orange-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
