import PersonCard from "../PersonCard/PersonCard";
import Linear from "./Linear";

export default function TimeCard() {
  return (
    <div className="z-10 flex flex-col w-full h-full bg-stone-950 border-stone-900 p-4">
      <div className="gap-6 w-full h-full flex items-center justify-between p-2">
        <div className="translate-x-2 w-52 h-62">
          <PersonCard person="" type="Creator" />
        </div>

        <div className="flex flex-col py-2 px-4 h-52 w-125 bg-stone-950 rounded-lg border-green-200 border-dashed">
          <Linear linearData={[]} />
        </div>
      </div>
      <div className="flex flex-col h-5/6"></div>
    </div>
  );
}
