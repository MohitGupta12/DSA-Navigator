import React from "react";
import ProgressBar from "./ProgressBar";

const SolvedQuesBar = ({ value, questionSolved }) => {
  return (
    <div className="flex flex-col items-center w-full mb-2">
      <h2 className="my-3 text-lg">
        Total Question Solved : {questionSolved} ({value}%)
      </h2>
      <ProgressBar value={value} />
    </div>
  );
};

export default SolvedQuesBar;
