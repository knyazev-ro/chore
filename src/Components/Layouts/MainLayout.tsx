import PageTemplate from "../PageTemplates/PageTemplate";
import defaultMenuItems from "../../constants/menu-items/defaultMenuItems";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTemplate menu={defaultMenuItems}>{children}</PageTemplate>;
}
