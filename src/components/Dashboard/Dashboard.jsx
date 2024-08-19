import FinanceWidget from "../HeroImage/FinanceWidget";
import arrowIcon from "../../assets/arrow-icon.svg";
import arrowDownIcon from "../../assets/angle-arrow-down.svg";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesModal from "../Modals/CategoriesModal";
import UserSetsModal from "../Modals/UserSetsModal";
import LogoutModal from "../Modals/LogoutModal";
import { Notify } from "notiflix";

import { useState } from "react";
import PropTypes from "prop-types";

const Dashboard = ({ showModal, toggleModal }) => {
  const [categoryValue, setCategoryValue] = useState("");
  const [selectedTransactionType, setSelectedTransactionType] = useState("");
  // Toggle Categories Expense Modal
  const [showCategoriesExpenseModal, setShowCategoriesExpenseModal] =
    useState(false);
  // Toggle Categories Incomes Modal
  const [showCategoriesIncomeModal, setshowCategoriesIncomeModal] =
    useState(false);

  // TOGGLE EXPENSE CATEGORIES MODAL
  const toggleModalExpense = () => {
    setShowCategoriesExpenseModal(!showCategoriesExpenseModal);
  };

  // TOGGLE EXPENSE CATEGORIES MODAL
  const toggleModalIncome = () => {
    setshowCategoriesIncomeModal(!showCategoriesIncomeModal);
  };

  // Update the state when a radio button is selected
  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setSelectedTransactionType(e.target.value);
  };

  // TRIGGERS TO OPEN THE MODAL FOR CATEGORY
  const handleCategoryClick = () => {
    console.log("clicked");

    if (selectedTransactionType === "") {
      Notify.warning("Please select a transaction type");
      return;
    }

    if (selectedTransactionType === "expense") {
      setShowCategoriesExpenseModal(true);
    }

    if (selectedTransactionType === "income") {
      setshowCategoriesIncomeModal(true);
    }
  };

  // HANDLES THE VALUE OF THE CATEGORY IN THE TRANSACTION FORM
  const handleCategorySelection = (categoryName) => {
    console.log(categoryName);
    setCategoryValue(categoryName);
    console.log(categoryValue);

    toggleModalExpense();
  };

  return (
    <main className="flex gap-9">
      {showCategoriesExpenseModal && (
        <CategoriesModal
          title="Expenses"
          toggleModalExpense={toggleModalExpense}
          handleCategorySelection={handleCategorySelection}
        />
      )}
      {showCategoriesIncomeModal && (
        <CategoriesModal
          title="Incomes"
          toggleModalExpense={toggleModalIncome}
          handleCategorySelection={handleCategorySelection}
        />
      )}
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
        <TransactionForm
          handleCategoryClick={handleCategoryClick}
          handleRadioChange={handleRadioChange}
          categoryValue={categoryValue}
        />
      </section>
    </main>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
