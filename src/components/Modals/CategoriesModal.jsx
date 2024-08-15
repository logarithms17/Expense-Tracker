import React, { useState } from "react";
import CategoryList from "./CategoryListModal";
import InputBox from "../InputBox/InputBox";
import CloseButton from "../Buttons/CloseButton";

import PropTypes from "prop-types";

const CategoriesModal = ({ title }) => {
  const [display, setDisplay] = useState("hidden");

  const handleClick = () => {
    
  };

  return (
    <>
      <div
        className={`${display} fixed w-screen h-screen bg-stone-950 z-10 opacity-50 top-0 left-0 m-auto overflow-hidden`}
      ></div>
      <div
        className={`${display} w-[500px] h-[461px] bg-neutral-900 opacity-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-3xl px-10 py-8`}
      >
        <CloseButton handleClick={handleClick} />
        <p className="text-2xl pt-3">{title}</p>
        <p className="description py-3">All Category</p>
        <div>
          <CategoryList />
          <div className="mt-3">
            <p>New Category</p>
            <div className="flex mt-4 relative items-center">
              <InputBox
                title=""
                backgroundColor="bg-neutral-900"
                placeholder="Enter the text"
              />
              <div className="absolute top-[1px] right-0">
                <button className="bg-green-400 text-black py-3 px-10 rounded-xl font-medium hover:bg-green-300">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesModal;

CategoriesModal.propTypes = {
  title: PropTypes.string.isRequired,
};
