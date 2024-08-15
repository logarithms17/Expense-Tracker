import React, { useState } from "react";

const CurrencyDropDown = () => {
  const [currency, setCurrency] = useState("UAH");

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className=" bg-neutral-900  text-neutral-500  outline-none absolute bottom-[10px] right-2 px-2"
      name="currency"
    >
      <option value="UAH">UAH</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
  );
};

export default CurrencyDropDown;
