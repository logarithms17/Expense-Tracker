import React from "react";

const RadioInput = ({ title }) => {
  return (
    <label htmlFor={title} className="flex gap-2">
      <input type="radio" name={title} id={title} />
      <p>{title}</p>
    </label>
  );
};

export default RadioInput;
