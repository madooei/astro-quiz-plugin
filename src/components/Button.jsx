import { replaceAllWhitespaceWithSingleSpace } from "../util/formatter";

function Button({ label, handleOnClick }) {
  const buttonStyles = replaceAllWhitespaceWithSingleSpace(`
    my-4 
    py-1 
    px-10 
    bg-purple-500 
    text-white 
    font-semibold 
    rounded-lg 
    shadow-md 
    hover:bg-purple-700 
    focus:outline-none 
    focus:ring-2 
    focus:ring-purple-400 
    focus:ring-opacity-75
  `);

  return (
    <button className={buttonStyles} onClick={handleOnClick}>
      {label}
    </button>
  );
}

export default Button;
