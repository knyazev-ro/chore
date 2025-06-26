import { useState } from "react";

export default function TimePing({durationTime, estimationTime}:{durationTime:any, estimationTime:any}) {
  const [run, setRun] = useState(false);

  return (
    <div className="comfortaa text-rose-200 text-sm border-2 border-slate-900 rounded-full flex items-center justify-between">
        <div className=" px-6">
            {durationTime}
        </div>
    <div onClick={() => setRun((p) => !p)}>
      {run ? (
        <div className="relative w-9 h-9 rounded-full bg-rose-500 flex items-center justify-center">
          <div className="relative h-4 w-4 rounded-full bg-rose-50 flex items-center justify-center">
            <div className="absolute h-5 w-5 rounded-full bg-rose-50 animate-ping"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-950">
          <div
            className="w-0 h-0 animate-pulse
  border-t-[7px] border-t-transparent
  border-l-[12px] border-l-slate-300
  border-b-[7px] border-b-transparent"
          ></div>
        </div>
      )}
    </div>
    </div>
  );
}
