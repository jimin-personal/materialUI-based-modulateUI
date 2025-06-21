import { makeAppStyles } from '@/lib/styleHelper';

export const useStyles = makeAppStyles((theme) => ({
  container: {
    opacity: '1',
    position: 'absolute',
    top: '108px',
  },
  fullContainer: {
    opacity: '0.95',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogContent: {
    padding: '0',
    align: 'center',
    textAlign: 'center',
  },
  headingText: {
    width: '352px',
    // height: '72px',
    textAlign: 'center',
    lineHeight: '1.5',
    fontWeight: '700',
    margin: theme.spacing(-2, 'auto', 0),
  },
  mobileHeadingText: {
    width: '288px',
  },
  actionButton: {
    margin: theme.spacing(0, 0.75, 3),
    fontSize: '16px',
    fontWeight: '500',
  },
  actionButtonDangerous: {
    background: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      background: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
    },
  },
}));
