import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackbarKey } from 'notistack';
import {
  ICloseSnackbarAction,
  INotifications,
  ISnackbar,
  ISnackbarAction,
} from './types';

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
    showSnackbar: (state, action: PayloadAction<ISnackbarAction>) => {
      state.snackbars.push({
        dismissed: false,
        message: action.payload.message,
        options: {
          variant: action.payload.variant || 'default',
          key: Date.now() + Math.random(),
        },
      });
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

export const { enqueueSnackbar, closeSnackbar, removeSnackbar, showSnackbar } =
  notificationsSlice.actions;
export const { reducer: notificationsReducer } = notificationsSlice;
