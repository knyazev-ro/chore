import PersonCard from "../../../../PersonCard/PersonCard";

export default function MainTab({chore}:{chore:any}) {
  return (
      <div className="flex flex-wrap gap-4 gap-y-12 items-center justify-center h-full overflow-x-scroll custom-scroll py-10">
        <PersonCard person={chore.created_by}/>
        <PersonCard person={chore.created_by}/>
        <PersonCard person={chore.created_by}/>

        <PersonCard person={chore.created_by}/>
        <PersonCard person={chore.created_by}/>
        <PersonCard person={chore.created_by}/>

        <PersonCard person={chore.created_by}/>
        <PersonCard person={chore.created_by}/>
        <PersonCard person={chore.created_by}/>
      </div>
  );
}
