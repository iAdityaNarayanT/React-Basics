//47.30

import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="relative z-50 m-auto min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose className="self-end text-2xl" onClick={onClose} />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className=" absolute top-0 z-40 backdrop-blur h-screen w-screen"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
