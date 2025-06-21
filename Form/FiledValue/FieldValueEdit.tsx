import FormTypes from '@/types/FormTypes';
import React from 'react';
import FileUploadField from '../FormField/FileUploadFiled/FileUploadField';
import MultiSelectField from '../FormField/MultiSelectField/MultiSelectField';
import TextAreaField from '../FormField/TextAreaField/TextAreaField';
import FormFieldTypes from '../FormFieldTypes';

interface FieldValueEditProps {
  field: FormTypes.FormField;
  fieldValue?: FormTypes.FormFieldValue;
  showRightAnswer?: boolean;
  onChangeFieldValue: ({
    fieldValueUpdate,
  }: {
    fieldValueUpdate: FormTypes.FormFieldValueUpdate;
  }) => void;
}

const FieldValueEdit: React.FC<FieldValueEditProps> = ({
  field,
  onChangeFieldValue,
  fieldValue,
  showRightAnswer,
}) => {
  const commonProps = {
    mode: FormFieldTypes.FormFieldMode.INPUT,
    onChangeFieldValue,
    field,
    fieldValue,
    showRightAnswer,
  };
  let FormFieldElem = null;
  switch (field.type) {
    case FormTypes.FormFieldType.MULTI_SELECT:
      FormFieldElem = <MultiSelectField {...commonProps} />;
      break;
    case FormTypes.FormFieldType.FILE_UPLOAD:
      FormFieldElem = <FileUploadField {...commonProps} />;
      break;
    case FormTypes.FormFieldType.TEXT_AREA:
      FormFieldElem = <TextAreaField {...commonProps} />;
      break;
    default:
      FormFieldElem = null;
  }
  return FormFieldElem;
};

export default FieldValueEdit;
