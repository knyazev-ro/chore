import { useDrop } from "react-dnd";
import ChoreCard from "../../Chore/ChoreCard/ChoreCard";
import { EllipsisHorizontalIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function ChoreTrelloColumn({ column,  setColumns, columns, handleClickPlusButton }: { column: any, handleClickPlusButton:any, setColumns:any, columns:any }) {
  const { title, items, bg_color, title_color } = column;
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'chore',
    collect: mon => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop()
    }),
    drop: monitor => {
      setColumns(columns.map((e) => {
        if(monitor.column_id === column.id){
          return e;
        }
        if(monitor.column_id === e.id){
          return e = {...e, items:e.items.filter(el => el.id !== monitor.chore.id)};
        }
        if(column.id === e.id){
          return e = {...e, items: [...e.items.filter(el => el.id !== monitor.chore.id), monitor.chore]};
        }
        return e;
      }))
      console.log('moving item:', monitor)
    }
  })

  return (
    <>
      <div
      ref={drop}
        className="group flex flex-col min-w-80 border-3 border-green-300 bg-green-300 backdrop-blur-md hover:bg-white/20 transition-all duration-300 relative h-screen overflow-scroll custom-scroll"
        style={{ backgroundColor: bg_color, borderColor: bg_color }}
      >
        <div className="sticky z-20 top-0 bg-stone-950 min-h-12 flex items-center justify-between px-4">
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
            <ChoreCard chore={e} columnId={column.id}/>
          ))}

<div className="h-70">

          <div className="w-20 h-20 rounded-full cursor-pointer border-4 border-dashed border-slate-900 items-center justify-center flex shadow-md bg-white/10 backdrop-blur-md hover:border-slate-700 group-hover:opacity-100 opacity-0 transition-all duration-300"
          onClick={handleClickPlusButton}
          >
            <PlusIcon className="h-10 w-10 text-slate-900 font-extrabold drop-shadow-lg" />
          </div>
</div>
        </div>
      </div>
    </>
  );
}
