import PageOne from "./MainPages/PageOne";
import PageAboutCommunity from "./MainPages/PageAboutCommunity";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import PageCompany from "./MainPages/PageCompany";
import Header from "../../Components/Header/Header";

export default function MainPage() {
  const [open, setOpen] = useState(true);
  const avialablePages = [PageOne, PageAboutCommunity, PageCompany];

  return (
    <div className="flex flex-col overflow-hidden relative h-screen w-screen">
      <Header open={open} setOpen={setOpen} />

      <div className="relative flex h-full w-full">
        <div
          className={`translate-y-10 transition-transform duration-500 ease-in-out ${
            open ? "transform translate-x-0" : "transform -translate-x-full"
          } w-64 bg-gray-800 z-10 fixed top-0 left-0 h-screen`}
        >
          <Sidebar />
        </div>
        <div
          className={`w-full h-full flex flex-col overflow-x-hidden overflow-y-scroll custom-scroll border-3 border-stone-100 transition-all duration-500 ${
            open ? "ml-64" : "ml-0"
          }`}
        >
          {avialablePages.map((Page, index) => (
            <div
              key={index}
              className="relative flex flex-col min-w-full min-h-full max-w-full max-h-full"
            >
              <Page />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
