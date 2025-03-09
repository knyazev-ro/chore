import { useState } from "react";
import CurrentChoreModal from "../../Modals/ChoreModal/CurrentChoreModal";
import ChoreBody from "./ChoreBody";
import ChoreHead from "./ChoreHead";
import { useDrag } from "react-dnd";

export default function ChoreCard({ chore, columnId }: { chore: any, columnId:any }) {
  const {estimation, duration} = chore;
  const widthPercentage = (duration / estimation) * 100 > 100 ? 100 : (duration / estimation) * 100;
  const [showModal, setShowModal] = useState(false);

  const [{isDragging}, drag] = useDrag(() => ({
    item: {chore: chore, column_id:columnId},
    type:'chore',
    collect: (monitor) => ({
      item: monitor.getItem(),
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <>
    <div ref={drag} className="relative flex flex-col z-10 cursor-pointer"
    style={{opacity: isDragging ? 0.5 : 1}}
    onClick={() => setShowModal(true)}
    >
      <div className="px-1 py-1 flex w-72 h-50 bg-indigo-50 border-3 border-slate-900">
        <div className="flex flex-col w-full h-full">
          <ChoreHead chore={chore}/>
          <ChoreBody chore={chore}/>
        </div>
      </div>
      <div className="-z-10 absolute w-72 flex h-50 translate-y-1 shadow-sm shadow-rose-300 overflow-hidden transition-all duration-300"
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
