import ChoreTrello from "../../Components/Trello/ChoreTrello";
import TrelloHead from "./TrelloHead";
import TrelloLayout from "../../Components/Layouts/TrelloLayout";

export default function TrelloPage({ project }: { project: any }) {
  const { columns } = project;
  return (
    <TrelloLayout>
      <TrelloHead project={project} />
      <div className="relative h-screen border-3 w-full overflow-hidden custom-scroll">
        <ChoreTrello columns={columns} />
      </div>
    </TrelloLayout>
  );
}
