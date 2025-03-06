export default function Tab({
  tabs,
  setTabs,
  chore,
  setChore,
}: {
  tabs: any;
  setTabs: any;
  chore: any;
  setChore: any;
}) {
  return (
    <>
    <div className="flex relative w-full h-full">
      {/* Основной контейнер */}
      <div className="z-10 relative flex flex-col min-h-0 h-full w-full items-center border-black border-3 bg-stone-950">

        {/* Вкладки */}
        <div className="z-10 flex gap-1 -translate-y-8 translate-x-8 w-full h-8">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => {
                setTabs(
                  tabs.map((t) => {
                    t.current = false;
                    return t;
                  })
                );
                tab.current = true;
              }}
              className={
                "cursor-pointer h-full border-3 border-black flex px-3 py-1 comfortaa text-sm " +
                (tab.current
                  ? "text-slate-900 bg-rose-50 border-b-rose-50 -ml-3 -mr-3 z-10"
                  : "bg-blue-600 border-b-blue-800 text-rose-50")
              }
            >
              {tab.title}
            </div>
          ))}
        </div>

        {/* Контент вкладки */}
        <div className="flex-grow h-full w-full absolute">
          {tabs.find((tab) => tab.current)?.component({ chore: chore })}
        </div>

      </div>
      <div className="absolute flex flex-col min-h-0 h-full w-full items-center border-black border-3 bg-blue-600 translate-1.5"></div>
    </div>
    </>
  );
}
