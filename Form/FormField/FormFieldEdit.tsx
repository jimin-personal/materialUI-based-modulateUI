import FormTypes from '@/types/FormTypes';
import React from 'react';
import MultiSelectField from './MultiSelectField/MultiSelectField';
import FormFieldTypes from '../FormFieldTypes';
import FileUploadField from './FileUploadFiled/FileUploadField';
import TextAreaField from './TextAreaField/TextAreaField';

interface FormFieldEditProps {
  field: FormTypes.FormFieldUpdate & { type: FormTypes.FormFieldType };
  onChange: ({ fieldUpdate }: { fieldUpdate: FormTypes.FormFieldUpdate }) => void;
  onRemove: () => void;
  onDuplicate: () => void;
}

const FormFieldEdit: React.FC<FormFieldEditProps> = ({
  field,
  onChange,
  onRemove,
  onDuplicate,
}) => {
  const commonProps = {
    mode: FormFieldTypes.FormFieldMode.EDIT,
    onChange,
    onRemove,
    onDuplicate,
    field,
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

export default FormFieldEdit;
