export default function CommentCard({comment}:{comment:any}) {
    const {author, response, isMe} = comment;
  return (
    <>
      <div className={`relative gap-0.5 flex max-w-2/3 ${isMe ? "flex-row-reverse" : ""}`}>
        <img className="min-w-14 min-h-14 h-14 w-14 border-3 border-blue-500 translate-y-0.5" src={author.avatar} alt="Avatar"/>

        <div className="relative flex bg-stone-100">
          <div className="z-10 flex flex-col bg-stone-100 w-full border-3 p-3 gap-2">
            <div className="comfortaa inline text-stone-950 bg-yellow-400 box-decoration-clone p-1 border-b-3 border-b-yellow-800">
              {author.full_name}
            </div>
            <div className="flex comfortaa text-stone-950">
              {
                 response
                 }
            </div>
          </div>

          <div className={`flex absolute w-full h-full bg-blue-500 ${isMe ? "-translate-x-1.5 translate-y-1.5" : "translate-1.5"}`}>
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
