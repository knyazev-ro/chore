import { ReactNode } from "react";
import Tag from "./Tag";

interface Tag {
  id: number;
  color: string;
  title: string;
}

export default function Tags({ chore }: { chore: any }) {
  const tags: Array<Tag> = chore.options?.tags ?? [];

  return (
    <>
      <div className="flex flex-wrap text-[8px] gap-1 font-bold">
        {tags.map((e) => (
          <Tag tag={e} />
        ))}
      </div>
    </>
  );
}
