/* eslint-disable react/prop-types */
import Button from "../Buttons/Button";
import ProgressBar from "../ProgressBars/ProgressBar";
import { Link } from "react-router-dom";

const TopicCard = ({ staticData, dynamicData, index }) => {
  const percentage = (
    (dynamicData.data[index].doneQuestions /
      dynamicData.data[index].questions.length) *
    100
  ).toFixed(0);
  const lap1 =  !dynamicData.data[index].started?"h-48 px-6 py-4 bg-[#9CEAEE] border-2 border-[#3bc0c7] rounded-2xl shadow-md shadow-[#a8edf066]":"h-48 px-6 py-4 bg-[#96E8C3] border-2 border-[#3dc588] rounded-2xl shadow-md shadow-[#a8f0d066]";
  // console.log(bgColor);
  return (
    <div className={lap1}>
    {/* <div className={`h-48 px-6 py-4 bg-[#a8f0d0] border-2 border-[#3dc588] rounded-2xl shadow-md shadow-[#a8f0d066]`}>  */}
      <div className="flex-col justify-evenly items-start text-[#232324] ">
        <title className="flex items-start justify-between my-2">
          <div className="pr-5 text-2xl font-bold xl:text-3xl text-start ">
            {staticData.data[index].topicName}
          </div>
          <Link
            className="flex-shrink-0"
            key={index}
            to={`/questions/${index}`}
          >
            <Button 
              text={
                dynamicData.data[index].started ? "Solve Now" : "Start  Now"
              }
              isStarted={dynamicData.data[index].started }
              clickHandler={() => {
                console.log("button clicked");
              }}
            />
          </Link>
        </title>
        <div className="pr-5 text-sm font-normal md:text-base text-start">
          Total Questions {dynamicData.data[index].questions.length}
        </div>

        {dynamicData.data[index].started ? (
          <div>
            <div className="pr-5 text-sm italic font-normal md:text-base text-start">
              {dynamicData.data[index].questions.length -
                dynamicData.data[index].doneQuestions}{" "}
              more to go
            </div>
            <div className="pr-5 mt-3 text-sm italic font-normal md:text-base text-start">
              {percentage}% done
            </div>
            <ProgressBar value={percentage} height={15} width={100} />
          </div>
        ) : (
          <div className="pr-5 mt-6 text-base italic font-normal md:text-lg text-start">
            not started
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicCard;
