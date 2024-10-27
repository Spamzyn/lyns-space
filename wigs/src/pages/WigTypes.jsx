import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from '../context/contextProvider';
import { assets } from '../assets';

const WigTypes = () => {
  const navigate = useNavigate();
  const { setCategory } = useContext(StoreContext);
  const [searchText, setSearchText] = useState("");

  const wigTypes = [
    { name: "Bob Wigs", image: assets.bob1 },
    { name: "Curly Wigs", image: assets.curly1 },
    { name: "Long Wigs", image: assets.long1 },
    { name: "Pixie Wigs", image: assets.pixie1 },
    { name: "Synthetic Wigs", image: assets.synthetic1 },
    { name: "Human Hair Wigs", image: assets.humanHair1 },
    { name: "Lace Front Wigs", image: assets.laceFront1 },
    { name: "Full Lace Wigs", image: assets.fullLace2 }
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
          className="border border-gray-300 rounded-l-md py-2 px-4 w-[100%] focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Search for a wig type..."
        />
        <button className="bg-purple-600 text-white rounded-r-md px-4 py-2 hover:bg-purple-500">
          Search
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-5">Popular Wig Types</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredWigTypes.map((wigType, i) => (
          <div
            key={i}
            onClick={() => {
              setCategory(wigType.name);
              navigate(`/wigtypes/${wigType.name.toLowerCase().replace(' ', '-')}`);
            }}
            className="bg-white shadow-lg rounded-md p-4 cursor-pointer hover:shadow-xl transition duration-300"
          >
            <img src={wigType.image} alt={wigType.name} className="w-full h-40 object-cover rounded-md mb-2" />
            <h2 className="font-semibold text-xl text-center">{wigType.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WigTypes;
