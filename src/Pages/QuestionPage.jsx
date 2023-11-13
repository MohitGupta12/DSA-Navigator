import { useMemo, useState } from "react";
import Button2 from "../components/Buttons/Button2";
import StaticData from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import BasicTable from "../components/Table/BasicTable";
import NotesModal from "../Modals/Notes/NotesModal";
import { useSharedDataContext } from "../Hooks/Context/useSharedData";

const QuestionPage = () => {
  const { id } = useParams();
  const sharedContent = useSharedDataContext();
  const dynamicData = sharedContent.sharedData.data[id];
  const notesHandler = sharedContent.notesHandler;

  const [query, setQuery] = useState("");
  const [dataInModal, setDataInModal] = useState({ text: "", id: 0 });
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isBookmarkActive, setIsBookmarkActive] = useState(false);

  // Sorting function for static questions
  const sortStaticQuestions = (questions) => {
    return [...questions].sort((a, b) => {
      const idA = a.id - 1;
      const idB = b.id - 1;
      const doneA = dynamicData.questions[idA].Done;
      const doneB = dynamicData.questions[idB].Done;

      if (doneA === doneB) {
        return a.id - b.id;
      } else if (doneA) {
        return 1;
      } else {
        return -1;
      }
    });
  };

   const pickRandom = (staticData, dynamicData) => {
    const randomIndex = Math.floor(Math.random() * staticData.length);
    let randomURL = staticData[randomIndex].URL;
    if (randomURL === "") {
      randomURL = staticData[randomIndex].URL2;
    }

    if (dynamicData[randomIndex].Done) {
      pickRandom(staticData, dynamicData);
    } else {
      window.open(randomURL, "_blank");
    }
   };

  const [sortedStaticQuestion, setSortedStaticQuestion] = useState(() => {
    return sortStaticQuestions(StaticData.data[id].questions);
  });

  // Filter questions based on the search query
  const filteredQuestions = useMemo(() => {
    return sortedStaticQuestion.filter((question) =>
      question.Problem.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedStaticQuestion]);

  const bookmarkSortingFunction = (QuestionList) => {
    const bookmarked = [];
    const notBookmarked = [];

    QuestionList.map((question) => {
      const id = question.id - 1;
      if (dynamicData.questions[id].Bookmark) {
        bookmarked.push(question);
      } else {
        notBookmarked.push(question);
      }
    });
    bookmarked.sort((a, b) => {
      const idA = a.id - 1;
      const idB = b.id - 1;
      const doneA = dynamicData.questions[idA].Done;
      const doneB = dynamicData.questions[idB].Done;

      if (doneA === doneB) {
        return a.id - b.id;
      } else if (doneA) {
        return 1;
      } else {
        return -1;
      }
    });
    notBookmarked.sort((a, b) => {
      const idA = a.id - 1;
      const idB = b.id - 1;
      const doneA = dynamicData.questions[idA].Done;
      const doneB = dynamicData.questions[idB].Done;

      if (doneA === doneB) {
        return a.id - b.id;
      } else if (doneA) {
        return 1;
      } else {
        return -1;
      }
    });

    return [...bookmarked, ...notBookmarked];
  };
  const bookmarkedQuestion = bookmarkSortingFunction(filteredQuestions);

  const sortingFunction = () => {
    setSortedStaticQuestion(sortStaticQuestions(sortedStaticQuestion));
  };

  const openModal = (text, id, index) => {
    setIsNotesOpen(true);
    setDataInModal({ text, id, index });
  };

  const bookmarkHandler = () => {
    setIsBookmarkActive((prevValue) => !prevValue);
  };

  const bookmarkBtnStyle = isBookmarkActive
    ? "inline-flex items-center justify-center w-fit py-3 xl:py-5 px-2 xl:px-3 ml-6 text-sm xl:text-lg text-white bg-green-600 rounded-[4px] scale-110  transition-all duration-200 ease-in-out"
    : "inline-flex items-center justify-center w-fit py-3 xl:py-5 px-2 xl:px-3 ml-6 text-sm xl:text-lg text-white bg-green-500 rounded-[4px] scale-100 transition-all duration-200 ease-in-out";

  return (
    <>
      <NotesModal
        isNotesOpen={isNotesOpen}
        data={dataInModal}
        onClose={() => setIsNotesOpen(false)}
        updateHandler={notesHandler}
      />
      <h2 className="mx-1 text-xl font-semibold text-center md:text-2xl xl:text-3xl " style={{"textShadow": "0px 0px 8px rgba(255,255,255,0.65)"}}>
        <Link to={"/"} className="text-blue-400 hover:underline" style={{"textShadow": "0px 0px 8px rgba(96,165,250,0.65)"}}>
          Topics
        </Link>
        /{dynamicData.topicName}
      </h2>
      <div className="flex justify-center w-full h-8 my-4 md:h-9 xl:h-10 ">
        <div className="flex w-3/4 focus:ring-2 focus:ring-primary">
          <Button2
            text={"Pick Random"}
            onClickHandler={() =>
              pickRandom(StaticData.data[id].questions, dynamicData.questions)
            }
          />
          <input
            className="flex-1 bg-white text-[#242424] px-2 py-2 border-2 placeholder-center  font-semibold text-sm md:text-base  xl:text-lg text-center "
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Question.. 🔍"
          />
          <div className="bg-[#c8e6c9] rounded-r-[4px] text-sm md:text-base  xl:text-lg px-[12px] py-[6px] text-[#242424] items-center flex w-fit "  
          style={{"textShadow": "0px 0px 10px rgba(0,210,106,0.65)"}}
          >
            <span className="font-semibold text-green-900">
              {dynamicData.doneQuestions}/{dynamicData.questions.length}{" "}
              <span className="hidden md:inline">&#160;Done</span>
            </span>
            <span className="p-2">
              <FontAwesomeIcon
                icon={faSquareCheck}
                style={{ color: "#00D26A" }}
              />
            </span>
          </div>
        </div>
        <button className={bookmarkBtnStyle} onClick={bookmarkHandler}>
          🏷️
        </button>
      </div>
      <div className="flex items-center justify-center w-full ">
        <BasicTable
          id={id}
          staticQuestion={
            isBookmarkActive ? bookmarkedQuestion : filteredQuestions
          }
          openModal={openModal}
          isBookmarkActive={isBookmarkActive}
          sortingFunction={sortingFunction}
        />
      </div>
    </>
  );
};

export default QuestionPage;
