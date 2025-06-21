import React from 'react';
import { toast } from 'react-toastify';
import SuccessAlert from '../alert/SuccessAlert';
import WarningAlert from '../alert/WarningAlert';
import { Trans } from 'react-i18next';
import appConfig from '@/configs/appConfig';
import InfoAlert from '@/components/primitiveUI/Alert/InfoAlert';
import Typography from '@/components/primitiveUI/Typography/Typography';
import SentryHelper from '@/lib/SentryHelper';

const DEFAULT_AUTO_CLOSING_TIME = 2000;
type ToastOption = { autoClose?: number; toastId?: string; delay?: number };

export const ShowErrorMessageWithTranslation = ({
  i18nKey,
  defaultMessage,
}: {
  i18nKey: string;
  defaultMessage: string;
}) => {
  ShowError(
    <Trans i18nKey={i18nKey}>
      <Typography variant="body5">{defaultMessage}</Typography>
    </Trans>,
  );
};

export const ShowWarning = (
  warningMessage: React.ReactElement | string | null,
  { autoClose = DEFAULT_AUTO_CLOSING_TIME, toastId }: ToastOption = {},
) => {
  if (!warningMessage) {
    return;
  }
  const msg = (
    <WarningAlert>
      <Typography variant="body5">{warningMessage}</Typography>
    </WarningAlert>
  );
  toast(msg, {
    toastId,
    autoClose: autoClose,
    hideProgressBar: true,
    position: toast.POSITION.TOP_CENTER,
    closeButton: false,
  });
};

export const ShowSuccess = (
  successMessage: React.ReactElement | string | null,
  { autoClose = DEFAULT_AUTO_CLOSING_TIME, toastId, delay }: ToastOption = {},
) => {
  if (!successMessage) {
    return;
  }
  const msg = (
    <SuccessAlert onClose={() => {}}>
      <Typography variant="body5">{successMessage}</Typography>
    </SuccessAlert>
  );
  toast(msg, {
    toastId,
    autoClose: autoClose,
    hideProgressBar: true,
    position: toast.POSITION.TOP_CENTER,
    closeButton: false,
    delay,
  });
};
export const ShowError = (
  errorMessage: React.ReactElement | string | null,
  { autoClose = DEFAULT_AUTO_CLOSING_TIME, toastId }: ToastOption = {},
) => {
  if (!errorMessage) {
    return;
  }
  const msg = (
    <InfoAlert>
      <Typography variant="body5">{errorMessage}</Typography>
    </InfoAlert>
  );
  toast(msg, {
    toastId,
    autoClose,
    hideProgressBar: true,
    position: toast.POSITION.TOP_CENTER,
    closeButton: false,
  });
};

export const showInfo = (
  infoMessage: React.ReactElement | string | null,
  { autoClose = DEFAULT_AUTO_CLOSING_TIME, toastId }: ToastOption = {},
) => {
  if (!infoMessage) {
    return;
  }
  const msg = (
    <InfoAlert>
      <Typography variant="body5">{infoMessage}</Typography>
    </InfoAlert>
  );
  toast(msg, {
    toastId,
    autoClose,
    hideProgressBar: true,
    position: toast.POSITION.TOP_CENTER,
    closeButton: false,
  });
};

export const showNotInvite = () => {
  ShowErrorMessageWithTranslation({
    i18nKey: 'common:error.no_user',
    defaultMessage: 'Cannot find a user, Maybe you are not invited yet.',
  });
};

export const ServerError = () => {
  ShowErrorMessageWithTranslation({
    i18nKey: 'common:error.server',
    defaultMessage: 'Our server is working harder than usual. Please give it a min.',
  });
};

// TODO: add log to sentry ticket: https://app.asana.com/0/1200059322788051/1200786098066234
export const logError = (
  error?: any,
  defaultMessage?: string | null,
  options: { hideNotification?: boolean } = {},
) => {
  if (appConfig.IS_PRODUCTION) {
    SentryHelper.captureException(error);
  }
  if (appConfig.IS_DEVELOPMENT) {
    console.log('[Error]: ', { message: error?.message, stack: error?.stack });
  }
  if (options.hideNotification) {
    return;
  }

  // SERVER Expected error
  if (error?.response?.data?.errorMessage) {
    return ShowError(error.response.data.errorMessage);
  }
  // CLIENT Expected error
  if (error.isExpected) {
    return ShowError(error.message);
  }
  if (defaultMessage) {
    return ShowError(defaultMessage);
  }

  // TODO revert hiding default error https://app.asana.com/0/1200244029398736/1203163053736224
  if (appConfig.IS_PRODUCTION) {
    return;
  }

  ServerError();
};
