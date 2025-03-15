export default function MessageListCard({ messageInfo }: { messageInfo: any }) {
  const { name, avatar, lastMessage } = messageInfo;

  return (
    <>
      <div className="group flex px-3 py-3 gap-4 w-full min-h-20 items-center hover:bg-stone-950 transition-all duration-300 ease-in-out relative overflow-hidden comfortaa">
        <img
          className="flex w-14 h-14 min-w-14 min-h-14 rounded-full bg-rose-500  z-10"
          src={avatar}
          alt="A"
        />
        <div className="flex flex-col text-stone-100 max-w-full w-full truncate z-10">
          <div>{name}</div>
          <div className="truncate text-sm">{lastMessage}</div>
        </div>

        <div className="absolute w-36 h-36 translate-x-30 group-active:bg-stone-700/20 rounded-full transition-all duration-100 group-active:scale-150 group-active:animate-ping">

        </div>
      </div>
    </>
  );
}
