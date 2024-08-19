import { useCallback, useState } from "react";
import Header from "./Header";
import TextArea from "./TextArea";
import { TextAction } from "./shared/actions";
import ButtonGroup from "./ButtonGroup";
import ResultBox from "./ResultBox";
import CopyButton from "./CopyButton";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmission = useCallback(
    async (action) => {
      setIsLoading(true);
      let actionPrompt = "";
      switch (action) {
        case TextAction.IMPROVE:
          actionPrompt = "Improve the following text: ";
          break;
        case TextAction.SHORTEN:
          actionPrompt = "Shorten the following text: ";
          break;
        case TextAction.LENGTHEN:
          actionPrompt = "Make the following text a bit longer: ";
          break;
        case TextAction.SIMPLIFY:
          actionPrompt =
            "Rewrite the following text to sound more natural, using simpler words: ";
          break;
        default:
          actionPrompt = "Improve the following text: ";
      }

      const res = await window.textTunerAPI.askOpenAI(actionPrompt + text);
      setIsLoading(false);
      setResult(res);
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

        {result && (
          <CopyButton onClick={() => navigator.clipboard.writeText(result)} />
        )}
      </div>
    </div>
  );
}

export default App;
