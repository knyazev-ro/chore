import NotificationCard from "../../Components/Notifications/NotificationCard/NotificationCard";
import PageTemplate from "../../Components/PageTemplates/PageTemplate";
import { BellAlertIcon } from "@heroicons/react/24/outline";

export default function NotificationPage() {
  const menuItems = [
    {
      id: 0,
      title: "N-Диск",
      route: "/",
    },
    {
      id: 1,
      title: "Камбан",
      route: "/trello",
    },
    {
      id: 2,
      title: "Сообщения",
      route: "/",
    },
    {
      id: 3,
      title: "Нотификации",
      route: "/notifications",
    },
    {
      id: 4,
      title: "Календарь",
      route: "/",
    },
    {
      id: 5,
      title: "О команде",
      route: "/",
    },
    {
      id: 5,
      title: "Новости",
      route: "/",
    },
    {
      id: 5,
      title: "Подписка",
      route: "/",
    },
  ];

  return (
    <>
      <PageTemplate menu={menuItems}>
        <div className="w-full h-full px-60 flex flex-col img">
          <div className="flex flex-col h-full gap-2.5 justify-end">
            <div className="flex items-end h-24 ">
              <div className="w-11 h-11 p-1.5 bg-stone-950">
                <BellAlertIcon color="white" />
              </div>
              <div className="comfortaa text-2xl text-stone-100 bg-stone-950 inline px-5 py-1.5">
                {"Notifications"}
              </div>

              <div className="p-4.5 h-11 border-l-3 border-l-white flex items-center justify-center bg-stone-950 comfortaa text-stone-100">
                {"3"}
              </div>
            </div>

            <div className="flex flex-col w-full bg-rose-500 border-3 border-stone-950 overflow-y-scroll custom-scroll shadow-xl gap-1">
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>

                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>

                <div className="min-h-16"></div>
            </div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
