import NDiskLayout from "../../Components/Layouts/NDiskLayout";

export default function NDiskPage() {
  return (
    <NDiskLayout>
    <div className="w-screen h-full bg-stone-300 p-2">
      <div className="flex flex-col items-center justify-between gap-2 gap-y-6">
        <h1 className="text-2xl font-bold">N-Диск</h1>
        <p className="text-gray-600">Здесь будет контент N-Диска</p>
      </div>
    </div>
    </NDiskLayout>
  );
}