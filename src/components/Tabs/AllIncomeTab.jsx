import React from "react";
import FinanceWidget from "../HeroImage/FinanceWidget";
import arrowIcon from "../../assets/arrow-icon.svg";
import arrowDownIcon from "../../assets/angle-arrow-down.svg";

import PropTypes from "prop-types";
import SearchBar from "../InputBox/SearchBar";
import Table from "../Table/ExpenseTable";
import { useSelector } from "react-redux";

const AllIncomeTab = ({ title }) => {
  const expenseTotal = useSelector(
    (state) => state.auth.user.transactionsTotal.expenses
  );

  const incomeTotal = useSelector(
    (state) => state.auth.user.transactionsTotal.incomes
  );

  const data = [
    {
      category: "Salary",
      comment: "It Company",
      date: "Sn, 03.03.2023",
      time: "14:30",
      sum: "35000 / UAH",
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
            total={incomeTotal}
            title="Total Income"
            src={arrowIcon}
            percentage=""
            styles="dashboardWidget"
            textColor="text-white"
          />
          <FinanceWidget
            total={expenseTotal}
            title="Total Expense"
            src={arrowDownIcon}
            percentage=""
            styles="dashboardWidget"
            textColor="text-white"
          />
        </div>
      </div>
      <div>
        <div className="bg-neutral-900 py-5 rounded-3xl my-10 h-[439px]">
          <SearchBar />
          <Table data={data} />
        </div>
      </div>
    </>
  );
};

export default AllIncomeTab;

AllIncomeTab.propTypes = {
  title: PropTypes.string.isRequired,
};
