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
      <h2 className="mx-1 text-3xl font-semibold text-center ">
        Your DSA Cracking Portal
      </h2>
      {!isStart ? (
        <h2 className="mt-2 text-2xl font-semibold text-center ">
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
      <div className="flex justify-center items-start w-screen h-[76vh] ">
        <QuestionGrid staticData={staticData} isStart={isStart} />
      </div>
    </>
  );
};

export default HomePage;
