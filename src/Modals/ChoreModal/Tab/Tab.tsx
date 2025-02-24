export default function Tab({tabs, setTabs, data}:{tabs:any, setTabs:any, data:any})
{
    return <>
            {/* Основной контейнер */}
            <div className="flex flex-col py-7 h-10/12 w-full items-center overflow-y-scroll overflow-hidden custom-scroll z-0">
          <div className="border-2 bg-rose-50 border-green-500 p-4 rounded-2xl space-y-3 w-11/12">
            <div className="flex gap-1 -translate-y-11 w-full">
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
            <>
              {tabs
                .find((tab) => tab.current)
                ?.component({ data: "ldfvdfbvlml" })}
            </>
          </div>
        </div>

    </>
}