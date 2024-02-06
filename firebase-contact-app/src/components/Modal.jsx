//47.30

import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="relative z-50 m-auto min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose className="text-2xl" onClick={onClose} />
            </div>
          </div>
          <div
            onClick={onClose}
            className=" absolute top-0 z-40 backdrop-blur h-screen w-screen"
          />
        </>
      )}
    </>
  );
};

export default Modal;
