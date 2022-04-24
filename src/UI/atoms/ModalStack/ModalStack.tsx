import { Dialog } from '@mui/material';
import { memo } from 'react';
import { v4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../../store';
import { closeModalAction } from '../../../store/ModalStack';

const ModalStack: React.FC = () => {
  const { modalStack } = useAppSelector((st) => st);
  const dispatch = useAppDispatch();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {modalStack.map((modal) => (
        <Dialog
          PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 5 } }}
          key={v4()}
          open={modal.open}
          onClose={() => dispatch(closeModalAction())}
        >
          {modal.window}
        </Dialog>
      ))}
    </>
  );
};

export default memo(ModalStack);
