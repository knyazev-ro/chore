import NDiskLayout from "../../../Components/Layouts/NDiskLayout";
import NDiskTable from "../../../Components/Tables/NDiskTable";
import ProfileInfo from "../../../Components/NDisk/ProfileInfo";
import { useEffect, useState } from "react";

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
          <NDiskTable />
        </div>
      </div>
    </NDiskLayout>
  );
}
