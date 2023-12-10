import React from "react";

const Modal = ({ children, modalTitle }) => {
  return (
    <div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-2/3 sm:w-3/4 md:w-1/2 lg:w-3/5 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-550">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{ modalTitle }</h3>
          <div className="py-8">{ children }</div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
