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
      <div className="relative flex flex-col h-full w-full items-center z-0 border-green-500 bg-rose-50 rounded-2xl">

          <div className="z-10 flex -translate-y-7 translate-x-5 w-full h-full">
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
                  "cursor-pointer h-7 border-2 border-green-500 flex px-3 py-1 comfortaa text-sm " +
                  (tab.current
                    ? "text-slate-900 bg-rose-50 border-b-rose-50"
                    : "bg-green-500 border-b-green-500 text-rose-50")
                }
              >
                {tab.title}
              </div>
            ))}
          </div>

          <div className="border h-full overflow-scroll">
            {tabs
              .find((tab) => tab.current)
              ?.component({chore:chore})}
          </div>

      </div>
    </>
  );
}
