/* eslint-disable react/prop-types */
import {Tooltip,Zoom} from "@mui/material"
const Button2 = ({ text, onClickHandler }) => {
  return (
    <>
    <Tooltip TransitionComponent={Zoom} title="Pick a random question" arrow placement="right">
       <a  className="px-5 py-2.5 relative rounded-l-md cursor-pointer group overflow-hidden font-medium bg-tableHeaderColor text-blue-50 inline-block"
       onClick={onClickHandler}>
       <span className="absolute top-0 right-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-50 group-hover:h-full opacity-90"></span>
       <span className="relative top-[-10%]  group-hover:text-tableHeaderColor ">{text}</span>
       </a>
     </Tooltip>
    </>
  );
};

export default Button2;
