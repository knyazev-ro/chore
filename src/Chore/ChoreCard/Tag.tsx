interface Tag {
  id: number;
  color: string;
  title: string;
}

export default function Tag({ tag }: { tag: any }) {
  return (
    <>
      <div
        key={tag.id}
        className={
          "flex justify-center items-center rounded-full border shadow min-w-2 min-h-2 px-1"
        }
        style={{ backgroundColor: tag.color }}
      >
        <div className="text-black">{tag.title}</div>
      </div>
    </>
  );
}
