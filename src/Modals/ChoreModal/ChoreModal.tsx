import Modal from "../Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ChoreModal({
  setShowModal,
  showModal,
}: {
  setShowModal: any;
  showModal: boolean;
}) {



  return (
    <Modal showModal={showModal}>
      <div className="flex flex-col w-1/2 h-2/3 bg-rose-50 rounded-2xl border-3 border-rose-200 shadow-md">
        <div className="flex rounded-t-2xl items-center justify-end px-2 py-2">
          <div
            className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            <XMarkIcon className="w-6 h-6 text-rose-600" strokeWidth={2} />
          </div>
        </div>
      </div>
    </Modal>
  );
}
