"use client";

import { useState } from "react";

export const TaskThree = () => {
  const [number, setNumber] = useState(true);

  const changeNumber = () => {
    setNumber(!number);
  };
  return (
    <div>
      <button className="bg-blue-400 text-lg text-white" onClick={changeNumber}>
        Show/Hide Text
      </button>
      {number == true && <p>Toggle me</p>}
    </div>
  );
};
