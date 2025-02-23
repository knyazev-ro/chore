import ChoreTrello from "../Trello/ChoreTrello";
import TrelloHead from "./TrelloHead";

export default function TrelloPage({project}:{project:any})
{
    const {columns} = project;

    return <>
    <div className="flex flex-col h-screen">
        <TrelloHead project={project}/>
        <div className="h-screen w-full overflow-hidden custom-scroll">
        <ChoreTrello columns={columns}/>
        </div>
    </div>
    </>
}