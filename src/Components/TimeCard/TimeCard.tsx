import PersonCard from "../PersonCard/PersonCard";
import Linear from "./Linear";

export default function TimeCard() {

  return (
    <>
      <div className="z-10 flex flex-col w-full h-full bg-slate-900 border-slate-900 p-4">
        <div className="gap-3 w-full h-full flex items-center justify-between p-2">
          <div className='translate-x-2 flex flex-col border w-38 h-14 gap-1 -translate-y-18'>
          <PersonCard person={""} type={"Creator"}/>
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
