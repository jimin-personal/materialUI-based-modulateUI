import { addBorderStyles, makeAppStyles } from '@/lib/styleHelper';

export const useFormFieldCardStyles = makeAppStyles((theme) => ({
  formFieldCardContainer: {
    ...addBorderStyles(theme),
    padding: theme.spacing(2),
    margin: '20px 0',
    background: 'white',
  },
  formFieldCardHeader: {
    marginBottom: '10px',
  },
  descriptionImageWrapper: {
    margin: theme.spacing(2.5, 0),
  },
  rightAnswerContainer: {
    margin: theme.spacing(1, 0),
  },
}));

export const useFormFieldCardEditStyles = makeAppStyles((theme) => ({
  formFieldCardEditContainer: {
    ...addBorderStyles(theme),
    padding: theme.spacing(2),
    margin: '20px 0',
    background: 'white',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  fieldEditCardHeader: {
    display: 'grid',
    alignItems: 'center',
    gridColumnGap: '4px',
    gridTemplateColumns: '1fr 36px',
  },
  fieldEditCardTitle: {
    gridRow: 1,
    gridColumn: '1 / 2',
  },
  fieldEditCardMenu: {
    gridRow: 1,
    gridColumn: '2 / 3',
  },
  fieldTypeDescriptionContainer: {
    display: 'flex',
    gap: '4px',
  },
  fieldTypeSelector: {
    width: '160px',
  },
  formFieldCardEditMobileView: {
    '& $fieldEditCardHeader': {
      display: 'grid',
      gridTemplateColumns: '40px 1fr 40px',
    },
    '& $fieldEditCardTitle': {
      gridColumn: '1 / 3',
    },
    '& $fieldEditCardMenu': {
      gridRow: 1,
      gridColumn: '3 / 4',
    },
    '& $fieldImageUploadButton': {
      gridRow: 2,
      gridColumn: '1 / 2',
    },
  },
  descriptionImageWrapper: {
    margin: theme.spacing(2.5, 0),
  },
}));
