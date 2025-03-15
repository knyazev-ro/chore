import { Switch } from "@headlessui/react";
import { CheckIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ChatLeftBar({
  chatActiveInfo,
}: {
  chatActiveIcon: any;
}) {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="comfortaa flex flex-col gap-2 p-2 w-109 max-w-109 h-full bg-stone-950 border-l-3 border-stone-100">
        <div className="bg-stone-800 w-full flex flex-col p-3 gap-2">
          <div className="flex gap-2 items-center">
            <div className="w-16 h-16 bg-stone-100 border-3"></div>
            <div className="flex flex-col text-stone-100 gap-1">
              <span className="bg-stone-950 px-2 py-1 items-center text-sm">
                Kendrick
              </span>
              <span className="bg-stone-950 px-2 py-1 items-center text-sm">
                Lamar
              </span>
            </div>
            {/* <div>(ddd)</div> */}
          </div>

          <div className="w-full h-full border-3 flex flex-col p-2">
            <div className=" text-stone-100 text-sm gap-2 inline-flex">
              <span>
                <InformationCircleIcon className="w-6 h-6" color="#F5F5F4" />
              </span>
              <span className="w-full text-wrap break-words break-all">
                {
                  " somebody hjkdfbkhdsdfsdhjkdfbkhdsdfsdfgdfgdfgdfdfsdfsdfsdfsdfhjkdfbkhdsdfsdfgdfgdfgdfdfsdfsdfsdfsdffgdfgdfgdfdfsdfsdfsdfsdf"
                }
              </span>
            </div>
          </div>
          <div className="border-3 border-stone-950 p-2 flex text-stone-100 text-sm items-center gap-2 justify-between">
            <div>Уведомления</div>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </div>
        </div>
        <div className="h-full bg-stone-800"></div>
      </div>
    </>
  );
}
