import {
  Box,
  Breakpoint,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClickOnceButton } from '..';
import { CloseIcon } from '../icon';
import WarningSign from '../Sign/WarningSign';
import { useSimpleWarningDialogStyles } from './useDialogStyles';
import OverlayCenterLoading from '@/components/Loading/OverlayCenterLoading';

/**
 * Refer to SimpleDialog
 */
interface SimpleWarningDialogProps {
  children?: React.ReactNode;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  title?: string | null;
  open?: boolean;
  fullWidth?: boolean;
  maxWidth?: Breakpoint | false;
  actions?: {
    proceedBtnLabel?: string | null;
    cancelBtnLabel?: string | null;
    onProceed?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
  warning?: boolean;
}

const SimpleWarningDialog: React.FC<SimpleWarningDialogProps> = ({
  open = true,
  isLoading,
  fullWidth,
  maxWidth = 'xs',
  onClose,
  title,
  children,
  actions,
  warning,
}) => {
  const classes = useSimpleWarningDialogStyles();
  const { t } = useTranslation('common');
  return (
    <Dialog open={open} fullWidth={fullWidth} maxWidth={maxWidth} onClose={onClose}>
      <DialogTitle
        classes={{
          root: classes.warningDialogTitleRoot,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <div>{title}</div>
          <div>
            <IconButton
              aria-label="close"
              onClick={onClose}
              classes={{
                root: classes.simpleWarningDialogCloseButton,
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </Box>
      </DialogTitle>
      <DialogContent
        classes={{
          root: classes.simpleWarningDialogContent,
        }}
      >
        <OverlayCenterLoading isLoading={isLoading}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <WarningSign />
          </Box>
          {children && <Box my={2}>{children}</Box>}
        </OverlayCenterLoading>
      </DialogContent>
      {actions && !isLoading && (
        <DialogActions
          classes={{
            root: classes.closeButtonWrapper,
          }}
        >
          {actions.onCancel && (
            <ClickOnceButton variant="outlined" onClick={actions.onCancel}>
              {actions.cancelBtnLabel || t('button_label_close', 'Close')}
            </ClickOnceButton>
          )}
          {actions.onProceed && (
            <ClickOnceButton
              variant="contained"
              color="primary"
              onClick={actions.onProceed}
              className={warning ? classes.warningButton : ''}
            >
              {actions.proceedBtnLabel || t('button_label_okay', 'OK')}
            </ClickOnceButton>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default SimpleWarningDialog;
