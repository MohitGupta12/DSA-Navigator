import React from "react";

const Button = ({ text, clickHandler }) => {
  return (
    <div
      className="relative flex-shrink-0 inline-block text-sm md:text-base group"
      // onClick={clickHandler}
    >
      <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-[#3a8e2d] transition-colors duration-300 ease-out border-2 border-[#3a8e2d] rounded-full group-hover:text-green-100">
        <span className="absolute inset-0 w-full h-full px-4 py-2 rounded-full bg-green-50"></span>

        <span className="absolute left-0 w-48 h-44 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#3a8e2d] group-hover:-rotate-180 ease"></span>

        <span className="relative">{text}</span>
      </span>

      <span
        className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#3a8e2d] rounded-full group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-full"
      ></span>
    </div>
  );
};

export default Button;
