const CopyButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-sky-700 p-2 rounded-md mt-4 text-slate-50 text-xs hover:bg-sky-800"
  >
    <i className="fa-solid fa-copy mr-2"></i> Copy to clipboard
  </button>
);

export default CopyButton;
