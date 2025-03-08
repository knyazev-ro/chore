export default function CommentCard({
  comment,
  authors,
}: {
  comment: any;
  authors: any;
}) {
  const { author, response, isMe, reactions } = comment;
  return (
    <>
      <div
        className={`relative gap-0.5 flex max-w-2/3 ${
          isMe ? "flex-row-reverse" : ""
        }`}
      >
        <img
          className="min-w-14 min-h-14 h-14 w-14 border-3 border-blue-500 translate-y-0.5"
          src={author.avatar}
          alt="Avatar"
        />

        <div className="relative flex bg-stone-100">
          <div className="z-10 flex flex-col bg-stone-100 w-full border-3 p-3 gap-2">
            <div className="comfortaa inline-block text-stone-950 bg-yellow-400 p-1 border-b-3 border-b-yellow-800">
              {author.full_name}
            </div>
            <div className="flex comfortaa text-stone-950">{response}</div>
            <div className="flex justify-end w-full gap-1">
              {reactions.map((e) => (
                <div className="flex bg-stone-200 p-1 px-2 gap-3">
                  {e.who.length > 5 ? (
                    <div className="w-7 h-7 min-w-7 min-h-7 bg-stone-400 flex rounded-full comfortaa text-stone-100 items-center justify-center text-sm">
                      {e.who.length}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      {authors
                        .filter((el) => e.who.includes(el.id))
                        .map((el) => (
                          <img
                            className="border-2 border-white min-w-7 min-h-7 h-7 w-7 -mr-2 rounded-full bg-stone-500"
                            src={el.avatar}
                          />
                        ))}
                    </div>
                  )}
                  <div className="">{e.reaction}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex absolute w-full h-full bg-blue-500 ${
              isMe ? "-translate-x-1.5 translate-y-1.5" : "translate-1.5"
            }`}
          >
            <div className="w-1/6  bg-blue-500"></div>
            <div className="w-1/6  bg-yellow-500"></div>
            <div className="w-1/6  bg-rose-500"></div>

            <div className="w-1/6  bg-blue-500"></div>
            <div className="w-1/6  bg-yellow-500"></div>
            <div className="w-1/6  bg-rose-500"></div>
          </div>
        </div>
      </div>
    </>
  );
}
