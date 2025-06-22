import PageOne from "./MainPages/PageOne";
import PageAboutCommunity from "./MainPages/PageAboutCommunity";
import PageCompany from "./MainPages/PageCompany";
import MainLayout from "../../Components/Layouts/MainLayout";

export default function MainPage() {
  const avialablePages = [PageOne, PageAboutCommunity, PageCompany];
  return (
    <MainLayout>
      {avialablePages.map((Page, index) => (
        <div
          key={index}
          className="relative flex flex-col min-w-full min-h-full max-w-full max-h-full"
        >
          <Page />
        </div>
      ))}
    </MainLayout>
  );
}
