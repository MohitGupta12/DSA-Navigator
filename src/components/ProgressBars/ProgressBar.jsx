import React from "react";

const ProgressBar = ({ value, height, width }) => {
  const [style, setStyle] = React.useState({});
  const [barStyle, setBarStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${value}%`,
    };
    const newBarStyle = { width: `${width}%`, height: `${height}px` };

    setStyle(newStyle);
    setBarStyle(newBarStyle);
  }, 1000);

  return (
    <div className=" bg-[#d8d8d8] rounded-lg w-3/5 h-6 " style={barStyle}>
      <div
        className=" rounded-lg bg-gradient-to-r from-[#74D680] to-[#378B29]   text-white flex items-center justify-center h-full opacity-0 transition-opacity-1000-ease-300"
        style={style}
      ></div>
    </div>
  );
};

export default ProgressBar;
