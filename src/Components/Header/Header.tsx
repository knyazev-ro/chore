import { Bars3Icon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/Logo";
import { Navigate, useNavigate } from "react-router-dom";

export default function Header({ open, setOpen }: { open: any; setOpen: any }) {
  const nav = useNavigate();
  
    return (
    <header className="z-20 w-full min-h-16 h-16 flex bg-stone-950 comfortaa text-stone-100 items-center p-4 justify-between">
      <div className="flex gap-4 items-center lg:text-3xl sm:text-xl text-stone-100">
        {/* <img src={"../assets/chore-logo.svg"}/> */}
        <div 
        onClick={() => nav("/")}
        className="flex gap-4 items-center cursor-pointer">
            
            <Logo fill={"white"} width={"35px"} height={"35px"} />
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
  );
}
