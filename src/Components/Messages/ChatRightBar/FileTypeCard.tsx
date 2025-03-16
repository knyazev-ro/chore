import { PaperClipIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function FileTypeCard({ file }: { file: any }) {
  const { cover, type, title } = file;

  const optionFile = () => {
    switch (type) {
      case 1:
        return (
          <>
            <img className="w-18 h-18 bg-stone-900 border-2" src={cover} />
          </>
        );

      case 2:
        return (
          <>
            <img className="w-18 h-18 bg-stone-900 border-2" src={cover} />
            <div className="absolute w-full h-full bg-stone-500/10 backdrop-blur-[2px] flex items-center justify-center">
              <PlayIcon className="w-6 h-6" color="rgba(255, 255, 255, 0.7)" />
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className="w-18 h-18 border-2 flex flex-col items-center justify-center bg-stone-100 gap-1">
              <div>
                <span className="bg-stone-950 text-stone-100 px-3 py-0.5">
                  {title.split(".")[1].toUpperCase()}
                </span>
              </div>
              <div className="text-xs text-clip">{title}</div>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="w-18 h-18 border-2 flex flex-col items-center justify-center bg-stone-100 gap-1">
              <PaperClipIcon className="w-5 h-5" color="black" />
              <div className="text-xs text-clip">{title}</div>
            </div>
          </>
        );

      case 5:
        return (
          <>
            <img className="w-18 h-18 bg-stone-900 border-2" src={cover} />
          </>
        );

      case 6:
        return (
          <>
            <div className="w-18 h-18 bg-stone-100 border-2 flex items-center justify-center">
              <PlayCircleIcon className="w-9 h-9" color="black" />
            </div>
          </>
        );

      default:
        return (
          <>
            <div className="w-18 h-18 bg-stone-100 border-2 flex items-center justify-center">
              None
            </div>
          </>
        );
    }
  };

  return (
    <>
      <div className="relative flex cursor-pointer">{optionFile()}</div>
    </>
  );
}
