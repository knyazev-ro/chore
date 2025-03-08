import ChoreStatusCell from "../ChoreCard/ChoreStatusCell";

export default function ChoreCardAlt() {

    const authors = [
         {
            id: 103,
            full_name: "Drake",
            avatar: "https://randomuser.me/api/portraits/men/55.jpg",
          },
          {
            id: 104,
            full_name: "K-Dot",
            avatar: "https://randomuser.me/api/portraits/men/56.jpg",
          },
    ]

  return (
    <div className="flex relative w-40 h-52 border-3 border-stone-950 bg-stone-200">

    <div className="w-full h-full p-2 comfortaa flex flex-col justify-between">
       <div className="w-full flex">
        <div className="w-16 h-16 border-3 bg-stone-500 flex justify-center items-center p-1 relative">
            <div className=" z-10 w-full h-full bg-amber-200 border-3">
            </div>
            <div className="flex flex-col w-full h-full absolute bg-red-500">
            <div className="h-1/3 w-full bg-blue-500"></div>
        <div className="h-1/3 w-full bg-yellow-500"></div>
        <div className="h-1/3 w-full bg-rose-500"></div>
            </div>
        </div>
       </div>

       <div className=" h-full py-3 w-full">
        <div className="inline bg-stone-950 text-sm text-wrap break-words p-1 leading-6 box-decoration-clone text-stone-100">
        {"Тестирование новой системы оплаты"}
            </div>
       </div>

       <div className="w-full flex justify-between h-7 items-center">
        <div>
        <div className="flex items-center justify-center">
                      {authors
                        .map((el) => (
                          <img
                            className="border-2 border-white min-w-8 min-h-8 h-8 w-8 -mr-2 rounded-full bg-stone-500"
                            src={el.avatar}
                          />
                        ))}
                    </div>
        </div>
        <div></div>

        <div>
            <div className="text-[10px]">

            <ChoreStatusCell value={{status: 4, status_label:"Completed"}}/></div>
            </div>
       </div>

    </div>


      <div className="flex flex-col w-full h-full absolute border-3 border-stone-950 translate-2 -z-10">
        <div className="h-1/6 w-full bg-blue-500"></div>
        <div className="h-1/6 w-full bg-yellow-500"></div>
        <div className="h-1/6 w-full bg-rose-500"></div>
        <div className="h-1/6 w-full bg-blue-500"></div>
        <div className="h-1/6 w-full bg-yellow-500"></div>
        <div className="flex h-1/6 w-full bg-rose-500">
          <div className="w-1/3 h-full bg-rose-500"></div>
          <div className="w-1/3 h-full bg-blue-500"></div>
          <div className="w-1/3 h-full bg-yellow-500"></div>
          <div className="w-1/3 h-full bg-rose-500"></div>
        </div>
      </div>
    </div>
  );
}
