/* eslint-disable react/prop-types */

const Button = ({ isStarted, text }) => {

  let style1,style2,style3;
 
if(isStarted){
 style3 ="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#3a8e2d] rounded-full group-hover:mb-0 group-hover:mr-0"
   style2 ="absolute left-0 w-48 h-44 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#3a8e2d] group-hover:-rotate-180 ease"
   style1= "relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-[#3a8e2d] transition-colors duration-300 ease-out border-2 border-[#3a8e2d] rounded-full group-hover:text-green-100"
}else{
 style3 ="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#2d3a8e] rounded-full group-hover:mb-0 group-hover:mr-0"
   style2 ="absolute left-0 w-48 h-44 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#2d3a8e] group-hover:-rotate-180 ease"
   style1= "relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-[#2d3a8e] transition-colors duration-300 ease-out border-2 border-[#2d3a8e] rounded-full group-hover:text-blue-100"
}
  
  return (
    <div
      className="relative flex-shrink-0 inline-block text-sm md:text-base group">
      <span className={style1}>
        <span className={`absolute inset-0 w-full h-full px-4 py-2 rounded-full bg-blue-50`}></span>

        <span className={style2}></span>

        <span className="relative">{text}</span>
      </span>

      <span
        className={style3}
        data-rounded="rounded-full"
      ></span>
    </div>
  );
};

export default Button;
