import React from 'react';
import { IconButton, Divider, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import ClickOnceButton from '../button/ClickOnceButton';
import Typography from '@/components/primitiveUI/Typography/Typography';

import { makeAppStyles } from '@/lib/styleHelper';

export const useStyles = makeAppStyles((theme) => ({
  dangerousButton: {
    background: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      background: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
    },
  },
  dialogTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dialogTitleText: {
    flex: 1,
  },
  dialogCloseIcon: {
    padding: '2px',
    color: theme.palette.text.secondary,
  },
  dialogContent: {
    paddingTop: theme.spacing(4),
    minWidth: '440px',
    minHeight: '120px',
  },
  dialogActions: {
    padding: '16px 24px',
  },
}));

export interface ConfirmDialogDangerProps {
  title: string;
  contents: React.ReactElement;
  open: boolean;
  msg: { dangerousButtonLabel: string; cancelButtonLabel: string };
  onDangerousConfirm: (value: boolean) => void;
  onClose: () => void;
  dangerous?: boolean;
}

const ConfirmDialogDanger: React.FC<ConfirmDialogDangerProps> = ({
  title,
  contents,
  open,
  msg,
  onDangerousConfirm,
  onClose,
  dangerous = true,
}) => {
  const classes = useStyles();

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const confirmHelper = (e: React.MouseEvent) => {
    onDangerousConfirm(true);
    handleClose(e);
  };

  const cancelHelper = (e: React.MouseEvent) => {
    onDangerousConfirm(false);
    handleClose(e);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onClick={(e) => {
        e.stopPropagation();
      }}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        <Grid container justifyContent="space-between">
          <Typography variant="h6">{title}</Typography>
          <IconButton className={classes.dialogCloseIcon} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent className={classes.dialogContent}>{contents}</DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <ClickOnceButton onClick={cancelHelper} variant="outlined">
              {msg.cancelButtonLabel}
            </ClickOnceButton>
          </Grid>
          <Grid item>
            <ClickOnceButton
              className={dangerous ? classes.dangerousButton : ''}
              onClick={confirmHelper}
              variant="contained"
              color="primary"
            >
              {msg.dangerousButtonLabel}
            </ClickOnceButton>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialogDanger;
