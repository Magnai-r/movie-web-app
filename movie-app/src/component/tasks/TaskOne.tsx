"use client";

import { useState } from "react";

export const TaskOne = () => {
  const [count, setCount] = useState(0);

  const handleOnChange = () => {
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <div>
      <button
        onClick={handleOnChange}
        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600 transition-colors"
      >
        increment
      </button>
      <p className="text-black text-lg">
        Count:<span>{count}</span> times
      </p>
    </div>
  );
};
