import { useState } from "react";
import DropzoneFile from "../../Components/Common/DropzoneFile";
import NDiskLayout from "../../Components/Layouts/NDiskLayout";
import { DocumentChartBarIcon } from "@heroicons/react/24/outline";
import ImageCard from "../../Components/Common/ImageCard";
import axios from "axios";
import { Button } from "@headlessui/react";
import api from "../../api/api";

export default function NDiskPage() {
  const [files, setFiles] = useState<File[]>([]);
  console.log(files, "files in NDiskPage");
  const percentage = "40%"; // Example percentage for the progress bar
  const handleUpload = async () => {
    if (!files.length) return;

    const formData = new FormData();
    formData.append("image", files[0]);

    try {
      const response = await api.post("/ndisk/compress-image", formData);

      console.log("Ответ от сервера:", response.data);
    } catch (err) {
      console.error("Ошибка загрузки:", err);
    }
  };

  return (
    <NDiskLayout>
      <div className="w-screen h-screen flex flex-col gap-1 bg-stone-200 p-2 comfortaa">
        <div className="flex flex-col items-center justify-between gap-2 gap-y-2">
          <h1 className="text-2xl font-bold flex gap-2 border-b-2 px-2">
            <DocumentChartBarIcon className="w-7 h-7 stroke-2" title="n-disk" />
            N-Диск
          </h1>
          <p className="text-gray-600 p-2">
            <span className="font-extrabold text-stone-950">
              Neuro Diskette
            </span>{" "}
            - сервис для сжатия изображений возможностми сверточных нейронных
            сетей.
          </p>
        </div>
        <div className="flex items-center w-full gap-2 justify-between">
          <DropzoneFile setFiles={setFiles} />
          <Button
            className={
              "flex border-2 text-stone-100 border-blue-900 text-sm p-2 h-full text-center items-center justify-center bg-blue-600"
            }
            onClick={handleUpload}
          >
            Отправить
          </Button>
        </div>
        <div className="flex gap-2 w-full lg:h-[calc(100vh-17rem)] md:h-[calc(100vh-19rem)] h-[calc(100vh-23rem)] custom-scroll relative py-2">
          <div className="border-2 border-dotted w-1/2 custom-scroll bg-stone-300 overflow-y-scroll flex flex-wrap p-1">
            {files.map((file, index) => (
              <ImageCard
                file={file}
                src={URL.createObjectURL(file)}
                name={file.name}
                idx={index}
              />
            ))}
          </div>

          <div className="border-2 border-dotted w-1/2 flex flex-wrap bg-stone-300"></div>
        </div>
        <div className="bg-blue-700 flex w-full max-h-10 h-5">
          <div
            className="h-full bg-sky-600 animate-pulse"
            style={{
              width: percentage,
            }}
          ></div>
        </div>
      </div>
    </NDiskLayout>
  );
}
