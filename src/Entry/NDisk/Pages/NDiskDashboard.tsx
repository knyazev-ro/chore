import NDiskLayout from "../../../Components/Layouts/NDiskLayout";
import NDiskTable from "../../../Components/Tables/NDiskTable";
import ProfileInfo from "../../../Components/NDisk/ProfileInfo";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export default function NDiskDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <NDiskLayout>
      <div className="flex w-full h-full gap-2">
    <ProfileInfo isLoaded={isLoaded}/>
        <div className="border-2 border-stone-700 w-full p-2">
    <Transition
    appear 
    unmount={false}
    show={isLoaded}
        enter="transition-all ease-in duration-800"
        enterFrom="opacity-0 transform -translate-y-20"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition-all ease-out duration-300"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform translate-y-20"
        as={'div'}
    >
          <NDiskTable />
    </Transition>
        </div>
      </div>
    </NDiskLayout>
  );
}
