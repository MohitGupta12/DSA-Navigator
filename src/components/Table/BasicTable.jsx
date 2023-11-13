/* eslint-disable react/prop-types */
import {
  BookmarkIcon as SolidBookmarkIcon,
  PencilSquareIcon as SolidPencilSquareIcon,
} from "@heroicons/react/24/solid";
import {
  BookmarkIcon as OutlineBookmarkIcon,
  PencilSquareIcon as OutlinePencilSquareIcon,
} from "@heroicons/react/24/outline";
import { useSharedDataContext } from "../../Hooks/Context/useSharedData";



function gettingLogo(url) {
  let src;
  if (url.includes("geeksforgeeks")) {
    src = "../src/assets/gfg.png";
  } else if (url.includes("codingninjas")) {
    src = "../src/assets/coding ninjas.png";
  } else if (url.includes("leetcode")) {
    src = "../src/assets/leetcode.png";
  } else {
    if (!url) {
      src = "../src/assets/empty.png";
    } else {
      src = "../src/assets/article.png";
    }
  }
  return src;
}

const BasicTable = ({ id, staticQuestion, openModal, sortingFunction }) => {
  const sharedContent = useSharedDataContext();
  const dynamicData = sharedContent.sharedData.data[id].questions;

  const handleBookmarkChange = (id, index) => {
    sharedContent.bookmarkHandler(id, index);
  };
  const handleStatusChange = (id, index) => {
    sharedContent.statusHandler(id, index);
    sortingFunction();
  };

  return (
    <>
      <div className="w-4/5 h-[72vh] overflow-auto " style ={{'boxShadow': '0px 8px 20px 6px rgba(0,0,0,0.3)'}}>
        <table className="w-full ">
          <thead className="sticky top-0 bg-gray-700 border-b-2 z-10 border-gray-400 rounded-t-lg " >
            <tr>
              <th className="  sticky top-0 p-3 text-[20px] font-bold tracking-wide ">
                Status
              </th>
              <th className=" sticky top-0 p-3 text-[20px] font-bold tracking-wide text-center">
                id
              </th>
              <th className=" sticky top-0 p-3 text-[20px] font-bold tracking-wide text-center">
                Question
              </th>
              <th className=" sticky top-0 p-3 text-[20px] font-bold tracking-wide text-center">
                P1
              </th>
              <th className=" sticky top-0 p-3 text-[20px] font-bold tracking-wide text-center">
                P2
              </th>
              <th className=" sticky top-0 p-3 text-[20px] font-bold tracking-wide text-center">
                Tools
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {staticQuestion.map((row) => {
              const link1 = row.URL;
              const link2 = row.URL2;
              const index = row.id - 1;
              const problem = row.Problem;
              const shadowC =dynamicData[index].Done ? '0px 0px 12px 04px rgba(57,255,20,.25)': '0px 0px 12px 04px rgba(150,210,250,0.2)'
              return (
                <tr
                  key={index}
                  className={dynamicData[index].Done ? "bg-[#00ff003f]" : ""}
                  style={{'boxShadow': `${shadowC}`}}
                >
                  <td className="w-32 p-3 text-gray-200">
                    <div className="flex justify-start ">
                      <input
                        type="checkbox"
                        checked={dynamicData[index].Done}
                        onChange={() => handleStatusChange(id, index)}
                        className="cursor-pointer"
                      />
                      <div
                        className="flex justify-center w-full px-3 py-2"
                        onClick={() => handleStatusChange(id, index)}
                      >
                        {dynamicData[index].Done ? (
                          <span className="cursor-pointer flex-1 p-1.5 text-sm font-medium uppercase tracking-wider text-green-200 bg-green-800 rounded-xl bg-opacity-50 border-2 border-green-800 text-center">
                            Done
                          </span>
                        ) : (
                          <span className="flex-1 text-center cursor-pointer p-1.5 text-sm font-medium uppercase tracking-wider text-yellow-200 bg-yellow-800 rounded-xl bg-opacity-50 border-2 border-yellow-800">
                            Pending
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-center text-gray-200 w-11">
                    {row.id}
                  </td>
                  <td className="flex-1 p-3 text-lg text-gray-200 whitespace-nowrap">
                    {row.Problem}
                  </td>
                  <td className="p-3 text-gray-200 w-14">
                    <div className="flex items-center justify-center ">
                      <a href={link1} target="_blank" rel="noopener noreferrer">
                        <img
                          src={gettingLogo(link1)}
                          alt="gfg logo"
                          className="w-8 h-8 "
                        />
                      </a>
                    </div>
                  </td>
                  <td className="p-3 text-gray-200 w-14">
                    <div className="flex items-center justify-center ">
                      <a href={link2} target="_blank" rel="noopener noreferrer">
                        <img
                          src={gettingLogo(link2)}
                          alt="gfg logo"
                          className="w-8 h-8 "
                        />
                      </a>
                    </div>
                  </td>
                  <td className="w-20 p-3 text-gray-200">
                    <div className="flex justify-evenly">
                      {dynamicData[index].Bookmark ? (
                        <SolidBookmarkIcon
                          className="w-6 h-6  text-green-500 "
                          style={{ filter: 'drop-shadow(0px 0px 8px rgba(16, 185, 129, 0.65))' }}
                          onClick={() => {
                            handleBookmarkChange(id, index);
                          }}
                        />
                      ) : (
                        <OutlineBookmarkIcon
                          className="w-6 h-6 text-white "
                          style={{ filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.65))' }}
                          onClick={() => {
                            handleBookmarkChange(id, index);
                          }}

                        />
                      )}
                      {dynamicData[index].Notes ? (
                        <SolidPencilSquareIcon
                          className="w-6 h-6 text-green-500"
                          style={{ filter: 'drop-shadow(0px 0px 8px rgba(16, 185, 129, 0.65))' }}
                          onClick={() => {
                            openModal(problem, id, index);
                          }}
                        />
                      ) : (
                        <OutlinePencilSquareIcon
                          className="w-6 h-6 text-white"
                          style={{ filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.65))' }}
                          onClick={() => openModal(problem, id, index)}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BasicTable;
