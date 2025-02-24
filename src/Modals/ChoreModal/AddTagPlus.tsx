import { PlusIcon } from "@heroicons/react/24/outline";
import Tags from "../../Chore/ChoreCard/Tags";
import { useEffect, useRef, useState } from "react";

export default function AddTagPlus({ chore }: { chore: unknown }) {
  const ref = useRef(null);
  const [openTags, setOpenTags] = useState(false);

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenTags(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex h-10 rounded-2xl justify-between px-2">
        <div className="flex items-center text-gray-300 text-[12px] gap-2">
          <div>{"tags: "}</div>
          <Tags chore={chore} fontSize="12px" />
        </div>
        <div className="relative flex items-center justify-center">
          <PlusIcon
            className="cursor-pointer h-6 w-6 text-green-600 font-bold"
            onClick={() => setOpenTags((prev) => !prev)}
          />
          {openTags && (
            <div
              ref={ref}
              className="absolute bg-white w-64 h-20 border-2 text-wrap truncate rounded-t-2xl rounded-l-2xl px-2 -translate-y-16 -translate-x-32"
            >
              <div className="flex flex-col items-center justify-center h-full overflow-scroll custom-scroll">
                <Tags
                  chore={{
                    options: {
                      tags: [
                        { title: "UI/UX", color: "#FF69B4", id: 1 },
                        { title: "mobile", color: "#20B2AA", id: 2 },
                        { title: "some", color: "#20B2AA", id: 2 },
                        { title: "else", color: "#20B2AA", id: 2 },
                        { title: "UI/UX", color: "#FF69B4", id: 1 },
                        { title: "mobile", color: "#20B2AA", id: 2 },
                        { title: "some", color: "#20B2AA", id: 2 },
                        { title: "else", color: "#20B2AA", id: 2 },
                      ],
                    },
                  }}
                  fontSize="12px"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
