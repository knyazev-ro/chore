import Modal from "../Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";
import MainTab from "../../Components/Tab/Tabs/MainTab";
import TimeTab from "../../Components/Tab/Tabs/TimeTab";
import Tab from "../../Components/Tab/Tab";
import AddTagPlus from "./AddTagPlus";
import ChoreStatusCell from "../../Chore/ChoreCard/ChoreStatusCell";
import StatusLine from "../../Components/StatusLine/StatusLine";

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

  return (
    <Modal showModal={showModal}>
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="z-10 flex flex-col w-11/12 h-11/12 bg-slate-900 rounded-3xl border-t-3 border-l-3 border-r-3 border-sky-500 shadow-md items-center py-1 overflow-hidden">
         
          <div className="bg-slate-800 h-16 border-green-500 flex items-center justify-between px-4 py-2 w-full z-1">
            <div className="flex gap-2 items-center w-72">
              <ChoreStatusCell value={singleChore} />
              <StatusLine chore={singleChore} columns={columns}/>
            </div>
            <div className="rounded-2xl border-double px-4 py-1 border-4 border-green-500 comfortaa text-rose-50">
              {!isNew || [...singleChore.title].length > 1
                ? singleChore.title
                : "Создать чор"}
            </div>

            <div className="w-72 flex justify-end">
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
          <div className="flex gap-1 w-full h-full bg-slate-900 rounded-2xl justify-between">
            <div className="flex flex-col w-1/2 h-full p-6 gap-2">
              <div className="flex-col bg-white border-2 border-green-500 rounded-2xl h-full flex p-2">
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
            </div>

            <div className="w-220 h-full p-6">
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
        <div className="absolute flex flex-col w-11/12 h-11/12 translate-y-1 rounded-3xl shadow-md overflow-hidden">
          <div
            className="h-full bg-sky-500 animate-pulse"
            style={{ width: `${widthPercentage}%` }}
          ></div>
        </div>
      </div>
    </Modal>
  );
}
