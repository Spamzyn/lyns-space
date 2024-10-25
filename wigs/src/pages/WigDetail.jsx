import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TbCategoryPlus } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCircle } from "react-icons/fa";
import { StoreContext } from '../context/contextProvider';

const WigDetail = () => {
  const { wigs } = useContext(StoreContext);
  const { wigName } = useParams();

  const wig = wigs.find((w) => w.name === wigName);
  if (!wig) return <p>Wig not found.</p>;

  const tips = Object.keys(wig)
    .filter((key) => key.startsWith("strTip") && wig[key])
    .map((key) => wig[key]);

  // Commented out the unused 'products' variable
  // const products = Object.keys(wig)
  //   .filter((key) => key.startsWith("strProduct") && wig[key])
  //   .map((key) => wig[key]);

  const instructions = wig.strCareInstructions.split(".").filter(Boolean);

  return (
    <div className="flex justify-center mt-5">
      <div className="w-[80%] flex flex-col gap-y-3">
        <h1 className="font-extrabold text-7xl">{wigName}</h1>
        <div className="head border-b pb-2 flex gap-x-4">
          <span className="flex gap-x-2 items-center text-xl text-gray-400">
            <TbCategoryPlus className="text-xl text-orange-600" />
            {wig.strCategory}
          </span>
          <span className="flex gap-x-2 items-center text-xl text-gray-400">
            <SlLocationPin className="text-xl text-orange-600" />
            {wig.strOrigin}
          </span>
        </div>
        <p>Here are some tips and care instructions to keep your wig looking fabulous!</p>

        <div className="w-full h-[20%]">
          <img
            src={wig.strWigImage}
            alt={wigName}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        {/* Tips / Instructions */}
        <div className="flex sm:flex-row flex-col justify-between">
          <div className="sm:w-[40%] pt-4 flex flex-col gap-y-5">
            <h1 className="text-3xl font-bold font-mono">Care Tips</h1>
            <div className="flex flex-col gap-y-2">
              {tips.map((tip, i) => (
                <span key={i} className="text-2xl flex items-center gap-x-3">
                  <FaRegCircle className="flex-shrink-0" /> {tip}
                </span>
              ))}
            </div>
          </div>

          <div className="sm:w-[55%] h-full pt-4 flex flex-col gap-y-5">
            <h1 className="text-3xl font-bold font-mono">Care Instructions</h1>
            {instructions.map((instruction, i) => (
              <div key={i} className="flex gap-x-4 items-center">
                <div className="w-[30px] h-[30px] bg-red-300 rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <span className="text-2xl">{instruction}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WigDetail;
