import React from "react";
import CategoryList from "./CategoryList";
import InputBox from "../InputBox/InputBox";

const CategoriesModal = () => {
  return (
    <>
      <div className="fixed w-screen h-screen bg-stone-950 z-10 opacity-50 top-0 left-0 m-auto overflow-hidden"></div>
      <div className="w-[500px] h-[461px] bg-neutral-900 opacity-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-3xl px-10 py-8">
        <p className="text-2xl">Expenses</p>
        <p className="description py-3">All Category</p>
        <div>
          <CategoryList />
          <div className="mt-3">
            <p>New Category</p>
            <div className="flex mt-4 relative">
              <InputBox title="" backgroundColor="bg-neutral-900" />
              <div className="absolute top-0 right-0">
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
