import React from "react";
import "./progressBar.css";
const ProgressBar2 = ({ value, questionSolved }) => {
  return (
    <div className="flex flex-col items-center w-full mb-2">
      <h2 className="my-3 text-lg">
        Total Question Solved : {questionSolved} ({value}%)
      </h2>
      <div className="progress">
        <div
          className="fill a"
          style={{ width: `${value}%`, "--progress-width": `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar2;
