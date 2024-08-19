const TextArea = ({ text, setText }) => {
  return (
    <textarea
      className="bg-slate-600 p-4 rounded-md h-32 focus:outline focus:outline-sky-300 focus:outline-offset-1 focus:outline-2"
      placeholder="Enter your text here"
      value={text}
      autoFocus
      onChange={(e) => setText(e.target.value)}
    />
  );
};
export default TextArea;
