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
        className="d-flex flex-column justify-content-center"
        style={{
          background: "white",
          padding: 20,
          borderRadius: 4,
          fontSize: 50,
        }}
      >
        {children}
        <button className="btn btn-primary btn-sm mt-2" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
