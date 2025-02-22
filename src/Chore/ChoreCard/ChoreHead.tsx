export default function ChoreHead({ chore }: { chore: any }) {
  return (
    <div className="gap-1 items-center flex w-full h-3/12">
      <div className="bg-slate-900 w-9 h-9 min-h-9 min-w-9 rounded-full"></div>
      <div className="bg-indigo-400 w-64 h-9">
        <div className=""></div>
      </div>
    </div>
  );
}
