// Modal.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectIsModalOpen } from "../../redux/slices/modalSlice";
import Button from "../button";

import { ButtonSize, ButtonState } from "../button/enum";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none w-screen">
          <div className="relative w-screen max-w-3xl mx-auto my-6">
            {/* Modal content */}
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none p-10">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Modal Title</h3>
                <button
                  className="p-1 ml-auto border-0 text-red-600  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handleClose}
                >
                  <span className="text-3xl">x</span>
                </button>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">{children}</div>
              <Button
                value={"Select Plan"}
                size={ButtonSize.lg}
                variant={ButtonState.PRIMARY}
                type={"Button"}
                onClick={handleClose}
                className={"w-full mt-2"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
