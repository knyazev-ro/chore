import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function TrelloHead({ project }: { project: any }) {
  const {
    avatar,
    bg_color,
    bg_color_first,
    bg_color_second,
    title,
    title_color,
    id,
  } = project;

  return (
    <>
      <div className="flex w-full h-12 items-center justify-between px-2 gap-4 bg-stone-950">
        <div>
          <ChevronLeftIcon className="h-6 w-6 text-rose-50 font-bold" />
        </div>
        <div className="flex items-center justify-center gap-4 px-2 comfortaa">
          <img
            src={avatar}
            alt="logo"
            className="w-7 h-7 border-2 border-stone-100"
          />
          <div className="relative flex">
            <div
              className="z-10 text-sm items-center justify-center flex"
              // style={{ backgroundColor: bg_color }}
            >
              <div
                style={{
                  color: title_color,
                }}
              >
                {title}
              </div>
            </div>
            {/* <div
              className="absolute translate-x-2 border-4 px-4 border-double items-center justify-center flex bg-amber-200"
              style={{ backgroundColor: bg_color_first }}
            >
            </div> */}

            {/* <div
              className="absolute -translate-x-2 border-4 px-4 border-double items-center justify-center flex bg-slate-200"
              // style={{ backgroundColor: bg_color_second }}
            >
            </div> */}
          </div>
        </div>
        <div>
          <EllipsisVerticalIcon className="h-6 w-6 text-rose-50 cursor-pointer" />
        </div>
      </div>
    </>
  );
}
