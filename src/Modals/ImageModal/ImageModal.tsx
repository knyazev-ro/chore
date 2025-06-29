import { Button } from "@headlessui/react";
import Modal from "../Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowDownCircleIcon, ArrowPathRoundedSquareIcon } from "@heroicons/react/16/solid";

export default function ImageModal({
  src,
  name,
  idx,
  showModal,
  metadata,
  extension,
  size,
  onCloseModal,
}: {
  src: string;
  name: string;
  idx: number;
  showModal: boolean;
  onCloseModal: any;
}) {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = name + '.png';
    link.click();
    link.remove();
  };
  console.log(metadata);
  

  return (
    <Modal showModal={showModal} onCloseModal={onCloseModal}>
      <div className="h-full border-2 max-w-[calc(100vw-2rem)] lg:max-w-[calc(100vw-10rem)] max-h-[calc(100vh-2rem)] border-stone-100 shadow-md bg-stone-950 flex flex-col w-full p-2 items-center gap-2 justify-between">
        <div className="flex justify-between items-center w-full h-1/12 py-2 gap-2 px-1">
          
          <div className="flex items-center gap-2">
          <Button
            onClick={handleDownload}
            className="bg-blue-500 rounded-full cursor-pointer group w-7 h-7 p-1 flex items-center justify-center"
          >
            <ArrowDownCircleIcon className="w-6 h-6 text-white stroke-3 group-hover:rotate-180 duration-300 transition-transform" />
          </Button>
                  <Button
            onClick={handleDownload}
            className="bg-blue-500 rounded-full cursor-pointer group w-7 h-7 p-1 flex items-center justify-center"
          >
            <ArrowPathRoundedSquareIcon className="w-6 h-6 text-white stroke-3 group-hover:rotate-180 duration-300 transition-transform" />
          </Button>
          </div>
          <Button
            onClick={onCloseModal}
            className="bg-red-500 rounded-full cursor-pointer group w-7 h-7 p-1 flex items-center justify-center"
          >
            <XMarkIcon className="w-6 h-6 text-white stroke-3 group-hover:rotate-180 duration-300 transition-transform" />
          </Button>
        </div>

        <div className="flex items-center w-full px-4 py-4">
          <div className=" flex md:flex-row flex-col items-center w-full h-full gap-4">
            <div className="w-full h-full flex items-center justify-start">
              <img
                src={src}
                alt={`Uploaded file ${idx + 1}`}
                className="max-w-full max-h-[calc(100vh-10rem)] object-fill border-2 border-stone-100 shadow-md"
              />
            </div>

            <div className=" text-stone-100 custom-scroll overflow-y-scroll lg:w-86 w-full md:text-md text-xs p-2 max-h-[calc(100vh-10rem)]">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr>
                    <th className="border-b border-stone-700 p-2">Название</th>
                    <td className="border-b border-stone-700 p-2">
                     {name}
                    </td>
                  </tr>
                  <tr>
                    <th className="border-b border-stone-700 p-2">Размер</th>
                    <td className="border-b border-stone-700 p-2">{size ? Math.round(size/1024 *100)/100 : ''} MB</td>
                  </tr>
                  <tr>
                    <th className="border-b border-stone-700 p-2">Тип</th>
                    <td className="border-b border-stone-700 p-2">{extension?.toUpperCase() ?? ''}</td>
                  </tr>
                  <tr>
                    <th className="border-b border-stone-700 p-2">
                      Метаданные
                    </th>
                    <td className="border-b border-stone-700 p-2">
                      {`${metadata?.width ?? ''}x${metadata?.height ?? ''}, ${metadata?.mime_type?.toUpperCase() ?? ''}, Compressed File in Image Format: ${metadata?.png_compressed_image_size ? Math.round(metadata?.png_compressed_image_size/1024 * 100)/100 : ''} MB`}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
