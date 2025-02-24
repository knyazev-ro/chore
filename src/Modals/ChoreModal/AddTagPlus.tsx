import { PlusIcon } from "@heroicons/react/24/outline";
import Tags from "../../Chore/ChoreCard/Tags";
import { useEffect, useRef, useState } from "react";
import Tag from "../../Chore/ChoreCard/Tag";

export default function AddTagPlus({
  chore,
  setSingleChore,
}: {
  chore: any;
  setSingleChore: any;
}) {
  const ref = useRef(null);
  const [openTags, setOpenTags] = useState(false);
  const [tagList, setTagList] = useState([]);

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

  const tags = [
    { title: "UI/UX", color: "#FF69B4", id: 1 },
    { title: "mobile", color: "#20B2AA", id: 2 },
    { title: "backend", color: "#8A2BE2", id: 3 },
    { title: "frontend", color: "#FF6347", id: 4 },
    { title: "devops", color: "#4682B4", id: 5 },
    { title: "testing", color: "#FFD700", id: 6 },
    { title: "bugfix", color: "#DC143C", id: 7 },
    { title: "feature", color: "#32CD32", id: 8 },
    { title: "optimization", color: "#FF4500", id: 9 },
    { title: "database", color: "#6A5ACD", id: 10 },
    { title: "security", color: "#2E8B57", id: 11 },
    { title: "performance", color: "#DAA520", id: 12 },
    { title: "accessibility", color: "#4682B4", id: 13 },
    { title: "design", color: "#FF69B4", id: 14 },
    { title: "prototype", color: "#8B008B", id: 15 },
    { title: "deployment", color: "#556B2F", id: 16 },
    { title: "integration", color: "#20B2AA", id: 17 },
    { title: "support", color: "#CD5C5C", id: 18 },
    { title: "maintenance", color: "#8B0000", id: 19 },
    { title: "cloud", color: "#87CEEB", id: 20 },
    { title: "API", color: "#4682B4", id: 21 },
    { title: "microservices", color: "#FF8C00", id: 22 },
    { title: "serverless", color: "#8A2BE2", id: 23 },
    { title: "CI/CD", color: "#32CD32", id: 24 },
    { title: "code review", color: "#FF6347", id: 25 },
    { title: "documentation", color: "#2E8B57", id: 26 },
    { title: "research", color: "#FF1493", id: 27 },
    { title: "planning", color: "#DAA520", id: 28 },
    { title: "architecture", color: "#6A5ACD", id: 29 },
    { title: "refactoring", color: "#FF4500", id: 30 },
    { title: "sprint", color: "#DC143C", id: 31 },
    { title: "agile", color: "#8B008B", id: 32 },
    { title: "scrum", color: "#556B2F", id: 33 },
    { title: "kanban", color: "#CD5C5C", id: 34 },
    { title: "release", color: "#8B0000", id: 35 },
    { title: "hotfix", color: "#FF6347", id: 36 },
    { title: "alpha", color: "#4682B4", id: 37 },
    { title: "beta", color: "#32CD32", id: 38 },
    { title: "production", color: "#20B2AA", id: 39 },
    { title: "analytics", color: "#FF8C00", id: 40 },
    { title: "logging", color: "#6A5ACD", id: 41 },
    { title: "monitoring", color: "#87CEEB", id: 42 },
    { title: "alerting", color: "#DAA520", id: 43 },
    { title: "SEO", color: "#FF69B4", id: 44 },
    { title: "marketing", color: "#8A2BE2", id: 45 },
    { title: "growth", color: "#32CD32", id: 46 },
    { title: "feedback", color: "#DC143C", id: 47 },
    { title: "customer support", color: "#CD5C5C", id: 48 },
    { title: "automation", color: "#FF4500", id: 49 },
    { title: "AI/ML", color: "#8B008B", id: 50 },
  ];

  return (
    <>
      <div className="flex h-10 rounded-2xl justify-between px-2">
        <div className="flex items-center text-gray-300 text-[12px] gap-2">
          <div>{"tags: "}</div>
          <div
            className="flex flex-wrap gap-1 font-bold"
            style={{ fontSize: "12px" }}
          >
            {chore.tags.map((e) => (
              <div
                className="cursor-pointer"
                onClick={() =>
                  setSingleChore({
                    ...chore,
                    tags: chore.tags.filter((el) => el.id !== e.id),
                  })
                }
              >
                <Tag tag={e} />
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <PlusIcon
            className="cursor-pointer h-6 w-6 text-green-600 font-bold"
            onClick={() => setOpenTags((prev) => !prev)}
          />
          {openTags && (
            <div
              ref={ref}
              className="justify-end flex flex-col absolute w-64 h-64 -translate-y-36 -translate-x-33"
            >
              <div className="max-h-64 p-2 backdrop-blur-xs custom-scroll overflow-y-scroll border-4 border-double rounded-t-2xl rounded-l-2xl">
                <div
                  className="flex flex-wrap gap-1 font-bold p-1"
                  style={{ fontSize: "12px" }}
                >
                  {tags
                    .filter((e) => !chore.tags.map((e) => e.id).includes(e.id))
                    .map((e) => (
                      <div
                        className="flex cursor-pointer"
                        onClick={() =>
                          setSingleChore({
                            ...chore,
                            tags: [
                              ...chore.tags.filter((el) => el.id !== e.id),
                              e,
                            ],
                          })
                        }
                      >
                        <Tag tag={e} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
