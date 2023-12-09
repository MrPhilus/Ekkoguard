// modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    content: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.content = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectIsModalOpen = (state) => state.modal.isOpen;
export const modalContent = (state) => state.modal.content
export default modalSlice.reducer;
