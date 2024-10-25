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
adamas@OSEI:~/lyns-space$ cat wigs/src/pages/Home.jsx
import React, { useContext } from "react";
import { assets } from '../assets';
import { useNavigate } from "react-router-dom";
import { StoreContext } from '../context/contextProvider';

const Home = () => {
  const navigate = useNavigate();
  const { setCategory } = useContext(StoreContext);

  // Define your wig categories here
  const wigCategories = [
    { name: "Synthetic Wigs", image: assets.wig1 },
    { name: "Human Hair Wigs", image: assets.wig2 },
    { name: "Lace Front Wigs", image: assets.wig3 },
    { name: "Full Lace Wigs", image: assets.wig4 },
  ];

  return (
    <>
      {/* Hero section */}
      <div className="w-[80vw] mx-auto mt-5 sm:h-[60vh] sm:flex">
        <div className="sm:w-[60%] w-[100%] h-full">
          <img
            src={assets.wig1}
            alt="Wigs"
            className="w-full h-full rounded-s-md sm:object-cover"
          />
        </div>
        {/* ... rest of the hero section ... */}
      </div>

      {/* ... Newsletter section ... */}

      {/* Categories Section */}
      <div className="w-[80vw] mt-5 mx-auto py-5">
        <h1 className="font-bold font-mono text-4xl pb-5 text-center sm:text-left">Wig Categories</h1>
        <div className="flex flex-wrap gap-y-5 gap-x-3">
          {wigCategories.map((wig, i) => (
            <div
              key={i}
              className="sm:w-[24%] w-[100%] h-[50%] flex flex-col items-center gap-y-3 cursor-pointer"
            >
              <img
                onClick={() => {
                  setCategory(wig.name);
                  navigate(`/wigtypes/${wig.name.toLowerCase().replace(' ', '-')}`);
                }}
                src={wig.image}
                alt={wig.name}
                className="w-full h-full object-cover rounded-md hover:scale-125 ease-in-out duration-300"
              />
              <h1 className="font-bold text-xl w-[80%] text-center">
                {wig.name}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/wigtypes")}
            className="border-2 border-black py-3 px-10 rounded-md font-medium text-xl hover:bg-black hover:text-white"
          >
            View All Wigs
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
