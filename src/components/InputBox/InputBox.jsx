import React from "react";

const InputBox = ({ name, placeholder }) => {
  return (
    <label htmlFor="">
      <input
        type={name}
        placeholder={placeholder}
        className="bg-black border-2 border-neutral-500 p-3 rounded-xl placeholder:text-neutral-500 w-[399px]"
      />
    </label>
  );
};

export default InputBox;
