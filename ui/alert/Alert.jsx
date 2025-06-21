import React from 'react';
import { Trans } from 'react-i18next';
import MuiAlert from '@mui/material/Alert';

const Alert = ({ closeToast, i18nKey, defaultMessage, severity = 'error' }) => (
  <MuiAlert onClose={closeToast} severity={severity}>
    <Trans i18nKey={i18nKey}>{defaultMessage}</Trans>
  </MuiAlert>
);

export default Alert;
