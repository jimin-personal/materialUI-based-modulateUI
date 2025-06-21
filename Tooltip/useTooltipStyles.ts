import { makeAppStyles } from '@/lib/styleHelper';

export const useTooltipStyle = makeAppStyles((theme) => ({
  customizedTooltip: {
    color: theme.palette.text.disabled,
    width: '16px',
    height: '16px',
  },
  tooltip: {
    fontSize: '14px',
    backgroundColor: theme.palette.other.snackbarBackground,
    padding: '8px 12px',
    marginBottom: '10px',
    maxWidth: '251px',
  },

  tooltipArrow: {
    color: theme.palette.other.snackbarBackground,
  },
}));
