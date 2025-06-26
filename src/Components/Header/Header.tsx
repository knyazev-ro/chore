import { Bars3Icon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/Logo";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export default function Header({ open, setOpen }: { open: any; setOpen: any }) {
  const nav = useNavigate();

  const [currentService, setCurrentService] = useState<string>("Home");

  const determineService = () => {
    if (window.location.pathname.includes("n-disk")) {
      return "Neuro Diskette";
    } else if (window.location.pathname.includes("trello")) {
      return "Chore Trello";
    } else if (window.location.pathname.includes("messages")) {
      return "Messanger";
    } else if (window.location.pathname.includes("crowd")) {
      return "Crowd Meetings";
    } else if (window.location.pathname.includes("notifications")) {
      return "Notifications";
    } else {
      return "Home";
    }
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
    setIsLoaded(true);
    }, 300);
  }, []);

  useEffect(() => {
    setCurrentService(determineService());
  }, [window.location.pathname]);

  return (
    <header className="z-20 w-full min-h-18 h-18 flex bg-stone-950 comfortaa text-stone-100 items-center p-4 justify-between">
      <div className="flex gap-4 items-center lg:text-3xl sm:text-xl text-stone-100">
        {/* <img src={"../assets/chore-logo.svg"}/> */}
        <div
          onClick={() => nav("/")}
          className="flex gap-4 items-center cursor-pointer"
        >
          <div className="w-10 h-10">
          {/* <Transition
            as="div"
            show={isLoaded}
            enter="transition ease-out duration-400"
            enterFrom="opacity-0 rotate-90"
            enterTo="opacity-100 rotate-0"
            leave="transition ease-in duration-400"
            leaveFrom="opacity-100 rotate-0"
            leaveTo="opacity-0 rotate-90"
          > */}
          <Logo fill={"white"} width={"35px"} height={"35px"} />
          {/* </Transition> */}
          </div>
          Chore Community

        </div>
        <button
          onClick={() => setOpen((p) => !p)}
          className={`cursor-pointer ${
            open ? "rotate-0" : "rotate-90"
          } active:rotate-90 transition-all`}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
        <Transition
          show={isLoaded}
          enter="transition ease-out duration-400"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-400"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
        <div className="text-stone-100 text-sm">{currentService}</div>
        </Transition>
      </div>
      <div></div>
      <div className="flex items-center justify-center gap-6">
        <div>
          <MagnifyingGlassIcon className="w-6 h-6" color="white" />
        </div>
        <div
          onClick={() => nav("/log-in")}
          className="bg-stone-800 px-4 py-2 border-3 border-stone-100 flex justify-center items-center text-xs cursor-pointer hover:bg-stone-900 transition-all duration-200 ease-in-out hover:scale-102"
        >
          Log In
        </div>
      </div>
    </header>
  );
}
