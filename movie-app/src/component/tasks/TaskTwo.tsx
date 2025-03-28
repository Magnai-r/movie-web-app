"use client";

import { useState } from "react";

export const TaskTwo = () => {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input
        onChange={handleOnChange}
        className="flex h-10 w-80 border border-black text-lg text-red-400 bg-white"
      ></input>
      <p>{value}</p>
    </div>
  );
};
