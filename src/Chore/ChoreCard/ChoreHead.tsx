import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import MultiplePersons from './MultiplePersons';

export default function ChoreHead({ chore }: { chore: any }) {
  return (
    <div className="gap-1 items-center flex w-full h-3/12">
      <img src={chore?.project?.logo} alt='Logo' className="bg-stone-950 w-10 h-10 min-h-10 min-w-10 rounded-full"/>
      <div className="flex bg-blue-500 min-w-58 max-w-58 h-10 justify-between items-center">
        <div className="w-full overflow-hidden">
          <MultiplePersons chore={chore}/>
        </div>
        <EllipsisVerticalIcon className="h-6 w-6 text-gray-100" />
      </div>
    </div>
  );
}
