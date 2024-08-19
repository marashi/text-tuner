import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "5px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full text-center"
      style={{ WebkitAppRegion: "drag" }}
    >
      <h1 className="text-4xl font-bold mt-4 mb-2 font-caveat select-none flex items-center justify-center">
        <i className="fa-solid fa-align-left text-3xl mr-4"></i>
        Text Tuner
      </h1>
      <div className="mb-6 select-none text-sm">
        Effortlessly correct and adjust the tone and style of your text with
        just a click.
      </div>
    </motion.div>
  );
};

export default Header;
