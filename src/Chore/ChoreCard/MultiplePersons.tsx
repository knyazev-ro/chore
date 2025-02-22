export default function MultiplePersons({ chore }: { chore: any }) {
    const persons = [
      chore?.created_by,
      chore?.responsible,
      chore?.closed_by,
      ...(chore?.auditors?.map((e: { avatar: string }) => e.avatar) ?? []),
      ...(chore?.accomplicies?.map((e: { avatar: string }) => e.avatar) ?? []),
    ].filter((e) => e);
  
    return (
      <>
      <div className="flex px-2 gap-1">
        {persons.map((e, index) => (
          <img key={index} className="w-6 h-6 rounded-full" src={e} alt="Avatar" />
        ))}
      </div>
      </>
    );
  }
  