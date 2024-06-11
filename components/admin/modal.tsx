import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Loading } from '@/components/Loading';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleClose: () => void;
  handleSubmit: () => void;
  loading: boolean;
}

export const BasicModal: React.FC<BasicModalProps> = ({ open, setOpen, handleClose, handleSubmit, loading }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Estás seguro de eliminar este empleado?
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Esta acción no se puede deshacer.
          </Typography>
          <div className='flex justify-start mt-6'>
            {loading ? (
              <Loading />
            ) : (
              <div>
                <button
                  type='button'
                  onClick={handleSubmit}
                  className='px-8 py-2.5 mx-5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                >
                  Delete
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className='px-8 py-2.5 mx-5 leading-5 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal

