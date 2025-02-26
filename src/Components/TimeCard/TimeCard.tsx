export default function TimeCard() {
  return (
    <>
    <div className="flex flex-col relative h-full w-full">
      <div className="z-10 flex flex-col w-full h-full bg-slate-800 border-2 border-slate-900">
        <div className="w-full h-full flex items-center justify-start px-4">
          <div className="min-w-32 min-h-32 bg-slate-700 rounded-full border-4 border-double border-slate-950"></div>

          <div className="flex flex-col py-4 px-2 h-full w-full">
            <div className="w-full h-12 bg-slate-300"></div>
            <div className="p-1 gap-2 flex w-full h-full items-end bg-slate-700">
                <div className="min-w-16 min-h-16 h-16 w-16 bg-red-300 rounded-full">

                </div>
                <div className="w-full border h-10"></div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-2">
          <div className="bg-rose-500 w-2/3"></div>
        </div>
      </div>

      <div className="-translate-3 absolute flex flex-col w-full h-full bg-slate-800 border-2 border-slate-900"></div>
    
      <div className="-translate-2 absolute flex flex-col w-full h-full bg-slate-800 border-2 border-slate-900"></div>
      
      <div className="-translate-1 absolute flex flex-col w-full h-full bg-slate-800 border-2 border-slate-900"></div>
    
    
    </div>
    </>
  );
}
