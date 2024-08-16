import React from "react";
import FinanceWidget from "../HeroImage/FinanceWidget";
import arrowIcon from "../../assets/arrow-icon.svg";
import arrowDownIcon from "../../assets/angle-arrow-down.svg";

import PropTypes from "prop-types";
import SearchBar from "../InputBox/SearchBar";
import Table from "../Table/ExpenseTable";

const AllExpenseTab = ({ title }) => {
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
    <>
      <div className="flex items-end justify-between">
        <div>
          <h1 className="mt-[59px]">{title}</h1>
          <p className="description mt-5">
            View and Manage every transaction seamlessly! Your entire financial{" "}
            <br /> landscape, all in one place.
          </p>
        </div>

        <div className="flex gap-6">
          <FinanceWidget
            title="Total Income"
            src={arrowIcon}
            percentage=""
            styles="dashboardWidget"
            textColor="text-white"
          />
          <FinanceWidget
            title="Total Expense"
            src={arrowDownIcon}
            percentage=""
            styles="dashboardWidget"
            textColor="text-white"
          />
        </div>
      </div>
      <div>
        <div className="bg-neutral-900 py-5 rounded-3xl my-10 h-[439px] ">
          <SearchBar />
          <Table data={data} />
        </div>
      </div>
    </>
  );
};

export default AllExpenseTab;

AllExpenseTab.propTypes = {
  title: PropTypes.string.isRequired,
};
