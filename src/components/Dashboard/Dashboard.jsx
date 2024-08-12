import React from "react";
import FinanceWidget from "../HeroImage/FinanceWidget";
import arrowIcon from "../../assets/arrow-icon.svg";
import arrowDownIcon from "../../assets/angle-arrow-down.svg";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

const Dashboard = () => {
  return (
    <main className="flex gap-10">
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
          />
          <FinanceWidget
            title="Total Expense"
            backgroundColor="bg-neutral-900"
            src={arrowDownIcon}
          />
        </div>

        <div>
          <ExpenseChart />
        </div>
      </section>
      <section>World</section>
    </main>
  );
};

export default Dashboard;
