export default function PersonCard({ person, type }: { person: any, type:string }) {
  return (
    <>
      <div className="relative flex flex-col">
        <div className="z-30 rounded-sm relative w-48 h-72 border-2 bg-rose-50 border-green-500 flex flex-col gap-2">
          <div className="p-4 flex flex-col w-full h-full items-center justify-center">
            <img
              key={"created_by"}
              className="border-2 border-green-500 bg-green-500 w-28 h-28 min-w-28 min-h-28 rounded-full"
              src={person}
              alt="Avatar"
            />
            <div className="px-1 flex flex-col w-full h-full">
              <div className="flex flex-col">
                <div className="flex items-center justify-center comfortaa w-full h-12 border-b-2 border-slate-500">
                  {"Мистер Майлз"}
                </div>
                <div className="flex items-center justify-center comfortaa w-full h-12">
                  {type}
                </div>
              </div>
              {/* 
            <div className="border-2 w-full h-full">

            </div> */}
            </div>
          </div>
        </div>

        <div className="z-20 -translate-1 rounded-sm absolute w-48 h-72 border-2 bg-rose-50 border-green-500"></div>
        <div className="z-10 -translate-2 rounded-sm absolute w-48 h-72 border-2 bg-rose-50 border-green-500"></div>

        <div className="-translate-3 rounded-sm absolute w-48 h-72 border-2 bg-rose-50 border-green-500">
          <div className="w-2/6 h-full bg-green-300 border-2 border-slate-950 rounded-sm flex justify-center items-start translate-x-4 -translate-y-2">
            <div className="-translate-y-0.5 text-[10px] comfortaa">
              {"person"}
            </div>
          </div>
        </div>

        <div className="flex z-10 -translate-y-4 -translate-x-6 absolute w-48 h-72 justify-end">
          <div className="w-2/6 h-full bg-rose-500 border-2 border-slate-950 rounded-sm flex justify-center items-start">
            <div className="-translate-y-0.5 text-[10px] comfortaa">
              {"chore"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
