import React from 'react';
import clsx from 'clsx';
import { Dialog, DialogTitle, DialogContent, IconButton, Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@/components/primitiveUI/Typography/Typography';

// import useMediaQuery from '@mui/material/useMediaQuery';
import { useStyles } from './styles';
import { useIsMobile } from '@/hooks/useApp';

const ConfirmDialogWithImage = ({
  open,
  full,
  title = '',
  heading = '',
  content,
  buttonMsg,
  img,
  onConfirm,
  onClose,
  dangerous = false,
}) => {
  const classes = useStyles();
  // const isMobile = useMediaQuery('only screen and (max-width: 1280px)');
  const isMobile = useIsMobile();
  const headingVariant = isMobile ? 'h7' : 'h4';
  const handleClose = (e) => {
    onClose();
  };

  const headingTextStyle = clsx({
    [classes.headingText]: true,
    [classes.mobileHeadingText]: isMobile,
  });

  return (
    <Dialog
      PaperProps={
        full
          ? {
              className: classes.fullContainer,
            }
          : {
              className: classes.container,
            }
      }
      fullScreen={full}
      fullWidth={!full}
      maxWidth="xs"
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-dialog-title"
    >
      <DialogTitle id="delete-dialog-title">
        {title}
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {img}
        {heading && (
          <Typography className={headingTextStyle} variant={headingVariant}>
            {heading}
          </Typography>
        )}
        {content}
        <Box>
          {buttonMsg.cancel && (
            <Button className={classes.actionButton} onClick={handleClose} variant="outlined">
              {buttonMsg.cancel}
            </Button>
          )}
          <Button
            className={clsx(classes.actionButton, {
              [classes.actionButtonDangerous]: dangerous,
            })}
            onClick={onConfirm}
            variant="contained"
            color="primary"
          >
            {buttonMsg.confirm}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialogWithImage;
