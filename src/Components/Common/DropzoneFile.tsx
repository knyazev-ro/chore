import { DocumentArrowDownIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function DropzoneFile({setFiles}: {setFiles: (files: any[]) => void}) {
  const onDrop = useCallback((acceptedFiles: any[]) => {
    setFiles(acceptedFiles);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        console.log(file);

        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
    },
    maxFiles: 10,
  });
console.log(acceptedFiles?.length);

  return (
    <div className="border-2 comfortaa flex items-center justify-center border-dashed p-4" {...getRootProps()} style={{
      backgroundColor: acceptedFiles?.length >= 1 ? '#0C0A09' : 'white'
    }}>
      <input {...getInputProps()} />
      <div className="flex items-center gap-2">
        <DocumentArrowDownIcon className="w-8 h-8 text-blue-500" />
        <p className="text-gray-400">
          {!(acceptedFiles?.length >= 1) ?
            "Перетащите изображения сюда, или нажмите для выбора файлов"
          : 
          "Файлов загружено (" + acceptedFiles?.length + "). Перетащите сюда, или нажмите для выбора файлов"
          }
        </p>
      </div>
    </div>
  );
}
