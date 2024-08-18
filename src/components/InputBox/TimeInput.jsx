import React from "react";

const initialTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
};

const TimeInput = () => {
  const [time, setTime] = React.useState(initialTime());

  return (
    <label htmlFor="time" className="flex-1">
      <p className="pb-3">Time</p>
      <input
        type="time"
        placeholder="00:00:00"
        className={`bg-neutral-900 border-2 border-neutral-500 p-3 rounded-xl placeholder:text-neutral-500 text-neutral-500 w-full custom-input-icon`}
        name="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </label>
  );
};

export default TimeInput;
