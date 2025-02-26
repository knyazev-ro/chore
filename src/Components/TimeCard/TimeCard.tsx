export default function TimeCard() {
  return (
    <>
    <div className="flex flex-col relative">
      <div className="z-10 flex flex-col w-full h-42 bg-slate-700 border-2 border-slate-900">
        <div className="w-full h-full flex items-center justify-start px-4">
          <div className="min-w-32 min-h-32 bg-rose-50 rounded-full border-4 border-double border-slate-950"></div>

          <div className="flex flex-col py-4 px-2 h-full w-full">
            <div className="w-full h-12 bg-rose-50"></div>
            <div className=""></div>
          </div>
        </div>
        <div className="flex w-full h-2">
          <div className="bg-rose-500 w-2/3"></div>
        </div>
      </div>

      <div className="-translate-2 absolute flex flex-col w-full h-42 bg-slate-700 border-2 border-slate-900"></div>
    </div>
    </>
  );
}
