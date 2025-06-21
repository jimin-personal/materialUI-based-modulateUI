import { makeAppStyles } from '@/lib/styleHelper';

export const useDropdownStyles = makeAppStyles<{ disabled?: boolean }>((theme) => ({
  dropdownComponent: (props) => ({
    height: '36px',
    border: theme.palette.actions.outlinedStroke,
    borderRadius: 4,
    fontSize: '14px',
    fontWeight: 500,
    '& div': {
      '&:focus': {
        backgroundColor: 'transparent',
      },
    },
    '&:hover': {
      backgroundColor: props.disabled ? 'unset' : theme.palette.actions.hover,
      outline: 0,
    },
    '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.actions.outlinedStroke,
    },
  }),
  large: {
    height: '42px',
    fontSize: '16px',
    fontWeight: 500,
  },
  medium: {
    height: '36px',
    fontSize: '14px',
    fontWeight: 500,
  },
  small: {
    height: '30px',
    fontSize: '14px',
    fontWeight: 500,
  },
  menuItem: {
    whiteSpace: 'unset',
  },
  menuItemIcon: {
    minWidth: '32px',
  },
  selectedMenuItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.08) !important',
  },
}));

export const useMultiSelectDropdownStyles = makeAppStyles((theme) => ({
  multiSelectDropdownContainer: {},
  multipleDropDownComponent: {
    minWidth: '200px',
    height: '36px',
    '& div': {
      '&:focus': {
        backgroundColor: 'transparent',
      },
    },
    '&:hover': {
      backgroundColor: theme.palette.actions.hover,
      outline: 0,
    },
    '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.actions.outlinedStroke,
    },
  },
  menuPaper: {
    top: '96px',
  },
  menuItem: {
    height: '40px',
  },
  selectedListItem: {
    backgroundColor: 'unset !important',
  },
  listItem: {
    height: '44px',
  },
  large: {
    height: '42px',
    fontSize: '16px',
    fontWeight: 500,
  },
  medium: {
    height: '36px',
    fontSize: '14px',
    fontWeight: 500,
  },
  small: {
    height: '30px',
    fontSize: '14px',
    fontWeight: 500,
  },
}));
