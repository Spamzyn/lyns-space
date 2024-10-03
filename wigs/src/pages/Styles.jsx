import React, { useContext, useState, useEffect } from "react";
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/contextProvider";

const WigTypes = () => {
  const navigate = useNavigate();
  const { wigBrands, setWigBrands } = useContext(MyContext); // Changed to wigBrands
  const [searchText, setSearchText] = useState("");

  let searchQuery = searchText;

  useEffect(() => {
    const fetchWigBrands = async () => {
      let response;
      if (searchQuery) {
        response = await fetch(`https://api.example.com/wigtypes?search=${searchQuery}`);
      } else {
        response = await fetch(`https://api.example.com/wigtypes`);
      }
      let data = await response.json();
      setWigBrands(data.wigTypes); // Adjust according to the API response structure
    };
    fetchWigBrands();
  }, [searchQuery, setWigBrands]);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%]">
          <h1 className="font-medium text-3xl">Wig Types</h1>
          <div className="relative w-[100%] mt-4 sm:border-none border-[2px]">
            <IoKeyOutline className="sm:text-5xl text-3xl absolute left-1 top-[50%] translate-y-[-50%]" />
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              className="w-full p-6 rounded-md focus:outline-none sm:shadow-2xl sm:ps-20 ps-10"
              placeholder="Search for wig types..."
            />
            <button
              className="bg-orange-600 text-white h-[90%] sm:w-[20%] w-[30%] sm:px-10 sm:py-5 rounded-e-md absolute right-1 top-[50%] translate-y-[-50%]"
            >
              Search
            </button>
          </div>

          <div className="flex sm:justify-normal justify-center flex-wrap gap-y-5 gap-x-3 mt-10">
            {wigBrands && wigBrands.map((wig, i) => (
              <div key={i} className="w-[24%] h-[50%] flex flex-col items-center gap-y-3 cursor-pointer">
                <img
                  onClick={() => { navigate(`/wigtypes/${wig.name}`); }} // Adjust according to your routing
                  src={wig.image} // Adjust according to your API response structure
                  alt={wig.name}
                  className="w-full h-full object-cover rounded-md hover:scale-105 ease-in-out duration-300"
                />
                <h1 className="font-bold text-xl w-[80%] text-center">
                  {wig.name} {/* Adjust according to your API response structure */}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WigTypes;
