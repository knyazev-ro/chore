import CommentCard from "./CommentCard/CommentCard";

export default function CommentBox({
  conversation,
  authors
}: {
  conversation: Array<any>;
  authors: Array<any>;
}) {
      
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
            <CommentCard key={comment.id} comment={comment} authors={authors} />

          </div>
        ))}
      </div>
    </>
  );
}
