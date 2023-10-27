import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import { useSharedDataContext } from "../../Hooks/Context/useSharedData";

const NotesModal = ({ isNotesOpen, onClose, data, updateHandler }) => {
  if (!isNotesOpen) return null;
  const problem = data.text;
  const id = data.id;
  const index = data.index;
  const sharedContent = useSharedDataContext();
  const [text, setText] = useState(
    sharedContent.sharedData.data[id].questions[index].NotesData
  );
  const maxChars = 320;
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isNotesOpen) {
      const textarea = textareaRef.current;
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }
  }, [isNotesOpen]);

  const handleChange = (e) => {
    const inputText = e.target.value;

    if (inputText.length <= maxChars) {
      setText(inputText);
    }
  };
  const handleUpdate = (e) => {
    updateHandler(id, index);
    sharedContent.notesDataHandler(id, index, text);

    sharedContent.notesHandler(id, index);
    // console.log(sharedContent.sharedData.data[id].questions[index].Notes);

    onClose();
  };
  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 ">
        <form className=" bg-zinc-700 m-2  px-8 py-6 rounded-2xl  flex fixed  flex-col max-w-[800px] border-4 border-zinc-800  shadow-2xl shadow-zinc-600/40 hover:shadow-zinc-400/50 transition-all ease-in-out duration-300">
          <div className="px-5 py-2 m-2 text-sm text-black border-2 rounded-lg bg-slate-100 border-stone-500/40">
            {problem}
          </div>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleChange}
            autoFocus
            name="Notes"
            cols="60"
            rows="6"
            placeholder="Type your Notes here..."
            className="px-5 py-2 m-2 text-sm text-black border-2 rounded-lg bg-slate-100 border-stone-500/40"
          ></textarea>

          <div className="flex items-center justify-center w-full">
            <button
              className="flex items-center justify-center px-2 py-2 mx-12 mt-4 mb-2 transition duration-300 ease-in-out bg-green-600 border-2 rounded-md shadow-md border-green-300/40 shadow-green-200/60 hover:shadow-green-600/60"
              onClick={handleUpdate}
              type="button"
            >
              <CheckIcon
                className="mr-2"
                height={24}
                width={24}
                strokeWidth={2}
              />
              Update
            </button>
            <button
              className="flex items-center justify-center px-2 py-2 mx-12 mt-4 mb-2 transition duration-300 ease-in-out bg-red-600 border-2 rounded-md shadow-md border-red-300/40 shadow-red-200/60 hover:shadow-red-600/60"
              onClick={onClose}
            >
              <XMarkIcon
                className="mr-2"
                height={24}
                width={24}
                strokeWidth={2}
              />
              Leave
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NotesModal;
