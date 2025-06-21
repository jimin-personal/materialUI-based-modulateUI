import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
  IconButton,
  Breakpoint,
} from '@mui/material';
import MuiDialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Divider from '@mui/material/Divider';
import Typography from '@/components/primitiveUI/Typography/Typography';

// import useMediaQuery from '@mui/material/useMediaQuery';

import ClickOnceButton from '../../button/ClickOnceButton';
import { useStyles } from './styles';
import { useIsMobile } from '@/hooks/useApp';

export interface DialogTitleProps {
  children: React.ReactNode;
  id: string;
  classes: {
    root: string;
    mobileRoot: string;
    backButton: string;
    closeButton: string;
  };
  onClose?: (event: React.MouseEvent) => void;
  isBackIcon?: boolean;
  isMobile?: boolean;
}

const DialogTitle: React.FC<DialogTitleProps> = (props) => {
  const { children, classes, onClose, isBackIcon, isMobile, ...other } = props;
  const titleRootStyle = clsx({
    root: !isMobile,
    mobileRoot: isMobile,
  });

  return (
    <MuiDialogTitle className={titleRootStyle} {...other}>
      {isBackIcon && (
        <IconButton
          aria-label="close"
          className={classes.backButton}
          onClick={onClose}
          size="large"
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}
      <Typography variant="h6" style={{ display: 'inline-block' }}>
        {children}
      </Typography>
      {onClose && !isBackIcon ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          size="large"
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

export interface DialogTemplateProps {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
  scroll?: 'body' | 'paper';
  buttonText?: string | null;
  buttonDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  buttonType?: React.ElementType;
  className?: string;
  loadingText?: string;
  dialogAction?: boolean;
  bottomText?: string;
  onBottomClick?: () => void;
  bottomText2?: string;
  onBottom2Click?: () => void;
  fullWidth?: boolean;
  // Mimic from MUI/Dialog.d.ts
  maxWidth?: Breakpoint | false;
  classes?: { root?: string };
}

const DialogTemplate: React.FC<DialogTemplateProps> = ({
  open,
  onClose,
  title,
  children,
  buttonText,
  buttonDisabled = false,
  scroll,
  onClick,
  buttonType = 'button',
  className,
  loadingText,
  dialogAction = true,
  bottomText,
  onBottomClick,
  bottomText2,
  onBottom2Click,
  fullWidth = false,
  maxWidth = 'md',
  classes,
}) => {
  const [disabled, setDisabled] = useState(buttonDisabled);
  const baseClasses = useStyles();
  const isMobile = useIsMobile();
  if (isMobile) {
    className = undefined;
  }
  useEffect(() => {
    setDisabled(buttonDisabled);
  }, [buttonDisabled]);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      fullScreen={isMobile}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      // fullWidth={true}
      PaperProps={{ className }}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      scroll={scroll}
      open={open}
    >
      <DialogTitle
        id="customized-dialog-title"
        classes={{
          root: baseClasses.titleRoot,
          mobileRoot: baseClasses.titleRoot,
          backButton: baseClasses.titleBackButton,
          closeButton: baseClasses.titleCloseButton,
        }}
        onClose={handleClose}
        isBackIcon={isMobile}
      >
        {title}
      </DialogTitle>
      <Divider />
      <DialogContent
        style={scroll ? {} : { overflow: 'hidden' }}
        classes={{
          root: classes?.root,
        }}
      >
        {children}
      </DialogContent>
      {!(bottomText || bottomText2) && dialogAction && <Divider />}
      {!dialogAction || !onClick ? null : (
        <DialogActions>
          <ClickOnceButton
            className={baseClasses.button}
            variant="contained"
            color="primary"
            disabled={disabled}
            onClick={onClick}
            type={buttonType}
            loadingText={loadingText}
          >
            {buttonText}
          </ClickOnceButton>
        </DialogActions>
      )}
      {(bottomText || bottomText2) && (
        <DialogContent dividers style={{ overflow: 'hidden' }}>
          <Typography
            className={baseClasses.bottomTxt}
            variant="subtitle7"
            onClick={onBottomClick}
          >
            {bottomText}
          </Typography>
          {bottomText && bottomText2 && (
            <Typography className={baseClasses.border} tag="span">
              |
            </Typography>
          )}
          <Typography
            className={baseClasses.bottomTxt}
            variant="subtitle7"
            onClick={onBottom2Click}
          >
            {bottomText2}
          </Typography>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default DialogTemplate;
