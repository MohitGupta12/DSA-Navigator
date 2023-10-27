import React from "react";

const BottomNavBar = () => {
  return (
    <div className="h-12 bg-[#393e46] flex justify-between items-center absolute bottom-0  w-full">
      <div className="w-1/2 px-4">
        <button className="px-3 py-1 text-base font-bold text-[#242424] bg-[#F0FFFF] rounded-3xl  hover:scale-105  transition ease-linear delay-75 ">
          ⭐ This project
        </button>
      </div>
      <div className="flex justify-end w-1/2 px-4">
        <button className=" px-3 py-1 mx-2  font-bold  hover:scale-105  transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full ">
          📓
        </button>
        <button className=" px-3 py-1 mx-2 font-bold  hover:scale-105  transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full ">
          🌙
        </button>
        <button className=" px-3 py-1 mx-2 font-bold  hover:scale-105  transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full ">
          About 🤔
        </button>
      </div>
    </div>
  );
};

export default BottomNavBar;
