export default function PersonCard({person}:{person:any})
{

    return <>
    <div className="relative bg-rose-50 w-48 h-72 border-2 border-slate-700 rounded-2xl flex flex-col gap-2">
        <div className="flex flex-col -translate-y-9 w-full h-full items-center justify-center">

        <img key={'created_by'} className="border-2 border-slate-700 bg-slate-900 w-16 h-16 min-w-16 min-h-16 rounded-full" src={person} alt="Avatar" />
        <div className="px-1 flex flex-col w-full h-full">
            
            <div className="flex flex-col">
            <div className="flex items-center justify-center comfortaa w-full h-12 border-b-2 border-slate-500">
                {"Мистер Майлз"}
            </div>
            <div className="flex items-center justify-center comfortaa w-full h-12">
                {"Создатель"}
            </div>
            </div>

            <div className="border-2 w-full h-full">

            </div>
        </div>
        </div>
    </div>
    </>

}