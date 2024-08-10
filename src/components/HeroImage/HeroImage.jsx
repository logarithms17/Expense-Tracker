import React from "react";
import arrowIcon from "../../assets/arrow-icon.svg";
import image from "../../assets/couple-happy.png";

const HeroImage = () => {
  return (
    <section className="relative flex justify-center items-center">
      <div className="absolute bottom-[130px] left-5 bg-white rounded-2xl flex justify-center items-center p-7">
        <img
          src={arrowIcon}
          alt="arrow-icon"
          className="p-3 bg-green-400 rounded-xl w-[40px] mr-3"
        />
        <div className="leading-6">
          <p className="text-neutral-500 text-[14px]">Your balance</p>
          <div className="flex items-center justify-center">
            <p className="text-black font-bold text-2xl">$632.000</p>
            <p className="text-green-500 text-[13px] px-3 ml-3 rounded-xl bg-green-100 font-medium">
              +1.29%
            </p>
          </div>
        </div>
      </div>
      <img src={image} alt="couple-happy" />
    </section>
  );
};

export default HeroImage;
