import DataCard from "../../DataCard/DataCard";

export default function DataTab()
{
    return <>
    <div className="relative flex flex-col w-full h-full rounded-2xl p-4">
        
        <div className="flex p-2 flex-wrap gap-4 space-y-2">
            <DataCard/>
            <DataCard/>
            <DataCard/>
            <DataCard/>
            <DataCard/>
        </div>
        
    </div>
    </>
}