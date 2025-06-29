import { BellAlertIcon, CalendarIcon, ChatBubbleOvalLeftIcon, ClockIcon, ComputerDesktopIcon, DocumentDuplicateIcon, NewspaperIcon, PaperAirplaneIcon, UserGroupIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

const menuItems = [
    {
      title: "Нейро-диск",
      route: "/n-disk",
      icon: DocumentDuplicateIcon
    },
    {
      title: "Рабочий стол",
      route: "/n-disk/dashboard",
      icon: ComputerDesktopIcon
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
