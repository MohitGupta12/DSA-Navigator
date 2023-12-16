/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./progressBar.css";

const ProgressBar = ({ questionSolved, value, height, width }) => {
  const [barStyle, setBarStyle] = React.useState({
    width: `${width}%`,
    height: `${height}px`,
  });

  return (
    <div className="progress  border-[0rem] border-progressBarBorder" style={barStyle}>
      <div
        className="fill a bg-progressBar"
        style={{ width: `${value}%`, "--progress-width": `${value}%` }}
      ></div>
    </div>
    
  );
};

export default ProgressBar;
