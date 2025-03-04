import { useState } from "react";

export default function StatusLine({ columns, chore }) {

    
    // const currentStatus = chore.status;
    const currentStatus = columns.find(e => e.id == 4);
    console.log(currentStatus)
    const columnsMutate = columns.map(e => ({...e, current:currentStatus.order >= e.order}));

  return (
    <>
      <div className="flex bg-slate-800 p-2 border-2 border-slate-950 items-center rounded-full">
        <div className="flex h-5 rounded-full gap-1 justify-between overflow-hidden">
          {columnsMutate.map((e) => {

            return (
              <>
                <div
                  className="bg-green-500 w-10 h-full"
                  style={{
                    backgroundColor: e.current
                      ? e?.bg_color ?? "#00C950"
                      : "#F8FAFC",
                  }}
                ></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
