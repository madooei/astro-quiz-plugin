import confetti from "canvas-confetti";

function Quiz({ children }) {
  const handleOnClick = (event) => {
    event.preventDefault();
    confetti();
  };

  return (
    <div className="relative bg-white px-6 py-8 shadow-xl ring-1 ring-gray-900/5 mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div>{children}</div>
      <button
        className="mb-2 py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
        onClick={handleOnClick}
      >
        Submit
      </button>
    </div>
  );
}

export default Quiz;
