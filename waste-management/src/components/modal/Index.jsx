import React from "react";

const Modal = ({ children, modalTitle }) => {
  return (
    <div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box sm:flex-row w-full sm:w-3/4 md:w-1/2 lg:w-3/5 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-550">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{modalTitle}</h3>
          <p className="py-8">{children}</p>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
