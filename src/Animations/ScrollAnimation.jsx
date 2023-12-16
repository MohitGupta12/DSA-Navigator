import { motion } from "framer-motion";

const ScrollAnimation = () => {
  return (
    <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-16">
      <div className=" w-8 xl:w-9  h-14 xl:h-16 rounded-3xl border-4 border-scrollAnimation flex justify-center item-start p-2">
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-2 h-2 xl:h-3 xl:w-2 mb-1 bg-scrollAnimation rounded-full"
        />
      </div>
    </div>
  );
};

export default ScrollAnimation;
