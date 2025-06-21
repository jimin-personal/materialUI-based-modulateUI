import FileUploadButton from '@/components/primitiveUI/File/FileUploadButton';
import { makeAppStyles } from '@/lib/styleHelper';
import FormTypes from '@/types/FormTypes';
import React, { useState } from 'react';
import FormFieldCard from '../../FormFieldCard/FormFieldCard';
import FormFieldCardEdit from '../../FormFieldCard/FormFieldCardEdit';
import FormFieldTypes from '../../FormFieldTypes';

const useFileUploadFieldStyles = makeAppStyles(() => ({
  fileUploadButtonWrapper: {
    margin: '20px 0',
  },
}));

interface FileUploadFieldProps {
  field: FormTypes.MultiSelect | FormTypes.FormFieldUpdate;
  mode: FormFieldTypes.FormFieldMode;
  fieldValue?: FormTypes.FormFieldValue;
  onChange?: (param: { fieldUpdate: FormTypes.FormFieldUpdate }) => void;
  onRemove?: () => void;
  onDuplicate?: () => void;
  onChangeFieldValue?: ({
    fieldValueUpdate,
  }: {
    fieldValueUpdate: FormTypes.FormFieldValueUpdate;
  }) => void;
}
const FileUploadField: React.FC<FileUploadFieldProps> = ({
  field,
  // To control the field value as at beginning field value will be undefined
  fieldValue = { value: '', fieldId: '' },
  mode,
  onChange = () => {},
  onRemove = () => {},
  onDuplicate = () => {},
  onChangeFieldValue = () => {},
}) => {
  const [isUploadingFiles, setIsUploadingFiles] = useState(false);
  const classes = useFileUploadFieldStyles();

  const handleUploadedFile = async ({
    uploadedFiles,
  }: {
    uploadedFiles: { gcsKey: string; fileName: string }[];
  }) => {
    setIsUploadingFiles(true);
    try {
      const uploaded = uploadedFiles.map((uploadFile) => {
        return {
          fileName: uploadFile.fileName,
          gcsKey: uploadFile.gcsKey,
        };
      });

      const fileUploadFieldValueUpdate: FormTypes.FileUploadFieldValue = {
        fieldId: (field as FormTypes.FormField)._id,
        value: [],
        options: { uploaded },
      };
      onChangeFieldValue({
        fieldValueUpdate: fileUploadFieldValueUpdate,
      });
    } finally {
      setIsUploadingFiles(false);
    }
  };
  if (FormFieldTypes.FormFieldMode.EDIT === mode) {
    return (
      <FormFieldCardEdit
        field={field}
        onChange={onChange}
        onRemove={onRemove}
        mode={mode}
        onDuplicate={onDuplicate}
      >
        <div className={classes.fileUploadButtonWrapper}>
          <FileUploadButton disabled={true} />
        </div>
      </FormFieldCardEdit>
    );
  }

  if (FormFieldTypes.FormFieldMode.INPUT === mode) {
    return (
      <FormFieldCard fieldName={field.name} descriptionImageUrl={field.descriptionImageUrl}>
        <div className={classes.fileUploadButtonWrapper}>
          <FileUploadButton isLoading={isUploadingFiles} onUploaded={handleUploadedFile} />
        </div>
        <div>{fieldValue.value?.[0]?.fileName || fieldValue.options?.uploaded?.[0]?.fileName}</div>
      </FormFieldCard>
    );
  }
  return <div>File upload display mode is not implemented yet</div>;
};

export default FileUploadField;
