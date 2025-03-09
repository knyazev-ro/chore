import { useState } from "react";
import ChoreTrello from "../../Components/Trello/ChoreTrello";
import TrelloHead from "./TrelloHead";
import Header from "../../Components/Header/Header";
import PageTemplate from "../../Components/PageTemplates/PageTemplate";

export default function TrelloPage({ project }: { project: any }) {
  const [open, setOpen] = useState(false);
  const { columns } = project;

  const menuItems = [
    {
      id: 1,
      title: "Trello",
      route: "/trello",
    },
    {
      id: 2,
      title: "Messages",
      route: "/",
    },
    {
      id: 3,
      title: "Notifications",
      route: "/",
    },
    {
      id: 4,
      title: "Calendar",
      route: "/",
    },
    {
      id: 5,
      title: "Company",
      route: "/",
    },
    {
      id: 5,
      title: "News",
      route: "/",
    },
    {
      id: 5,
      title: "Subscription",
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
