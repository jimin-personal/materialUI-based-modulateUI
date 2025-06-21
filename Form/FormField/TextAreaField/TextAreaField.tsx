import React from 'react';
import clsx from 'clsx';
import FormTypes from '@/types/FormTypes';
import FormFieldCardEdit from '../../FormFieldCard/FormFieldCardEdit';
import FormFieldTypes from '../../FormFieldTypes';
import TextInput from '@/components/primitiveUI/Input/TextInput';
import FormFieldCard from '../../FormFieldCard/FormFieldCard';
import { useTranslation } from 'react-i18next';
import formUtil from '@/lib/formUtil';
import { makeAppStyles } from '@/lib/styleHelper';

const TEXT_AREA_DEFAULT_ROWS = 4;

const useTextAreaFieldStyles = makeAppStyles((theme) => ({
  isRightAnswer: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.success.main,
    },
  },
  isWrongAnswer: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main,
    },
  },
}));

interface TextAreaFieldProps {
  field: FormTypes.FormFieldUpdate;
  mode: FormFieldTypes.FormFieldMode;
  fieldValue?: FormTypes.FormFieldValue;
  showRightAnswer?: boolean;
  onChange?: (param: { fieldUpdate: FormTypes.FormFieldUpdate }) => void;
  onRemove?: () => void;
  onDuplicate?: () => void;
  onChangeFieldValue?: ({
    fieldValueUpdate,
  }: {
    fieldValueUpdate: FormTypes.FormFieldValueUpdate;
  }) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  field,
  // To control the field value as at beginning field value will be undefined
  fieldValue = { value: '', fieldId: '' },
  mode,
  showRightAnswer,
  onChange = () => {},
  onRemove = () => {},
  onDuplicate = () => {},
  onChangeFieldValue = () => {},
}) => {
  const baseClasses = useTextAreaFieldStyles();
  const { t } = useTranslation('form');
  const mostRelevantOption = formUtil.extractRightAnswer({ field: field as FormTypes.MultiSelect });

  const handleChangeTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFieldValue({
      fieldValueUpdate: {
        fieldId: (field as FormTypes.FormField)._id,
        value: event.target.value,
      },
    });
  };

  const handleChangeRightAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      fieldUpdate: {
        options: {
          ...field?.options,
          scores: [{ optionId: event.target.value, score: 1 }],
        },
      },
    });
  };

  if (mode === FormFieldTypes.FormFieldMode.EDIT) {
    return (
      <FormFieldCardEdit
        field={field}
        onChange={onChange}
        onRemove={onRemove}
        mode={mode}
        onDuplicate={onDuplicate}
      >
        <div>
          <TextInput
            multiline
            rows={TEXT_AREA_DEFAULT_ROWS}
            fullWidth
            disabled
            placeholder={t('form.text_area_placeholder', 'Please answer the question')}
          />
          <TextInput
            multiline
            fullWidth
            onChange={handleChangeRightAnswer}
            value={mostRelevantOption.rightAnswer}
            placeholder={t('form.text_area_right_answer_placeholder', 'Write right answer here')}
          />
        </div>
      </FormFieldCardEdit>
    );
  }

  if (mode === FormFieldTypes.FormFieldMode.INPUT) {
    return (
      <FormFieldCard
        fieldName={field.name}
        descriptionImageUrl={field.descriptionImageUrl}
        showRightAnswer={showRightAnswer}
        rightAnswer={mostRelevantOption.rightAnswer}
      >
        <TextInput
          multiline
          rows={TEXT_AREA_DEFAULT_ROWS}
          fullWidth
          onChange={handleChangeTextInput}
          defaultValue={fieldValue.value}
          placeholder={t('form.text_area_placeholder', 'Please answer the question')}
          className={clsx({
            [baseClasses.isRightAnswer]:
              showRightAnswer && mostRelevantOption.rightOptionId === fieldValue.value,
            [baseClasses.isWrongAnswer]:
              showRightAnswer && mostRelevantOption.rightOptionId !== fieldValue.value,
          })}
        />
      </FormFieldCard>
    );
  }

  return <div>Text Area display not implemented</div>;
};

export default TextAreaField;
