import { createSlice } from '@reduxjs/toolkit';

const initialState: UIState = {
  darkMode: false,
};

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = UISlice.actions;
export const { reducer: UIReducer } = UISlice;
