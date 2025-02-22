import ChoreBody from "./ChoreBody";
import ChoreHead from "./ChoreHead";

export default function ChoreCard({ chore }: { chore: any }) {
  return (
    <>
      <div className="px-1 py-1 flex w-72 h-48 bg-indigo-100 border-2 border-indigo-800">
        <div className="flex flex-col w-full h-full">
          <ChoreHead chore={chore}/>
          <ChoreBody chore={chore}/>
        </div>
      </div>
    </>
  );
}
