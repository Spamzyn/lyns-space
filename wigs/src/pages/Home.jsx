import React, { useContext } from "react";
import { assets } from '../assets';
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { StoreContext } from '../context/contextProvider';

const Home = () => {
  const navigate = useNavigate();
  const { setWigCat } = useContext(StoreContext);

  // Define your wig categories here
  const wigCategories = [
    { name: "Synthetic Wigs", image: assets.syntheticWig },
    { name: "Human Hair Wigs", image: assets.humanHairWig },
    { name: "Lace Front Wigs", image: assets.laceFrontWig },
    { name: "Full Lace Wigs", image: assets.fullLaceWig },
    // Add more categories as needed
  ];

  return (
    <>
      {/* Hero section */}
      <div className="w-[80vw] mx-auto mt-5 sm:h-[60vh] sm:flex">
        <div className="sm:w-[60%] w-[100%] h-full">
          <img
            src={assets.heroImg}
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
                  setWigCat(wig.name);
                  navigate(`/${wig.name.toLowerCase().replace(' ', '-')}`);
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
            onClick={() => navigate("/wigs")}
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
