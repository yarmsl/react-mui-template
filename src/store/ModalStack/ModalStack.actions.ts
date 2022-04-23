import { closeModal, removeModal } from '.';

export const closeModalAction =
  () =>
  // eslint-disable-next-line no-unused-vars
  (dispatch: (arg0: unknown) => void): void => {
    dispatch(closeModal());
    setTimeout(() => dispatch(removeModal()), 100);
  };
