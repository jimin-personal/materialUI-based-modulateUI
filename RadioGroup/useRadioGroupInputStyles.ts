import { makeAppStyles } from '@/lib/styleHelper';

export const useRadioGroupInputStyles = makeAppStyles((theme) => ({
  radioGroupInputContainer: {
    width: '100%',
  },
  optionContainer: {
    display: 'grid',
    gridTemplateColumns: '36px 1fr 36px 36px',
    alignItems: 'center',
  },
  addOptionContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  addOptionLabel: {
    fontWeight: 'normal',
    color: theme.palette.text.secondary,
  },
  inputValue: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  inputUnderline: {
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: '1px solid #212121',
    },
    '&:before': {
      borderBottom: 'none',
    },
  },
  radioChecked: {
    '&.MuiRadio-colorSecondary': {
      color: theme.palette.success.main,
    },
  },
}));
