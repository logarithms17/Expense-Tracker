import PropTypes from "prop-types";
import { useState } from "react";

const CurrencyDropDown = ({ display, border, extraData, textColor }) => {
  const [currency, setCurrency] = useState("UAH");

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className={` bg-neutral-900 ${textColor} outline-none ${display} ${border} bottom-[10px] right-2 px-2 ${extraData}`}
      name="currency"
    >
      <option value="UAH">UAH</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
  );
};

export default CurrencyDropDown;

CurrencyDropDown.propTypes = {
  display: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  extraData: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
