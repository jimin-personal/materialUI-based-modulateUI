import { makeAppStyles } from '@/lib/styleHelper';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';

interface FileSelectButtonProps {
  multiple?: boolean;
  accept?: 'image/*' | '.csv' | 'video/*';
  onSelected: (file: FileList) => void;
  uploadBtnLabel?: string | null;
  UploadButton?: React.ReactNode;
  placeholder?: string | null;
}

const useFileSelectButtonClasses = makeAppStyles((theme) => ({
  fileSelectButtonContainer: {
    border: `1px solid ${theme.palette.actions.border}`,
    boxSizing: 'border-box',
    borderRadius: '8px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.disabled,
  },
  uploadButton: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const FileSelectButton: React.FC<FileSelectButtonProps> = ({
  multiple = false,
  accept = 'image/*',
  onSelected,
  uploadBtnLabel,
  UploadButton,
  placeholder,
}) => {
  const { t } = useTranslation('userManagement');
  const classes = useFileSelectButtonClasses();
  const [fileName, setFileName] = useState('');
  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setFileName(files?.[0].name || '');
    onSelected(event.target.files as FileList);
  };
  return (
    <div className={classes.fileSelectButtonContainer}>
      <input
        accept={accept}
        className={classes.input}
        id="contained-button-file"
        multiple={multiple}
        type="file"
        onChange={handleFileSelected}
      />
      <label htmlFor="contained-button-file">
        {UploadButton || (
          <Button
            className={classes.uploadButton}
            variant="contained"
            color="primary"
            component="span"
            size="small"
          >
            {uploadBtnLabel || t('upload_button_label', 'Choose file')}
          </Button>
        )}
      </label>
      {fileName || placeholder || t('file_upload_empty_placeholder', 'No file chosen')}
    </div>
  );
};

export default FileSelectButton;
