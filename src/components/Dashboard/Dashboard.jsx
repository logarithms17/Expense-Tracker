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
import { useSelector } from "react-redux";

const Dashboard = ({ showModal, toggleModal }) => {
  const [categoryInput, setCategoryInput] = useState("");
  const [selectedTransactionType, setSelectedTransactionType] = useState("");
  // Toggle Categories Expense Modal
  const [showCategoriesExpenseModal, setShowCategoriesExpenseModal] =
    useState(false);
  // Toggle Categories Incomes Modal
  const [showCategoriesIncomeModal, setShowCategoriesIncomeModal] =
    useState(false);

  const expenseTotal = useSelector(
    (state) => state.auth.user.transactionsTotal.expenses
  );

  const incomeTotal = useSelector(
    (state) => state.auth.user.transactionsTotal.incomes
  );

  const transaction = useSelector((state) => state.auth);

  // TOGGLE EXPENSE CATEGORIES MODAL
  const toggleModalExpense = () => {
    setShowCategoriesExpenseModal(!showCategoriesExpenseModal);
  };

  // TOGGLE EXPENSE CATEGORIES MODAL
  const toggleModalIncome = () => {
    setShowCategoriesIncomeModal(!showCategoriesIncomeModal);
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

    if (selectedTransactionType === "expenses") {
      setShowCategoriesExpenseModal(true);
    }

    if (selectedTransactionType === "incomes") {
      setShowCategoriesIncomeModal(true);
    }
  };

  // HANDLES THE VALUE OF THE CATEGORY IN THE TRANSACTION FORM
  const handleCategorySelection = (_id, title) => {
    setCategoryInput(_id);
    if (title === "Expenses") {
      toggleModalExpense();
    }

    if (title === "Incomes") {
      toggleModalIncome();
    }
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
            total={expenseTotal}
            title="Total Income"
            src={arrowIcon}
            percentage=""
            styles="dashboardWidget"
            textColor="text-white"
          />
          <FinanceWidget
            total={incomeTotal}
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
          categoryInput={categoryInput}
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
