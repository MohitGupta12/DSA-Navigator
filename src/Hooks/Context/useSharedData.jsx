/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import DynamicData from "../../data/db_data.json";
import useLocalStorage from "../LocalStorage/useLocalStorage";
import { toast } from 'sonner'


const SharedDataContext = createContext();

export const SharedDataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useLocalStorage(
    "dynamicData",
    DynamicData
  );


  const resetData = () => {
    setSharedData(DynamicData);
  };
  const bookmarkHandler = (id, index) => {
    const updatedData = { ...sharedData };
    const question = updatedData.data[id].questions[index];
    question.Bookmark = !question.Bookmark;
    setSharedData(updatedData);
  };
  const notesHandler = (id, index) => {
    const updatedData = { ...sharedData };
    const question = updatedData.data[id].questions[index];
    question.Notes = !(question.NotesData === "");
    setSharedData(updatedData);
  };
  const notesDataHandler = (id, index, notesData) => {
    const updatedData = { ...sharedData };
    const question = updatedData.data[id].questions[index];
    question.NotesData = notesData;
    setSharedData(updatedData);
  };

  const questionCounter = (questionsList) => {
    let solvedQuestion = 0;
    questionsList.map((question) => {
      if (question.Done) {
        solvedQuestion += 1;
      }
    });
    return solvedQuestion;
  };
  const statusHandler = (id, index) => {
    const updatedData = { ...sharedData };
    const topic = updatedData.data[id];
    
    const question = topic.questions[index];

    if(!question.Done){
      toast.success(<div>
        <div className=" text-lg font-bold text-green-800">Done {topic.doneQuestions+1}/{topic.questions.length}</div> 
        <div className="font-semibold">Question no.{index+1} is pushed down in table</div>
        </div>)
    }else{
      toast.error(<div>
        <div className=" text-lg font-bold text-red-800">Done {topic.doneQuestions-1}/{topic.questions.length}</div> 
        <div className="font-semibold">Question no.{index+1} is pushed up in table</div>
        </div>)
    }

    question.Done = !question.Done;

    topic.doneQuestions = questionCounter(topic.questions);

    topic.started = topic.doneQuestions ? true : false;

    setSharedData(updatedData);
  };

  const statusSorter = (id, array) => {
    const nonCompleted = [];
    const completed = [];
    const Data = sharedData.data[id].questions;

    Data.forEach((item, index) => {
      if (item.Done) {
        completed.push(array[index]);
      } else {
        nonCompleted.push(array[index]);
      }
    });

    const sortedArray = [...nonCompleted, ...completed];

    return sortedArray;
  };

  return (
    <SharedDataContext.Provider
      value={{
        sharedData,
        bookmarkHandler,
        statusHandler,
        notesHandler,
        notesDataHandler,
        statusSorter,
        resetData,
      }}
    >
      {children}
    </SharedDataContext.Provider>
  );
};

export const useSharedDataContext = () => {
  return useContext(SharedDataContext);
};
