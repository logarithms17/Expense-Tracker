import React from "react";
import FinanceWidget from "../HeroImage/FinanceWidget";
import arrowIcon from "../../assets/arrow-icon.svg";
import arrowDownIcon from "../../assets/angle-arrow-down.svg";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesModal from "../Modals/CategoriesModal";
import UserSetsModal from "../Modals/UserSetsModal";
import LogoutModal from "../Modals/LogoutModal";

import { useSelector, useDispatch } from "react-redux";

import UseToggle from "../../Hook/UseToggle";
import { useEffect } from "react";

const Dashboard = ({ showModal, toggleModal }) => {
  const dispatch = useDispatch();

  return (
    <main className="flex gap-9">
      {/* <CategoriesModal title="Expenses" />
      <CategoriesModal title="Incomes" /> */}
      {showModal && (
        <UserSetsModal title="Profile Settings" toggleModal={toggleModal} />
      )}
      {/* <LogoutModal /> */}

      <section>
        <h1 className="mt-[59px]">Expense Log</h1>
        <p className="description mt-5">
          Capture and organize every penny spent with ease! A clear view of you
          financial habits at <br /> your fingertips.
        </p>
        <div className="grid grid-cols-2 gap-6 my-8">
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

        <div>
          <ExpenseChart />
        </div>
      </section>
      <section className="mt-14 p-8 bg-neutral-900 rounded-3xl w-[600px]">
        <TransactionForm />
      </section>
    </main>
  );
};

export default Dashboard;
