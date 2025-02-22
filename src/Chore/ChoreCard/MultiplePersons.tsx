export default function MultiplePersons({ chore }: { chore: any }) {
    const persons = [
      ...(chore?.auditors?.map((e: { avatar: string }) => e.avatar) ?? []),
      ...(chore?.accomplicies?.map((e: { avatar: string }) => e.avatar) ?? []),
    ].filter((e) => e);
  
    return (
      <>
      <div className="flex px-2 gap-1 rounded-full custom-scroll overflow-hidden overflow-x-scroll">
        <div className="min-w-8 min-h-8 bg-slate-400 rounded-full items-center justify-center flex">
      <img key={'created_by'} className="border border-indigo-50 w-6 h-6 rounded-full" src={chore?.created_by} alt="Avatar" />
        </div>

        <div className="min-w-8 min-h-8 bg-slate-500 rounded-full items-center justify-center flex">
      <img key={'responsible'} className="border border-indigo-50 w-6 h-6 rounded-full" src={chore?.responsible} alt="Avatar" />
        </div>

        <div className="min-w-8 min-h-8 bg-slate-600 rounded-full items-center justify-center flex">
      <img key={'closed_by'} className="border border-indigo-50 w-6 h-6 rounded-full" src={chore?.closed_by} alt="Avatar" />
        </div>

        <div className="px-1 gap-1 h-8 bg-slate-700 rounded-full items-center justify-center flex">
        {persons.map((e, index) => (
          <img key={index} className="border border-indigo-50 w-6 h-6 rounded-full" src={e} alt="Avatar" />
        ))}
        </div>
      </div>
      </>
    );
  }
  