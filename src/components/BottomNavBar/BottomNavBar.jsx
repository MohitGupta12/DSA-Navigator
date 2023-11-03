import React from "react";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  return (
    <div className="h-12 z-[100] bg-[#393e46] flex justify-between items-center absolute bottom-0  w-full">
      <div className="px-4">
        <a
          href="https://github.com/MohitGupta12/Dsa_Tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-3 py-1 text-xs md:text-sm xl:text-base font-bold text-[#242424] bg-[#F0FFFF] rounded-3xl  hover:scale-105  transition ease-linear delay-75 ">
            ⭐ This project
          </button>
        </a>
      </div>
      <div className="flex items-center justify-end flex-1 px-4">
        <Link to={"guides"} className="flex items-center justify-center ">
          <button className=" px-3 py-1 mx-2  font-bold  text-xs md:text-sm xl:text-base  hover:scale-105  transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full ">
            <img
              src="../src/assets/Senku/Guide logo.svg"
              className=" w-5 md:w-[30px] xl:w-[30px]"
              alt=""
            />
          </button>
        </Link>
        <a className="flex items-center justify-center " onClick={() => {}}>
          <button className=" px-3 py-1 mx-2 font-bold  text-xs md:text-sm xl:text-base  hover:scale-105  transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full ">
            🌙
          </button>
        </a>
        <Link className="flex items-center justify-center " to={"about"}>
          <button className=" px-3 py-1 mx-2 font-bold  text-xs md:text-sm xl:text-base hover:scale-105  transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full ">
            <span className="hidden md:inline">About</span>
            🤔
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;
