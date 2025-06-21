import { makeAppStyles } from '@/lib/styleHelper';

export const useAutocompleteStyles = makeAppStyles((theme) => ({
  paper: {
    maxWidth: '60%',
    borderRadius: '4px',
    boxShadow:
      '0px 5px 5px rgba(0, 0, 0, 0.2), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12)',
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    lineHeight: '12px',
    color: theme.palette.text.secondary,
    borderRadius: '4px',
    background: theme.palette.primary.selected,
  },
  inputRoot: {
    maxHeight: '68px',
  },
  tagCloseIcon: {
    color: theme.palette.text.secondary,
  },
  optionLabel: {
    fontSize: '12px',
    lineHeight: '12px',
    color: theme.palette.text.secondary,
    padding: '8px 6px',
    borderRadius: '4px',
    background: theme.palette.primary.selected,
  },
  groupContainer: {
    top: '-8px',
    background: '#ffffff',
    padding: '6px 16px',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
}));
