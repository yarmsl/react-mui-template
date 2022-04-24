import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalStack, ModalStackTypes } from './types';

const initialState: IModalStack[] = [];

export const ModalStackSlice = createSlice({
  name: 'modalStack',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalStackTypes>) => {
      state.push({ open: true, window: action.payload });
    },
    closeModal: (state) => {
      state[state.length - 1].open = false;
    },
    removeModal: (state) => {
      state.pop();
    },
  },
});

export const { openModal, closeModal, removeModal } = ModalStackSlice.actions;
export const { reducer: ModalStackReducer } = ModalStackSlice;
