import InitialHeader from "./Logo";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import DropdownButton from "../../components/Buttons/DropdownButton";
import { NavLink } from "react-router-dom";

import { useState } from "react";

const MainHeader = ({ toggleModal }) => {
  return (
    <div className="flex justify-between border-b-[1px] border-neutral-600 pb-6 relative">
      <InitialHeader />
      <div className="flex gap-6">
        <NavLink to="/all-expense">
          <SecondaryButton
            title="All Expense"
            styles="dashboardSecondaryButton"
            icon=""
          />
        </NavLink>
        <NavLink to="/all-income">
          <SecondaryButton
            title="All Income"
            styles="dashboardSecondaryButton"
            icon=""
          />
        </NavLink>
      </div>
      <DropdownButton toggleModal={toggleModal} />
    </div>
  );
};

export default MainHeader;
