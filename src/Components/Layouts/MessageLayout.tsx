import PageTemplate from "../PageTemplates/PageTemplate";
import trelloMenuItems from "../../constants/menu-items/trelloMenuItems";

export default function MessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTemplate menu={trelloMenuItems}>{children}</PageTemplate>;
}
