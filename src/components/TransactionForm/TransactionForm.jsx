import React from "react";
import InputBox from "../InputBox/InputBox";
import PrimaryButton from "../Buttons/PrimaryButton";
import CurrencyInputBox from "../InputBox/CurrencyInputBox";
import RadioInput from "../InputBox/RadioInput";

const TransactionForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData);

    console.log(formData.get("date"));
    console.log(formData.get("time"));
    console.log(formData.get("category"));
    console.log(formData.get("comment"));
    console.log(formData.get("sum"));
    console.log(formData.get("currency"));
    console.log(formData.get("type"));

    console.log(formData.get("email"));
  };
  return (
    <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex items-center gap-5">
        <RadioInput title="Expense" />
        <RadioInput title="Income" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <InputBox
            type="date"
            placeholder="mm/dd/yyyy"
            title="Date"
            backgroundColor="bg-neutral-900"
            name="date"
            textColor="text-neutral-500"
          />
          <InputBox
            type="time"
            placeholder="00:00:00"
            title="Time"
            backgroundColor="bg-neutral-900"
            name="time"
            textColor="text-neutral-500"
          />
        </div>
        <InputBox
          type="text"
          title="Category"
          placeholder="Different"
          backgroundColor="bg-neutral-900"
          name="category"
          textColor="text-neutral-500"
        />
        <CurrencyInputBox />
        <label htmlFor="" className="flex-1">
          <p className="pb-3">Comment</p>
          <textarea
            placeholder="Enter the text"
            className="bg-neutral-900 border-2 border-neutral-500 p-3 rounded-xl placeholder:text-neutral-500 w-full"
            rows="3"
            name="comment"
            textColor="text-neutral-500"
          />
        </label>
        <div className="flex items-start">
          <PrimaryButton title="Add" />
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
