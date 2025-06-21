import React from 'react';
import MuiAlert from '@mui/material/Alert';
import { WarningAlertIcon } from '@/components/ui/icon';
import { useWarningAlertStyles } from './useAlertStyles';

interface WarningAlertProps {
  onClose?: () => void;
  children: React.ReactNode;
}

const WarningAlert: React.FC<WarningAlertProps> = ({ children, onClose = () => {} }) => {
  const classes = useWarningAlertStyles();
  return (
    <MuiAlert
      classes={{
        standardWarning: classes.standardWarning,
        root: classes.alertRoot,
      }}
      severity="warning"
      onClose={onClose}
      icon={<WarningAlertIcon />}
    >
      {children}
    </MuiAlert>
  );
};

export default WarningAlert;
