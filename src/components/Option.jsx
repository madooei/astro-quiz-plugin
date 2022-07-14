import { useState } from "react";

function Option({ children }) {
  const [selected, setSelected] = useState(false);

  const handleOnClick = (event) => {
    event.preventDefault();
    setSelected((selected) => !selected);
  };

  return (
    <div
      className={`flex items-center border-1 mb-1 py-1 px-3 cursor-pointer hover:bg-purple-50
      } ${selected ? "bg-purple-50" : "bg-white"}`}
      onClick={handleOnClick}
    >
      <svg
        class="h-6 w-6 flex-none fill-purple-100 stroke-purple-500 stroke-2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="11" />
        {selected && (
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        )}
      </svg>
      <p class="ml-4">{children}</p>
    </div>
  );
}

export default Option;
