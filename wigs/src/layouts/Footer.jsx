import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets';
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  return (
    <div className='flex sm:flex-col gap-y-10 items-center justify-between relative z-[999]'>
      {/* Logo and Menu Burger */}
      <div className='p-2 flex sm:justify-center justify-between w-full'>
        <img
          onClick={() => navigate("/")}
          src={assets.logo} // Ensure this is your wig store logo
          alt="Wig Store Logo"
          className='sm:w-[300px] w-[100px] cursor-pointer'
        />
        <CiMenuBurger
          onClick={() => setMenu(!menu)}
          className='sm:hidden text-2xl cursor-pointer'
        />
      </div>

      {/* Navigation Links */}
      <div
        className={`links sm:flex align-center justify-center gap-x-10 ${
          !menu && 'hidden'
        } ${menu && 'flex flex-col absolute w-full top-12 p-5 gap-y-4 bg-white shadow-2xl rounded-md'}`}
      >
        <span
          className='cursor-pointer text-xl hover:text-purple-600 font-serif'
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <span
          className='cursor-pointer text-xl hover:text-purple-600 font-serif'
          onClick={() => navigate("/wigtypes")}
        >
          Wig Types
        </span>
        <span
          className='cursor-pointer text-xl hover:text-purple-600 font-serif'
          onClick={() => navigate("/styles")}
        >
          Wig Styles
        </span>
        <span
          className='cursor-pointer text-xl hover:text-purple-600 font-serif'
          onClick={() => navigate("/care-guide")}
        >
          Care Guide
        </span>
        <span
          className='cursor-pointer text-xl hover:text-purple-600 font-serif'
          onClick={() => navigate("/about")}
        >
          About Us
        </span>
        <span
          className='cursor-pointer text-xl hover:text-purple-600 font-serif'
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default Navbar;
