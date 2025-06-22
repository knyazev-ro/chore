import PageTemplate from "../PageTemplates/PageTemplate";
import trelloMenuItems from "../../constants/menu-items/trelloMenuItems";

export default function NDiskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTemplate menu={trelloMenuItems}>{children}</PageTemplate>;
}
