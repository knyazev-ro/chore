import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import MultiplePersons from './MultiplePersons';

export default function ChoreHead({ chore }: { chore: any }) {
  return (
    <div className="gap-1 items-center flex w-full h-3/12">
      <img src={chore?.project?.logo} alt='Logo' className="bg-slate-900 w-9 h-9 min-h-9 min-w-9 rounded-full"/>
      <div className="flex bg-slate-900 w-64 h-9 rounded-l-full justify-between items-center">
        <div className="">
          <MultiplePersons chore={chore}/>
        </div>
        <EllipsisVerticalIcon className="h-6 w-6 text-gray-100" />
      </div>
    </div>
  );
}
