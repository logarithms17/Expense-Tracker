import MainHeader from "../components/Header/MainHeader";
import { useLocation } from "react-router-dom";
import AllExpenseTab from "../components/Tabs/AllExpenseTab";
import AllIncomeTab from "../components/Tabs/AllIncomeTab";

const AllExpensePage = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const dynamicTab = () => {
    if (pathname === "/all-expense") {
      return <AllExpenseTab title="All Expense" />;
    }
    if (pathname === "/all-income") {
      return <AllIncomeTab />;
    }
  };

  return (
    <>
      <MainHeader />
      {dynamicTab()}
    </>
  );
};

export default AllExpensePage;
