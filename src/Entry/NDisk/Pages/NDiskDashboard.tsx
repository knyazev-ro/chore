import { Transition, TransitionChild } from "@headlessui/react";
import NDiskLayout from "../../../Components/Layouts/NDiskLayout";
import { Fragment, useEffect, useState } from "react";
import NDiskTable from "../../../Components/Tables/NDiskTable";
import { UserIcon } from "@heroicons/react/24/outline";

export default function NDiskDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <NDiskLayout>
      <div className="flex w-full h-full gap-2">
        <div className="min-w-82 w-82 h-[calc(100vh-5rem)] overflow-y-scroll overflow-x-hidden custom-scroll">
          <Transition
            appear
            show={isLoaded}
            className={"flex flex-col h-full justify-between gap-2"}
            as={"div"}
          >
            <TransitionChild
              enter="transition-all ease-in duration-500"
              enterFrom="opacity-0 transform -translate-y-20"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition-all ease-out duration-400"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="opacity-0 transform translate-y-100"
            >
              <div className="border-2 border-stone-700 w-82 min-h-96 h-96 flex flex-col py-4 px-4 gap-4">
                <div className="flex w-full items-center justify-center">
                  <div className="bg-stone-200 w-30 h-30 min-w-30 min-h-30 border-stone-600 border-2 rounded-full flex items-center justify-center p-2">
                    <UserIcon className="w-14 stroke-1 text-stone-500" />
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-lg font-bold text-stone-800">
                    Иван Петров
                  </h2>
                  <p className="text-sm text-stone-600">
                    Разработчик / Пользователь #42
                  </p>
                </div>
              </div>
            </TransitionChild>

            <TransitionChild
              enter="transition-all ease-in duration-400"
              enterFrom="opacity-0 transform -translate-y-15"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition-all ease-out duration-400"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="opacity-0 transform translate-y-100"
            >
              <div className="w-full bg-blue-500 h-10 min-h-10"></div>
            </TransitionChild>

            <TransitionChild
              enter="transition-all ease-in duration-300"
              enterFrom="opacity-0 transform -translate-y-10"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition-all ease-out duration-400"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="opacity-0 transform translate-y-100"
            >
              <div className="w-full bg-yellow-500 h-30 min-h-30"></div>
            </TransitionChild>

            <TransitionChild
              enter="transition-all ease-in duration-200"
              enterFrom="opacity-0 transform -translate-y-5"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition-all ease-out duration-400"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="opacity-0 transform translate-y-100"
            >
              <div className="w-full bg-rose-500 h-10 min-h-10"></div>
            </TransitionChild>
          </Transition>
        </div>

        <div className="border-2 border-stone-700 w-full p-2">
          <NDiskTable />
        </div>
      </div>
    </NDiskLayout>
  );
}
