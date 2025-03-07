import DataCard from "../../DataCard/DataCard";

export default function DataTab()
{
    return <>
    <div className="relative flex flex-col w-full h-full rounded-2xl p-4 overflow-y-scroll custom-scroll">
        
        <div className="flex p-2 flex-wrap gap-6 space-y-4 border-2 border-white justify-center p-2">
            <DataCard/>
            <DataCard/>
            <DataCard/>
            <DataCard/>
            <DataCard/>

            <DataCard/>
            <DataCard/>
            <DataCard/>
            <DataCard/>
            <DataCard/>

        </div>
        
    </div>
    </>
}