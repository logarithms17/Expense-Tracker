import CategoryList from "./CategoryListModal";
import CloseButton from "../Buttons/CloseButton";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../redux/authOperations";
import { useState } from "react";

const CategoriesModal = ({ title, toggleModalExpense }) => {
  const [newCategory, setNewCategory] = useState("");
  const [buttonType, setButtonType] = useState("Add");

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.auth.user.categories);
  const user = useSelector((state) => state.auth.user);

  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleButtonChange = () => {
    setButtonType("Edit");
  };

  const handleCreateCategory = async () => {
    if (buttonType === "Add") {
      if (newCategory.trim() === "") {
        console.log("Category name cannot be empty");
        return;
      }

      try {
        const result = await dispatch(
          createCategory({ type: "expenses", categoryName: newCategory })
        ).unwrap();
        console.log("Category created successfully:", result);
        setNewCategory("");
      } catch (error) {
        console.error("Failed to create category:", error);
      }
    }
  };

  return (
    <>
      <div
        className={` fixed w-screen h-screen bg-stone-950 z-10 opacity-50 top-0 left-0 m-auto overflow-hidden`}
      ></div>
      <div
        className={` w-[500px] h-[461px] bg-neutral-900 opacity-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-3xl px-10 py-8`}
      >
        <CloseButton toggleModal={toggleModalExpense} />
        <p className="text-2xl pt-3">{title}</p>
        <p className="description py-3">All Category</p>
        <div>
          <CategoryList handleButtonChange={handleButtonChange} />
          <div className="mt-3">
            <p>New Category</p>
            <div className="flex mt-4 relative items-center">
              <label htmlFor="expenses" className="flex-1">
                <input
                  type="text"
                  placeholder="Enter the text"
                  className={`bg-neutral-900 border-2 border-neutral-500 p-3 rounded-xl placeholder:text-neutral-500 text-neutral-500 w-full custom-input-icon`}
                  name="expenses"
                  id="expenses"
                  onChange={handleChange}
                  value={newCategory}
                />
              </label>
              <div className="absolute top-[1px] right-0">
                <button
                  className="bg-green-400 text-black py-3 px-10 rounded-xl font-medium hover:bg-green-300"
                  onClick={handleCreateCategory}
                >
                  {buttonType}
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
  toggleModalExpense: PropTypes.func.isRequired,
};
