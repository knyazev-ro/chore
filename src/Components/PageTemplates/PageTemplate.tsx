import { useEffect, useMemo, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function PageTemplate({
  menu,
  children,
}: {
  menu: Array<any>|null;
  children: React.ReactNode;
}) {

  const menuItems = useMemo( () => menu ?? [
    {
      title: "N-Диск",
      route: "/",
    },
    {
      title: "Камбан",
      route: "/trello",
    },
    {
      title: "Сообщения",
      route: "/messages",
    },
    {
      title: "Крауд",
      route: "/crowd",
    },
    {
      title: "Нотификации",
      route: "/notifications",
    },
    {
      title: "Календарь",
      route: "/",
    },
    {
      title: "О команде",
      route: "/",
    },
    {
      title: "Новости",
      route: "/",
    },
    {
      title: "Подписка",
      route: "/",
    },
  ], [menu]);
  
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent){
      if(event.ctrlKey && event.key.toLowerCase() === 'b'){
        event.preventDefault();
        setOpen(p => !p);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
   return () => window.removeEventListener('keydown', handleKeyDown);

  }, []);


  return (
    <>
      <div className="flex flex-col overflow-hidden relative h-screen w-screen">
        <Header open={open} setOpen={setOpen} />
        <div className="relative flex h-full w-full">
          <div
            className={`translate-y-10 transition-transform duration-500 ease-in-out ${
              open ? "transform translate-x-0" : "transform -translate-x-full"
            } w-64 bg-gray-800 z-10 fixed top-0 left-0 h-screen`}
          >
            <Sidebar menu={menuItems} />
          </div>
          <div
            onClick={() => open && setOpen(false)}
            className={`w-full h-full flex flex-col overflow-x-hidden overflow-y-scroll custom-scroll border-3 border-stone-100 transition-all duration-500 ${
              open ? "ml-64" : "ml-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
