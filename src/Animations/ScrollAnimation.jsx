import React from "react";
import { motion } from "framer-motion";

const ScrollAnimation = () => {
  return (
    <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-16">
      <a>
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#F0FFFF] flex justify-center item-start p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 mb-1 bg-[#F0FFFF] rounded-full"
          />
        </div>
      </a>
    </div>
  );
};

export default ScrollAnimation;
