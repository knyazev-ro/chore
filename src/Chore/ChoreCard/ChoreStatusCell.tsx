export default function ChoreStatusCell({ value }:{value: any}) {
  let color = 'bg-white text-black';
  const {status, status_label} = value;

  switch (status) {
    case 1: // NEW
      color = 'text-blue-600 bg-blue-100 border-2 border-blue-400 shadow-md';
      break;
    case 2: // IN_PROGRESS
      color = 'text-blue-500 bg-blue-200 border-2 border-blue-400 shadow-md';
      break;
    case 3: // ON_HOLD
      color = 'text-blue-700 bg-blue-50 border-2 border-blue-300 shadow-md';
      break;
    case 4: // REVIEW
      color = 'text-blue-400 bg-blue-100 border-2 border-blue-300 shadow-md';
      break;
    case 5: // COMPLETED
      color = 'text-blue-800 bg-blue-200 border-2 border-blue-500 shadow-md';
      break;
    case 6: // CANCELLED
      color = 'text-blue-600 bg-blue-300 border-2 border-blue-500 shadow-md';
      break;
    default:
      color = 'text-blue-500 bg-blue-100 border-2 border-blue-300 shadow-md';
  }

  return (
    <div className="flex relative">
      <div className={'z-10 px-2 py-1 flex items-center justify-center font-bold comfortaa text-nowrap ' + color}>
        <div>{status_label}</div>
      </div>
      <div className="absolute translate-1 w-full h-full bg-black"></div>
    </div>
  );
}
