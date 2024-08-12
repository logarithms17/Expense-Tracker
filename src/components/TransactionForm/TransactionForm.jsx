import React from "react";
import InputBox from "../InputBox/InputBox";

const TransactionForm = () => {
  return (
    <form action="" className="flex flex-col gap-5">
      <div className="flex items-center">
        <label htmlFor="" className="flex">
          <input type="radio" />
          <p>Expense</p>
        </label>
        <label htmlFor="" className="flex">
          <input type="radio" />
          <p>Income</p>
        </label>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex">
          <InputBox name="date" title="Date" backgroundColor="bg-neutral-900" />
          <InputBox name="time" title="Time" backgroundColor="bg-neutral-900" />
        </div>
        <InputBox
          name="text"
          title="Category"
          placeholder="Different"
          backgroundColor="bg-neutral-900"
        />
        <InputBox name="number" title="Sum" backgroundColor="bg-neutral-900" />
        <label htmlFor="" className="flex-1">
          <p>Comment</p>
          <textarea
            placeholder="Enter the text"
            className="bg-neutral-900 border-2 border-neutral-500 p-3 rounded-xl placeholder:text-neutral-500 w-full"
            rows="3"
          />
        </label>
      </div>
    </form>
  );
};

export default TransactionForm;
