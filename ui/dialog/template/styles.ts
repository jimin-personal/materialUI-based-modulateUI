import { addMobileStyles, makeAppStyles } from '@/lib/styleHelper';

export const useStyles = makeAppStyles((theme) => ({
  titleRoot: {
    margin: 0,
    padding: theme.spacing(2),
    ...addMobileStyles({
      margin: 0,
      padding: '6px',
    }),
  },
  titleCloseButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  titleBackButton: {
    color: theme.palette.grey[500],
  },
  button: {
    margin: theme.spacing(1),
    '&:disabled': {
      background: '#9A91E0',
      color: '#ffffff',
    },
  },
  bottomTxt: {
    color: theme.palette.text.disabled,
    display: 'inline-block',
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.error.main,
    },
  },
  border: {
    color: theme.palette.text.disabled,
    margin: '0 10px',
  },
}));
