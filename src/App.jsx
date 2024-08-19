import { useCallback, useState } from "react";
import Header from "./Header";
import TextArea from "./TextArea";
import { TextAction } from "./shared/actions";
import ButtonGroup from "./ButtonGroup";
import ResultBox from "./ResultBox";
import CopyButton from "./CopyButton";

function App() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const result = "result...";

  const handleSubmission = useCallback(
    (action) => {
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
    },
    [text]
  );

  return (
    <div className="bg-slate-900 flex flex-col min-h-screen justify-start items-center text-slate-200 p-4 font-roboto">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <Header />
        <form
          className="w-full flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextArea text={text} setText={setText} />
          <ButtonGroup handleSubmission={handleSubmission} />
        </form>
        <ResultBox isLoading={isLoading} result={result} />

        <CopyButton onClick={() => navigator.clipboard.writeText(result)} />
      </div>
    </div>
  );
}

export default App;
