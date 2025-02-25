import PersonCard from "../../../../PersonCard/PersonCard";

export default function MainTab({chore}:{chore:any}) {
  return (
    <>
      <div className="flex p-1 gap-2 gap-y-12 items-center justify-center flex-wrap">
        <PersonCard person={chore.created_by}/>
        <PersonCard person={chore.created_by}/>
        <PersonCard person={chore.created_by}/>

        <PersonCard person={chore.created_by}/>
        <PersonCard person={chore.created_by}/>
        <PersonCard person={chore.created_by}/>
      </div>
    </>
  );
}
