import React from 'react';
import { Dialog as MuiDialog, DialogProps as MuiDialogProps } from '@mui/material';

interface DialogProps extends MuiDialogProps {}

export const Dialog: React.FC<DialogProps> = ({ children, ...rest }) => {
  return <MuiDialog {...rest}>{children}</MuiDialog>;
};

export default Dialog;
