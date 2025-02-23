import ChoreTrelloColumn from "./ChoreTrelloColumn";

export default function ChoreTrello({ columns }: { columns: any }) {
  return (
    <>
    <div className="">

      <div className="flex h-screen overflow-y-hidden custom-scroll">
        {columns.map((column: any) => (
          <ChoreTrelloColumn column={column} />
        ))}
      </div>
    </div>
    </>
  );
}
