import { makeAppStyles } from '@/lib/styleHelper';
import './customStyle/lib/style/date-picker/index.css';
import './customStyle/lib/style/date-picker/css';

export const useDatePickerStyles = makeAppStyles((theme) => ({
  datePickerSpace: {
    marginLeft: '12px',
  },
  datePickerContainer: {
    width: '230px',
    height: '36px',

    '&.ant-picker': {
      borderRadius: '4px',
      borderColor: theme.palette.actions.outlinedStroke,
      '&.ant-picker-disabled': {
        background: 'white',
      },
      '&:hover': {
        backgroundColor: theme.palette.actions.hover,
        borderColor: theme.palette.actions.outlinedStroke,
      },
      '& input': {
        fontSize: '13px',
        fontWeight: 500,

        '&:disabled': {
          color: theme.palette.text.secondary,
        },
      },
    },
    '&:focus': {
      border: `2px ${theme.palette.primary.main} solid`,
      boxShadow: 'none',
    },
  },
}));
