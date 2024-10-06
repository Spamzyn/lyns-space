import React, { useContext } from 'react';
import { StoreContext } from '../context/contextProvider';
import { useNavigate } from 'react-router-dom';

const CategoryWigs = () => {
  const navigate = useNavigate();
  const { wigsByCategory } = useContext(StoreContext);

  return (
    <div className="flex justify-center pt-5">
      <div className="w-[90%] flex flex-wrap gap-x-4 justify-center pt-2 gap-y-4 ">
        {wigsByCategory.map((wig, i) => (
          <div
            key={i}
            className="sm:w-[24%] w-100 flex flex-col items-center gap-y-3 cursor-pointer"
          >
            <img
              onClick={() => navigate(`/wigtypes/${wig.name}`)}
              src={wig.image}
              alt={wig.name}
              className="w-full h-full object-cover rounded-md hover:scale-105 ease-in-out duration-300"
            />
            <div className="h-[10%]">
              <h1 className="font-bold w-[80%] text-center">
                {wig.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryWigs;
