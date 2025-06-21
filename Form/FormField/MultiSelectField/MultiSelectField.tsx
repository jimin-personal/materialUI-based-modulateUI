import RadioGroup from '@/components/primitiveUI/RadioGroup/RadioGroup';
import FormTypes from '@/types/FormTypes';
import React, { useState } from 'react';
import clsx from 'clsx';
import FormFieldTypes from '../../FormFieldTypes';
import FormFieldCard from '../../FormFieldCard/FormFieldCard';
import FormFieldCardEdit from '../../FormFieldCard/FormFieldCardEdit';
import RadioGroupInput from '@/components/primitiveUI/RadioGroup/RadioGropuInput';
import formUtil from '@/lib/formUtil';
import FormFieldAnswerSetting from '../../FormFieldOptions/FormFieldAnswerSetting';
import { useMultiSelectFieldStyles } from './useMultiSelectFieldStyles';

interface MultiSelectFieldProps {
  field: FormTypes.MultiSelect | FormTypes.FormFieldUpdate;
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

const MultiSelectField: React.FC<MultiSelectFieldProps> = ({
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
  const baseClasses = useMultiSelectFieldStyles();
  const [isAddingAnswer, setIsAddingAnswer] = useState(false);
  const mostRelevantOption = formUtil.extractRightAnswer({ field: field as FormTypes.MultiSelect });
  const handleFieldOptionValueChanges = ({
    options: updatedOptionValues,
  }: {
    options: { value: string; label: string }[];
  }) => {
    onChange({
      fieldUpdate: {
        options: {
          ...field?.options,
          values: updatedOptionValues.map(({ value, label }) => ({ _id: value, label })),
        },
      },
    });
  };

  const handleFieldScoreOptionChange = ({
    scoreOptions,
  }: {
    scoreOptions: { optionId: string; score: number }[];
  }) => {
    onChange({
      fieldUpdate: {
        options: {
          ...field?.options,
          scores: scoreOptions,
        },
      },
    });
  };

  // FOR FIELD VALUE
  const handleFieldValueChange = ({ value: optionValueId }: { value: string }) => {
    onChangeFieldValue({
      fieldValueUpdate: {
        fieldId: (field as FormTypes.FormField)._id,
        value: optionValueId,
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
          <RadioGroupInput
            options={(field.options as FormTypes.MultiSelectOption)?.values?.map(
              ({ label, _id }) => ({
                label,
                value: _id,
              }),
            )}
            onChange={handleFieldOptionValueChanges}
            isChangingScoreOption={isAddingAnswer}
            rightOptionId={mostRelevantOption.rightOptionId}
            onScoreOptionChange={handleFieldScoreOptionChange}
            scoreOptions={(field.options as FormTypes.MultiSelectOption)?.scores}
          />
          <FormFieldAnswerSetting
            onChangeAddingAnswer={({ isAdding }) => setIsAddingAnswer(isAdding)}
            isAddingAnswer={isAddingAnswer}
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
        <RadioGroup
          options={
            (field as FormTypes.MultiSelect)?.options?.values.map((optionValue) => ({
              label: optionValue.label,
              value: optionValue._id,
            })) || []
          }
          onSelect={handleFieldValueChange}
          value={fieldValue.value}
          classes={{
            radio: {
              checked: clsx({
                [baseClasses.isRightAnswer]:
                  showRightAnswer && mostRelevantOption.rightOptionId === fieldValue.value,
                [baseClasses.isWrongAnswer]:
                  showRightAnswer && mostRelevantOption.rightOptionId !== fieldValue.value,
              }),
            },
          }}
        />
      </FormFieldCard>
    );
  }
  return (
    <div>
      <div>{field.name}</div>
      <p>Multi select Display mode is not implemented yet</p>
    </div>
  );
};

export default MultiSelectField;
