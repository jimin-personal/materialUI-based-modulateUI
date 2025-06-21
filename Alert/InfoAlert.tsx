import { makeAppStyles } from '@/lib/styleHelper';
import MuiAlert from '@mui/material/Alert';
import React from 'react';

const useInfoAlertStyles = makeAppStyles((theme) => ({
  infoAlertContainer: {
    backgroundColor: theme.palette.info.lightBg,
  },
}));
interface InfoAlertProps {
  children: React.ReactNode;
}

const InfoAlert: React.FC<InfoAlertProps> = ({ children }) => {
  const classes = useInfoAlertStyles();
  return (
    <MuiAlert
      severity="info"
      variant="outlined"
      color="info"
      classes={{
        outlinedInfo: classes.infoAlertContainer,
      }}
    >
      {children}
    </MuiAlert>
  );
};

export default InfoAlert;
