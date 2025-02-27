import AdditionalTimeInfo from "../../TimeCard/AdditionalTimeInfo";
import TimeCard from "../../TimeCard/TimeCard";

export default function TimeTab()
{
    return <>
    <div className="flex w-full h-full justify-start items-start">
    <div className="flex flex-col relative h-full w-full rounded-2xl overflow-hidden">

    <TimeCard/>
    <AdditionalTimeInfo/>
    {/* <TimeCard/> */}
    </div>
    </div>
    </>
}