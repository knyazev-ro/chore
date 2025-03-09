import ChoreTrelloColumn from "./ChoreTrelloColumn";
import { useState } from "react";
import CurrentChoreModal from "../../Modals/ChoreModal/CurrentChoreModal";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function ChoreTrello({ columns }: { columns: any }) {
  const [cols, setCols] = useState(columns);
  const [showModal, setShowModal] = useState(false);
  const handleClickPlusButton = () => {
    setShowModal(true);
  }

  return (
    <>
    <DndProvider backend={HTML5Backend}>
    <div className="relative">

      <div className="flex h-screen overflow-y-scroll custom-scroll">
        {cols.map((column: any) => (
          <ChoreTrelloColumn column={column} setColumns={setCols} columns={cols}  handleClickPlusButton={handleClickPlusButton} />
        ))}
      </div>
    </div>

    <CurrentChoreModal isNew={true} chore={{}} showModal={showModal} setShowModal={setShowModal}/>
    </DndProvider>
    </>
  );
}
