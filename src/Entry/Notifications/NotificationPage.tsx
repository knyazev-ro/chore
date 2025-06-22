import NotificationLayout from "../../Components/Layouts/NotificationLayout";
import NotificationCard from "../../Components/Notifications/NotificationCard/NotificationCard";
import PageTemplate from "../../Components/PageTemplates/PageTemplate";
import { BellAlertIcon } from "@heroicons/react/24/outline";

export default function NotificationPage() {

  const notifications = [
    {
      header: "Thomas Lokinson",
      notificationInfo: "just mentioned you in the chat",
      date: "1 day ago",
      viewed: false,
    },
    {
      header: "Alice Johnson",
      notificationInfo: "liked your post",
      date: "2 hours ago",
      viewed: true,
    },
    {
      header: "System Update",
      notificationInfo: "A new version of the app is available. Update now for better performance!",
      date: "10 minutes ago",
      viewed: false,
    },
    {
      header: "Security Alert",
      notificationInfo: "New login detected from an unrecognized device. Was this you?",
      date: "30 minutes ago",
      viewed: false,
    },
    {
      header: "Michael Smith",
      notificationInfo: "commented on your photo",
      date: "3 days ago",
      viewed: true,
    },
    {
      header: "Sophia Martinez",
      notificationInfo: "sent you a friend request",
      date: "5 minutes ago",
      viewed: false,
    },
    {
      header: "Backup Completed",
      notificationInfo: "Your data backup was successfully completed.",
      date: "1 hour ago",
      viewed: true,
    },
    {
      header: "Daniel Brown",
      notificationInfo: "shared your post",
      date: "1 week ago",
      viewed: true,
    },
    {
      header: "Emma Wilson",
      notificationInfo: "reacted to your story",
      date: "30 seconds ago",
      viewed: false,
    },
    {
      header: "Liam Anderson",
      notificationInfo: "invited you to an event",
      date: "4 days ago",
      viewed: true,
    },
    {
      header: "System Maintenance",
      notificationInfo: "Scheduled maintenance will occur on March 15 from 2:00 AM to 4:00 AM UTC.",
      date: "Yesterday",
      viewed: false,
    },
    {
      header: "Olivia Thompson",
      notificationInfo: "started following you",
      date: "10 hours ago",
      viewed: false,
    },
    {
      header: "James Miller",
      notificationInfo: "sent you a message",
      date: "just now",
      viewed: false,
    },
    {
      header: "Payment Received",
      notificationInfo: "Your subscription payment of $9.99 has been processed successfully.",
      date: "2 days ago",
      viewed: true,
    },
    {
      header: "Charlotte Garcia",
      notificationInfo: "updated her profile picture",
      date: "6 days ago",
      viewed: true,
    },
    {
      header: "Ethan Martinez",
      notificationInfo: "mentioned you in a comment",
      date: "12 minutes ago",
      viewed: false,
    },
    {
      header: "Mia Hernandez",
      notificationInfo: "replied to your comment",
      date: "45 minutes ago",
      viewed: true,
    },
  ];

  return (
    <>
      <NotificationLayout>
        <div className="absolute w-full h-full px-20 flex flex-col bg-blue-200">
          <div className="flex flex-col h-full gap-2.5 justify-end">
            <div className="flex items-end min-h-20 ">
              <div className="min-w-11 min-h-11 max-h-11 h-11 p-1.5 bg-stone-950">
                <BellAlertIcon color="white" />
              </div>
              <div className="comfortaa text-2xl text-stone-100 bg-stone-950 inline px-5 py-1.5">
                {"Notifications"}
              </div>

              <div className="p-4.5 h-11 border-l-3 border-l-white flex items-center justify-center bg-stone-950 comfortaa text-stone-100">
                {"100"}
              </div>
            </div>

            <div className="flex flex-col h-full w-full bg-rose-500 border-4 border-stone-950 overflow-y-scroll custom-scroll shadow-xl">
                {
                    notifications.map(e => (<NotificationCard notification={e}/>))
                }
            </div>
          </div>
        </div>
     </NotificationLayout>
    </>
  );
}
