import ReactDOM from "react-dom";
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  showModal: boolean,
}

export default function Modal({showModal , children }: ModalProps) {
  if(!showModal) return null;
    return ReactDOM.createPortal(
      <div className="fixed bg-black/10 bg-opacity-50 flex justify-center items-center z-50 h-screen w-screen inset-0 backdrop-blur-xs">
        {children}
      </div>, 
      document.getElementById('modal-root')
  );
}
