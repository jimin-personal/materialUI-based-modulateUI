import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ClickOnceButton from '../button/ClickOnceButton';

const ConfirmDialog = ({ title, description, open, msg, onConfirm, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const confirmHelper = (e) => {
    onConfirm(true);
    handleClose(e);
  };

  const cancelHelper = (e) => {
    onConfirm(false);
    handleClose(e);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <ClickOnceButton onClick={cancelHelper} variant="outlined">
          {msg.cancel}
        </ClickOnceButton>
        <ClickOnceButton onClick={confirmHelper} variant="contained" color="primary">
          {msg.confirm}
        </ClickOnceButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
