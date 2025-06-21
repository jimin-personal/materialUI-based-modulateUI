import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@/components/primitiveUI/Button/Button';

const FormDialog = ({ title, description, open, msg, onConfirm, onCancel, onClose }) => {
  const { t } = useTranslation('project');
  const [value, setValue] = useState('');

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  const confirmHelper = (e) => {
    onConfirm(value);
    handleClose(e);
  };

  const cancelHelper = (e) => {
    onCancel(value);
    handleClose(e);
  };

  return (
    <Dialog
      open={open}
      onClick={(e) => {
        e.stopPropagation();
      }}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText variant="body4">{description}</DialogContentText>
        <TextField
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          margin="dense"
          id="name"
          label={t('label.name', 'Name')}
          type="text"
          variant={'standard'}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelHelper} color="primary" variant="text">
          {msg.cancel}
        </Button>
        <Button onClick={confirmHelper} color="primary" variant="text">
          {msg.confirm}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
