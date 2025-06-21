import { makeAppStyles } from '@/lib/styleHelper';

export const useMoreIconMenuStyles = makeAppStyles((theme) => ({
  menuItem: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: '16px',
    minWidth: '182px',
    '& li:hover': {
      backgroundColor: '#F5F5F5',
    },
  },
  moreIcon: {
    width: '40px',
    height: '40px',
    '&:hover': {
      background: theme.palette.action.hover,
    },
  },
  moreIconActive: {
    background: theme.palette.action.hover,
  },
}));

export const useMenuStyles = makeAppStyles((theme) => ({
  listItemIcon: {
    minWidth: '32px',
  },
}));
