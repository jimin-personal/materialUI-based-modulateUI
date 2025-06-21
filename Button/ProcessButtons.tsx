import { makeAppStyles } from '@/lib/styleHelper';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid, { GridProps } from '../Grid/Grid';
import Button from './Button';

const useProcessButtonStyles = makeAppStyles((theme) => ({
  cancelButton: {
    marginRight: theme.spacing(2),
  },
}));

interface ProcessButtonsProps extends Pick<GridProps, 'my' | 'mt' | 'mx' | 'mb' | 'py' | 'px'> {
  onBack?: () => void;
  onCancel?: () => void;
  onNext?: () => void;
  backBtnLabel?: string | null;
  nextBtnLabel?: string | null;
  cancelBtnLabel?: string | null;
  disabledNextBtn?: boolean;
  isLoading?: boolean;
}

const ProcessButtons: React.FC<ProcessButtonsProps> = ({
  onBack,
  onCancel,
  onNext,
  backBtnLabel,
  cancelBtnLabel,
  nextBtnLabel,
  disabledNextBtn,
  isLoading,
  ...rest
}) => {
  const { t } = useTranslation('common');
  const classes = useProcessButtonStyles();
  return (
    <Grid container {...rest}>
      {onBack && (
        <Grid item>
          <Button
            label={backBtnLabel || t('back_button_label', 'Back')}
            variant="outlined"
            onClick={onBack}
          />
        </Grid>
      )}
      <Grid item flex={1} />
      <Grid item>
        {onCancel && (
          <Button
            className={classes.cancelButton}
            label={cancelBtnLabel || t('cancel_button_label', 'Cancel')}
            variant="outlined"
            onClick={onCancel}
          />
        )}
        {onNext && (
          <Button
            isLoading={isLoading}
            color="primary"
            variant="contained"
            label={nextBtnLabel || t('next_button_label', 'Next')}
            onClick={onNext}
            disabled={disabledNextBtn}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ProcessButtons;
