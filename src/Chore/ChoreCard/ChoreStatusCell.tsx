export default function ChoreStatusCell({ value }:{value: any}) {
  let color = 'bg-white text-black';
  const {status, status_label} = value;

  switch (status) {
    case 1: // NEW
      color = 'text-indigo-600 bg-indigo-100 border-2 border-indigo-400 shadow-md';
      break;
    case 2: // IN_PROGRESS
      color = 'text-indigo-500 bg-indigo-200 border-2 border-indigo-400 shadow-md';
      break;
    case 3: // ON_HOLD
      color = 'text-indigo-700 bg-indigo-50 border-2 border-indigo-300 shadow-md';
      break;
    case 4: // REVIEW
      color = 'text-indigo-400 bg-indigo-100 border-2 border-indigo-300 shadow-md';
      break;
    case 5: // COMPLETED
      color = 'text-indigo-800 bg-indigo-200 border-2 border-indigo-500 shadow-md';
      break;
    case 6: // CANCELLED
      color = 'text-indigo-600 bg-indigo-300 border-2 border-indigo-500 shadow-md';
      break;
    default:
      color = 'text-indigo-500 bg-indigo-100 border-2 border-indigo-300 shadow-md';
  }

  return (
    <>
      <div className={'px-2 py-1 rounded-full flex items-center justify-center font-bold text-nowrap ' + color}>
        <div>{status_label}</div>
      </div>
    </>
  );
}
