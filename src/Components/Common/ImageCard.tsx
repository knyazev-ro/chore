import { useState } from "react";
import ImageModal from "../../Modals/ImageModal/ImageModal";

export default function ImageCard({
  src,
  name,
  idx,
  file,
}: {
  src: string;
  name: string;
  idx: number;
}) {
  const [openImageModal, setOpenImageModal] = useState(false);

  const handleOpenImage = () => {
    setOpenImageModal((p) => !p);
  };

  const handleCloseModal = () => {
    setOpenImageModal(false);
  };
  console.log(file);
  

  return (
    <>
      <button key={idx} className="p-1" title={name} onClick={handleOpenImage}>
        <div className="border p-2 bg-black rounded-sm shadow-md shadow-stone-300">
          <img
            src={src}
            alt={`Uploaded file ${idx + 1}`}
            className="max-w-full max-h-82 object-cover mb-2"
          />
          <p className="text-sm text-stone-100 truncate max-w-32">{name}</p>
        </div>
      </button>
      <ImageModal
        metadata={null}
        extension={file.type.split('/')[1]}
        size={file.size}
        src={src}
        name={name}
        idx={idx}
        showModal={openImageModal}
        onCloseModal={handleCloseModal}
      />
    </>
  );
}
