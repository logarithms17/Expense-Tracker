import { Link } from "react-router-dom";
import logo from "../../assets/Icon.svg";

const InitialHeader = () => {
  return (
    <Link to="/dashboard">
      <div className="flex justify-center items-center h-full">
        <img src={logo} alt="logo" style={{ width: "27px", height: "16px" }} />
        <p className="font-bold text-2xl px-1">EXPENSETRACKER</p>
      </div>
    </Link>
  );
};

export default InitialHeader;
