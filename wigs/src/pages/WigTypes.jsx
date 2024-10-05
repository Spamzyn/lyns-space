import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from '../context/contextProvider';
import { assets } from '../assets';

const WigTypes = () => {
  const navigate = useNavigate();
  const { setWigCat } = useContext(StoreContext);
  const [searchText, setSearchText] = useState("");

  // Define your wig types here
  const wigTypes = [
    { name: "Bob Wigs", image: assets.bobWig },
    { name: "Curly Wigs", image: assets.curlyWig },
    { name: "Long Wigs", image: assets.longWig },
    { name: "Pixie Wigs", image: assets.pixieWig },
    // Add more wig types as needed
  ];

  const filteredWigTypes = wigTypes.filter(wigType =>
    wigType.name.toLowerCase().includes(searchText.toLowerCase())
  );

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
        {filteredWigTypes.map((wigType, i) => (
          <div
            key={i}
            onClick={() => {
              setWigCat(wigType.name);
              navigate(`/wigs/${wigType.name.toLowerCase().replace(' ', '-')}`);
            }}
            className="bg-gray-100 rounded-md p-4 cursor-pointer hover:shadow-lg transition"
          >
            <img src={wigType.image} alt={wigType.name} className="w-full h-40 object-cover rounded-md mb-2" />
            <h2 className="font-semibold text-xl">{wigType.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WigTypes;
