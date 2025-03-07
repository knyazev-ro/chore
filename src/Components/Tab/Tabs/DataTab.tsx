import DataCard from "../../DataCard/DataCard";

export default function DataTab()
{
    return <>
    <div className="relative flex flex-col w-full h-full p-4 overflow-y-scroll custom-scroll border-3 border-white">
        
        <div className="flex p-2 flex-wrap gap-6 space-y-4 justify-center">
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