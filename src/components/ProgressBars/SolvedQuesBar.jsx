/* eslint-disable react/prop-types */

import ProgressBar from "./ProgressBar";

const SolvedQuesBar = ({ value, questionSolved }) => {
  return (
    <div className="flex flex-col items-center w-full mb-2">
      <h2 className="my-3 text-lg" style={{"textShadow": "0px 0px 8px rgba(255,255,255,0.65)"}}>
        Total Question Solved : {questionSolved} ({value}%)
      </h2>
      <ProgressBar value={value} questionSolved={questionSolved} />
    </div>
  );
};

export default SolvedQuesBar;
