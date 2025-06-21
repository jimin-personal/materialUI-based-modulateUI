import React from 'react';
import clsx from 'clsx';
import MuiAlert from '@mui/material/Alert';
import { SuccessIcon } from '@/components/ui/icon';
import { useSuccessAlertStyles } from './useAlertStyles';

interface SuccessAlertProps {
  children?: React.ReactNode;
  onClose?: () => void;
  hideIcon?: boolean;
  classes?: {
    root?: string;
  };
}
const SuccessAlert: React.FC<SuccessAlertProps> = ({ children, hideIcon, onClose, classes }) => {
  const baseClasses = useSuccessAlertStyles();
  return (
    <MuiAlert
      classes={{
        standardSuccess: baseClasses.standardSuccess,
        root: clsx(baseClasses.alertRoot, classes?.root),
      }}
      severity="success"
      onClose={onClose}
      icon={!hideIcon && <SuccessIcon />}
    >
      {children}
    </MuiAlert>
  );
};

export default SuccessAlert;
