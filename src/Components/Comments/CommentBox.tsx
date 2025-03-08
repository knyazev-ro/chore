import CommentCard from "./CommentCard/CommentCard";

export default function CommentBox({
  conversation,
}: {
  conversation: Array<any>;
}) {
 
    


    conversation = [
        {
          id: 1,
          author: {
            id: 456,
            full_name: "Oleg Muraev",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
          },
          isMe: true,
          response: "Привет! Как дела? Давно не слышались.",
          reactions: ["👍", "🔥"],
          created_at: "12:25:59 12/12/2025",
        },
        {
          id: 2,
          author: {
            id: 481,
            full_name: "Kendrick Lamar",
            avatar: "https://randomuser.me/api/portraits/men/80.jpg",
          },
          isMe: false,
          response: "Эй, Олег! Всё отлично, работаю над новым альбомом. А у тебя что нового?",
          reactions: ["🎵", "💯"],
          created_at: "12:29:00 12/12/2025",
        },
        {
          id: 3,
          author: {
            id: 456,
            full_name: "Oleg Muraev",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
          },
          isMe: true,
          response: "Круто! Жду новых треков. Сам работаю над одним проектом, скоро покажу.",
          reactions: ["🔥", "👀"],
          created_at: "12:31:45 12/12/2025",
        },
        {
          id: 4,
          author: {
            id: 481,
            full_name: "Kendrick Lamar",
            avatar: "https://randomuser.me/api/portraits/men/80.jpg",
          },
          isMe: false,
          response: "Звучит интересно! Дай знать, когда будет готово.",
          reactions: ["👌", "💪"],
          created_at: "12:34:10 12/12/2025",
        },
      ];
      
  if (conversation.length <= 0) {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-col w-full h-full gap-8 p-4 overflow-y-scroll custom-scroll">
        {conversation.map((comment) => (
          <div
            className={"flex w-full"}
          style={{
            justifyContent: comment.isMe ? "end" : "start",
          }}
          >
            <CommentCard key={comment.id} comment={comment} />

          </div>
        ))}
      </div>
    </>
  );
}
