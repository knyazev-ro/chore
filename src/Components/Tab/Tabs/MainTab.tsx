import CalendarHeatMap from "../../CalendarHeat/CalendarHeatMap";

export default function MainTab({ chore }: { chore: any }) {
  return (
    <div className="flex flex-wrap w-full h-full overflow-x-scroll custom-scroll p-2 border-3 border-white">
      <div className="relative flex w-full h-30">
        <div className="flex z-10 w-full h-30 bg-stone-100 border-stone-950 border-3 p-4">
        <CalendarHeatMap />
          </div>
        <div className="absolute w-full h-full bg-stone-800 translate-1.5 border-3 border-stone-950"></div>
      </div>
    </div>
  );
}
