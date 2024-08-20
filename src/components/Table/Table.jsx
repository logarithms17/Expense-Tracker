import React from "react";
import PropTypes from "prop-types";

import edit from "../../assets/edit-2.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import {
  deleteTransaction,
  getTransactions,
  refreshUser,
} from "../../redux/authOperations";
import { useDispatch } from "react-redux";

const Table = ({ data, handleOpenModal }) => {
  const dispatch = useDispatch();

  const handleDeleteTransaction = (id, type) => {
    console.log(id, type);
    console.log("deleted");

    dispatch(deleteTransaction({ id, type })).then(() => {
      console.log("deleted");
      dispatch(refreshUser());
      console.log("fetched");
    });
  };
  console.log(data);
  return (
    <div className=" pt-5 h-[350px] scrollbar-thin scrollbar-thumb-neutral-500 scrollbar-track-neutral-900 overflow-hidden overflow-y-scroll scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl">
      <div className="h-[400px] min-w-full text-left text-sm font-light text-white overflow-hidden grid grid-rows-[auto_1fr]">
        {/* Header */}
        <div className="bg-neutral-950 description grid grid-cols-7 text-lg">
          <div className="px-10 py-[15px] font-medium">Category</div>
          <div className="px-10 py-[15px] font-medium">Comment</div>
          <div className="px-10 py-[15px] font-medium">Date</div>
          <div className="px-10 py-[15px] font-medium">Time</div>
          <div className="px-10 py-[15px] font-medium">Sum</div>
          <div className="px-10 py-[15px] font-medium">Actions</div>
        </div>

        {/* Table Body */}
        <div className="overflow-y-auto">
          {data.map((item) => (
            <div key={item._id} className="grid grid-cols-7">
              <div className="px-10 py-[15px]">
                {item.category.categoryName}
              </div>
              <div className="px-10 py-[15px]">{item.comment}</div>
              <div className="px-10 py-[15px]">{item.date}</div>
              <div className="px-10 py-[15px]">{item.time}</div>
              <div className="px-10 py-[15px]">{item.sum}</div>
              <div className="px-10 py-[15px] flex gap-3">
                <ButtonWithIcon
                  title="Edit"
                  icon={edit}
                  handleOpenModal={handleOpenModal}
                  id={item._id}
                  type={item.type}
                  aria-label={`Edit transaction ${item._id}`}
                />
                <button
                  className="tableSecondaryButton"
                  onClick={() => handleDeleteTransaction(item._id, item.type)}
                  aria-label={`Delete transaction ${item._id}`}
                >
                  <RiDeleteBin6Line />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;

Table.propTypes = {
  data: PropTypes.array.isRequired,
};
