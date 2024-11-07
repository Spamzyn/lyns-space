import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from '../context/contextProvider';

const WigStyles = () => {
  const navigate = useNavigate();
  const { wigs, setCategory } = useContext(StoreContext);
  const [searchText, setSearchText] = useState("");

  // Group wigs by style/category
  const wigStyles = [
    ...new Set(wigs.map(wig => wig.category))
  ].sort();

  const filteredStyles = wigStyles.filter(style =>
    style.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="mt-5 w-[80vw] mx-auto flex flex-col items-center gap-y-3">
      {/* Search Bar */}
      <div className="w-full flex items-center mb-5">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded-l-md py-2 px-4 w-[100%] focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Search for a wig style..."
        />
        <button className="bg-purple-600 text-white rounded-r-md px-4 py-2 hover:bg-purple-500">
          Search
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-5">Wig Styles Collection</h1>

      {/* Style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {filteredStyles.map((style, index) => {
          const wigInStyle = wigs.find(wig => wig.category === style);
          return (
            <div
              key={index}
              onClick={() => {
                setCategory(style);
                navigate(`/wigtypes/${style.toLowerCase().replace(' ', '-')}`);
              }}
              className="bg-white shadow-lg rounded-md overflow-hidden cursor-pointer hover:shadow-xl transition duration-300"
            >
              {wigInStyle && (
                <img
                  src={wigInStyle.image}
                  alt={style}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="font-semibold text-xl text-center">{style}</h2>
                <p className="text-gray-600 text-sm text-center mt-2">
                  {wigs.filter(wig => wig.category === style).length} wigs available
                </p>
              </div>
            </div>
          )}
        )}
      </div>

      {filteredStyles.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">No styles found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default WigStyles;
