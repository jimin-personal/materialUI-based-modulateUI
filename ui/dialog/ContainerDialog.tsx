import React from 'react';
import { Dialog, DialogTitle, DialogContent, Grid } from '@mui/material';
import clsx from 'clsx';
import { CloseIcon } from '@/components/ui/icon';
import OverlayCenterLoading from '@/components/Loading/OverlayCenterLoading';
import { useIsMobile } from '@/hooks/useApp';
import Typography from '@/components/primitiveUI/Typography/Typography';

import { makeAppStyles } from '@/lib/styleHelper';

export const useContainerDialogStyles = makeAppStyles((theme) => ({
  dialogTitle: {
    padding: '24px 16px 0',
  },
  dialogTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dialogContentRoot: {
    overflowY: 'auto',
    padding: '0',
    height: '100%',
  },
  closeIcon: {
    cursor: 'pointer',
  },
}));

interface ContainerDialogProps {
  children: React.ReactNode;

  onClose: () => void;
  title: React.ReactNode;
  isLoading?: boolean;
  open?: boolean;
  classes?: {
    dialogPaper?: string;
    title?: string;
    content?: string;
  };
}
const ContainerDialog: React.FC<ContainerDialogProps> = ({
  open = true,
  isLoading = false,
  onClose,
  title,
  classes = {},
  children,
}) => {
  const baseClasses = useContainerDialogStyles();
  const isMobile = useIsMobile();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
      PaperProps={{ className: classes.dialogPaper }}
    >
      <DialogTitle
        classes={{
          root: clsx(baseClasses.dialogTitle, classes.title),
        }}
      >
        <Grid container className={baseClasses.dialogTitleWrapper}>
          <Typography variant="subtitle6" notranslate>
            {title}
          </Typography>
          <CloseIcon className={baseClasses.closeIcon} onClick={onClose} />
        </Grid>
      </DialogTitle>
      <DialogContent classes={{ root: clsx(baseClasses.dialogContentRoot, classes.content) }}>
        <OverlayCenterLoading isLoading={isLoading}>{children}</OverlayCenterLoading>
      </DialogContent>
    </Dialog>
  );
};
export default ContainerDialog;
