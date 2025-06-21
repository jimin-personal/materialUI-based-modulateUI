import { makeAppStyles } from '@/lib/styleHelper';

export const useDefaultTableStyles = makeAppStyles((theme) => ({
  defaultTable: {
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    '& td': {
      padding: '16px 8px 16px 8px',
      borderBottom: '1px solid #E0E0E0',
    },
    '& td:first-child': {
      paddingLeft: '16px',
    },
    '& td:last-child': {
      paddingRight: '16px',
    },
    width: '100%',
    '& thead': {
      '& tr': {
        height: '32px',
      },
      '& th': {
        padding: '16px 8px 16px 8px',
        textAlign: 'start',
        borderBottom: '1px solid #E0E0E0',
      },
      '& th:first-child': {
        paddingLeft: '16px',
      },
      '& th:last-child': {
        paddingRight: '16px',
      },
      color: theme.palette.text.disabled,
    },
    '& tbody > tr': {
      height: '26px',
    },
  },
  rowClickable: {
    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.action.hover,
    },
  },
  stickyHeader: {
    position: 'sticky',
    top: 0,
    background: 'white',
    zIndex: 100,
  },
}));
