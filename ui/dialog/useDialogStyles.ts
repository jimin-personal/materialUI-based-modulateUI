import { addMobileStyles, makeAppStyles } from '@/lib/styleHelper';

export const useSimpleDialogStyles = makeAppStyles((theme) => ({
  simpleDialogPaperForMobile: {
    position: 'absolute',
    bottom: 0,
    borderRadius: '10px 10px 0 0',
    height: 'unset',
  },
  simpleDialogPaperWhenHideTitle: {
    paddingTop: theme.spacing(3.5),
    ...addMobileStyles({
      paddingTop: theme.spacing(2.5),
    }),
  },
  paperSizeSm: {
    width: '474px',
  },
  paperSizeMd: {
    width: '540px',
  },
  paperSizeLg: {
    width: '800px',
  },
  simpleDialogTitle: {
    padding: '16px 24px',
    ...addMobileStyles({
      position: 'sticky',
      top: 0,
      paddingTop: '17px',
      zIndex: 100,
      background: 'white',
    }),
  },
  simpleDialogTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dialogDescriptionWrapper: {
    color: theme.palette.text.secondary,
  },
  simpleDialogActionsWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(2),
    marginTop: '0',
    ...addMobileStyles({
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      zIndex: 1,
      backgroundColor: 'white',
      margin: 0,
      padding: '10px 24px',
      paddingBottom: '30px',
    }),
  },
  simpleDialogActionsLeftSlot: {
    flex: 1,
  },
  closeButtonRoot: {
    padding: '4px',
    color: '#757575',
  },
  simpleDialogContentRoot: {
    height: '100%',
    padding: '20px 24px',
    '&:first-child': {
      // Override MUI default padding
      paddingTop: '4px',
    },
    ...addMobileStyles({
      overflowY: 'auto',
    }),
  },
}));

export const useSimpleWarningDialogStyles = makeAppStyles((theme) => ({
  warningDialogTitleRoot: {
    paddingBottom: 0,
  },
  simpleWarningDialogCloseButton: {
    padding: 0,
  },
  simpleWarningDialogContent: {
    paddingTop: 0,
  },
  closeButtonWrapper: {
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  warningButton: {
    background: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      background: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
    },
  },
}));
