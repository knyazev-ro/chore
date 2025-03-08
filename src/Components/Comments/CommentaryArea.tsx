import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';


export default function CommentaryArea() {
    return (
      <div className="p-1 gap-2 flex w-full items-center justify-between">
        <div className="flex w-11/12 border-2 bg-stone-100">
        <TextareaAutosize
        maxRows={8}
        className="custom-scroll comfortaa w-full text-sm font-sans font-normal leading-5 px-3 py-4 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border-2 border-solid border-stone-600 hover:border-blue-500 focus:border-blue-500 bg-stone-900 text-stone-100 focus-visible:outline-0 box-border"
        aria-label="Write a message..."
        placeholder="Write a message..."
      />
        </div>
        <div className="p-1 justify-start flex flex-col w-1/12 h-full">
            <div className='relative w-full h-13 border-3 border-stone-950 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out active:-translate-y-1 group'>
            <div className='w-full h-full absolute flex justify-between items-center p-0.5'>
                <div className='bg-stone-950 w-full h-full flex justify-center items-center'>
                <SendIcon className='group-active:translate-y-2 transition-all duration-300 ease-in-out active:translate-y-2 group-active:bg-stone-50 rotate-270 bg-stone-100 p-0.5' sx={{ fontSize: 30, color:"#0C0A09" }} />
                </div>
            </div>
            <div className="h-1/6  bg-blue-500"></div>
            <div className="h-1/6  bg-yellow-500"></div>
            <div className="h-1/6  bg-rose-500"></div>

            <div className="h-1/6  bg-blue-500"></div>
            <div className="h-1/6  bg-yellow-500"></div>
            <div className="h-1/6  bg-rose-500"></div>
            </div>
        </div>
      </div>
    );
  }
  