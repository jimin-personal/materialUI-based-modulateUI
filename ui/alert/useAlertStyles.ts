import { makeAppStyles } from '@/lib/styleHelper';
import {
  colorSuccess,
  colorSuccessLight,
  colorError,
  colorErrorLight,
  colorWarning,
  colorWarningLight,
} from '@/styles/constants/colors';

const alertBorder = '1px solid';

const alertStyles = {
  alertRoot: {
    alignItems: 'center',
    maxWidth: '500px',
  },
};

export const useSuccessAlertStyles = makeAppStyles((theme) => ({
  standardSuccess: {
    color: 'black',
    background: colorSuccessLight,
    border: `${alertBorder} ${colorSuccess}`,
  },
  ...alertStyles,
}));

export const useErrorAlertStyles = makeAppStyles((theme) => ({
  standardError: {
    color: 'black',
    background: colorErrorLight,
    border: `${alertBorder} ${colorError}`,
  },
  ...alertStyles,
}));

export const useWarningAlertStyles = makeAppStyles((theme) => ({
  standardWarning: {
    color: 'black',
    background: colorWarningLight,
    border: `${alertBorder} ${colorWarning}`,
  },
  ...alertStyles,
}));
