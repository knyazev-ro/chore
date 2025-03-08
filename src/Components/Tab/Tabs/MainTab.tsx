import ChoreCardAlt from "../../../Chore/AlternateChoreCard/ChoreCardAlt";
import CalendarHeatMap from "../../CalendarHeat/CalendarHeatMap";
import CalendarStyled from "../../CalendarHeat/CalendarStyled";

export default function MainTab({ chore }: { chore: any }) {
  return (
    <div className="gap-6 flex flex-col w-full h-full overflow-y-scroll custom-scroll p-2 border-3 border-white">
      <div className="flex justify-center items-center w-full py-0.5">
        <CalendarStyled />
      </div>

      <div className="w-full h-full flex flex-col gap-8">
        <div className="w-full h-12 border-white border-b-3 comfortaa text-2xl text-stone-100 items-center justify-center flex">
          {"Связанные задачи"}
        </div>

        <div className="w-full flex gap-3 gap-y-14 p-2 items-center justify-center flex-wrap">
          <ChoreCardAlt/>
          <ChoreCardAlt/>
          <ChoreCardAlt/>
          <ChoreCardAlt/>

          {/* <ChoreCardAlt/> */}
        </div>
      </div>
    </div>
  );
}
