import { Switch } from "@headlessui/react";
import {
  CheckIcon,
  FolderArrowDownIcon,
  FolderIcon,
  FolderOpenIcon,
  GifIcon,
  InformationCircleIcon,
  PaperClipIcon,
  PhotoIcon,
  PlayCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { ChevronDoubleLeftIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useRef, useState, useEffect } from "react";

export default function ChatLeftBar({
  chatActiveInfo,
}: {
  chatActiveIcon: any;
}) {
  const [enabled, setEnabled] = useState(false);
  const [openFileBar, setOpenFileBar] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && openFileBar) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [openFileBar]);

  const tabs = [
    {
      id: 0,
      name: "Вложения",
      icon: FolderOpenIcon,
    },
    {
      id: 1,
      name: "Фото",
      icon: PhotoIcon,
    },
    {
      id: 2,
      name: "Видео",
      icon: VideoCameraIcon,
    },
    {
      id: 3,
      name: "Файлы",
      icon: FolderArrowDownIcon,
    },
    {
      id: 4,
      name: "Ссылки",
      icon: PaperClipIcon,
    },
    {
      id: 5,
      name: "Гифки",
      icon: GifIcon,
    },
  ];

  const files = [
    {
      id: 1,
      title: "file 1.png",
      type: 1, // image type
      cover: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      title: "file 2.mp4",
      type: 2, // video type
      cover: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      title: "file 3.txt",
      type: 3, // some file type
      cover: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      title: "google main page",
      type: 4, // ref like http https ref type
      cover: "https://picsum.photos/200/300?random=4",
    },
    {
      id: 5,
      title: "file 5.gif",
      type: 5, // gif type
      cover: "https://media1.tenor.com/m/SH6WwFvNriwAAAAd/dokapon-dokapon-kingdom.gif",
    },
    {
      id: 6,
      title: "file 6.jpg",
      type: 1, // image type
      cover: "https://picsum.photos/200/300?random=6",
    },
    {
      id: 7,
      title: "file 7.mov",
      type: 2, // video type
      cover: "https://picsum.photos/200/300?random=7",
    },
    {
      id: 8,
      title: "file 8.pdf",
      type: 3, // document type
      cover: "https://picsum.photos/200/300?random=8",
    },
    {
      id: 9,
      title: "file 9.gif",
      type: 5, // gif type
      cover: "https://media1.tenor.com/m/d-w-FAgmrVUAAAAC/tornado-twister.gif",
    },
    {
      id: 10,
      title: "file 10.mp3",
      type: 6, // audio type
      cover: "https://picsum.photos/200/300?random=10",
    },
  ];
  

  return (
    <>
      <div className="comfortaa flex w-109 max-w-109 h-full bg-stone-950 border-l-3 border-stone-100 overflow-y-scroll custom-scroll overflow-x-hidden relative">
        <div className="w-full h-full flex flex-col  gap-2 p-2 ">
          <div className="bg-stone-800 w-full flex flex-col p-3 gap-2 border-3 border-stone-950">
            <div className="flex gap-2 items-center">
              <div className="w-17 h-17 bg-stone-100 border-3"></div>
              <div className="flex flex-col text-stone-100 gap-1">
                <span className="bg-stone-950 px-2 py-1 items-center text-md">
                  Kendrick
                </span>
                <span className="bg-stone-950 px-2 py-1 items-center text-md">
                  Lamar
                </span>
              </div>
              {/* <div>(ddd)</div> */}
            </div>

            <div className="w-full h-full flex flex-col p-2">
              <div className=" text-stone-100 text-sm gap-2 inline-flex">
                <span>
                  <InformationCircleIcon className="w-6 h-6" color="#FDC700" />
                </span>
                <span className="w-full text-wrap break-words whitespace-break-spaces">
                  {
                    "Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper. Regarded as one of the greatest rappers of all time, he was awarded the 2018 Pulitzer Prize for Music, becoming the first musician outside of the classical and jazz genres to receive the honor."
                  }
                </span>
              </div>
            </div>
            <div className=" p-2 flex text-stone-100 text-sm items-center gap-2 justify-between">
              <div>Уведомления</div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-yellow-500"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </div>
          </div>

          <div className="h-full bg-stone-800 flex flex-col text-stone-100 text-sm border-3 border-stone-950">
            {tabs.map((e) => (
              <div
                onClick={() => setOpenFileBar(true)}
                className="px-4 py-3 gap-6 flex w-full hover:bg-stone-900 transition-all duration-300 ease-in-out active:bg-stone-950 items-center"
              >
                <div>
                  <e.icon className="w-5 h-5" color="#FDC700" />
                </div>
                <div className="" key={e.id}>
                  {e.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={ref}
          className="absolute w-full h-screen bg-stone-950 flex flex-col p-2"
          style={{
            transform: openFileBar ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <div className="w-full bg-stone-800 flex flex-col gap-2 border-3 border-stone-950">
            <div
              onClick={() => {
                setOpenFileBar(false);
              }}
              className="w-full bg-stone-900 p-3 hover:bg-stone-700 active:bg-stone-950 gap-2 border-b-3 border-stone-950"
            >
              <div>
                <ChevronDoubleLeftIcon className="w-5 h-5" color="#FDC700" />
              </div>
            </div>

            <div className="w-full h-full flex-wrap flex gap-1 justify-center p-1">
              {
                  files.map(e => (
                    <div className="relative flex cursor-pointer">
                        {e.type !== 3 ? <img className="w-18 h-18 bg-stone-900 border-2" src={e.cover}/>
                    : <div className="w-18 h-18 border-2 flex flex-col items-center justify-center bg-stone-100 gap-1">
                        <div>
                        <span className="bg-stone-950 text-stone-100 px-3 py-0.5">{e.title.split('.')[1].toUpperCase()}</span>
                        </div>
                        <div className="text-xs text-clip">{e.title}</div>
                    </div>    
                    }
                        {e.type === 2 && <div className="absolute w-full h-full bg-stone-500/10 backdrop-blur-[2px] flex items-center justify-center">
                            <PlayIcon className="w-6 h-6" color="rgba(255, 255, 255, 0.7)"/>
                        </div>}

                    </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
