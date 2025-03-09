import { useState } from "react";
import ChoreTrello from "../Trello/ChoreTrello";
import TrelloHead from "./TrelloHead";
import Header from "../../Components/Header/Header";

export default function TrelloPage({project}:{project:any})
{
    const [open, setOpen] = useState(false);
    const {columns} = project;

    return <>
    <div className="flex flex-col h-screen">
        <Header open={open} setOpen={setOpen}/>
        <TrelloHead project={project}/>
        <div className="relative h-screen border-3 w-full overflow-hidden custom-scroll">
        <ChoreTrello columns={columns}/>
        </div>
    </div>
    </>
}