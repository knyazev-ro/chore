import Modal from "../Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";
import MainTab from "../../Components/Tab/Tabs/MainTab";
import TimeTab from "../../Components/Tab/Tabs/TimeTab";
import Tab from "../../Components/Tab/Tab";
import AddTagPlus from "./AddTagPlus";
import ChoreStatusCell from "../../Chore/ChoreCard/ChoreStatusCell";
import StatusLine from "../../Components/StatusLine/StatusLine";
import TimePing from "../../Components/TimePing/TimePing";
import DataTab from "../../Components/Tab/Tabs/DataTab";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { PaintBrushIcon } from "@heroicons/react/24/solid";
import CommentTab from "../../Components/Tab/Tabs/CommentTab";
import PersonTab from "../../Components/Tab/Tabs/PersonTab";
import { HandRaisedIcon } from '@heroicons/react/24/solid';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  PencilIcon,
  TrashIcon,
  PaperClipIcon,
  ClipboardDocumentIcon
} from '@heroicons/react/16/solid'

export default function CurrentChoreModal({
  setShowModal,
  showModal,
  chore,
  isNew = false,
}: {
  setShowModal: any;
  showModal: boolean;
  chore: any;
  isNew: boolean;
}) {
  const { estimation, duration } = chore;
  const widthPercentage =
    (duration / estimation) * 100 > 100 ? 100 : (duration / estimation) * 100;

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
      component: PersonTab,
    },
    {
      id: 3,
      title: "Диск",
      current: false,
      component: DataTab,
    },
    {
      id: 4,
      title: "Комментарии",
      current: false,
      component: CommentTab,
    },
  ]);

  const [singleChore, setSingleChore] = useState({
    id: chore?.id ?? null,
    title: chore?.title ?? "",
    description: chore?.description ?? "",
    status: chore?.status ?? null,
    estimationTime: chore?.estimation_time ?? "",
    estimation: chore?.estimation ?? 0,
    durationTime: chore?.duration_time ?? "",
    duration: chore?.duration ?? 0,
    status_label: chore?.status_label ?? "",
    tags: chore?.options?.tags ?? [],
    createdBy: chore?.created_by ?? "",
    responsible: chore?.responsible ?? "",
    closedBy: chore?.closed_by ?? "",
    auditors: chore?.auditors ?? [],
    accomplicies: chore?.accomplicies ?? [],
    project: {
      id: chore?.project?.id ?? null,
      title: chore?.project?.title ?? "",
      logo: chore?.project?.logo ?? "",
    },
  });

  useEffect(() => {
    setSingleChore({
      id: chore?.id ?? null,
      title: chore?.title ?? "",
      description: chore?.description ?? "",
      status: chore?.status ?? 1,
      estimationTime: chore?.estimation_time ?? "",
      estimation: chore?.estimation ?? 0,
      durationTime: chore?.duration_time ?? "",
      duration: chore?.duration ?? 0,
      status_label: chore?.status_label ?? "New",
      tags: chore?.options?.tags ?? [],
      createdBy: chore?.created_by ?? "",
      responsible: chore?.responsible ?? "",
      closedBy: chore?.closed_by ?? "",
      auditors: chore?.auditors ?? [],
      accomplicies: chore?.accomplicies ?? [],
      project: {
        id: chore?.project?.id ?? null,
        title: chore?.project?.title ?? "",
        logo: chore?.project?.logo ?? "",
      },
    });
  }, [showModal]);


  const columns = [
    {
      id: 0,
      title: "Важное",
      bg_color: '#D1E8FF',
      title_color: '#1DA1F2',
      order: 0,
    },
    {
      id: 1,
      title: "Не очень важное",
      bg_color: '#E2F1FA',
      title_color: '#657786',
      order: 1,
    },
    {
      id: 2,
      title: "В процессе",
      bg_color: '#FFF1D4',
      title_color: '#FFAD1F',
      order: 2,
    },
    {
      id: 3,
      title: "Завершено",
      bg_color: '#D9F0D7',
      title_color: '#17BF63',
      order: 3,
    },
    {
      id: 4,
      title: "Ожидание",
      bg_color: '#FEE2D6',
      title_color: '#E0245E',
      order: 4,
    },
    {
      id: 5,
      title: "Срочно!",
      bg_color: '#FFD1D1',
      title_color: '#E0245E',
      order: 5,
    },
    {
      id: 6,
      title: "Может подождать",
      bg_color: '#D8E3E9',
      title_color: '#8899A6',
      order: 6,
    },
    {
      id: 7,
      title: "Архив",
      bg_color: '#E9E9F3',
      title_color: '#AAB8C2',
      order: 7,
    },
  ];

  const onCloseModal = () => {
    setShowModal(false);
  }

  return (
    <Modal showModal={showModal} onCloseModal={onCloseModal}>
      <div className="w-[calc(100vw-10rem)] h-[calc(100vh-2rem)] relative">
        <div className="w-full flex h-full items-center justify-center">

        <div className="z-10 flex flex-col w-full h-full bg-stone-100 border-t-4 border-l-4 border-r-4 border-black shadow-md items-center overflow-hidden">
         
          <div className="z-20 bg-blue-600 h-16 flex items-center justify-between px-4 py-2 w-full">
            <div className="flex gap-2 items-center w-72">
              <ChoreStatusCell value={singleChore} />
              <StatusLine chore={singleChore} columns={columns}/>
            </div>
            <div className="flex border-double px-4 gap-2 py-1 border-4 border-blue-700 comfortaa text-rose-50 bg-stone-100">
              {/* {!isNew || [...singleChore.title].length > 1
                ? singleChore.title
                : "Создать чор"} */
                }
                <Cog6ToothIcon className="w-6 h-6 text-blue-500" />
                <XMarkIcon className="w-6 h-6 text-yellow-500 stroke-4" />
                <PaintBrushIcon className="w-6 h-6 text-rose-500" />
            </div>

            <div className="w-72 flex justify-end items-center gap-4">
              
              <div className="flex flex-col relative">
              <Menu>

              <MenuButton className="hover:scale-102 group flex relative cursor-pointer">
                <div className="flex w-9 h-9 border-3 active:rotate-4 transition-all duration-100 ease-in-out bg-blue-500 justify-center items-center ">
                  <div className="w-full h-full active:rotate-24 transition-all duration-200 ease-in-out flex justify-center items-center">
                  <HandRaisedIcon className="h-6 w-6 text-stone-100" />
                  </div>
                  </div>
                <div className="absolute w-full h-full bg-stone-950 -z-10 translate-1.5"></div>
              </MenuButton>

              <MenuItems className={"comfortaa absolute translate-y-10.5 w-60 bg-stone-100/95 backdrop-blur-3xl p-2 flex flex-col gap-2 border-3"}>
              
              <MenuItem>
              <div className="cursor-pointer active:translate-x-10 hover:bg-stone-950/95 hover:border-stone-100/50 active:bg-stone-100/50 active:text-stone-200/50 transition-all duration-400 ease-in-out active:border-stone-200/50 hover:text-stone-100 group flex justify-between items-center border-2 px-2 py-1">Копировать <div><ClipboardDocumentIcon className="size-4 fill-stone-950 group-hover:fill-stone-100 group-active:fill-stone-200"/></div></div>
              </MenuItem>

              <MenuItem>
              <div className="cursor-pointer active:translate-x-10 hover:bg-stone-950/95 hover:border-stone-100/50 active:bg-stone-100/50 active:text-stone-200/50 transition-all duration-400 ease-in-out active:border-stone-200/50 hover:text-stone-100 group flex justify-between items-center border-2 px-2 py-1">Создать подзадачу <div><PencilIcon className="size-4 fill-stone-950 group-hover:fill-stone-100 group-active:fill-stone-200"/></div></div>
              </MenuItem>

              <MenuItem>
              <div className="cursor-pointer active:translate-x-10 hover:bg-stone-950/95 hover:border-stone-100/50 active:bg-stone-100/50 active:text-stone-200/50 transition-all duration-400 ease-in-out active:border-stone-200/50 hover:text-stone-100 group flex justify-between items-center border-2 px-2 py-1">Поделиться <div><PaperClipIcon className="size-4 fill-stone-950 group-hover:fill-stone-100 group-active:fill-stone-200"/></div></div>
              </MenuItem>

              <MenuItem>
              <div className="cursor-pointer active:translate-x-10 hover:bg-stone-950/95 hover:border-stone-100/50 active:bg-stone-100/50 active:text-stone-200/50 transition-all duration-400 ease-in-out active:border-stone-200/50 hover:text-stone-100 group flex justify-between items-center border-2 px-2 py-1">Удалить <div><TrashIcon className="size-4 fill-stone-950 group-hover:fill-stone-100 group-active:fill-stone-200"/></div></div>
              </MenuItem>
              
              </MenuItems>

              </Menu>
              </div>

              <TimePing durationTime={singleChore.durationTime} estimationTime={singleChore.estimationTime}/>
              <div
                className="w-9 h-9 bg-slate-50 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                <XMarkIcon className="w-6 h-6 text-rose-600" strokeWidth={2} />
              </div>
            </div>
          </div>

          <div className="flex w-full max-h-11/12 min-h-11/12 p-2">


          {/* Основной контейнер */}
          <div className="flex gap-1 w-full h-full bg-stone-100 justify-between">
            <div className="relative flex flex-col w-1/2 h-full p-6 gap-2">
              <div className="relative flex-col  border-3 h-full flex">
                <div className="z-10 flex flex-col bg-white justify-between h-full p-3">


                <textarea
                  className="bg-white comfortaa text-2xl border-b-2 p-3 border-b-slate-300 focus:outline-none text-slate-800 placeholder-gray-300 custom-scroll min-h-20 max-h-32 h-20"
                  value={singleChore.title}
                  placeholder={"Название чора..."}
                  onChange={(e) =>
                    setSingleChore({ ...singleChore, title: e.target.value })
                  }
                />

                <div className="flex flex-col justify-between h-full">
                  <textarea
                    className="flex p-2 placeholder-gray-300 h-full focus:outline-none overflow-y-scroll overflow-hidden custom-scroll"
                    placeholder={"Текст чора"}
                    value={singleChore.description}
                    onChange={(e) =>
                      setSingleChore({
                        ...singleChore,
                        description: e.target.value,
                      })
                    }
                  />
                  <AddTagPlus
                    chore={singleChore}
                    setSingleChore={setSingleChore}
                  />
                </div>
                </div>
              <div className="absolute bg-blue-600 border-3 h-full w-full translate-2"></div>
              </div>
            </div>

            <div className="z-10 w-220 h-full p-6">
              <div className="h-full flex">
                <Tab
                  tabs={tabs}
                  setTabs={setTabs}
                  chore={singleChore}
                  setChore={setSingleChore}
                />
              </div>
            </div>
          </div>
        </div>
          </div>
        <div className="absolute flex flex-col w-full h-full translate-y-2 shadow-md overflow-hidden border-4">
          <div
            className="h-full bg-blue-600 animate-pulse"
            style={{ width: `${widthPercentage}%` }}
          ></div>
        </div>
                </div>
      </div>
    </Modal>
  );
}
