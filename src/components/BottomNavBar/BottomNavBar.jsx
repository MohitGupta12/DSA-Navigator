/* eslint-disable no-unused-vars */
import { useLocation,Link } from "react-router-dom";
import useLocalStorage from "../../Hooks/LocalStorage/useLocalStorage"
import {
  MoonIcon as MoonIcon,
  SunIcon as SunIcon,
} from "@heroicons/react/24/outline";
import {Tooltip,Zoom} from "@mui/material"


const BottomNavBar = () => {
    // const location = useLocation();

  const [themeData, setThemeData] = useLocalStorage("themeData",true)
  const themeChange=()=>{
        themeData? document.querySelector("body").setAttribute("data-theme", "dark"):    document.querySelector("body").setAttribute("data-theme", "light");

    setThemeData((prevVal)=>!prevVal);
  }
   
  
  return (
    <div className="h-12 z-[100] bg-navBar flex justify-between items-center absolute bottom-0  w-full">
      <div className="px-4">
        <a
          href="https://github.com/MohitGupta12/Dsa_Tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip TransitionComponent={Zoom} title="Star this project" arrow>
            <button className="px-3 py-1 text-xs md:text-sm xl:text-base font-bold text-[#242424] bg-[#F0FFFF] rounded-3xl  hover:scale-105  transition ease-linear delay-75 ">
              ⭐ This project
            </button>
          </Tooltip>
        </a>
      </div>
      <div className="flex items-center justify-end flex-1 px-4">
          <Tooltip TransitionComponent={Zoom} title="S.E.N.K.U. Coming Soon" arrow>
            <button className=" px-3 py-1 mx-2  font-bold  text-xs md:text-sm xl:text-base  hover:scale-105  transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full ">
              <img
                src="../src/assets/Senku/Guide logo.svg"
                className=" w-5 md:w-[30px] xl:w-[30px]"
                alt=""
              />
            </button>
          </Tooltip>
        <a className="flex items-center justify-center " onClick={() => {}}>
          <Tooltip TransitionComponent={Zoom} title="Change Theme" arrow>
            <button
            onClick={themeChange}
            className=" px-3 py-1 mx-2 font-bold  text-xs md:text-sm xl:text-base  hover:scale-105  transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full  ">
              {themeData?<MoonIcon className="w-[22px]  " />:<SunIcon className="w-[22px]  " />}
            
             </button>
          </Tooltip>

  </a>
   {location.pathname === '/about' ? (
         <Link className="flex items-center justify-center " to={"/"}>
          <button className=" px-3 py-1 mx-2 font-bold  text-xs md:text-sm xl:text-base hover:scale-105  transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full ">
            <span className="inline md:hidden">
            🤔
            </span>
            <span className="hidden md:inline" >Return to Home</span>
          </button>
        </Link>
      ) : (
         <Link className="flex items-center justify-center " to={"about"}>
          <button className=" px-3 py-1 mx-2 font-bold  text-xs md:text-sm xl:text-base hover:scale-105  transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full ">
            <span className="inline md:hidden">
            🤔
            </span>
            <span className="hidden md:inline" >About</span>
          </button>
        </Link>
      )} 
       
      </div>
    </div>
  );
};

export default BottomNavBar;
