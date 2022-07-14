import { replaceAllWhitespaceWithSingleSpace } from "../util/formatter";

function Checkmark() {
  return <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />;
}

function CheckCircle({ selected }) {
  const checkCircleStyle = replaceAllWhitespaceWithSingleSpace(`
    h-6 
    w-6 
    flex-none 
    fill-purple-100 
    stroke-purple-500 
    stroke-2
  `);

  return (
    <svg
      className={checkCircleStyle}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="11" />
      {selected && <Checkmark />}
    </svg>
  );
}

export default CheckCircle;
