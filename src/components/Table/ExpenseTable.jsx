import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";

import edit from "../../assets/edit-2.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";

const Table = () => {
  const data = [
    {
      category: "Cinema",
      comment: "John Week 4",
      date: "Sn, 03.03.2023",
      time: "14:30",
      sum: "150 / UAH",
    },
    {
      category: "Products",
      comment: "Milk, Bread...",
      date: "Sn, 18.03.2023",
      time: "10:50",
      sum: "1500 / UAH",
    },
    {
      category: "Clothes",
      comment: "Tshirt",
      date: "Sn, 20.03.2023",
      time: "17:25",
      sum: "5000 / UAH",
    },
    {
      category: "Cinema",
      comment: "Avatar 2",
      date: "Sn, 29.03.2023",
      time: "20:30",
      sum: "150 / UAH",
    },
  ];

  return (
    <div className="overflow-y-auto pt-5">
      <table className="min-w-full text-left text-sm font-light text-white ">
        <thead className=" bg-neutral-950 description">
          <tr className=" text-lg">
            <th className="px-10 py-4 font-medium">Category</th>
            <th className="px-10 py-4 font-medium">Comment</th>
            <th className="px-10 py-4 font-medium">Date</th>
            <th className="px-10 py-4 font-medium">Time</th>
            <th className="px-10 py-4 font-medium">Sum</th>
            <th className="px-10 py-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="font-normal text-lg">
              <td className="px-10 py-4">{item.category}</td>
              <td className="px-10 py-4">{item.comment}</td>
              <td className="px-10 py-4">{item.date}</td>
              <td className="px-10 py-4">{item.time}</td>
              <td className="px-10 py-4">{item.sum}</td>
              <td className="px-10 py-4 flex gap-3">
                <ButtonWithIcon title="Edit" icon={edit} />
                <SecondaryButton
                  title="Delete"
                  styles="tableSecondaryButton"
                  icon={<RiDeleteBin6Line />}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
