import PageOne from "./MainPages/PageOne";
import PageAboutCommunity from "./MainPages/PageAboutCommunity";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import PageCompany from "./MainPages/PageCompany";
import Header from "../../Components/Header/Header";
import PageTemplate from "../../Components/PageTemplates/PageTemplate";

export default function MainPage() {
  const [open, setOpen] = useState(true);
  const avialablePages = [PageOne, PageAboutCommunity, PageCompany];

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
          {avialablePages.map((Page, index) => (
            <div
              key={index}
              className="relative flex flex-col min-w-full min-h-full max-w-full max-h-full"
            >
              <Page />
            </div>
          ))}
    </PageTemplate>
  );
}
