export default function DataCard() {
  return <div className="flex relative w-40 h-40 bg-stone-700 border-3">
    <div className="absolute w-full h-full translate-0.5 bg-stone-600 border-3"></div>
    <div className="absolute w-full h-full translate-1.5 bg-stone-500 border-3 flex flex-col p-2">
        <div className="flex h-1/2 justify-between">
        <div className="flex w-20 h-20 border-2"></div>
        <div className="h-20 border-2 w-10 flex flex-col">
            <div className="h-1/3 w-full bg-blue-500"></div>
            <div className="h-1/3 w-full bg-yellow-500"></div>
            <div className="h-1/3 w-full bg-rose-500"></div>
        </div>
        </div>
        <div className="flex h-1/2 items-end">
        <div className="flex w-full h-10 border-2"></div>
        </div>
    </div>
  </div>;
}
