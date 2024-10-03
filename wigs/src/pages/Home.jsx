import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/contextProvider";

const Home = () => {
  const navigate = useNavigate();
  const { setWigCat } = useContext(MyContext);
  const [latestWigs, setLatestWigs] = useState([]);

  useEffect(() => {
    const fetchLatestWigs = async () => {
      const response = await fetch("YOUR_API_ENDPOINT_FOR_WIGS"); // Replace with actual API endpoint
      const data = await response.json();
      if (data.wigs) {
        setLatestWigs(data.wigs);
      }
    };
    fetchLatestWigs();
  }, []);

  return (
    <>
      {/* Hero section */}
      <div className="w-[80vw] mx-auto mt-5 sm:h-[60vh] sm:flex">
        <div className="sm:w-[60%] w-[100%] h-full">
          <img
            src={assets.heroImg} // Replace with an appropriate hero image for wigs
            alt="Wigs"
            className="w-full h-full rounded-s-md sm:object-cover"
          />
        </div>

        <div className="bg-[#e4f1ff] sm:w-[40%] w-[100%] sm:px-10 sm:py-20 flex flex-col gap-y-4 pt-10 pb-10 px-10 rounded-e-md relative">
          <h1 className="font-extrabold font-mono text-5xl">
            Stunning Wigs Collection
          </h1>
          <p className="text-xl sm:w-[80%]">
            Explore our exclusive range of stylish and high-quality wigs designed to elevate your look!
          </p>
          <GoArrowRight className="bg-white w-10 h-10 rounded-full text-red-400 hover:text-white hover:bg-red-400 cursor-pointer absolute sm:bottom-10 sm:right-10 translate-x-[50%] right-[50%] bottom-0 animate-bounce" />
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#ffd8ca] mt-5 flex flex-col items-center py-10 gap-y-4">
        <h1 className="font-semibold sm:text-8xl sm:w-[40%] text-center">
          Get Wigs Delivered to Your Inbox
        </h1>
        <p className="text-3xl sm:w-[30%] text-center">
          Sign up for exclusive offers and new wig arrivals.
        </p>
        <div className="relative sm:w-[40%] w-[90%]">
          <input
            type="text"
            className="w-full p-6 rounded-sm focus:outline-none"
            placeholder="Enter your email"
          />
          <button className="bg-orange-600 text-white h-[90%] px-10 py-5 rounded-e-md absolute right-1 top-[50%] translate-y-[-50%] animate-pulse hover:animate-none">
            Join
          </button>
        </div>
        <span className="font-extralight text-center">
          By joining our newsletter, you agree to our{" "}
          <span className="font-extralight hover:text-orange-600 cursor-pointer border-b-[1px] border-orange-600">
            Terms and Conditions
          </span>
        </span>
      </div>

      {/* Categories Section */}
      <div className="w-[80vw] mt-5 mx-auto py-5">
        <h1 className="font-bold font-mono text-4xl pb-5 text-center sm:text-left">Wig Categories</h1>
        <div className="flex flex-wrap gap-y-5 gap-x-3">
          {latestWigs.map((wig, i) => (
            <div
              key={i}
              className="sm:w-[24%] w-[100%] h-[50%] flex flex-col items-center gap-y-3 cursor-pointer"
            >
              <img
                onClick={() => {
                  setWigCat(wig.category);
                  navigate(`/${wig.category}`);
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
            onClick={() => {
              navigate("./wigs");
            }}
            className="border-2 border-black py-3 px-10 rounded-md font-medium text-xl hover:bg-black hover:text-white"
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
