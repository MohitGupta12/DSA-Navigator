import React from "react";
import "./progressBar.css";

const ProgressBar = ({ questionSolved, value, height, width }) => {
  const [barStyle, setBarStyle] = React.useState({
    width: `${width}%`,
    height: `${height}px`,
  });

  // const newBarStyle = ;
  // setBarStyle(newBarStyle);
  // setTimeout(() => {
  //   const newStyle = {
  //     opacity: 1,
  //     width: `${value}%`,
  //   };

  //   setStyle(newStyle);
  // }, 1000);

  return (
    <div className="progress" style={barStyle}>
      <div
        className="fill a"
        style={{ width: `${value}%`, "--progress-width": `${value}%` }}
      ></div>
    </div>
    // <div className=" bg-[#d8d8d8] rounded-lg w-3/5 h-6 " style={barStyle}>
    //   <div
    //     className=" rounded-lg bg-gradient-to-r from-[#74D680] to-[#378B29]   text-white flex items-center justify-center h-full opacity-0 transition-opacity-1000-ease-300"
    //     // style={style}
    //   ></div>
    // </div>
  );
};

export default ProgressBar;
