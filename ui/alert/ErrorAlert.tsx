import React from 'react';
import MuiAlert from '@mui/material/Alert';
import { ErrorIcon } from '@/components/ui/icon';
import { useErrorAlertStyles } from './useAlertStyles';

interface ErrorAlertProps {
  children: React.ReactNode;
  onClose?: () => void;
}
const ErrorAlert: React.FC<ErrorAlertProps> = ({ children, onClose = () => {} }) => {
  const classes = useErrorAlertStyles();
  return (
    <MuiAlert
      classes={{
        standardError: classes.standardError,
        root: classes.alertRoot,
      }}
      severity="error"
      onClose={onClose}
      icon={<ErrorIcon />}
    >
      {children}
    </MuiAlert>
  );
};

export default ErrorAlert;
