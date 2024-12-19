import React from 'react';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md w-full m-3">
        {children}
      </div>
    </div>
  );
};

export default Modal;
