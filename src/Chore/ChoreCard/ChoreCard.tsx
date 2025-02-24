import { useState } from "react";
import CurrentChoreModal from "../../Modals/ChoreModal/CurrentChoreModal";
import ChoreBody from "./ChoreBody";
import ChoreHead from "./ChoreHead";

export default function ChoreCard({ chore }: { chore: any }) {
  const {estimation, duration} = chore;
  const widthPercentage = (duration / estimation) * 100 > 100 ? 100 : (duration / estimation) * 100;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className="relative flex flex-col z-10 cursor-pointer"
    onClick={() => setShowModal(true)}
    >
      <div className="px-1 py-1 flex w-72 h-50 bg-slate-100 border-2 border-slate-900 rounded-b-2xl rounded-r-2xl">
        <div className="flex flex-col w-full h-full">
          <ChoreHead chore={chore}/>
          <ChoreBody chore={chore}/>
        </div>
      </div>
      <div className="-z-10 absolute w-72 flex h-50 rounded-2xl translate-y-1 shadow-sm shadow-rose-300 overflow-hidden transition-all duration-300"
      >
                    <div className="w-full h-full bg-rose-500"
        style={{ width: `${widthPercentage}%` }}
      >

      </div>
      </div>
      </div>
    
      <CurrentChoreModal isNew={false} showModal={showModal} setShowModal={setShowModal} chore={chore}/>
    </>
  );
}
