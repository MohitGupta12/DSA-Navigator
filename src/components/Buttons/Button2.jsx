/* eslint-disable react/prop-types */
const Button2 = ({ text, onClickHandler }) => {
  return (
    <>
     <a  className="px-5 py-2.5 relative rounded-l-md cursor-pointer group overflow-hidden font-medium bg-blue-50 text-blue-600 inline-block"
     onClick={onClickHandler}>
<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
<span className="relative top-[-10%] group-hover:text-white">{text}</span>
</a>
    </>
  );
};

export default Button2;
