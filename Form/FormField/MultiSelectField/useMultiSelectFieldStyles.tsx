import { makeAppStyles } from '@/lib/styleHelper';

export const useMultiSelectFieldStyles = makeAppStyles((theme) => ({
  isRightAnswer: {
    '&.MuiRadio-colorSecondary': {
      color: theme.palette.success.main,
    },
  },
  isWrongAnswer: {
    '&.MuiRadio-colorSecondary': {
      color: theme.palette.error.main,
    },
  },
}));
