import { Transition, TransitionChild } from "@headlessui/react";
import { UserIcon, ClockIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function ProfileInfo({ isLoaded }: { isLoaded: boolean }) {
  // 👇 мок-данные
  const user = {
    name: "Иван Петров",
    role: "Разработчик",
    id: 42,
    stats: {
      pending: 3,
      compressed: 12,
      failed: 2,
    },
  };

  return (
    <div className="comfortaa min-w-82 w-82 h-[calc(100vh-5rem)] overflow-y-scroll overflow-x-hidden custom-scroll">
      <Transition
        appear
        show={isLoaded}
        className={"flex flex-col h-full gap-2"}
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
  {/* Аватар */}
  <div className="flex w-full items-center justify-center">
    <div className="bg-stone-200 w-30 h-30 min-w-30 min-h-30 border-stone-600 border-2 rounded-full flex items-center justify-center p-2">
      <UserIcon className="w-14 stroke-1 text-stone-500" />
    </div>
  </div>

  {/* Имя и роль */}
  <div className="text-center">
    <h2 className="text-lg font-bold text-stone-800">{user.name}</h2>
    <p className="text-sm text-stone-600">
      {user.role} / Пользователь #{user.id}
    </p>
  </div>

  {/* Доп. информация */}
  <div className="flex flex-col gap-1 text-sm text-stone-700">
    <div className="flex justify-between">
      <span className="font-semibold">Email:</span>
      <span className="text-stone-500">ivan.petrov@example.com</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">Зарегистрирован:</span>
      <span className="text-stone-500">12.03.2024</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">Всего загрузок:</span>
      <span className="text-stone-500">17</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">Последняя активность:</span>
      <span className="text-stone-500">28.06.2025</span>
    </div>
  </div>
</div>
        </TransitionChild>


    <div className="flex flex-col w-full gap-2">
        <TransitionChild
          enter="transition-all ease-in duration-400"
          enterFrom="opacity-0 transform -translate-y-15"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition-all ease-out duration-400"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="opacity-0 transform translate-y-100"
        >
          <div className="w-full bg-blue-500 h-10 min-h-10 flex text-stone-100 text-md items-center px-2 gap-2">
            <ClockIcon className="w-5 h-5" />
            <span className="font-semibold">Выполняется:</span>
            <span>{user.stats.pending}</span>
          </div>
        </TransitionChild>
        <TransitionChild
          enter="transition-all ease-in duration-300"
          enterFrom="opacity-0 transform -translate-y-10"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition-all ease-out duration-400"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="opacity-0 transform translate-y-100"
        >
          <div className="w-full bg-yellow-500 h-10 min-h-10 flex text-stone-100 text-md items-center px-2 gap-2">
            <CheckCircleIcon className="w-5 h-5" />
            <span className="font-semibold">Сжато успешно:</span>
            <span>{user.stats.compressed}</span>
          </div>
        </TransitionChild>

        <TransitionChild
          enter="transition-all ease-in duration-200"
          enterFrom="opacity-0 transform -translate-y-5"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition-all ease-out duration-400"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="opacity-0 transform translate-y-100"
        >
          <div className="w-full bg-rose-500 h-10 min-h-10 flex text-stone-100 text-md items-center px-2 gap-2">
            <XCircleIcon className="w-5 h-5" />
            <span className="font-semibold">С ошибкой:</span>
            <span>{user.stats.failed}</span>
          </div>
        </TransitionChild>
    </div>
      </Transition>
    </div>
  );
}
