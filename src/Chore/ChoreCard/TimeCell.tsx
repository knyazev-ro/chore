import { ClockIcon } from "@heroicons/react/24/outline";

export default function TimeCell({ chore }: { chore: any }) {
  const { estimation_time, duration_time } = chore;

  return (
    <div className="relative flex flex-col translate-x-2">
      <div className="z-10 flex flex-col gap-1 text-[10px] font-bold bg-slate-700 border-slate-900 border-2 px-1 py-1 rounded-2xl justify-center items-center w-49 h-6">
        <div className="flex items-center text-gray-100 gap-1 justify-center">
          <ClockIcon className="w-4 h-4 animate-spin-slow" />
          <div className="flex gap-0.5">
            <span>{estimation_time}</span>/<span>{duration_time}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-gray-600"></div>
      </div>

      <div className="w-49 h-6 absolute bg-indigo-500 px-1 py-1 rounded-2xl translate-y-1"></div>
    </div>
  );
}
