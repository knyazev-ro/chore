import { StarIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/Logo";
import PageOne from "./MainPages/PageOne";
import PageAboutCommunity from "./MainPages/PageAboutCommunity";

export default function MainPage() {
  const avialablePages = [PageOne, PageAboutCommunity,];

  return (
    <div className="flex flex-col overflow-hidden relative h-screen w-screen">
      <header className="z-100 w-full min-h-20 h-20 flex bg-stone-950 comfortaa text-stone-100 items-center p-4 justify-between">
        <div className="flex gap-4 items-center text-3xl text-stone-100">
          {/* <img src={"../assets/chore-logo.svg"}/> */}
          <Logo fill={"white"} width={"30px"} height={"30px"} />
          Chore Community
        </div>
        <div></div>
        <div className="flex items-center justify-center gap-6">
          <div>
            <StarIcon className="w-6 h-6" color="white" />
          </div>
          <div className="bg-stone-800 px-4 py-2 border-3 border-stone-100 flex justify-center items-center text-xs">
            Log In
          </div>
        </div>
      </header>

      <div className="relative flex flex-col overflow-y-scroll overflow-x-hidden custom-scroll h-full w-full border-3 border-stone-100">
        {avialablePages.map((Page, index) => (
          <div key={index} className="relative flex flex-col min-w-full min-h-full max-w-full max-h-full">
            <Page />
          </div>
        ))}
      </div>
    </div>
  );
}
{
  /* <div className="w-1/6 h-full bg-blue-500"></div>
            <div className="w-1/6 h-full bg-yellow-500"></div>
            <div className="w-1/6 h-full bg-rose-500"></div>

            <div className="w-1/6 h-full bg-blue-500"></div>
            <div className="w-1/6 h-full bg-yellow-500"></div>
            <div className="w-1/6 h-full bg-rose-500"></div> */
}
