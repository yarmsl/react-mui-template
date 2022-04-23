import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackbarKey } from 'notistack';
import { ICloseSnackbarAction, INotifications, ISnackbar } from './types';

const initialState: INotifications = {
  snackbars: [],
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    enqueueSnackbar: (state, action: PayloadAction<ISnackbar>) => {
      state.snackbars.push(action.payload);
    },
    closeSnackbar: (state, action: PayloadAction<ICloseSnackbarAction>) => {
      state.snackbars = state.snackbars.map((notification) =>
        action.payload.dismissAll ||
        notification.options.key === action.payload.key
          ? { ...notification, dismissed: true }
          : { ...notification }
      );
    },
    removeSnackbar: (state, action: PayloadAction<SnackbarKey>) => {
      state.snackbars = state.snackbars.filter(
        (notification) => notification.options.key !== action.payload
      );
    },
  },
});

export const { enqueueSnackbar, closeSnackbar, removeSnackbar } =
  notificationsSlice.actions;
export const { reducer: notificationsReducer } = notificationsSlice;
