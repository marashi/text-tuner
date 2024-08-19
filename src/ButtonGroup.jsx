import { TextAction } from "./shared/actions";

const ButtonGroup = ({ handleSubmission }) => {
  return (
    <div className="text-xs flex justify-center gap-2 mt-4 text-slate-50">
      <button
        onClick={() => handleSubmission(TextAction.IMPROVE)}
        className="bg-emerald-700 p-2  rounded-md hover:bg-emerald-800"
      >
        <i className="fa-solid fa-check mr-2"></i>
        Improve writing
      </button>

      <button
        onClick={() => handleSubmission(TextAction.SHORTEN)}
        className="bg-amber-700 p-2 rounded-md hover:bg-amber-800"
      >
        <i className="fa-solid fa-arrow-up-short-wide mr-2"></i>
        Make shorter
      </button>

      <button
        onClick={() => handleSubmission(TextAction.LENGTHEN)}
        className="bg-amber-700 p-2 rounded-md hover:bg-amber-800"
      >
        <i className="fa-solid fa-arrow-down-short-wide mr-2"></i>
        Make longer
      </button>

      <button
        onClick={() => handleSubmission(TextAction.SIMPLIFY)}
        className="bg-sky-700 p-2 rounded-md hover:bg-sky-800"
      >
        <i className="fa-regular fa-face-laugh-wink mr-2"></i>
        Simplify language
      </button>

      <button
        onClick={() => handleSubmission(TextAction.NATURAL)}
        className="bg-sky-700 p-2 rounded-md hover:bg-sky-800"
      >
        <i className="fa-regular fa-thumbs-up mr-2"></i>
        Make natural
      </button>
    </div>
  );
};

export default ButtonGroup;
