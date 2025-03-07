export default function DataCard() {
  return <div className="flex relative w-50 h-60 bg-stone-700 border-3">
    <div className="absolute w-full h-full translate-0.5 bg-stone-600 border-3"></div>
    <div className="absolute w-full h-full translate-1.5 bg-stone-500 border-3 flex flex-col p-2">
        <div className="flex h-1/2 justify-between">
        <div className="flex flex-col w-32 h-32 border-3 bg-stone-300">
            <div className="w-full h-1/6 bg-stone-300"></div>

            <div className="w-full h-1/6 bg-stone-400/20"></div>
            <div className="w-full h-1/6 bg-stone-300"></div>

            <div className="w-full h-1/6 bg-stone-400/20"></div>
            <div className="w-full h-1/6 bg-stone-300"></div>

            <div className="w-full h-1/6 bg-stone-400/20"></div>
            <div className="w-full h-1/6 bg-stone-300"></div>

        </div>
        <div className="h-32 border-3 w-10 flex flex-col">
            <div className="h-1/3 w-full bg-blue-500"></div>
            <div className="h-1/3 w-full bg-yellow-500"></div>
            <div className="h-1/3 w-full bg-rose-500"></div>

            <div className="h-1/3 w-full bg-blue-500"></div>
            <div className="h-1/3 w-full bg-yellow-500"></div>
            <div className="h-1/3 w-full bg-rose-500"></div>
        </div>
        </div>
        <div className="flex h-1/2 items-end">
        <div className="overflow-y-scroll overflow-x-hidden custom-scroll w-full h-20 border-3 bg-stone-700 comfortaa text-wrap break-words text-[14px]">
            <div className="inline bg-stone-950 text-rose-50 leading-6 box-decoration-clone px-1.5 py-1">
            {"Файл мертвогомертвогомертвdfgdghgfогомертвого моря. Моря моего"}
            </div>
        </div>
        </div>
    </div>
  </div>;
}
