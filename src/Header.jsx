const Header = () => {
  return (
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
  );
};

export default Header;
