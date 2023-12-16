
import CustomAlert from "../components/CustomAlert/CustomAlert";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import {Tooltip,Zoom} from "@mui/material"
import { useSharedDataContext } from "../Hooks/Context/useSharedData";


const AboutPage = () => {
  
  const sharedContent = useSharedDataContext();    
const resetData = ()=>{
    sharedContent.resetData()
}
  const handleReset = () => {
    CustomAlert(resetData)
  };

  return (<>
    <AnimatedPage>
      
      <div className="flex flex-col items-center justify-center my-12">
        <div className="w-4/5 border-2 border-aboutBorder ">
          <h2 className="mx-8 my-4 text-4xl font-semibold text-center">About</h2>{" "}
          <hr className="border-aboutBorder" />
          <div className="px-16 mx-4 my-4 text-2xl leading-10 text-center ">
            DSA Tracker empowers you to sharpen your problem-solving skills,
            tackle coding challenges, and prepare with confidence for your job
            placements.
            <br />
            We have Senku, a robotic guide designed to assist you as you navigate
            our site. <br />
            Our platform acts as a central hub for monitoring your journey in
            developing essential DSA skills, allowing you to monitor your progress
            and mastery of this crucial skill set
          </div>
        </div>
        <h3 className="mx-8 my-4 mt-6 text-4xl font-semibold text-center">
          Credits
        </h3>
        <div className="px-16 mx-4 mt-2 text-2xl text-center">
          DSA tracker was inspired by{" "}
          <a
            href="https://450dsa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-400 hover:underline "
          >
            450DSA
          </a>{" "}
          and based on{" "}
          <a
            href="https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-400 hover:underline "
          >
            DSA Cracker Sheet
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/love-babbar-38ab2887/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-400 hover:underline "
          >
            {" "}
            Love Babbar
          </a>
        </div>
        <div className="mx-8 mb-6 text-2xl text-center">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/mohit-gupta-a8ab6b1b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-400 hover:underline "
          >
            Mohit
          </a>
        </div>
        <div className="flex items-center w-1/2 m-8 justify-evenly">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" bg-red-400 px-3 py-1  font-bold text-[#242424] text-lg rounded-xl "
            onClick={() => handleReset()}
          >
            Reset your progress
          </motion.button>
          <a
            href="https://github.com/MohitGupta12/Dsa_Tracker/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-3 py-1 text-lg font-bold text-[#242424] bg-green-400 rounded-xl "
            >
              Contribute to Project
            </motion.button>
          </a>
        </div>
          <Tooltip TransitionComponent={Zoom} title="Coming Soon" arrow placement="top-start">
          <div className=" fixed right-2 bottom-10 h-[300px] w-[300px]">
            <img src="../src/assets/Senku/senku_about.svg" alt="about senku" />
          </div>
        </Tooltip>
      </div>
    </AnimatedPage>
 
 </> );
};

export default AboutPage;
