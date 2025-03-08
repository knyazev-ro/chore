import { PlusCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import PersonCard from "../../PersonCard/PersonCard";

export default function PersonTab({ chore }: { chore: any }) {
  return (
    <div className="flex flex-wrap gap-8 gap-y-14 items-center justify-center h-full overflow-x-scroll custom-scroll p-8 border-3 border-white">
     
      <div className="w-48 h-64">
      <PersonCard person={chore.createdBy} type={"Creator"} />
      </div>
      <div className="w-48 h-64">
      <PersonCard person={chore.responsible} type={"Is Responsible"} />
      </div>

      {chore.accomplicies.map((e) => (
        <div className="w-48 h-64">
        <PersonCard person={e.avatar} type={"Is Helping"} />
        </div>
      ))}
      {chore.auditors.map((e) => (
        <div className="w-48 h-64">
        <PersonCard person={e.avatar} type={"Is Watching"} />
        </div>
      ))}



<div className="w-48 h-64">
      <PersonCard person={chore.createdBy} type={"Creator"} />
      </div>
      <div className="w-48 h-64">
      <PersonCard person={chore.responsible} type={"Is Responsible"} />
      </div>

      {chore.accomplicies.map((e) => (
        <div className="w-48 h-64">
        <PersonCard person={e.avatar} type={"Is Helping"} />
        </div>
      ))}
      {chore.auditors.map((e) => (
        <div className="w-48 h-64">
        <PersonCard person={e.avatar} type={"Is Watching"} />
        </div>
      ))}

      {/* last to append */}
      <div className="relative w-48 h-64">
      <div className="z-10 bg-stone-950 absolute w-48 h-64 border-white border-3 border-dashed  flex justify-center items-center hover:bg-stone-800 transition-all ease-in-out duration-300">
        
        <PlusIcon
          className="w-16 h-16"
          stroke="#FFF1F2"
          strokeWidth={1.2} />
        </div>

          <div className="absolute w-48 h-64 -translate-2 border-white border-dashed border-3"></div>
 </div>
    </div>
  );
}
