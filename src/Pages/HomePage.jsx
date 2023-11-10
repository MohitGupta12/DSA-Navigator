/* eslint-disable no-unused-vars */
import { React, useEffect, useRef, useState } from "react";
import SolvedQuesBar from "../components/ProgressBars/SolvedQuesBar";
import ScrollAnimation from "../Animations/ScrollAnimation";
import QuestionGrid from "../components/QuestionGrid/QuestionGrid";
import StaticData from "../data/data.json";
import { useSharedDataContext } from "../Hooks/Context/useSharedData";

const HomePage = () => {
  let totalDoneQuestion = 0;
  const sharedContent = useSharedDataContext();
  const dynamicData = sharedContent.sharedData.data;
  dynamicData.map((data) => {
    totalDoneQuestion += data.doneQuestions;
  });
  const [isStart, setIsStart] = useState(totalDoneQuestion ? true : false);
  const staticData = StaticData;
  const gridRef = useRef(null);

  useEffect(() => {
    gridRef.current = document.getElementById("gridContainer");
  }, []);

  const totalPercentage = ((totalDoneQuestion / 450) * 100).toFixed(2);
  return (
    <>
      <h2 className="mx-1 text-xl font-semibold text-center md:text-2xl xl:text-3xl  " style={{"textShadow": "0px 0px 8px rgba(255,255,255,0.65)"}}>
        Your DSA Cracking Portal
      </h2>
      {!isStart ? (
        <h2 className="mt-2 text-lg font-semibold text-center md:text-xl xl:text-2xl " style={{"textShadow": "0px 0px 8px rgba(255,255,255,0.65)"}}>
          {" "}
          Start Solving{" "}
        </h2>
      ) : (
        <SolvedQuesBar
          value={totalPercentage}
          questionSolved={totalDoneQuestion}
        />
        
      )}
      <ScrollAnimation />
      <div className="flex items-start justify-center w-screen ">
        <QuestionGrid staticData={staticData} isStart={isStart} />
      </div>
    </>
  );
};

export default HomePage;
