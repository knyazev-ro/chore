import PageTemplate from "../PageTemplates/PageTemplate";
import ndiskMenuItems from "../../constants/menu-items/ndiskMenuItems";

export default function NDiskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTemplate menu={ndiskMenuItems}>{children}</PageTemplate>;
}
