import React from 'react';
import MuiPortal from '@mui/material/Portal';

interface PortalProps {
  children?: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children, ...rest }) => {
  return <MuiPortal {...rest}>{children}</MuiPortal>;
};

export default Portal;
