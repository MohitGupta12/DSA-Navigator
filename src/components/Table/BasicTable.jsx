import React, { useEffect, useMemo, useState } from "react";
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
    src = "../public/assets/gfg.png";
  } else if (url.includes("codingninjas")) {
    src = "../public/assets/coding ninjas.jpg";
  } else if (url.includes("leetcode")) {
    src = "../public/assets/leetcode.webp";
  } else {
    if (!url) {
      src = "../public/assets/empty.png";
    } else {
      src = "../public/assets/article.png";
    }
  }
  return src;
}

const BasicTable = ({ id, staticQuestion, openModal }) => {
  const sharedContent = useSharedDataContext();
  const dynamicData = sharedContent.sharedData.data[id].questions;
  const data = sharedContent.sharedData.data[id].questions;

  const handleBookmarkChange = (id, index) => {
    sharedContent.bookmarkHandler(id, index);
  };
  const handleStatusChange = (id, index) => {
    sharedContent.statusHandler(id, index);
  };

  //TODO : make a function in sharedContent that will take staticQuestion and do sorting on it and rerun my functions whenever done is being change
  //sortedStaticQuestion = function(staticQuestion);

  return (
    <>
      <div className="w-3/4 h-[72vh] overflow-auto">
        <table className="min-w-full ">
          <thead className="sticky top-0 bg-gray-700 border-b-2 border-gray-400 rounded-t-lg ">
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
            {staticQuestion.map((row, index) => {
              const link1 = row.URL;
              const link2 = row.URL2;
              const problem = row.Problem;
              return (
                <tr
                  key={index}
                  className={dynamicData[index].Done ? "bg-green-900" : ""}
                >
                  <td className="w-32 p-3 text-gray-200">
                    <div className="flex justify-start ">
                      <input
                        type="checkbox"
                        checked={dynamicData[index].Done}
                        onChange={() => handleStatusChange(id, index)}
                      />
                      <div className="flex justify-center w-full px-3 py-2">
                        {dynamicData[index].Done ? (
                          <span className="flex-1 p-1.5 text-sm font-medium uppercase tracking-wider text-green-200 bg-green-800 rounded-xl bg-opacity-50 border-2 border-green-800 text-center">
                            Done
                          </span>
                        ) : (
                          <span className="flex-1 text-center p-1.5 text-sm font-medium uppercase tracking-wider text-yellow-200 bg-yellow-800 rounded-xl bg-opacity-50 border-2 border-yellow-800">
                            Pending
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-center text-gray-200 w-11">
                    {index + 1}
                  </td>
                  <td className="flex-1 p-3 text-lg text-gray-200">
                    {row.Problem}
                  </td>
                  <td className="p-3 text-gray-200 w-14">
                    <div className="flex items-center justify-center ">
                      <a href={link1} target="_blank" rel="noopener noreferrer">
                        <img
                          src={gettingLogo(link1)}
                          alt="gfg logo"
                          className="w-8 h-6 "
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
                          className="w-6 h-6 "
                        />
                      </a>
                    </div>
                  </td>
                  <td className="w-20 p-3 text-gray-200">
                    <div className="flex justify-evenly">
                      {dynamicData[index].Bookmark ? (
                        <SolidBookmarkIcon
                          className="w-6 h-6 text-green-500 "
                          onClick={() => {
                            handleBookmarkChange(id, index);
                          }}
                        />
                      ) : (
                        <OutlineBookmarkIcon
                          className="w-6 h-6 text-green-500 "
                          onClick={() => {
                            handleBookmarkChange(id, index);
                          }}
                        />
                      )}
                      {dynamicData[index].Notes ? (
                        <SolidPencilSquareIcon
                          className="w-6 h-6 text-green-500"
                          onClick={() => {
                            openModal(problem, id, index);
                          }}
                        />
                      ) : (
                        <OutlinePencilSquareIcon
                          className="w-6 h-6 text-green-500"
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
