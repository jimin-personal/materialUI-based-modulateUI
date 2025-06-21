import { Backdrop as MuiBackDrop, SxProps } from '@mui/material';
import React from 'react';

interface BackDropProps {
  open: boolean;
  children?: React.ReactNode;
  sx?: SxProps;
  onClick?: () => void;
  onClose?: () => void;
  onMouseLeave?: () => void;
}

const BackDrop: React.FC<BackDropProps> = ({ children, open, sx = {}, ...rest }) => {
  return (
    <MuiBackDrop open={open} sx={{ ...sx, zIndex: (theme) => theme.zIndex.drawer + 1 }} {...rest}>
      {children}
    </MuiBackDrop>
  );
};

export default BackDrop;
