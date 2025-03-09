import { StarIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/Logo";
import PageOne from "./MainPages/PageOne";
import PageAboutCommunity from "./MainPages/PageAboutCommunity";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";

export default function MainPage() {
  const [open, setOpen] = useState(true);
  const avialablePages = [PageOne, PageAboutCommunity];

  return (
    <div className="flex flex-col overflow-hidden relative h-screen w-screen">
      <header className="z-100 w-full min-h-20 h-20 flex bg-stone-950 comfortaa text-stone-100 items-center p-4 justify-between">
        <div className="flex gap-4 items-center text-3xl text-stone-100">
          {/* <img src={"../assets/chore-logo.svg"}/> */}
          <Logo fill={"white"} width={"35px"} height={"35px"} />
          Chore Community
          <button
            onClick={() => setOpen((p) => !p)}
            className={`cursor-pointer ${
              open ? "rotate-0" : "rotate-90"
            } active:rotate-90 transition-all`}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
        <div></div>
        <div className="flex items-center justify-center gap-6">
          <div>
            <MagnifyingGlassIcon className="w-6 h-6" color="white" />
          </div>
          <div className="bg-stone-800 px-4 py-2 border-3 border-stone-100 flex justify-center items-center text-xs">
            Log In
          </div>
        </div>
      </header>

      <div className="relative flex h-full w-full">
        <div
          className={`translate-y-10 transition-transform duration-500 ease-in-out ${
            open ? "transform translate-x-0" : "transform -translate-x-full"
          } w-64 bg-gray-800 z-10 fixed top-0 left-0 h-screen`}
        >
          <Sidebar />
        </div>
        <div
          className={`w-full h-full flex flex-col overflow-x-hidden overflow-y-scroll custom-scroll border-3 border-stone-100 transition-all duration-500 ${
            open ? "ml-64" : "ml-0"
          }`}
        >
          {avialablePages.map((Page, index) => (
            <div
              key={index}
              className="relative flex flex-col min-w-full min-h-full max-w-full max-h-full"
            >
              <Page />
            </div>
          ))}
        </div>
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
