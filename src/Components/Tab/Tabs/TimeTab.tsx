import TimeCard from "../../TimeCard/TimeCard";

export default function TimeTab()
{
    return <>
    <div className="flex flex-col gap-4 w-full h-full overflow-y-scroll p-4 custom-scroll">

    <TimeCard/>
    <TimeCard/>
    <TimeCard/>
    <TimeCard/>

    </div>
    </>
}