import CurrencyDropDown from "./CurrencyDropDown";

const CurrencyInputBox = () => {
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
      <CurrencyDropDown />
    </div>
  );
};

export default CurrencyInputBox;
