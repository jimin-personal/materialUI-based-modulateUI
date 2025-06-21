import FormTypes from '@/types/FormTypes';
import { merge } from 'lodash';
import React from 'react';
import FieldValueEdit from '../FiledValue/FieldValueEdit';
import { useFVCInputStyles } from './useFVCStyles';

interface FVCInputProps {
  form: FormTypes.Form;
  fvc?: FormTypes.FVC;
  showRightAnswer?: boolean;
  onChangeFVC: (param: { fvcUpdate: FormTypes.FVCUpdate }) => void;
}

const FVCInput: React.FC<FVCInputProps> = ({
  form,
  fvc = { values: [] as FormTypes.FormFieldValue[] },
  onChangeFVC,
  showRightAnswer,
}) => {
  const baseClasses = useFVCInputStyles();

  const handleFieldValueChange = ({
    fieldValueUpdate,
  }: {
    fieldValueUpdate: FormTypes.FormFieldValueUpdate;
  }) => {
    const fieldValueIdx = fvc.values.findIndex(
      (fieldValue) => fieldValue.fieldId === fieldValueUpdate.fieldId,
    );
    const fvcUpdate = {
      values: [...fvc.values],
    };
    if (fieldValueIdx !== -1) {
      fvcUpdate.values[fieldValueIdx] = merge(
        {},
        fvcUpdate.values[fieldValueIdx],
        fieldValueUpdate,
      );
      onChangeFVC({ fvcUpdate });
    }
    fvcUpdate.values.push(fieldValueUpdate);
    onChangeFVC({ fvcUpdate });
  };

  return (
    <div className={baseClasses.fvcInputContainer}>
      {form.fields?.map((field) => {
        const fieldValue = fvc.values.find(({ fieldId }) => fieldId === field._id);
        return (
          <FieldValueEdit
            key={field._id}
            field={field}
            fieldValue={fieldValue}
            showRightAnswer={showRightAnswer}
            onChangeFieldValue={handleFieldValueChange}
          />
        );
      })}
    </div>
  );
};

export default FVCInput;
