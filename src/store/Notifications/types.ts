import { SnackbarKey, TransitionCloseHandler, VariantType } from 'notistack';

export interface ISnackbar {
  dismissed: boolean;
  message: string;
  options: {
    variant?: VariantType;
    key: SnackbarKey;
    onClose?: TransitionCloseHandler;
    persist?: boolean;
  };
}

export interface INotifications {
  snackbars: ISnackbar[];
}

export interface ICloseSnackbarAction {
  dismissAll?: boolean;
  key?: SnackbarKey;
}
