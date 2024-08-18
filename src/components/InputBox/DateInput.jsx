import React from "react";

const initialDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}-${month}-${year}`;
};

const DateInput = () => {
  const [date, setDate] = React.useState(initialDate());

  return (
    <label htmlFor="date" className="flex-1">
      <p className="pb-3">Date</p>
      <input
        type="date"
        className={`bg-neutral-900 border-2 border-neutral-500 p-3 rounded-xl placeholder:text-neutral-500 text-neutral-500 w-full custom-input-icon`}
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </label>
  );
};

export default DateInput;
