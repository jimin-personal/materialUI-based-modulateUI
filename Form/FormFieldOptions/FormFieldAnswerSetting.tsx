import Button from '@/components/primitiveUI/Button/Button';
import Grid from '@/components/primitiveUI/Grid/Grid';
import { FormInputSetAnswerIcon } from '@/components/ui/icon';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface FormFieldAnswerSettingProps {
  onChangeAddingAnswer: (param: { isAdding: boolean }) => void;
  isAddingAnswer: boolean;
}

const FormFieldAnswerSetting: React.FC<FormFieldAnswerSettingProps> = ({
  isAddingAnswer,
  onChangeAddingAnswer,
}) => {
  const { t } = useTranslation('form');
  const { t: commonT } = useTranslation('common');
  const handleClickAddAnswer = () => {
    onChangeAddingAnswer({ isAdding: !isAddingAnswer });
  };

  return (
    <Grid container justifyContent={isAddingAnswer ? 'flex-end' : 'flex-start'} my={1}>
      {!isAddingAnswer && (
        <Button
          variant="outlined"
          onClick={handleClickAddAnswer}
          startIcon={<FormInputSetAnswerIcon />}
        >
          {t('FormFieldAnswerSetting.add_answer', 'Set the right answer')}
        </Button>
      )}
      {isAddingAnswer && (
        <Button variant="contained" color="primary" onClick={handleClickAddAnswer}>
          {commonT('confirm_button_label', 'Confirm')}
        </Button>
      )}
    </Grid>
  );
};

export default FormFieldAnswerSetting;
