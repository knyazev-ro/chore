import { useState } from "react";
import ChoreTrello from "../../Components/Trello/ChoreTrello";
import TrelloHead from "./TrelloHead";
import Header from "../../Components/Header/Header";
import PageTemplate from "../../Components/PageTemplates/PageTemplate";

export default function TrelloPage({ project }: { project: any }) {
  const { columns } = project;

  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      id:0, 
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
    <PageTemplate menu={menuItems}>
      <TrelloHead project={project} />
      <div className="relative h-screen border-3 w-full overflow-hidden custom-scroll">
        <ChoreTrello columns={columns} />
      </div>
    </PageTemplate>
  );
}
