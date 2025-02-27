import Doughnut from "./Doughnut";

export default function AdditionalTimeInfo()
{
    return <>
    <div className="py-2 px-4 flex-col flex w-full h-full bg-slate-800">
        <div className="flex">
            <h1 className="comfortaa text-[32px] text-rose-50">{"Time Management"}</h1>
        </div>
        <div className="w-full flex justify-between">
<div></div>
        <div className="w-52 h-52 -translate-y-6">
            <Doughnut doughData={[]}/>
        </div>
        </div>
    </div>
    </>
}