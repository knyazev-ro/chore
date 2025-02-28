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
      {/* Основной контейнер */}
      <div className="relative flex flex-col min-h-0 h-full w-full items-center z-0 border-green-500 rounded-2xl border-2 bg-slate-950">

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
                "cursor-pointer rounded-t-md h-full border-2 border-green-500 flex px-3 py-1 comfortaa text-sm " +
                (tab.current
                  ? "text-slate-900 bg-rose-50 border-b-rose-50 -ml-3 rounded-t-lg -mr-3 z-10"
                  : "bg-green-500 border-b-green-500 text-rose-50")
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
    </>
  );
}
