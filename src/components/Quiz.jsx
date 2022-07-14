import confetti from "canvas-confetti";
import Button from "./Button";
import { replaceAllWhitespaceWithSingleSpace } from "../util/formatter";

function Quiz({ children }) {
  const handleOnClick = (event) => {
    event.preventDefault();
    confetti();
  };

  const quizStyles = replaceAllWhitespaceWithSingleSpace(`
    relative 
    bg-white 
    px-6 
    py-8 
    shadow-xl 
    ring-1 
    ring-gray-900/5 
    mx-auto 
    lg:max-w-xl 
    sm:max-w-lg 
    sm:rounded-lg 
    sm:px-10
  `);

  return (
    <div className={quizStyles}>
      <div>{children}</div>
      <Button label={"Submit"} handleOnClick={handleOnClick} />
    </div>
  );
}

export default Quiz;
