import { ReactNode } from "react";
import Tag from "./Tag";

interface Tag {
  id: number;
  color: string;
  title: string;
}

export default function Tags({ chore, fontSize="8px" }: { chore: any, fontSize:string }) {
  const tags: Array<Tag> = chore.options?.tags ?? [];

  return (
    <>
      <div className="flex flex-wrap gap-1 font-bold"
      style={{fontSize:fontSize}}
      >
        {tags.map((e) => (
          <Tag tag={e} />
        ))}
      </div>
    </>
  );
}
