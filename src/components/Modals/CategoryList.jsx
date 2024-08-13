import React from "react";
import Icons from "../Icons/Icons";
import check from "../../assets/check.svg";
import trash from "../../assets/trash-2.svg";
import edit from "../../assets/edit-icon.svg";

const CategoryList = () => {
  const initialCategory = ["Cinema", "Products", "Clothes", "Education"];

  return (
    <ul className="flex flex-col gap-2 hover:overflow-y-scroll">
      {initialCategory.map((category) => (
        <li key={category} className="py-2 text-lg flex justify-between">
          {category}
          <div className="flex mr-4 gap-3">
            <Icons icon={check} />
            <Icons icon={edit} />
            <Icons icon={trash} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
