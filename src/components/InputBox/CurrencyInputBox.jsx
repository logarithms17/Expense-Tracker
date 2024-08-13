import React, { useState } from "react";

const CurrencyInputBox = () => {
  const [currency, setCurrency] = useState("UAH");

  return (
    <div className="flex items-end justify-between overflow-hidden relative">
      <label htmlFor="" className="flex flex-col gap-3 flex-1">
        <p>Sum</p>
        <input
          type="number"
          placeholder="Enter the sum"
          className="p-2 flex-grow outline-none bg-neutral-900 placeholder:text-neutral-500 text-neutral-500 border border-neutral-500 rounded-lg"
          name="sum"
        />
      </label>

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className=" bg-neutral-900  text-neutral-500  outline-none absolute bottom-[10px] right-2"
        name="currency"
      >
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default CurrencyInputBox;
