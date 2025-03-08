import CalendarHeatMap from "./CalendarHeatMap"

export default function CalendarStyled()
{
    return       <div className="-translate-x-1 relative flex w-full h-30">
            <div className="flex z-10 w-full h-30 bg-stone-100 border-stone-950 border-3 p-4 justify-center items-center">
            <CalendarHeatMap />
              </div>
            <div className="absolute w-full h-full bg-stone-800 translate-1.5 border-3 border-stone-950 flex">
            <div className="w-1/12  bg-blue-500"></div>
                <div className="w-1/12  bg-yellow-500"></div>
                <div className="w-1/12  bg-rose-500"></div>
    
                <div className="w-1/12  bg-blue-500"></div>
                <div className="w-1/12  bg-yellow-500"></div>
                <div className="w-1/12  bg-rose-500"></div>
    
                <div className="w-1/12  bg-blue-500"></div>
                <div className="w-1/12  bg-yellow-500"></div>
                <div className="w-1/12  bg-rose-500"></div>
    
                <div className="w-1/12  bg-blue-500"></div>
                <div className="w-1/12  bg-yellow-500"></div>
                <div className="w-1/12  bg-rose-500"></div>
            </div>
          </div>
}