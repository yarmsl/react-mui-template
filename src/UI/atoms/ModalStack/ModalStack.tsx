import { Dialog } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store';
import { closeModalAction } from '../../../store/ModalStack';

const ModalStack: React.FC = () => {
  const { modalStack } = useAppSelector((st) => st);
  const dispatch = useAppDispatch();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {modalStack?.map((modal) => (
        <Dialog
          PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 5 } }}
          key={`${Date.now()}`}
          open={modal.open}
          onClose={() => dispatch(closeModalAction())}
        >
          {modal.window}
        </Dialog>
      ))}
    </>
  );
};

export default ModalStack;
