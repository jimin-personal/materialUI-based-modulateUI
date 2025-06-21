import { makeAppStyles } from '@/lib/styleHelper';

export const useIconColorStyles = makeAppStyles((theme) => ({
  greyColor: {
    color: theme.palette.text.secondary,
  },
  successColor: {
    color: theme.palette.success.main,
  },
}));

export const useErrorIconStyles = makeAppStyles((theme) => ({
  errorIcon: {
    color: theme.palette.error.main,
  },
}));

export const useWarningIconStyles = makeAppStyles((theme) => ({
  warningIcon: {
    height: '40%',
    width: '40%',
    color: theme.palette.error.main,
  },
}));

export const useCopyCourseLinkIconStyles = makeAppStyles((theme) => ({
  copyCourseLinkIcon: {
    transform: 'rotate(-45deg)',
    color: theme.palette.text.secondary,
    background: 'transparent',
  },
}));

export const useStepMoveIconStyles = makeAppStyles((theme) => ({
  iconContainer: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    backgroundColor: '#EBEBEB',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    marginRight: '4px',
    marginLeft: '4px',
  },
}));
