import React, { useContext, useState, useEffect } from "react";
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/contextProvider";

const WigTypes = () => {
  const navigate = useNavigate();
  const { wigBrands, setWigBrands } = useContext(MyContext);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchWigBrands = async () => {
      const response = await fetch("YOUR_API_ENDPOINT_FOR_BRANDS"); // Replace with actual API endpoint
      const data = await response.json();
      setWigBrands(data.brands); // Adjust based on actual response structure
    };
    fetchWigBrands();
  }, [setWigBrands]);

  return (
    <div className="mt-5 w-[80vw] mx-auto flex flex-col items-center gap-y-3">
      <div className="w-full flex items-center mb-5">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded-l-md py-2 px-4 w-[100%] focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Search for a wig type..."
        />
        <button className="bg-orange-600 text-white rounded-r-md px-4 py-2 hover:bg-orange-500">
          Search
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-5">Popular Wig Types</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {wigBrands
          .filter((brand) =>
            brand.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((brand, i) => (
            <div
              key={i}
              onClick={() => navigate(`/wigs/${brand.name}`)}
              className="bg-gray-100 rounded-md p-4 cursor-pointer hover:shadow-lg transition"
            >
              <h2 className="font-semibold text-xl">{brand.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WigTypes;
