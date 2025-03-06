import { useState } from "react";

export default function StatusLine({ columns, chore }) {

    
    // const currentStatus = chore.status;
    const currentStatus = columns.find(e => e.id == 2);
    console.log(currentStatus)
    const columnsMutate = columns.map(e => ({...e, current:currentStatus.order >= e.order}));

  return (
    <>
      <div className="flex items-center px-4">
        <div className="flex h-5 justify-between overflow-hidden gap-1">
          {columnsMutate.map((e) => {

            return (
              <>
                <div
                  className="relative border-3 border-black w-10 h-full cursor-pointer group flex items-center justify-center"
                  style={{
                    backgroundColor: e.current
                      ? e?.bg_color ?? "#00C950"
                      : "#F8FAFC",
                  }
                }
                >
                    <div className="flex items-center justify-center p-2 text-rose-50 comfortaa text-[10px] fixed z-10 bg-slate-950 -translate-6 rounded-2xl opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-in-out">
                        {e.title}
                    </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
