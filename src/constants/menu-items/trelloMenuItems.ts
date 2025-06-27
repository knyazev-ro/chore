import { BellAlertIcon, CalendarIcon, ChatBubbleOvalLeftIcon, ClockIcon, DocumentDuplicateIcon, NewspaperIcon, PaperAirplaneIcon, UserGroupIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

const menuItems = [
    {
      title: "N-Диск",
      route: "/n-disk",
      icon: DocumentDuplicateIcon

    },
    {
      title: "Камбан",
      route: "/trello",
      icon: ClockIcon

    },
    {
      title: "Сообщения",
      route: "/messages",
      icon: ChatBubbleOvalLeftIcon

    },
    {
      title: "Крауд",
      route: "/crowd",
      icon: VideoCameraIcon

    },
    {
      title: "Нотификации",
      route: "/notifications",
      icon: BellAlertIcon

    },
    {
      title: "Календарь",
      route: "/",
      icon: CalendarIcon

    },
    {
      title: "О команде",
      route: "/",
      icon: UserGroupIcon

    },
    {
      title: "Новости",
      route: "/",
      icon: NewspaperIcon

    },
    {
      title: "Подписка",
      route: "/",
      icon: PaperAirplaneIcon

    },
  ];

export default menuItems;
