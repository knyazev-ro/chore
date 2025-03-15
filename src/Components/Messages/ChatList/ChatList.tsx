import MessageListCard from "./MessageListCard/MessageListCard";

export default function ChatList({ chats }: { chats: any }) {
  return (
    <>
      <div className="w-120 max-w-full min-w-90 h-full overflow-y-scroll custom-scroll bg-stone-900 flex flex-col gap-2 border-r-3 border-stone-100">
        {chats.map((e) => (
          <MessageListCard messageInfo={e} />
        ))}
      </div>
    </>
  );
}
