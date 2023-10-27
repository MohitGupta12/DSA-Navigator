import React, { useMemo, useState } from "react";
import Button2 from "../components/Buttons/Button2";
import StaticData from "../data/data.json";
// import DynamicData from "../data/db_data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import Button3 from "../components/Buttons/Button3";
import { Link, useParams } from "react-router-dom";
import BasicTable from "../components/Table/BasicTable";
import NotesModal from "../Modals/Notes/NotesModal";
import { useSharedDataContext } from "../Hooks/Context/useSharedData";

const QuestionPage = () => {
  const { id } = useParams();
  const sharedContent = useSharedDataContext();
  const DynamicData = sharedContent.sharedData;
  const notesHandler = sharedContent.notesHandler;
  const dynamicData = DynamicData.data[id];
  const staticQuestions = StaticData.data[id].questions;
  const [query, setQuery] = useState("");
  const [dataInModal, setDataInModal] = useState({ text: "", id: 0 });
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const filteredQuestions = useMemo(
    () =>
      staticQuestions.filter((questions) => {
        return questions.Problem.toLowerCase().includes(query.toLowerCase());
      }),
    [query, staticQuestions]
  );
  const openModal = (text, id, index) => {
    setIsNotesOpen(true);
    setDataInModal({ text: text, id: id, index: index });
  };

  const pickRandom = (staticData, dynamicData) => {
    const array = staticData.questions;
    const confirmArray = dynamicData.questions;

    const randomIndex = Math.floor(Math.random() * array.length);
    let randomURL = array[randomIndex].URL;
    if (randomURL === "") {
      randomURL = array[randomIndex].URL2;
    }

    if (confirmArray[randomIndex].Done) {
      pickRandom(array, confirmArray);
    } else {
      window.open(randomURL, "_blank");
    }
  };

  return (
    <>
      <NotesModal
        isNotesOpen={isNotesOpen}
        data={dataInModal}
        onClose={() => {
          setIsNotesOpen(false);
        }}
        updateHandler={notesHandler}
      />
      <h2 className="mx-1 text-3xl font-semibold text-center ">
        <Link to={"/"} className="text-blue-400 hover:underline">
          Topics
        </Link>
        /{dynamicData.topicName}
      </h2>
      <div className="flex justify-center w-full h-10 my-4 ">
        <div className="flex w-3/5 focus:ring-2 focus:ring-primary">
          <Button2
            text={"Pick Random"}
            color="#007bff"
            onClickHandler={() => pickRandom(staticData, dynamicData)}
          />
          <input
            className="flex-1 bg-white text-[#242424] px-4 py-2 border-2 placeholder-center  font-semibold text-lg text-center "
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Question.. 🔍"
          ></input>
          <div className="bg-[#c8e6c9] rounded-r-[4px] text-lg px-[12px] py-[6px] text-[#242424] items-center flex">
            <span className="font-semibold">
              {dynamicData.doneQuestions}/{dynamicData.questions.length}
            </span>
            &#160;Done
            <span className="p-2">
              <FontAwesomeIcon
                icon={faSquareCheck}
                style={{ color: "#00d26a" }}
              />
            </span>
          </div>
        </div>
        <Button3 text={"🏷️"} />
      </div>
      <div className="flex items-center justify-center w-full">
        <BasicTable
          id={id}
          staticQuestion={filteredQuestions}
          openModal={openModal}
        />
      </div>
    </>
  );
};

export default QuestionPage;
