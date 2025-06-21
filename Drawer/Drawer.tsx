import React from 'react';
import { Drawer as MuiDrawer } from '@mui/material';

interface DrawerProps {
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  classes?: {
    paperRoot?: string;
  };
}

const Drawer: React.FC<DrawerProps> = ({ anchor, open, onClose, children, classes }) => {
  return (
    <MuiDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      classes={{ paper: classes?.paperRoot }}
    >
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
