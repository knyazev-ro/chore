import PersonCard from "../../PersonCard/PersonCard";

export default function MainTab({ chore }: { chore: any }) {
  return (
    <div className="flex flex-wrap gap-8 gap-y-14 items-center justify-center h-full overflow-x-scroll custom-scroll p-8">
      <PersonCard person={chore.createdBy} type={"Creator"} />
      <PersonCard person={chore.responsible} type={"Is Responsible"} />

      {chore.accomplicies.map((e) => (
        <PersonCard person={e.avatar} type={"Is Helping"} />
      ))}
      {chore.auditors.map((e) => (
        <PersonCard person={e.avatar} type={"Is Watching"} />
      ))}

      <PersonCard person={chore.createdBy} type={"Creator"} />
      <PersonCard person={chore.responsible} type={"Is Responsible"} />

      {chore.accomplicies.map((e) => (
        <PersonCard person={e.avatar} type={"Is Helping"} />
      ))}
      {chore.auditors.map((e) => (
        <PersonCard person={e.avatar} type={"Is Watching"} />
      ))}

      <PersonCard person={chore.createdBy} type={"Creator"} />
      <PersonCard person={chore.responsible} type={"Is Responsible"} />

      {chore.accomplicies.map((e) => (
        <PersonCard person={e.avatar} type={"Is Helping"} />
      ))}
      {chore.auditors.map((e) => (
        <PersonCard person={e.avatar} type={"Is Watching"} />
      ))}
    </div>
  );
}
