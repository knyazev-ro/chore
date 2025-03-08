import { useRef } from "react";
import AdditionalTimeInfo from "../../TimeCard/AdditionalTimeInfo";
import TimeCard from "../../TimeCard/TimeCard";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

export default function TimeTab() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const scrollDirection = useRef("down");

  const scrollToNextSection = () => {
    if (scrollDirection.current === "up") {
      section1Ref.current?.scrollIntoView({ behavior: "smooth" });
      scrollDirection.current = "down";
    } else {
      section2Ref.current?.scrollIntoView({ behavior: "smooth" });
      scrollDirection.current = "up";
    }
  };

  return (
    <>
      <div className="flex flex-col h-full overflow-hidden border-3 border-white">
        <div className="flex flex-col w-full rounded-2xl h-screen overflow-auto custom-scroll">
          <div ref={section1Ref} className="flex flex-col h-screen">
            <div className="h=screen">

            <TimeCard />
            </div>

            <div className="h-screen">

            <AdditionalTimeInfo />
            </div>
            {/* <TimeCard/> */}
          </div>
          <div ref={section2Ref} className="flex flex-col h-screen">
            <div className="h-screen">
            <TimeCard />
            </div>
            <div className="h-screen">

            <AdditionalTimeInfo />
            </div>
            {/* <TimeCard/> */}
          </div>
        </div>
        <div className="bottom-0 flex items-center justify-center w-full absolute z-10 translate-y-4">
          <button
            className="w-16 h-6 bg-slate-800 border-blue-700 border-2 flex items-center justify-center"
            onClick={scrollToNextSection}
          >
            {scrollDirection.current === "up" ? (
              <ArrowUpIcon className="w-5 h-5 text-blue-700" />
            ) : (
              <ArrowDownIcon className="w-5 h-5 text-blue-700" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
