import React from "react";

const InputBox = ({ name, placeholder, title, backgroundColor }) => {
  return (
    <label htmlFor="" className="flex-1">
      <p className="pb-3">{title}</p>
      <input
        type={name}
        placeholder={placeholder}
        className={`${backgroundColor} border-2 border-neutral-500 p-3 rounded-xl placeholder:text-neutral-500 w-full`}
      />
    </label>
  );
};

export default InputBox;
