import { TextAction } from "./shared/actions";
import { motion } from "framer-motion";

const ButtonGroup = ({ handleSubmission }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-10px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-xs flex justify-center gap-2 mt-4 text-slate-50"
    >
      <button
        onClick={() => handleSubmission(TextAction.IMPROVE)}
        className="bg-emerald-700 p-2  rounded-md hover:bg-emerald-800"
      >
        <i className="fa-solid fa-check mr-2"></i>
        Improve writing
      </button>

      <button
        onClick={() => handleSubmission(TextAction.SIMPLIFY)}
        className="bg-sky-700 p-2 rounded-md hover:bg-sky-800"
      >
        <i className="fa-regular fa-lightbulb mr-2"></i>
        Simplify language
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
    </motion.div>
  );
};

export default ButtonGroup;
