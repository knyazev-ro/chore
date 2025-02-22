import ChoreStatusCell from "./ChoreStatusCell";
import Tags from "./Tags";
import TimeCell from "./TimeCell";

export default function ChoreBody({ chore }: { chore: any }) {
  return (
    <div className="flex flex-col gap-1 py-1 w-full h-9/12">
      <div className="flex flex-col w-full h-9/12 bg-indigo-50 rounded-xl shadow-md">
       
        <div className="flex flex-col w-full px-1 py-1 h-full justify-between">
          <div className="flex comfortaa px-1 py-1">{chore.title}</div>

          <div className="flex justify-end">
            <Tags chore={chore} />
          </div>
        </div>
        
      </div>
      <div className="flex w-full h-3/12 rounded-2xl items-center justify-center">
        <div className="w-4/6 h-full rounded-2xl flex items-center justify-center">
          <TimeCell chore={chore} />
        </div>
        <div className="flex w-2/6 min-w-2/6 h-full justify-end items-center px-1">
          <div className="text-[8px] font-bold">
            <ChoreStatusCell value={chore} />
          </div>
        </div>
      </div>
    </div>
  );
}
