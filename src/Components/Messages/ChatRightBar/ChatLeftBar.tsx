export default function ChatLeftBar({chatActiveInfo}:{chatActiveIcon:any}){

    return <>
            <div className="comfortaa flex flex-col gap-2 p-2 w-109 h-full bg-stone-950 border-l-3 border-stone-100">
          <div className="bg-stone-800 w-full min-h-64 flex flex-col p-3 gap-2">
            <div className="flex gap-2 items-center">
              <div className="w-16 h-16 bg-stone-100 border-3"></div>
              <div className="flex flex-col text-stone-100 gap-1">
                <span className="bg-stone-950 px-2 py-1 items-center text-sm">Kendrick</span>
                <span className="bg-stone-950 px-2 py-1 items-center text-sm">Lamar</span>
              </div>
              {/* <div>(ddd)</div> */}
            </div>
            <div className="w-full h-full border-3"></div>
          </div>
          <div className="h-full bg-stone-800"></div>
        </div>
    </>
}