import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import PrimaryButton from "../Buttons/PrimaryButton";
import CurrencyInputBox from "../InputBox/CurrencyInputBox";
import RadioInput from "../InputBox/RadioInput";
import TimeInput from "../InputBox/TimeInput";
import DateInput from "../InputBox/DateInput";
import PropTypes from "prop-types";

const TransactionForm = ({
  handleCategoryClick,
  handleRadioChange,
  categoryValue,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData);

    console.log(formData.get("transaction-type"));

    console.log(formData.get("date"));
    console.log(formData.get("time"));
    console.log(formData.get("category"));
    console.log(formData.get("sum"));
    console.log(formData.get("currency"));
    console.log(formData.get("comment"));
  };
  return (
    <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex items-center gap-5">
        <RadioInput
          title="Expense"
          name="transaction-type"
          id="expense"
          value="expense"
          handleRadioChange={handleRadioChange}
        />
        <RadioInput
          title="Income"
          name="transaction-type"
          id="income"
          value="income"
          handleRadioChange={handleRadioChange}
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <DateInput />
          <TimeInput />
        </div>
        <label htmlFor="category" className="flex-1">
          <p className="pb-3">Category</p>
          <input
            type="text"
            placeholder="Please choose or create a category"
            className={`bg-neutral-900 border-2 border-neutral-500 p-3 rounded-xl placeholder:text-neutral-500 text-neutral-500 w-full custom-input-icon`}
            name="category"
            id="category"
            onClick={handleCategoryClick}
            value={categoryValue}
          />
        </label>
        <CurrencyInputBox />
        <label htmlFor="" className="flex-1">
          <p className="pb-3">Comment</p>
          <textarea
            placeholder="Enter the text"
            className="bg-neutral-900 border-2 border-neutral-500 p-3 rounded-xl placeholder:text-neutral-500 w-full text-neutral-500"
            rows="3"
            name="comment"
          />
        </label>
        <div className="flex items-start">
          <PrimaryButton title="Add" icon="" />
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;

TransactionForm.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
};
