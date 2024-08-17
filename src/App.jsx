import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import DashboardPage from "./pages/DashboardPage";
import AllExpensePage from "./pages/AllExpensePage";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/authOperations";

import RestrictedRoute from "./components/Routes/RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      console.log("rerendered");
      dispatch(refreshUser());
    }
  }, [dispatch]);

  return (
    <div className="container mx-auto py-8 px-[100px]">
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/dashboard" component={HomePage} />
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/dashboard" component={SignUpPage} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/dashboard" component={SignInPage} />
          }
        />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/all-expense" element={<AllExpensePage />} />
        <Route path="/all-income" element={<AllExpensePage />} />
      </Routes>
    </div>
  );
};

export default App;
