import { makeAppStyles } from '@/lib/styleHelper';

export const useTabStyles = makeAppStyles((theme) => ({
  styledTabRoot: {
    minWidth: '50px',
    minHeight: 'unset',
    paddingBottom: '3px',
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.secondary,
      opacity: 1,
    },
    '&$selected': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: theme.palette.text.primary,
    },
  },

  styledTabsIndicator: {
    backgroundColor: theme.palette.primary.main,
  },

  styledTabsRoot: { minHeight: 'unset', marginBottom: theme.spacing(2) },
}));
