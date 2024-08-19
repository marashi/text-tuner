const ResultBox = ({ isLoading, result }) => {
  return (
    <div className="bg-slate-800 p-4 text- w-full rounded-md min-h-32 mt-12 relative flex flex-col">
      {isLoading ? (
        <i className="fa-solid fa-spinner text-4xl absolute animate-spin top text-slate-500 self-center mt-6"></i>
      ) : (
        result
      )}
    </div>
  );
};

export default ResultBox;
