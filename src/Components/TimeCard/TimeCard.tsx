import Linear from "./Linear";

export default function TimeCard() {

  return (
    <>
      <div className="z-10 flex flex-col w-full h-full bg-slate-900 border-slate-900 p-4">
        <div className="gap-6 w-full h-full flex items-center justify-between px-4">
          <div className='flex flex-col h-full py-2 gap-1'>
          <div className="min-w-20 min-h-20 bg-slate-800 rounded-full border-double border-slate-950"></div>
          <div className='border h-full bg-slate-800'>

          </div>
          </div>

          <div className="flex flex-col py-2 px-4 h-52 w-full bg-slate-900 rounded-lg border-green-200 border-dashed">
          <Linear linearData={[]}/>
          </div>
          
        </div>
        <div className="flex flex-col h-5/6">
        </div>
      </div>
    </>
  );
}
