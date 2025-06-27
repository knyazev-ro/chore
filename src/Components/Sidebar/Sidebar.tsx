import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar({ menu }: { menu: Array<any> }) {
  const nav = useNavigate();

  return (
    <div className="comfortaa flex-col flex bg-stone-950 w-64 h-full">
      <div className="flex text-stone-100 flex-col text-md py-6 px-5 h-full justify-center">
        {menu.map((e, idx) => (
          <>
            <div
              onClick={() => nav(e.route)}
              key={idx}
              className="relative flex items-center justify-between group transition-all duration-500 ease-in-out hover:bg-stone-900 py-4 px-4 overflow-hidden"
            >
              <div className="flex gap-2 items-center">
                <e.icon className="w-5" />
                <div className="z-10 text-sm">{e.title}</div>
              </div>
              <ChevronDoubleRightIcon
                className="group-hover:opacity-100 transition-all duration-200 ease-in-out opacity-0 w-4"
                color="white"
              />
              <div className="absolute w-40 h-40 rounded-full group-active:bg-stone-700/80 group-active:animate-ping translate-x-5"></div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
