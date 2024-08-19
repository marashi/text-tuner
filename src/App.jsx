import { useState } from "react";

const TextAction = {
  IMPROVE: "improve",
  SHORTEN: "shorten",
  LENGTHEN: "lengthen",
  SIMPLIFY: "simplify",
  NATURAL: "natural",
};

function App() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const result = "result...";

  const handleSubmission = (action) => {
    setIsLoading(true);
    switch (action) {
      case TextAction.IMPROVE:
        console.log("Improving writing:", text);
        break;
      case TextAction.SHORTEN:
        console.log("Making text shorter:", text);
        break;
      case TextAction.LENGTHEN:
        console.log("Making text longer:", text);
        break;
      case TextAction.SIMPLIFY:
        console.log("Simplifying language:", text);
        break;
      case TextAction.NATURAL:
        console.log("Making text more natural:", text);
        break;
      default:
        break;
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-slate-900 flex flex-col min-h-screen justify-start items-center text-slate-200 p-4 font-roboto">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="w-full text-center" style={{ WebkitAppRegion: "drag" }}>
          <h1 className="text-4xl font-bold mt-4 mb-2 font-caveat select-none flex items-center justify-center">
            <i className="fa-solid fa-align-left text-3xl mr-4"></i>
            Text Tuner
          </h1>
          <div className="mb-6 select-none text-sm">
            Effortlessly correct and adjust the tone and style of your text with
            just a click.
          </div>
        </div>

        <form
          className="w-full flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <textarea
            className="bg-slate-600 p-4 rounded-md h-32 focus:outline focus:outline-sky-300 focus:outline-offset-1 focus:outline-2"
            placeholder="Enter your text here"
            value={text}
            autoFocus
            onChange={(e) => setText(e.target.value)}
          />
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
        </form>
        <div className="bg-slate-800 p-4 text- w-full rounded-md h-32 mt-12 relative flex flex-col">
          {isLoading ? (
            <i className="fa-solid fa-spinner text-4xl absolute animate-spin top text-slate-500 self-center mt-6"></i>
          ) : (
            result
          )}
        </div>

        <button className="bg-sky-700 p-2 rounded-md mt-4 text-slate-50 text-xs hover:bg-sky-800">
          <i className="fa-solid fa-copy mr-2"></i> Copy to clipboard
        </button>
      </div>
    </div>
  );
}

export default App;
