import { Breakpoint, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CloseIcon } from '../icon';
import OverlayCenterLoading from '../../Loading/OverlayCenterLoading';
import { useSimpleDialogStyles } from './useDialogStyles';
import { useIsMobile } from '@/hooks/useApp';
import Typography from '@/components/primitiveUI/Typography/Typography';
import { isNil } from 'lodash';
import clsx from 'clsx';
import IconButton from '@/components/primitiveUI/Button/IconButton';
import Button from '@/components/primitiveUI/Button/Button';
interface SimpleDialogActionButtonProps {
  disabled?: boolean;
  variant?: 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
}
/**
 * If need special buttons, Please just use `bottomContent`
 *
 *  This is only for simple usage
 */
interface SimpleDialogProps {
  onClose?: () => void;
  title?: React.ReactNode;
  description?: string | React.ReactNode;
  bottomContent?: React.ReactNode;
  isLoading?: boolean;
  actions?: {
    leftSlot?: React.ReactNode;
    proceedBtnLabel?: string | null;
    onProceed?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    cancelBtnLabel?: string | null;
    onCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    proceedBtnProps?: SimpleDialogActionButtonProps;
    cancelBtnProps?: SimpleDialogActionButtonProps;
  };
  open?: boolean;
  hideTitle?: boolean;
  fullWidth?: boolean;
  fullScreen?: boolean;
  maxWidth?: Breakpoint | false;
  width?: 'sm' | 'md' | 'lg';
  classes?: {
    paperRoot?: string;
    contentRoot?: string;
    backdropRoot?: string;
    title?: string;
    closeButtonRoot?: string;
  };
  closeButton?: boolean;
  isRestrictModalClose?: boolean;
  children?: React.ReactNode;
}
const SimpleDialog: React.FC<SimpleDialogProps> = ({
  open = true,
  isLoading = false,
  hideTitle,
  fullWidth,
  maxWidth,
  width,
  onClose,
  title,
  description,
  children,
  bottomContent,
  actions,
  classes,
  fullScreen,
  closeButton = true,
  isRestrictModalClose = false,
}) => {
  const { t } = useTranslation('common');
  const baseClasses = useSimpleDialogStyles();
  const isMobile = useIsMobile();

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose?.();
  };
  return (
    <Dialog
      open={open}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onClose={handleClose}
      onClick={(e) => {
        e.stopPropagation();
      }}
      disableEscapeKeyDown={isRestrictModalClose}
      fullScreen={isNil(fullScreen) ? isMobile : fullScreen}
      classes={{
        paper: clsx(
          {
            [baseClasses.simpleDialogPaperForMobile]: isMobile && !fullScreen,
            [baseClasses.simpleDialogPaperWhenHideTitle]: hideTitle,
            [baseClasses.paperSizeSm]: width === 'sm',
            [baseClasses.paperSizeMd]: width === 'md',
            [baseClasses.paperSizeLg]: width === 'lg',
          },
          classes?.paperRoot,
        ),
      }}
      BackdropProps={{
        classes: {
          root: classes?.backdropRoot,
        },
      }}
    >
      {!hideTitle && (
        <DialogTitle
          classes={{
            root: classes?.title ? classes?.title : baseClasses.simpleDialogTitle,
          }}
        >
          <div className={baseClasses.simpleDialogTitleWrapper}>
            {React.isValidElement(title) ? (
              title
            ) : (
              <Typography variant="h6" notranslate>
                {title}
              </Typography>
            )}
            {(closeButton || isRestrictModalClose) && (
              <IconButton
                aria-label="close"
                onClick={handleClose}
                className={clsx(baseClasses.closeButtonRoot, classes?.closeButtonRoot)}
              >
                <CloseIcon />
              </IconButton>
            )}
          </div>
          <div className={baseClasses.dialogDescriptionWrapper}>
            <Typography variant="body5">{description}</Typography>
          </div>
        </DialogTitle>
      )}
      {children && (
        <DialogContent
          classes={{
            root: clsx([baseClasses.simpleDialogContentRoot, classes?.contentRoot]),
          }}
        >
          <OverlayCenterLoading isLoading={isLoading}>{children}</OverlayCenterLoading>
        </DialogContent>
      )}
      {bottomContent}
      {!isLoading && actions && (
        <DialogActions
          classes={{
            root: baseClasses.simpleDialogActionsWrapper,
          }}
        >
          {actions?.leftSlot && (
            <div className={baseClasses.simpleDialogActionsLeftSlot}>{actions.leftSlot}</div>
          )}
          {actions.onCancel && (
            <Button
              disabled={actions.cancelBtnProps?.disabled}
              variant={actions.cancelBtnProps?.variant || 'outlined'}
              color={actions.cancelBtnProps?.color}
              onClick={actions.onCancel}
            >
              {actions.cancelBtnLabel || t('cancel_button_label', 'Cancel')}
            </Button>
          )}
          {actions.onProceed && (
            <Button
              disabled={actions.proceedBtnProps?.disabled}
              variant={actions.proceedBtnProps?.variant || 'contained'}
              color={actions.proceedBtnProps?.color || 'primary'}
              onClick={actions.onProceed}
            >
              {actions.proceedBtnLabel || t('proceed_button_label', 'Proceed')}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};
export default SimpleDialog;
