import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export default function PageOne() {
  const menuItems = [
    {
      id: 1,
      title: "Trello",
      route: "",
    },
    {
      id: 2,
      title: "Messages",
      route: "",
    },
    {
      id: 3,
      title: "Notifications",
      route: "",
    },
    {
      id: 4,
      title: "Calendar",
      route: "",
    },
    {
      id: 5,
      title: "Company",
      route: "",
    },
    {
      id: 5,
      title: "News",
      route: "",
    },
    {
      id: 5,
      title: "Subscription",
      route: "",
    },
  ];

  return (
    <>
      <div className="comfortaa flex-col flex bg-stone-950 w-64 h-full">
        <div className="flex text-stone-100 flex-col text-md py-6 px-5 h-full justify-center">
          {menuItems.map((e) => (
            <>
              <div
                key={e.id}
                className="relative flex items-center justify-between group transition-all duration-500 ease-in-out hover:bg-stone-900 py-4 px-3 overflow-hidden"
              >
                <div className="z-10">{e.title}</div>
                <ChevronDoubleRightIcon
                  className="group-hover:opacity-100 transition-all duration-200 ease-in-out opacity-0 w-4"
                  color="white"
                />
                <div className="absolute w-40 h-40 rounded-full group-active:bg-stone-700/80 group-active:animate-ping translate-x-5"></div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full h-full -z-10 absolute">
        <div className="h-1/9 w-full bg-blue-500"></div>
        <div className="h-1/9 w-full bg-yellow-500"></div>
        <div className="h-1/9 w-full bg-rose-500"></div>
        <div className="h-1/9 w-full bg-blue-500"></div>
        <div className="h-1/9 w-full bg-yellow-500"></div>
        <div className="h-1/9 w-full bg-rose-500"></div>
        <div className="h-1/9 w-full bg-blue-500"></div>
        <div className="h-1/9 w-full bg-yellow-500"></div>
        <div className="h-1/9 w-full bg-rose-500"></div>
      </div>
    </>
  );
}
