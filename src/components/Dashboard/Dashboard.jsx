import React from "react";
import FinanceWidget from "../HeroImage/FinanceWidget";
import arrowIcon from "../../assets/arrow-icon.svg";
import arrowDownIcon from "../../assets/angle-arrow-down.svg";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesModal from "../Modals/CategoriesModal";

const Dashboard = () => {
  return (
    <main className="flex gap-10">
      <CategoriesModal />
      <section>
        <h1 className="mt-[59px]">Expense Log</h1>
        <p className="description mt-5">
          Capture and organize every penny spent with ease! A clear view of you
          financial habits at <br /> your fingertips.
        </p>
        <div className="grid grid-cols-2 gap-6 my-8">
          <FinanceWidget
            title="Total Income"
            backgroundColor="bg-neutral-900"
            src={arrowIcon}
            textColor="text-white"
            percentage=""
            display="block"
          />
          <FinanceWidget
            title="Total Expense"
            backgroundColor="bg-neutral-900"
            src={arrowDownIcon}
            textColor="text-white"
            percentage=""
            display="block"
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
