export default function Main({data}:{data:any}) {
  return (
    <>
      <div>
        {/* Поле названия */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">{data}</label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md text-sm"
            placeholder="Введите название"
          />
        </div>

      </div>
    </>
  );
}
