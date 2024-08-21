import { useEffect, useState } from "react";
import FinanceWidget from "../HeroImage/FinanceWidget";
import arrowIcon from "../../assets/arrow-icon.svg";
import arrowDownIcon from "../../assets/angle-arrow-down.svg";

import PropTypes from "prop-types";
import SearchBar from "../InputBox/SearchBar";
import Table from "../Table/Table";
import { useSelector, useDispatch } from "react-redux";
import { getTransactions } from "../../redux/authOperations";
import UserSetsModal from "../Modals/UserSetsModal";
import TransactionFormModal from "../Modals/TransactionFormModal";

const AllIncomeTab = ({ title, showModal, toggleModal }) => {
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [transactionsData, setTransactionsData] = useState(null);

  const dispatch = useDispatch();

  const toggleFormModal = () => setShowTransactionForm((prev) => !prev);

  const expenseTotal = useSelector(
    (state) => state.auth.user.transactionsTotal.expenses
  );

  const incomeTotal = useSelector(
    (state) => state.auth.user.transactionsTotal.incomes
  );

  const data = useSelector((state) => {
    return state.auth.transactions.data;
  });

  const handleOpenModal = (item) => {
    setShowTransactionForm(true);
    setTransactionsData(item);
  };

  useEffect(() => {
    // Dispatch the action to fetch expenses on component mount
    dispatch(getTransactions({ type: "incomes" }));
  }, [dispatch]);

  useEffect(() => {
    if (!showTransactionForm) {
      dispatch(getTransactions({ type: "incomes" }));
    }
  }, [showTransactionForm, dispatch]);

  return (
    <>
      <div className="flex items-end justify-between">
        {showModal && (
          <UserSetsModal title="Profile Settings" toggleModal={toggleModal} />
        )}

        {showTransactionForm && (
          <TransactionFormModal
            toggleFormModal={toggleFormModal}
            transactionsData={transactionsData}
          />
        )}

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
          <Table data={data} handleOpenModal={handleOpenModal} />
        </div>
      </div>
    </>
  );
};

export default AllIncomeTab;

AllIncomeTab.propTypes = {
  title: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
