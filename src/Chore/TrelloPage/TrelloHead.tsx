import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function TrelloHead({ project }: { project: any }) {
  const { avatar, bg_color, title, id } = project;

  return (
    <>
      <div className="flex w-full h-10 items-center justify-between px-2 gap-4 bg-slate-900">
        <div>
          <ChevronLeftIcon className="h-6 w-6 text-rose-50 font-bold" />
        </div>
        <div className="flex items-center justify-center gap-4 px-2 comfortaa">
          <img
            src={avatar}
            alt="logo"
            className="w-8 h-8 rounded-full border-2"
            style={{ borderColor: bg_color }}
          />
          <div className="relative flex">
          <div
            className="z-10 border-4 px-4 border-double rounded-full items-center justify-center flex"
            style={{ backgroundColor: bg_color }}
          >
            {title}
          </div>
          <div
            className="absolute translate-x-2 border-4 px-4 border-double rounded-full items-center justify-center flex bg-amber-200"
          >
            {title}
          </div>

          <div
            className="absolute -translate-x-2 border-4 px-4 border-double rounded-full items-center justify-center flex bg-slate-200"
          >
            {title}
          </div>

          </div>
        </div>
        <div>
          <EllipsisVerticalIcon className="h-6 w-6 text-rose-50 cursor-pointer" />
        </div>
      </div>
    </>
  );
}
