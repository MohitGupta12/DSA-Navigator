import React, { useState } from "react";
import Button from "../Buttons/Button";
import ProgressBar from "../ProgressBars/ProgressBar";
import { Link } from "react-router-dom";

const TopicCard = ({ staticData, dynamicData, index }) => {
  const percentage = (
    (dynamicData.data[index].doneQuestions /
      dynamicData.data[index].questions.length) *
    100
  ).toFixed(0);
  return (
    <div className="h-48 px-6 py-4 bg-blue-300 border-2 border-blue-400 rounded-2xl ">
      <div className="flex-col justify-evenly items-start text-[#232324] ">
        <title className="flex items-start justify-between my-2">
          <div className="pr-5 text-3xl font-bold text-start ">
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
              clickHandler={() => {
                console.log("button clicked");
              }}
            />
          </Link>
        </title>
        <div className="pr-5 font-medium text-start">
          Total Questions {dynamicData.data[index].questions.length}
        </div>

        {dynamicData.data[index].started ? (
          <div>
            <div className="pr-5 italic font-medium text-start">
              {dynamicData.data[index].questions.length -
                dynamicData.data[index].doneQuestions}{" "}
              more to go
            </div>
            <div className="pr-5 mt-3 italic font-medium text-start">
              {percentage}% done
            </div>
            <ProgressBar value={percentage} height={15} width={100} />
          </div>
        ) : (
          <div className="pr-5 mt-6 text-lg italic font-medium text-start">
            not started
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicCard;
