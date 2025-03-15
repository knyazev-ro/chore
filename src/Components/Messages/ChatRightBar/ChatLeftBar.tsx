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
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
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

  return (
    <>
      <div className="comfortaa flex w-109 max-w-109 h-full bg-stone-950 border-l-3 border-stone-100 overflow-y-scroll custom-scroll overflow-x-hidden relative">
        
        <div className="w-full h-full flex flex-col  gap-2 p-2 ">
          <div className="bg-stone-800 w-full flex flex-col p-3 gap-2">
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

          <div className="h-full bg-stone-800 flex flex-col text-stone-100 text-sm">
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
          <div className="w-full bg-stone-800 flex flex-col gap-2">
            <div
              onClick={() => {
                setOpenFileBar(false);
              }}
              className="h-full w-full bg-stone-900 p-3 hover:bg-stone-700 active:bg-stone-950 gap-2"
            >
              <div>
                <ChevronDoubleLeftIcon className="w-5 h-5" color="#FDC700" />
              </div>
            </div>

            <div className="w-full flex-wrap flex gap-1 justify-center p-1">
              <div className="w-18 h-18 bg-stone-900"></div>
              <div className="w-18 h-18 bg-stone-900"></div>
              <div className="w-18 h-18 bg-stone-900"></div>

              <div className="w-18 h-18 bg-stone-900"></div>
              <div className="w-18 h-18 bg-stone-900"></div>
              <div className="w-18 h-18 bg-stone-900"></div>

              <div className="w-18 h-18 bg-stone-900"></div>
              <div className="w-18 h-18 bg-stone-900"></div>
              <div className="w-18 h-18 bg-stone-900"></div>

              <div className="w-18 h-18 bg-stone-900"></div>
              <div className="w-18 h-18 bg-stone-900"></div>
              <div className="w-18 h-18 bg-stone-900"></div>

              <div className="w-18 h-18 bg-stone-900"></div>
              <div className="w-18 h-18 bg-stone-900"></div>
              <div className="w-18 h-18 bg-stone-900"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
