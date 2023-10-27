import React from "react";

const Button3 = ({ text }) => {
  return (
    <a
      className="inline-flex items-center justify-center w-full py-5 px-3 ml-6 text-lg text-white bg-green-600 rounded-[4px] hover:bg-green-500 sm:w-auto sm:mb-0"
      data-primary="green-400"
      data-rounded="rounded-2xl"
      data-primary-reset="{}"
    >
      {text}
    </a>
  );
};

export default Button3;
