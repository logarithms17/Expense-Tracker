import React from "react";
import InitialHeader from "../components/Header/InitialHeader";
import Dashboard from "../components/Dashboard/Dashboard";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import DropdownButton from "../components/Buttons/DropdownButton";

const DashboardPage = () => {
  return (
    <>
      <div className="flex justify-between border-b-[1px] border-neutral-600 pb-6 relative">
        <InitialHeader />
        <div className="flex gap-6">
          <SecondaryButton
            title="All Expense"
            styles="dashboardSecondaryButton"
          />
          <SecondaryButton
            title="All Income"
            styles="dashboardSecondaryButton"
          />
        </div>
        <DropdownButton />
      </div>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
