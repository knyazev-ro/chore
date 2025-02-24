import ChoreTrelloColumn from "./ChoreTrelloColumn";
import ChoreModal from "../../Modals/ChoreModal/ChoreModal";
import { useState } from "react";
import CurrentChoreModal from "../../Modals/ChoreModal/CurrentChoreModal";

export default function ChoreTrello({ columns }: { columns: any }) {
  
  const [showModal, setShowModal] = useState(false);
  const handleClickPlusButton = () => {
    setShowModal(true);
  }

  return (
    <>
    <div className="">

      <div className="flex h-screen overflow-y-hidden custom-scroll">
        {columns.map((column: any) => (
          <ChoreTrelloColumn column={column} handleClickPlusButton={handleClickPlusButton} />
        ))}
      </div>
    </div>

    <CurrentChoreModal isNew={true} chore={{}} showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
}
