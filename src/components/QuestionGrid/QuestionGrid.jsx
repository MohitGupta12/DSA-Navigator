import { useSharedDataContext } from "../../Hooks/Context/useSharedData";
import TopicCard from "../TopicCard/TopicCard";

import React from "react";

const QuestionGrid = ({ staticData, isStart }) => {
  const itemsToRender = new Array(15).fill(null);
  const sharedContent = useSharedDataContext();
  const dynamicData = sharedContent.sharedData;

  let newStyle = "";
  {
    isStart
      ? (newStyle =
          "grid w-4/5 h-[69vh] grid-cols-3 gap-8 px-8  pb-8 mt-4 overflow-y-auto")
      : (newStyle =
          "grid w-4/5 h-[74vh] grid-cols-3 gap-8 px-8  pb-8 mt-4 overflow-y-auto");
  }
  return (
    <div className="flex items-start justify-center flex-1 w-4/5 ">
      <div className={newStyle}>
        {itemsToRender.map((_, index) => (
          <TopicCard
            key={index}
            index={index}
            staticData={staticData}
            dynamicData={dynamicData}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default QuestionGrid;
