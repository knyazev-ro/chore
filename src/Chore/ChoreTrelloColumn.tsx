import ChoreCard from "./ChoreCard/ChoreCard";
import { EllipsisHorizontalIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function ChoreTrelloColumn({ column }: { column: any }) {
  const { title, items, bg_color, title_color } = column;

  return (
    <>
      <div
        className="flex flex-col min-w-80 border-3 border-green-300 bg-green-300"
        style={{ backgroundColor: bg_color, borderColor: bg_color }}
      >
        <div className="bg-slate-900 h-12 flex items-center justify-between rounded-b-2xl px-4">
          <div>
            <EllipsisHorizontalIcon className="h-6 w-6 text-rose-50 cursor-pointer" />
          </div>

          <div
            className="max-w-72 max-h-10 overflow-hidden overflow-x-scroll custom-scroll text-nowrap text-rose-50 text-md font-bold comfortaa bg-slate-900 border-2 border-rose-50 px-4 py-1 rounded-full"
            style={{ backgroundColor: title_color }}
          >
            {title}
          </div>

          <div>
            <PlusIcon className="h-6 w-6 text-rose-50 cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 py-2">
          {items.map((e: any) => (
            <ChoreCard chore={e} />
          ))}

<div className="w-20 h-20 rounded-full border-4 cursor-pointer border-dashed border-white items-center justify-center flex shadow-md bg-white/10 backdrop-blur-md">
  <PlusIcon className="h-10 w-10 text-white font-extrabold drop-shadow-lg" />
</div>

        </div>
      </div>
    </>
  );
}
