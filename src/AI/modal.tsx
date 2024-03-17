import React from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: any;
  children: any;
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="d-flex flex-column p-3 pb-1 w-25 h-25 d-inline-block text-center"
        style={{
          background: "white",
          borderRadius: 4,
          overflow: "auto",
          fontSize: 30,
        }}
      >
        {children}
        <button className="btn btn-primary btn-sm mt-auto" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
