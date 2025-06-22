export default function NotificationCard({
  notification,
}: {
  notification: any;
}) {
  const { header, notificationInfo, date, viewed } = notification;

  return (
    <div className="items-center pz-4 p-6 w-full gap-4 bg-stone-100 border-b-2 border-rose-500 flex">
      <div className="min-w-14 min-h-14 rounded-full bg-stone-950"></div>
      <div className="flex flex-col">
        <div className="gap-2 inline-flex">
          <div className="comfortaa inline-flex items-center gap-2 flex-wrap py-1">
            <span>{header}</span>
            <span className="text-stone-700 inline-flex items-center gap-4">{notificationInfo}

          {!viewed && <span className="w-2 h-2 min-w-2 min-h-2 rounded-full bg-blue-500"></span>}
            </span>
          </div>
        </div>

        <div className="comfortaa text-stone-600">{date}</div>
      </div>
    </div>
  );
}
