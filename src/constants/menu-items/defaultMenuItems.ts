import { BellAlertIcon, BuildingStorefrontIcon, CalendarIcon, ChatBubbleOvalLeftIcon, ClockIcon, DocumentDuplicateIcon, DocumentIcon, NewspaperIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

const menuItems = [
      {
      title: "N-Disk",
      route: "/n-disk",
      icon: DocumentIcon
    },
    {
      title: "Trello",
      route: "/trello",
      icon: ClockIcon
    },
    {
      title: "Messages",
      route: "/",
      icon: ChatBubbleOvalLeftIcon

    },
    {
      title: "Notifications",
      route: "/",
      icon: BellAlertIcon

    },
    {
      title: "Calendar",
      route: "/",
      icon: CalendarIcon

    },
    {
      title: "Company",
      route: "/",
      icon: BuildingStorefrontIcon

    },
    {
      title: "News",
      route: "/",
      icon: NewspaperIcon

    },
    {
      title: "Subscription",
      route: "/",
      icon: PaperAirplaneIcon
    },
  ];

export default menuItems;
