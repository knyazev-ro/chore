export default function Tab({
  tabs,
  setTabs,
  chore,
  setChore,
}: {
  tabs: any;
  setTabs: any;
  data: any;
  chore:any;
  setChore:any;
}) {
  return (
    <>
      {/* Основной контейнер */}
      <div className="relative flex flex-col h-full w-full items-center z-0 border--lgreen-500 rounded-2xl border-2 bg-slate-950">

          <div className="z-10 flex gap-1 -translate-y-7 translate-x-8 w-full h-full">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => {
                  setTabs(
                    tabs.map((tab) => {
                      tab.current = false;
                      return tab;
                    })
                  );
                  tab.current = true;
                }}
                className={
                  "cursor-pointer rounded-t-md h-7 border-2 border-green-500 flex px-3 py-1 comfortaa text-sm " +
                  (tab.current
                    ? "text-slate-900 bg-rose-50 border-b-rose-50 -ml-3 rounded-t-lg -mr-3 z-10"
                    : "bg-green-500 border-b-green-500 text-rose-50")
                }
              >
                {tab.title}
              </div>
            ))}
          </div>

          <div className="flex h-full w-full -translate-y-7">
            {tabs
              .find((tab) => tab.current)
              ?.component({chore:chore})}
          </div>

      </div>
    </>
  );
}
