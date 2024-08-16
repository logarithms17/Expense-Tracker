import React from "react";
import FinanceWidget from "../HeroImage/FinanceWidget";
import arrowIcon from "../../assets/arrow-icon.svg";
import arrowDownIcon from "../../assets/angle-arrow-down.svg";

import PropTypes from "prop-types";
import SearchBar from "../InputBox/SearchBar";

// const initialExpenses = {

// }

const AllExpenseTab = ({ title }) => {
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
        <div>
          <SearchBar />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AllExpenseTab;

AllExpenseTab.propTypes = {
  title: PropTypes.string.isRequired,
};
