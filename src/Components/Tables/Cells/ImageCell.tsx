import { useState } from "react";
import ImageModal from "../../../Modals/ImageModal/ImageModal";

export default function ImageCell({ image, name, id, metadata=null, extension=null, size=null}) {
  const [openImageModal, setOpenImageModal] = useState(false);
  const handleCloseModal = () => {
    setOpenImageModal(false);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div onClick={()=>setOpenImageModal(true)} className="w-20 h-20 flex items-center justify-center text-center border-2 border-stone-100">
        <img
          className="w-full h-full object-cover"
          src={image}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/error.png";
          }}
        />
      </div>
     <ImageModal
        metadata={metadata}
        extension={extension}
        size={size}
        
        src={image}
        name={name}
        idx={id}
        showModal={openImageModal}
        onCloseModal={handleCloseModal}
      />
    </div>
  );
}
