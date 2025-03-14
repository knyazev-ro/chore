

export default function NotificationCard({notification}:{notification:any}) {
  
  const {header, notificationInfo, date, viewed} = notification;
  
    return (
    <div className="items-center py-2 px-4 w-full min-h-24 gap-4 bg-stone-100 border-b-1 border-stone-900 flex">
      <div className="min-w-14 min-h-14 rounded-full bg-stone-950"></div>
      <div className="flex flex-col">
        <div className=" flex gap-2 items-center">
          <div className="inline comfortaa">{header}</div>
          <div className="inline comfortaa text-stone-700">
            {notificationInfo}
          </div>
         {!viewed && <div className="flex w-2 h-2 rounded-full bg-blue-500"></div>}
        </div>

        <div className="comfortaa text-stone-800">{date}</div>
      </div>
    </div>
  );
}
