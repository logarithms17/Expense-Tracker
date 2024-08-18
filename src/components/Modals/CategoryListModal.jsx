import React from "react";
import Icons from "../Icons/Icons";
import check from "../../assets/check.svg";
import trash from "../../assets/trash-2.svg";
import edit from "../../assets/edit-icon.svg";

import { deleteCategory } from "../../redux/authOperations";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const CategoryList = () => {
  const categoryList = useSelector(
    (state) => state.auth.user.categories.expenses
  );
  console.log(categoryList);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Category list updated:", categoryList);
  }, [categoryList]);

  const handleDeleteCategory = (id) => {
    console.log(id);
    dispatch(deleteCategory(id));
  };

  return (
    <ul className="h-[200px] flex flex-col gap-2 scrollbar-thin scrollbar-thumb-neutral-500 scrollbar-track-neutral-900 overflow-hidden overflow-y-scroll scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl">
      {categoryList.map(({ categoryName, _id }) => (
        <li key={_id} className="py-2 text-lg flex justify-between">
          {categoryName}
          <div className="flex mr-4 gap-3">
            <Icons icon={check} />
            <Icons icon={edit} />
            <Icons
              icon={trash}
              handleDeleteCategory={handleDeleteCategory}
              id={_id}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
