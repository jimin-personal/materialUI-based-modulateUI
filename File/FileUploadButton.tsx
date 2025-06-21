import { logError, ShowWarning } from '@/components/ui/toast/ToastHelper';
import { useUploadFile } from '@/hooks/file/useFile';
import { makeAppStyles } from '@/lib/styleHelper';
import FileTypes from '@/types/FileTypes';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { AddFileImageIcon, UploadFileIcon } from '../../ui/icon';
import Button from '../Button/Button';
import IconButton from '../Button/IconButton';

export const FILE_TYPE = {
  ANY: '',
  IMAGES: 'image/*',
};

const getAcceptFiles = (fileType: string) => {
  switch (fileType) {
    case FILE_TYPE.IMAGES:
      return { 'image/*': [] };
    case FILE_TYPE.ANY:
    default:
      return undefined;
  }
};

const useFileUploadButtonStyles = makeAppStyles((theme) => ({
  fileUploadButton: {
    height: '36px',
    width: '36px',
    border: `1px solid ${theme.palette.actions.outlinedStroke}`,
    borderRadius: '4px',
    display: 'flex',
  },
  addFileIcon: {
    color: theme.palette.text.secondary,
  },
  uploadImageButton: {
    height: '100%',
    width: '100%',
  },
  previewImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    background: '#fff',
  },
}));

/**
 *  @dogyun  Recommend to use onUploaded if want to control upload then use onSelected
 */
interface FileUploadButtonProps {
  fileType?: string;
  accept?: { [key: string]: string[] };
  maxFiles?: number;
  baseFileName?: string;
  onSelectedFiles?: (payload: { files: FileTypes.DropzoneFile[] }) => void;
  onUploaded?: (payload: { uploadedFiles: { gcsKey: string; fileName: string }[] }) => void;
  showPreview?: boolean;
  classes?: {
    root?: string;
  };
  disabled?: boolean;
  isLoading?: boolean;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  accept,
  fileType = FILE_TYPE.ANY,
  baseFileName,
  maxFiles = 1,
  onSelectedFiles,
  onUploaded = () => {},
  showPreview = false,
  classes,
  disabled,
  isLoading: propIsLoading = false,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<FileTypes.DropzoneFile[]>([]);
  const [isUploadingFiles, setIsUploadingFiles] = useState(false);
  const { t } = useTranslation('common');
  const { uploadFile } = useUploadFile();
  const { getRootProps, getInputProps } = useDropzone({
    accept: accept || getAcceptFiles(fileType),
    maxFiles,
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length === 0) {
        ShowWarning(
          t('upload_file.no_file_selected_or_over_max_files', {
            defaultValue: 'Please upload a file again. Max files is less equal to {{maxFiles}}',
            maxFiles,
          }),
        );
        return;
      }
      setSelectedFiles(acceptedFiles);
      if (onSelectedFiles) {
        onSelectedFiles({ files: acceptedFiles });
        return;
      }
      try {
        setIsUploadingFiles(true);
        const results = await Promise.all(
          acceptedFiles.map(async (file, idx) => {
            const { gcsKey } = await uploadFile({
              file,
              fileName: baseFileName ? `${baseFileName}-${idx + 1}` : file.name,
            });
            return {
              gcsKey,
              fileName: file.name,
            };
          }),
        );
        onUploaded({ uploadedFiles: results });
      } catch (error) {
        logError(error);
      } finally {
        setIsUploadingFiles(false);
      }
    },
  });

  const baseClasses = useFileUploadButtonStyles();
  const isLoading = isUploadingFiles || propIsLoading;

  let ButtonElement = (
    <IconButton
      disabled={disabled}
      isLoading={isLoading}
      className={baseClasses.fileUploadButton}
      Icon={<AddFileImageIcon />}
    />
  );

  switch (fileType) {
    case FILE_TYPE.ANY:
      ButtonElement = (
        <Button
          startIcon={<UploadFileIcon />}
          disabled={disabled}
          isLoading={isLoading}
          variant="outlined"
        >
          {t('upload_file.button_label', 'File upload')}
        </Button>
      );
      break;
    case FILE_TYPE.IMAGES:
    default:
      ButtonElement = (
        <IconButton
          className={baseClasses.uploadImageButton}
          disabled={disabled}
          isLoading={isLoading}
          Icon={<AddFileImageIcon />}
        />
      );
      break;
  }

  if (disabled) {
    return <div className={classes?.root}>{ButtonElement}</div>;
  }

  return (
    <div className={classes?.root} {...getRootProps()}>
      <input {...getInputProps()} />
      {ButtonElement}
      {showPreview &&
        selectedFiles.map((file) => (
          <img
            key={file.name}
            src={URL.createObjectURL(file)}
            className={baseClasses.previewImage}
            alt={`selected-file-${file.name}`}
          />
        ))}
    </div>
  );
};

export default FileUploadButton;
