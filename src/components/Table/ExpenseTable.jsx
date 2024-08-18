import React from "react";
import PropTypes from "prop-types";

import edit from "../../assets/edit-2.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";

const Table = ({ data }) => {
  return (
    <div className="overflow-y-auto pt-5">
      <table className="min-w-full text-left text-sm font-light text-white ">
        <thead className=" bg-neutral-950 description">
          <tr className=" text-lg">
            <th className="px-10 py-[15px] font-medium">Category</th>
            <th className="px-10 py-[15px] font-medium">Comment</th>
            <th className="px-10 py-[15px] font-medium">Date</th>
            <th className="px-10 py-[15px] font-medium">Time</th>
            <th className="px-10 py-[15px] font-medium">Sum</th>
            <th className="px-10 py-[15px] font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="font-normal text-base leading-none">
              <td className="px-10 py-[15px]">{item.category}</td>
              <td className="px-10 py-[15px]">{item.comment}</td>
              <td className="px-10 py-[15px]">{item.date}</td>
              <td className="px-10 py-[15px]">{item.time}</td>
              <td className="px-10 py-[15px]">{item.sum}</td>
              <td className="px-10 py-[15px] flex gap-3">
                <ButtonWithIcon title="Edit" icon={edit} />
                <button className="tableSecondaryButton">
                  <RiDeleteBin6Line />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

Table.propTypes = {
  data: PropTypes.array.isRequired,
};
