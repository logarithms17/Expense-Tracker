import React from "react";
import PropTypes from "prop-types";

import edit from "../../assets/edit-2.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import { deleteTransaction, refreshUser } from "../../redux/authOperations";
import { useDispatch } from "react-redux";

const Table = ({ data, handleOpenModal }) => {
  const dispatch = useDispatch();

  const handleDeleteTransaction = (id, type) => {
    dispatch(deleteTransaction({ id, type })).then(() => {
      dispatch(refreshUser());
    });
  };
  return (
    <div className=" pt-5 h-[350px] ">
      <div className="h-[350px] min-w-full text-left text-sm font-light text-white grid grid-rows-[auto_1fr] scrollbar-thin scrollbar-thumb-neutral-500 scrollbar-track-neutral-800 overflow-hidden hover:overflow-y-auto">
        {/* Header */}
        <div className="bg-neutral-950 description grid grid-cols-7 text-lg">
          <div className="lg:px-10 md:pl-10 py-[15px] font-medium">
            Category
          </div>
          <div className="lg:px-10 md:pl-10 py-[15px] font-medium">Comment</div>
          <div className="lg:px-10 md:pl-10 py-[15px] font-medium">Date</div>
          <div className="lg:px-10 md:pl-10 py-[15px] font-medium">Time</div>
          <div className="lg:px-10 md:pl-10 py-[15px] font-medium">Sum</div>
          <div className="lg:px-10 md:pl-10 py-[15px] font-medium">Actions</div>
        </div>

        {/* Table Body */}
        <div className="">
          {data.map((item) => (
            <div key={item._id} className="grid grid-cols-7">
              <div className="lg:px-10 md:pl-10 py-[15px]">
                {item.category.categoryName}
              </div>
              <div className="lg:px-10 md:pl-10 py-[15px]">{item.comment}</div>
              <div className="lg:px-10 md:pl-10 py-[15px] overflow-hidden overflow-ellipsis">
                {item.date}
              </div>
              <div className="lg:px-10 md:pl-10 py-[15px]">{item.time}</div>
              <div className="lg:px-10 md:pl-10 py-[15px]">{item.sum}</div>
              <div className="lg:px-10 md:pl-10 py-[15px] flex gap-3">
                <ButtonWithIcon
                  title="Edit"
                  icon={edit}
                  handleOpenModal={() => handleOpenModal(item)}
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
                  <p className="lg:block md:hidden">Delete</p>
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
  handleOpenModal: PropTypes.func.isRequired,
};
