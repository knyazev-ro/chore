import Doughnut from "./Doughnut";

export default function AdditionalTimeInfo() {

    // const

  return (
    <>
      <div className="py-2 px-4 flex-col flex w-full h-full bg-stone-950">
        <div className="flex">
          <h1 className="comfortaa text-[32px] text-rose-50">
            {"Time Management"}
          </h1>
        </div>
        <div className="w-full flex justify-between h-screen">
          <div className="flex bg-stone-900 w-full h-56 p-4">

            <div className="flex w-20 h-20 bg-stone-950 rounded-full"></div>

          </div>
          <div className="w-56 h-56 p-2 -translate-y-14">
            <Doughnut doughData={[]} />
          </div>
        </div>
      </div>
    </>
  );
}
