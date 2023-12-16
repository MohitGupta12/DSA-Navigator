/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import  { useEffect, useRef, useState } from "react";
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
  const handleUpdate = () => {
    updateHandler(id, index);
    sharedContent.notesDataHandler(id, index, text);

    sharedContent.notesHandler(id, index);

    onClose();
  };
  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 ">
        <form className=" bg-modelBkg m-2  px-8 py-6 rounded-2xl  flex fixed  flex-col max-w-[800px] border-4 border-modelPageBorder  shadow-2xl shadow-modelPageShadow  transition-all ease-in-out duration-300">
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
              className="flex items-center justify-center text-lg px-8 py-2 mx-12 mt-4 mb-2 transition duration-300 ease-in-out bg-green-600 border-2 rounded-md  border-green-300 text-green-100"
              onClick={handleUpdate}
              type="button"
            >
              Save
            </button>
            <button
              className="flex items-center justify-center text-lg px-6 py-2 mx-12 mt-4 mb-2 transition duration-300 ease-in-out bg-red-600 border-2 rounded-md  border-red-300 text-red-100"
              onClick={onClose}
            >
              
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NotesModal;
