/* eslint-disable no-unused-vars */
import { useLocation, Link } from "react-router-dom";
import useLocalStorage from "../../Hooks/LocalStorage/useLocalStorage";
import {
  MoonIcon as MoonIcon,
  SunIcon as SunIcon,
} from "@heroicons/react/24/outline";
import { Tooltip, Zoom } from "@mui/material";
import "./BottomNavBar.css";
const BottomNavBar = () => {
  // const location = useLocation();

  const [themeData, setThemeData] = useLocalStorage("themeData", true);
  const themeChange = () => {
    themeData
      ? document.querySelector("body").setAttribute("data-theme", "dark")
      : document.querySelector("body").setAttribute("data-theme", "light");

    setThemeData((prevVal) => !prevVal);
  };

  return (
    <div className="bottom-nav bg-navBar">
      <div className="px-4">
        <a
          href="https://github.com/MohitGupta12/Dsa_Tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip TransitionComponent={Zoom} title="Star this project" arrow>
            <button
              className="px-3 py-1 text-xs md:text-sm xl:text-base font-bold text-[#242424] bg-[#F0FFFF] rounded-3xl  hover:scale-105  transition ease-linear delay-75 "
              aria-label="Star this project"
            >
              ⭐ This project
            </button>
          </Tooltip>
        </a>
      </div>
      <div className="flex items-center justify-end flex-1 px-4">
        <Tooltip
          TransitionComponent={Zoom}
          title="S.E.N.K.U. Coming Soon"
          arrow
        >
          <button
            className="px-3 py-1 mx-2 font-bold text-xs md:text-sm xl:text-base hover:scale-105 transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full"
            aria-label="S.E.N.K.U. Coming Soon"
          >
            <div className=" flex justify-center items-center w-5 md:w-[30px] xl:w-[30px]">
              <svg
                width="30"
                height="24"
                viewBox="0 0 506 358"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 179C3 81.7979 81.7979 3 179 3H327C424.202 3 503 81.7979 503 179V214C503 291.872 439.872 355 362 355H144C66.1279 355 3 291.872 3 214V179Z"
                  fill="url(#paint0_linear_101_159)"
                  stroke="#095679"
                  strokeWidth="6"
                />
                <path
                  d="M3 179C3 81.7979 81.7979 3 179 3H327C424.202 3 503 81.7979 503 179V194C503 271.872 439.872 335 362 335H144C66.1279 335 3 271.872 3 194V179Z"
                  fill="url(#paint1_linear_101_159)"
                  stroke="#095679"
                  strokeWidth="3"
                />
                <path
                  d="M39.2174 166C39.2174 93.0984 98.3158 34 171.217 34H332.256C403.772 34 462.281 90.9535 464.208 162.444L465.274 202C465.274 202 464.771 236 426.038 270C387.306 304 344.046 298 344.046 298C344.046 298 342.537 253.5 250.485 255C158.433 256.5 154.912 298 154.912 298C154.912 298 114.67 302 76.4407 270C38.2113 238 39.2174 202 39.2174 202V166Z"
                  fill="#0F3035"
                  stroke="#095679"
                  strokeWidth="4"
                />
                <g filter="url(#filter0_f_101_159)">
                  <path
                    d="M328.746 302.5C328.746 320.725 292.833 320 249.772 320C206.712 320 169.289 320.725 169.289 302.5C169.289 284.275 206.712 265 249.772 265C292.833 265 328.746 284.275 328.746 302.5Z"
                    fill="#1FD0BB"
                  />
                </g>
                <path
                  d="M141.833 172.5C164.331 172.5 182.574 154.37 182.574 132C182.574 109.63 164.331 91.5 141.833 91.5C119.335 91.5 101.092 109.63 101.092 132C101.092 154.37 119.335 172.5 141.833 172.5Z"
                  fill="#1FD0BB"
                  stroke="#696969"
                />
                <rect
                  x="208.737"
                  y="150.5"
                  width="83.495"
                  height="86"
                  rx="10.5"
                  fill="#6E3232"
                  stroke="#696969"
                />
                <rect
                  x="94.0493"
                  y="178.5"
                  width="95.5674"
                  height="44"
                  rx="10.5"
                  fill="#4F472E"
                  stroke="#696969"
                />
                <rect
                  x="314.371"
                  y="165.5"
                  width="95.5674"
                  height="44"
                  rx="10.5"
                  fill="#177B70"
                  stroke="#696969"
                />
                <rect
                  x="314.371"
                  y="140.5"
                  width="95.5674"
                  height="19"
                  rx="9.5"
                  fill="#452C3B"
                  stroke="#696969"
                />
                <rect
                  x="314.371"
                  y="112.5"
                  width="95.5674"
                  height="22"
                  rx="10.5"
                  fill="#154D69"
                  stroke="#696969"
                />
                <rect
                  x="313.365"
                  y="215.5"
                  width="95.5674"
                  height="33"
                  rx="10.5"
                  fill="#5C4133"
                  stroke="#696969"
                />
                <rect
                  x="94.0493"
                  y="229.5"
                  width="95.5674"
                  height="19"
                  rx="9.5"
                  fill="#095369"
                  stroke="#696969"
                />
                <path
                  d="M458.231 133.5C452.698 110.5 440.385 93.5271 436.125 88.1143C442.668 100.331 442.876 166.425 436.099 195.5C429.321 224.575 422.15 233.822 405.918 256C393.932 272.376 370.706 294 366.179 295.5C389.466 291.606 401.795 285.377 423.02 270C433.43 260.565 439.277 255.122 450.183 239C457.515 227.058 460.939 219.708 462.759 202.5C463.168 200.713 463.765 156.5 458.231 133.5Z"
                  fill="#9DDBE9"
                  fillOpacity="0.28"
                />
                <path
                  d="M39.2174 167.28V202C39.2174 202 38.2113 238 76.4407 270C76.4407 270 71.9135 232 94.0463 196C116.082 160.157 156.069 126.586 167.34 117.123L167.487 117C178.553 107.709 239.922 72 266.079 61.5C292.235 51 350.083 37 350.083 37L172.491 35.2862C99.095 34.5778 39.2174 93.8805 39.2174 167.28Z"
                  fill="#9DDBE9"
                  fillOpacity="0.28"
                />
                <defs>
                  <filter
                    id="filter0_f_101_159"
                    x="161.289"
                    y="257"
                    width="175.457"
                    height="71.0039"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="4"
                      result="effect1_foregroundBlur_101_159"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_101_159"
                    x1="446.662"
                    y1="327"
                    x2="59.8822"
                    y2="53.3094"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#52A7C0" />
                    <stop offset="1" stopColor="#0E5064" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_101_159"
                    x1="456.722"
                    y1="294.5"
                    x2="52.1104"
                    y2="46.8375"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.473958" stopColor="#83C1CE" />
                    <stop offset="1" stopColor="#90C8D3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>
        </Tooltip>
        <a className="flex items-center justify-center " onClick={() => {}}>
          <Tooltip TransitionComponent={Zoom} title="Change Theme" arrow>
            <button
              onClick={themeChange}
              className="px-3 py-1 mx-2 font-bold text-xs md:text-sm xl:text-base hover:scale-105 transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full"
              aria-label="Change Theme"
            >
              {themeData ? (
                <MoonIcon className="w-[22px]" />
              ) : (
                <SunIcon className="w-[22px]" />
              )}
            </button>
          </Tooltip>
        </a>
        {location.pathname === "/about" ? (
          <Link className="flex items-center justify-center " to={"/"}>
            <button
              className="px-3 py-1 mx-2 font-bold text-xs md:text-sm xl:text-base hover:scale-105 transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full"
              aria-label="Return to Home"
            >
              <span className="inline md:hidden">🤔</span>
              <span className="about-tag">Return to Home</span>
            </button>
          </Link>
        ) : (
          <Link className="flex items-center justify-center " to={"about"}>
            <button
              className="px-3 py-1 mx-2 font-bold text-xs md:text-sm xl:text-base hover:scale-105 transition ease-linear delay-75 text-[#242424] bg-[#F0FFFF] rounded-full"
              aria-label="About"
            >
              <span className="inline md:hidden">🤔</span>
              <span className="about-tag">About</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BottomNavBar;
