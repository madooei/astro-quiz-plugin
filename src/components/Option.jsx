import { useState } from "react";
import CheckCircle from "./Checkmark";
import { replaceAllWhitespaceWithSingleSpace } from "../util/formatter";

function Option({ children }) {
  const [selected, setSelected] = useState(false);

  const handleOnClick = (event) => {
    event.preventDefault();
    setSelected((selected) => !selected);
  };

  const optionStyles = replaceAllWhitespaceWithSingleSpace(`
    flex 
    items-center 
    border-1 
    mb-2 
    py-2 
    px-3 
    cursor-pointer 
    hover:bg-purple-50 
    ${selected ? "bg-purple-50" : "bg-white"}
  `);

  return (
    <div
      className={optionStyles}
      onClick={handleOnClick}
    >
      <CheckCircle selected={selected} />
      <div className="ml-4">{children}</div>
    </div>
  );
}

export default Option;
