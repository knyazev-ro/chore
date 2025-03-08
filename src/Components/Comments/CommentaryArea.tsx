export default function CommentaryArea() {
    function auto_grow(element: HTMLTextAreaElement) {
      element.style.height = "1px";
      element.style.height = `${Math.min(element.scrollHeight + 8, 128)}px`; // Ограничение роста
    }
  
    return (
      <div className="p-1 gap-2 flex w-full min-h-14 max-h-128">
        <div className="flex w-11/12 border-2 bg-stone-100 flex-grow">
          <textarea
            onInput={(e) => auto_grow(e.target as HTMLTextAreaElement)}
            className="comfortaa w-full overflow-y-auto max-h-128 custom-scroll resize-none"
          />
        </div>
        <div className="w-1/12 h-full bg-blue-500 border-2"></div>
      </div>
    );
  }
  