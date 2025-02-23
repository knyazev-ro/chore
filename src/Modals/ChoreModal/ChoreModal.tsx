import Modal from "../Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Main from "./Tabs/Main";
import Time from "./Tabs/Time";

export default function ChoreModal({
  setShowModal,
  showModal,
}: {
  setShowModal: any;
  showModal: boolean;
}) {
  const people = [
    { id: 1, name: "Иван Иванов" },
    { id: 2, name: "Анна Петрова" },
    { id: 3, name: "Сергей Козлов" },
  ];

  const timeOptions = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

  const tags = ["Важное", "Работа", "Личное", "Время", "Проект"];

  const projects = ["Проект A", "Проект B", "Проект C"];

  // Состояния для выбора
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState("");

  const [tabs, setTabs] = useState([
    {
      id: 0,
      title: "Основное",
      current: true,
      component: (data: { data: any }) => <Main data={data.data} />,
    },
    {
      id: 1,
      title: "Время",
      current: false,
      component: Time,
    },
    {
      id: 2,
      title: "Пользователи",
      current: false,
      component: Main,
    },
    {
      id: 3,
      title: "Дополнительно",
      current: false,
      component: Main,
    },
  ]);

  return (
    <Modal showModal={showModal}>
      <div className="flex flex-col w-1/2 h-2/3 bg-rose-50 rounded-2xl border-3 border-rose-200 shadow-md items-center">
        <div className="flex rounded-t-2xl items-center justify-between px-2 py-2 w-full">
          <div className="w-9"></div>
          <div className="comfortaa">{"Создать чор"}</div>

          <div
            className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            <XMarkIcon className="w-6 h-6 text-rose-600" strokeWidth={2} />
          </div>
        </div>

        {/* Основной контейнер */}
        <div className="flex flex-col py-7 h-10/12 w-full items-center overflow-y-scroll overflow-hidden custom-scroll z-0">
          <div className="border-2 border-rose-500 p-4 rounded-md space-y-3 w-11/12">
            <div className="flex gap-2 -translate-y-11">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => {
                    setTabs(
                      tabs.map((tab) => {
                        tab.current = false;
                        return tab;
                      })
                    );
                    tab.current = true;
                  }}
                  className={
                    "cursor-pointer h-7 border-2 border-rose-500 flex px-3 py-1 rounded-t-xl comfortaa text-sm " +
                    (tab.current
                      ? "text-slate-900 bg-rose-50 border-b-rose-50"
                      : "bg-rose-500 border-b-rose-500 text-rose-50")
                  }
                >
                  {tab.title}
                </div>
              ))}
            </div>
            
            <>{tabs.find((tab) => tab.current)?.component({ data: "llml" })}</>
          </div>
        </div>
      </div>
    </Modal>
  );
}
