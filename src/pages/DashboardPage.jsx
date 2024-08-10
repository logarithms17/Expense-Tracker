import React from "react";
import InitialHeader from "../components/Header/InitialHeader";
import Dashboard from "../components/Dashboard/Dashboard";
import SecondaryButton from "../components/Buttons/SecondaryButton";

const DashboardPage = () => {
  return (
    <>
      <div className="flex justify-between">
        <InitialHeader />
        <div>
          <SecondaryButton title="All Expense" />
          <SecondaryButton title="All Income" />
        </div>
      </div>
      <Dashboard />
    </>
  );
};

export default DashboardPage;

