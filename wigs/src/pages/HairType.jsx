import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TbCategoryPlus } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { MyContext } from "../context/contextProvider";
import { FaRegCircle } from "react-icons/fa";

const WigRecipe = () => {
  const { wigInfo } = useContext(MyContext); // Assuming you have wig information in context
  const { wigName } = useParams();
  let tips = [];
  let products = [];

  const wig = wigInfo.find((e) => e.strWig === wigName);

  let propertyName = Object.keys(wig);

  let tipsStartWith = propertyName.filter(e => e.startsWith("strTip"));
  let productsStartWith = propertyName.filter(e => e.startsWith("strProduct"));

  // Get the care instructions for the wig
  let instructions = wig["strCareInstructions"];
  let steps = instructions.split(".").filter(e => e);

  tipsStartWith.forEach(e => {
    if (wig[e] !== " " && wig[e] !== "" && wig[e] !== null) {
      tips.push(wig[e]);
    }
  });

  productsStartWith.forEach(e => {
    if (wig[e] !== " " && wig[e] !== "" && wig[e] !== null) {
      products.push(wig[e]);
    }
  });

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
            {wig.strOrigin} {/* Adjusted to fit wig context */}
          </span>
        </div>
        <p>
          Here are some tips and care instructions to keep your wig looking fabulous!
        </p>

        <div className="w-full h-[20%]">
          <img src={wig.strWigImage} alt="" className="w-full h-full rounded-2xl object-cover" />
        </div>
        {/* Tips / Instructions */}
        <div className="flex sm:flex-row flex-col justify-between">
          <div className="sm:w-[40%] pt-4 flex flex-col gap-y-5">
            {/* Tips */}
            <h1 className="text-3xl font-bold font-mono">Care Tips</h1>
            <div className="flex flex-col gap-y-2">
              {tips.map((e, i) => (
                <span key={i} className="text-2xl flex items-center gap-x-3">
                  <FaRegCircle className="flex-shrink-0 flex-grow-0" /> {e}
                </span>
              ))}
            </div>
          </div>

          <div className="sm:w-[55%] h-full pt-4 flex flex-col gap-y-5">
            {/* Instructions */}
            <h1 className="text-3xl font-bold font-mono">Care Instructions</h1>
            {steps.map((e, i) => (
              <div key={i} className="flex gap-x-4 items-center">
                <div className="w-[30px] h-[30px] bg-red-300 flex-shrink-0 flex-grow-0 rounded-full flex items-center justify-center font-bold">{i + 1}</div>
                <span className="text-2xl">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WigRecipe;
