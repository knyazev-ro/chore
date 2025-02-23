import ChoreTrelloColumn from "./ChoreTrelloColumn";

export default function ChoreTrello({ columns }: { columns: any }) {
  return (
    <>
    <div className="w-screen h-screen overflow-scroll">

      <div className="flex">
        {columns.map((column: any) => (
          <ChoreTrelloColumn column={column} />
        ))}
      </div>
    </div>
    </>
  );
}
