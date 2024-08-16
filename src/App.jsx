import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import DashboardPage from "./pages/DashboardPage";
import AllExpensePage from "./pages/AllExpensePage";

const App = () => {
  return (
    <div className="container mx-auto py-8 px-[100px]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/all-expense" element={<AllExpensePage />} />
        <Route path="/all-income" element={<AllExpensePage />} />
      </Routes>
    </div>
  );
};

export default App;
