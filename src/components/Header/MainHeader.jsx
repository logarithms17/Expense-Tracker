import InitialHeader from "./Logo";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import DropdownButton from "../../components/Buttons/DropdownButton";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const MainHeader = ({ toggleModal }) => {
  return (
    <div className="flex justify-between border-b-[1px] border-neutral-600 pb-6 relative">
      <InitialHeader />
      <div className="gap-6 sm:hidden lg:flex">
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
      <div className="sm:hidden lg:flex">
        <DropdownButton toggleModal={toggleModal} />
      </div>
    </div>
  );
};

export default MainHeader;

MainHeader.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
