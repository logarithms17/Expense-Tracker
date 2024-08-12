import React from "react";
import arrowIcon from "../../assets/arrow-icon.svg";
import image from "../../assets/couple-happy.png";
import FinanceWidget from "./FinanceWidget";

const HeroImage = () => {
  return (
    <section className="relative flex justify-center items-center">
      <FinanceWidget
        title="Your balance"
        backgroundColor="bg-white"
        textColor="text-black"
        percentage="+1.29%"
        display="absolute"
        src={arrowIcon}
      />
      <img src={image} alt="couple-happy" />
    </section>
  );
};

export default HeroImage;
