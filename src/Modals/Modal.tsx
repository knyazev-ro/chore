import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
  onCloseModal: any;
}

export default function Modal({
  showModal,
  onCloseModal,
  children,
}: ModalProps) {
  // if(!showModal) return null;
  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog as="div" onClose={onCloseModal}>
        <div className="fixed bg-black/10 bg-opacity-50 flex justify-center items-center z-50 h-screen w-screen inset-0 backdrop-blur-xs">
          <TransitionChild
            enter="transition-all duration-400"
            enterFrom="opacity-0 transform translate-y-full"
            enterTo="opacity-100 transform translate-y-0"
            leave="transition-all duration-400"
            leaveFrom="opacity-100 transform translate-y-0"
            leaveTo="opacity-0 transform translate-y-full"
            as={Fragment}
          >
            <DialogPanel transition className="bg-blue-500">
              {children}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
