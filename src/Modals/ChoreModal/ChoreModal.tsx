import Modal from "../Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import MainTab from "./Tab/Tabs/MainTab";
import TimeTab from "./Tab/Tabs/TimeTab";
import Tab from "./Tab/Tab";
import {PlusIcon} from "@heroicons/react/24/outline";
import Tags from "../../Chore/ChoreCard/Tags";

export default function ChoreModal({
  setShowModal,
  showModal,
}: {
  setShowModal: any;
  showModal: boolean;
}) {
  const [tabs, setTabs] = useState([
    {
      id: 0,
      title: "Основное",
      current: true,
      component: MainTab,
    },
    {
      id: 1,
      title: "Время",
      current: false,
      component: TimeTab,
    },
    {
      id: 2,
      title: "Пользователи",
      current: false,
      component: MainTab,
    },
    {
      id: 3,
      title: "Дополнительно",
      current: false,
      component: MainTab,
    },
    {
      id: 4,
      title: "Комментарии",
      current: false,
      component: MainTab,
    },
  ]);

  return (
    <Modal showModal={showModal}>
      <div className="flex flex-col w-11/12 h-5/6 bg-slate-900 rounded-2xl border-3 border-sky-500 shadow-md items-center py-1">
        <div className="bg-slate-800 h-16 border-green-500 flex rounded-t-2xl items-center justify-between px-2 py-2 w-full z-1">
          <div className="w-9"></div>
          <div className="rounded-2xl border-double px-4 py-1 border-4 border-green-500 comfortaa text-rose-50">
            {"Создать чор"}
          </div>

          <div
            className="w-9 h-9 bg-slate-50 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            <XMarkIcon className="w-6 h-6 text-rose-600" strokeWidth={2} />
          </div>
        </div>

        {/* Основной контейнер */}
        <div className="flex gap-1 w-full h-full bg-slate-900 rounded-2xl">
          <div className="flex flex-col w-140 h-full p-6 gap-2">
            <div className="flex-col bg-white rounded-md h-full flex p-2">
              <input className="bg-white comfortaa text-2xl border-b-2 p-3 border-b-slate-300 focus:outline-none resize-none text-slate-800 placeholder-gray-300" value={""} placeholder={"Название чора..."}/>

              <div className="flex flex-col justify-between h-full">
                <textarea className="flex p-2 placeholder-gray-300 h-full focus:outline-none overflow-y-scroll overflow-hidden custom-scroll" placeholder={"Текст чора"}/>
                <div className="flex h-10 rounded-2xl justify-between px-2">
                  <div className="flex items-center text-gray-300 text-[12px] gap-2">
                    <div>{"tags: "}</div>
                    {/* <Tags chore={chore} fontSize="12px" /> */}
                  </div>
                  <div className="flex items-center justify-center">
                    <PlusIcon className="h-6 w-6 text-green-600 font-bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-220 h-full p-2">
            <div className="h-full flex border-2 border-green-500 rounded-2xl">
            <Tab tabs={tabs} setTabs={setTabs} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
