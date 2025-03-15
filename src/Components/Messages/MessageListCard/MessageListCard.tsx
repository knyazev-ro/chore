
export default function MessageListCard({messageInfo}:{messageInfo:any}){
    const {name, avatar, lastMessage} = messageInfo;
    return <>
                <div className="flex px-3 py-3 gap-2 w-full items-center hover:bg-stone-950 transition-all duration-300 ease-in-out relative">
                <img className="flex w-14 h-14 min-w-14 min-h-14 rounded-full bg-rose-500" src={avatar} alt="A"/>
                <div className="flex flex-col text-stone-100 max-w-full w-full truncate">
                    <div>{name}</div>
                    <div className="truncate">{lastMessage}</div>
                </div>
            </div>
    </>
}