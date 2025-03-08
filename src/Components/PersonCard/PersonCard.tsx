import { Link } from "react-router-dom";

export default function PersonCard({
  person,
  type,
}: {
  person: any;
  type: string;
}) {
  const ButtonMailto = ({ mailto, label }) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="relative flex flex-col w-full h-full">
      <div className="z-30 relative w-full h-full bg-stone-100  border-3 flex flex-col">
        <div className="flex flex-col py-2 items-center justify-center">
          <div className="flex relative min-w-20 min-h-25 h-25 w-25 max-w-25 max-h-25 items-center justify-center">
            <img
              key={"created_by"}
              className="z-10 border-3 border-stone-950 bg-blue-500 w-11/12 h-11/12 min-w-11/12 min-h-11/12"
              src={person}
              alt="Avatar"
            />
            <div className="absolute border-3 flex flex-col border-stone-950 bg-blue-500 w-full h-full min-w-full min-h-full">
            <div className="h-1/6  bg-blue-500"></div>
              <div className="h-1/6  bg-yellow-500"></div>
              <div className="h-1/6  bg-rose-500"></div>

              <div className="h-1/6  bg-blue-500"></div>
              <div className="h-1/6  bg-yellow-500"></div>
              <div className="h-1/6  bg-rose-500"></div>
            </div>
          </div>
          <div className="relative -translate-y-3 translate-x-11 flex items-center justify-center z-20">
            <div className="w-4 h-4 rounded-full animate-ping transition-all duration-150 bg-yellow-400"></div>
            <div className="absolute w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="absolute w-2 h-2 rounded-full animate-pulse bg-sky-300"></div>
          </div>

          <div className="px-1 flex flex-col w-full h-full -translate-y-3">
            <div className="flex flex-col gap-2 justify-between">
              <div className="flex items-center justify-center comfortaa w-full border-b-2 border-slate-500 p-1 text-black">
                {"Мистер Майлз"}
              </div>
              <div className="flex items-center justify-center comfortaa w-full text-black">
                {type}
              </div>

              <div
                className="transition-all duration-300 ease-in-out text-blue-950 hover:text-blue-950 flex items-center justify-center comfortaa w-full h-9 text-sm border-2 border-dashed border-orange-500 hover:border-slate-400 cursor-pointer"
                onClick={() => navigator.clipboard.writeText("example@exp.com")}
              >
                <ButtonMailto
                  label="example@exp.com"
                  mailto="mailto:example@exp.com"
                />
                {/* {"example@exp.com"} */}
              </div>
              <div className="flex border-3 w-full h-2.5">
              <div className="w-1/3  bg-blue-500"></div>
              <div className="w-1/3  bg-yellow-500"></div>
              <div className="w-1/3  bg-rose-500"></div>

              <div className="w-1/3  bg-blue-500"></div>
              <div className="w-1/3  bg-yellow-500"></div>
              <div className="w-1/3  bg-rose-500"></div>
              </div>
            </div>
            {/* 
            <div className="border-2 w-full h-full">

            </div> */}
          </div>
        </div>
      </div>

      <div className="z-20 -translate-1  absolute w-full h-full border-3 bg-stone-400 "></div>
      <div className="z-10 -translate-2 absolute w-full h-full border-3 bg-stone-400 "></div>

      <div className="-translate-3 absolute w-full h-full border-3 bg-stone-400">
        <div className="relative">
          <div className="w-2/6 h-full bg-blue-300 border-2 border-slate-950 rounded-sm flex justify-center items-start translate-x-4 -translate-y-2">
            <div className="-translate-y-0.5 text-[10px] comfortaa">
              {"person"}
            </div>
          </div>
        </div>
      </div>

      <div className="flex z-10 -translate-y-4 -translate-x-6 absolute w-full h-full justify-end">
        <div className="w-2/6 h-full bg-rose-500 border-2 border-slate-950 rounded-sm flex justify-center items-start">
          <div className="-translate-y-0.5 text-[10px] comfortaa">
            {"chore"}
          </div>
        </div>
      </div>
    </div>
  );
}
