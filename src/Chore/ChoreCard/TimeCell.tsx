export default function TimeCell({chore}:{chore:any})
{
    const {estimation, duration} = chore;

    return <>
    <div className="flex flex-wrap text-[10px] gap-2 items-center justify-center font-bold">
        <div>{estimation}</div>
        <div>{duration}</div>
    </div>
    </>
}